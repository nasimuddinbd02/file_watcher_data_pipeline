import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { PrismaModule } from './prisma/prisma.module';
import { FileWatcherProvider } from './providers/FileWatcherProvider';
import { ParserModule } from './ingestion/parser.module';
import { IngestionRepositoryModule } from './ingestion/repository.module';
import { PipelineModule } from './ingestion/pipeline.module';

/**
 * IngestionModule — background worker root module.
 * Composed of three cohesive sub-modules (parser → repository → pipeline)
 * that form a clean dependency hierarchy. FileWatcherProvider sits at the
 * top of the chain, consuming services exported by PipelineModule.
 *
 * Dependency graph:
 *   FileWatcherProvider
 *     └─ PipelineModule (IngestionService, FileAuditService)
 *          ├─ ParserModule (ParserService)
 *          └─ IngestionRepositoryModule (AppointmentRepository, FileAuditRepository)
 *               └─ PrismaModule (PrismaService — global)
 */
@Module({
  imports: [
    CoreModule,           // Provides LoggerProvider + AppConfigService (global)
    PrismaModule,         // Provides PrismaService (global)
    ParserModule,         // Provides ParserService
    IngestionRepositoryModule, // Provides AppointmentRepository + FileAuditRepository
    PipelineModule,       // Provides IngestionService + FileAuditService
  ],
  providers: [FileWatcherProvider],
})
export class IngestionModule {}
