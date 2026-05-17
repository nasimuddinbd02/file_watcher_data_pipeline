import { Injectable } from '@nestjs/common';
import { FileAuditRepository } from '../repositories/FileAuditRepository';
import { FileAuditPayload } from '../domain/dto/FileAuditPayload';

@Injectable()
export class FileAuditService {
    constructor(
        private repository: FileAuditRepository
    ) {}

    public async saveAuditRecord(auditData: FileAuditPayload): Promise<void> {
        await this.repository.recordProcessingAudit(auditData);
    }
}
