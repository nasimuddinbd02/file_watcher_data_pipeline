import { Injectable } from '@nestjs/common';
import { ParserService } from './ParserService';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

@Injectable()
export class IngestionService {
    constructor(
        private parserService: ParserService,
        private repository: AppointmentRepository
    ) {}

    public async processFileContent(rawContent: string): Promise<void> {
        const parsedData = this.parserService.parseAndValidate(rawContent);
        
        if (Array.isArray(parsedData)) {
            for (const item of parsedData) {
                await this.repository.upsertAppointmentData(item);
            }
        } else {
            await this.repository.upsertAppointmentData(parsedData);
        }
    }
}
