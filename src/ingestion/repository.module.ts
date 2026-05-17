import { Module } from '@nestjs/common';
import { AppointmentRepository } from '@src/repositories/AppointmentRepository';
import { FileAuditRepository } from '@src/repositories/FileAuditRepository';

/**
 * IngestionRepositoryModule — owns all data-access repositories for the
 * ingestion pipeline. PrismaService is resolved from the global PrismaModule.
 * Exports both repositories for use by the pipeline layer.
 */
@Module({
  providers: [AppointmentRepository, FileAuditRepository],
  exports: [AppointmentRepository, FileAuditRepository],
})
export class IngestionRepositoryModule {}
