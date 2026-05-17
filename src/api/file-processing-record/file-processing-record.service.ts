import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFileProcessingRecordDto, UpdateFileProcessingRecordDto } from '@src/api/dto/file-processing-record.dto';

@Injectable()
export class FileProcessingRecordService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFileProcessingRecordDto) {
    return this.prisma.fileProcessingRecord.create({ data } as any);
  }

  findAll() {
    return this.prisma.fileProcessingRecord.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.fileProcessingRecord.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdateFileProcessingRecordDto) {
    return this.prisma.fileProcessingRecord.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.fileProcessingRecord.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
