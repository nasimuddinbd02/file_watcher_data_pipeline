import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { AppointmentPayload } from '../domain/dto/AppointmentPayload';
import { AppointmentPayloadSchema } from '../domain/schemas/appointment-payload.schema';
import { LoggerProvider } from '../providers/LoggerProvider';

@Injectable()
export class ParserService {
    constructor(private logger: LoggerProvider) {}

    public parseAndValidate(rawJson: string): AppointmentPayload | AppointmentPayload[] {
        this.logger.info('ParserService: starting parseAndValidate');
        console.log('ParserService: starting parseAndValidate');
        let payload: any;
        try {
            payload = JSON.parse(rawJson);
        } catch (err) {
            throw new Error("Invalid JSON format");
        }

        // Support both single object and array of objects
        let result: any;
        if (Array.isArray(payload)) {
            result = z.array(AppointmentPayloadSchema).safeParse(payload);
        } else {
            result = AppointmentPayloadSchema.safeParse(payload);
        }
        
        if (!result.success) {
            const errorDetails = JSON.stringify(result.error.issues, null, 2);
            this.logger.error('Zod Validation Error Details:', errorDetails);
            console.error('Zod Validation Error Details:', errorDetails);
            const errors = result.error.issues.map((e: any) => {
                const pathPrefix = Array.isArray(payload) ? `[Index ${e.path[0]}] ` : '';
                return `${pathPrefix}${e.path.join('.')}: ${e.message}`;
            }).join(', ');
            throw new Error(`Schema Validation Failed: ${errors}`);
        }

        return result.data as AppointmentPayload | AppointmentPayload[];
    }
}
