import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePatientDto, UpdatePatientDto } from '@src/api/dto/patient.dto';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePatientDto) {
    return this.prisma.patient.create({ data } as any);
  }

  findAll() {
    return this.prisma.patient.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.patient.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdatePatientDto) {
    return this.prisma.patient.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.patient.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
