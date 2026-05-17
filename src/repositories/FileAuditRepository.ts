import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FileAuditPayload } from '../domain/dto/FileAuditPayload';

@Injectable()
export class FileAuditRepository {
    constructor(private prisma: PrismaService) {}

    public async recordProcessingAudit(auditData: FileAuditPayload): Promise<void> {
        await this.prisma.fileProcessingRecord.create({
            data: {
                file_name: auditData.file_name,
                file_size_bytes: auditData.file_size_bytes,
                total_time_ms: auditData.total_time_ms,
                status: auditData.status,
                error_message: auditData.error_message
            }
        });
    }


}
