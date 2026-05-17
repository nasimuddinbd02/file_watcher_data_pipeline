import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentReasonDto, UpdateAppointmentReasonDto } from '@src/api/dto/appointment-reason.dto';

@Injectable()
export class AppointmentReasonService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAppointmentReasonDto) {
    return this.prisma.appointmentReason.create({ data } as any);
  }

  findAll() {
    return this.prisma.appointmentReason.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.appointmentReason.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdateAppointmentReasonDto) {
    return this.prisma.appointmentReason.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.appointmentReason.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
