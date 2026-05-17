import { Injectable, OnModuleInit } from '@nestjs/common';
import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { IngestionService } from '../services/IngestionService';
import { LoggerProvider } from './LoggerProvider';
import { FileAuditService } from '../services/FileAuditService';
import { AppConfigService } from '../config/app-config.service';

class AsyncQueue {
    private queue: Array<() => Promise<void>> = [];
    private processing = false;

    constructor(private logger: LoggerProvider) {}

    public enqueue(task: () => Promise<void>) {
        this.queue.push(task);
        this.processNext();
    }

    private async processNext() {
        if (this.processing || this.queue.length === 0) return;
        this.processing = true;
        const task = this.queue.shift();

        try {
            if (task) await task();
        } catch (err: any) {
            this.logger.error('Queue task failed:', err.message);
        } finally {
            this.processing = false;
            this.processNext();
        }
    }
}

@Injectable()
export class FileWatcherProvider implements OnModuleInit {
    private watcher?: chokidar.FSWatcher;
    private fileQueue: AsyncQueue;

    constructor(
        private readonly ingestionService: IngestionService,
        private readonly logger: LoggerProvider,
        private readonly fileAuditService: FileAuditService,
        private readonly config: AppConfigService,
    ) {
        this.fileQueue = new AsyncQueue(this.logger);
    }

    onModuleInit() {
        this.startWatcher();
    }

    private ensureDirectories(watchDir: string) {
        const absoluteWatchDir = path.resolve(watchDir);
        const invalidDir = path.join(absoluteWatchDir, 'invalid');
        const processedDir = path.join(absoluteWatchDir, 'processed');

        if (!fs.existsSync(absoluteWatchDir)) fs.mkdirSync(absoluteWatchDir, { recursive: true });
        if (!fs.existsSync(invalidDir)) fs.mkdirSync(invalidDir, { recursive: true });
        if (!fs.existsSync(processedDir)) fs.mkdirSync(processedDir, { recursive: true });

        return { absoluteWatchDir, invalidDir, processedDir };
    }

    public startWatcher(): void {
        const { absoluteWatchDir, invalidDir, processedDir } = this.ensureDirectories(this.config.watchDir);
        const allowedExtension = this.config.allowedExtension;

        this.logger.info(`Starting file watcher on directory: ${absoluteWatchDir}`);

        this.watcher = chokidar.watch(absoluteWatchDir, {
            ignored: [
                /(^|[\/\\])\../,
                path.join(absoluteWatchDir, 'invalid', '**'),
                path.join(absoluteWatchDir, 'processed', '**'),
            ],
            persistent: true,
            awaitWriteFinish: {
                stabilityThreshold: 3000, // Increased for Windows stability
                pollInterval: 200,
            },
            depth: 0,
            ignoreInitial: false,
        });

        this.watcher.on('add', (filePath: string) => {
            const absolutePath = path.resolve(filePath);
            this.fileQueue.enqueue(() =>
                this.handleFile(absolutePath, invalidDir, processedDir, allowedExtension),
            );
        });

        this.watcher.on('error', (error) =>
            this.logger.error(`Watcher error: ${error}`),
        );
    }

    private async handleFile(
        filePath: string,
        invalidDir: string,
        processedDir: string,
        allowedExt: string,
    ): Promise<void> {
        console.log(`[Watcher] handleFile triggered for: ${filePath}`);
        // Ensure file still exists (to avoid race conditions on duplicate events)
        if (!fs.existsSync(filePath)) {
            this.logger.warn(`File no longer exists, skipping: ${filePath}`);
            console.log(`[Watcher] File no longer exists, skipping: ${filePath}`);
            return;
        }

        this.logger.info(`Processing file: ${filePath}`);
        console.log(`[Watcher] Processing file: ${filePath}`);
        const fileName = path.basename(filePath);
        const ext = path.extname(filePath).toLowerCase();

        const moveTo = async (targetDir: string, retries = 3) => {
            console.log(`[Watcher] moveTo ${targetDir} for ${fileName}`);
            const targetPath = path.join(targetDir, fileName);
            for (let i = 0; i < retries; i++) {
                try {
                    if (!fs.existsSync(filePath)) return;
                    await fsPromises.rename(filePath, targetPath);
                    this.logger.info(`Moved ${fileName} to ${targetDir}`);
                    return;
                } catch (err: any) {
                    if (i === retries - 1) {
                        this.logger.error(`Failed to move ${fileName} after ${retries} attempts: ${err.message}`);
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retry
                    }
                }
            }
        };

        if (ext !== allowedExt) {
            this.logger.error(`Validation Failed: Invalid extension ${ext} for file ${fileName}`);
            await moveTo(invalidDir);
            return;
        }

        let fileSizeBytes = 0;
        try {
            const stats = await fsPromises.stat(filePath);
            fileSizeBytes = stats.size;
        } catch {
            this.logger.warn(`Could not determine size for file ${fileName}`);
        }

        const startTime = performance.now();

        try {
            const rawContent = await fsPromises.readFile(filePath, 'utf8');
            await this.ingestionService.processFileContent(rawContent);

            const totalTimeMs = performance.now() - startTime;
            this.logger.info(`Successfully ingested ${fileName} in ${totalTimeMs.toFixed(2)}ms`);

            await this.fileAuditService.saveAuditRecord({
                file_name: fileName,
                file_size_bytes: fileSizeBytes,
                total_time_ms: totalTimeMs,
                status: 'SUCCESS',
            });

            await moveTo(processedDir);
        } catch (err: any) {
            const totalTimeMs = performance.now() - startTime;
            this.logger.error(`ETL/Ingestion Failed for ${fileName}:`, err.message);
            console.error(`[Watcher] ETL/Ingestion Failed for ${fileName}:`, err.message);

            await this.fileAuditService.saveAuditRecord({
                file_name: fileName,
                file_size_bytes: fileSizeBytes,
                total_time_ms: totalTimeMs,
                status: 'FAILED',
                error_message: err.message,
            });

            await moveTo(invalidDir);
        }
    }
}
