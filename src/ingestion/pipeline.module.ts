import { Module } from '@nestjs/common';
import { IngestionService } from '@src/services/IngestionService';
import { FileAuditService } from '@src/services/FileAuditService';
import { ParserModule } from './parser.module';
import { IngestionRepositoryModule } from './repository.module';

/**
 * PipelineModule — orchestration layer.
 * Composes ParserModule and IngestionRepositoryModule and exposes the
 * two application services (IngestionService, FileAuditService) that
 * FileWatcherProvider depends on.
 */
@Module({
  imports: [ParserModule, IngestionRepositoryModule],
  providers: [IngestionService, FileAuditService],
  exports: [IngestionService, FileAuditService],
})
export class PipelineModule {}
