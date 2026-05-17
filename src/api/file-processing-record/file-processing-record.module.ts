import { Module } from '@nestjs/common';
import { FileProcessingRecordService } from './file-processing-record.service';
import { FileProcessingRecordController } from './file-processing-record.controller';

@Module({
  controllers: [FileProcessingRecordController],
  providers: [FileProcessingRecordService],
})
export class FileProcessingRecordModule {}
