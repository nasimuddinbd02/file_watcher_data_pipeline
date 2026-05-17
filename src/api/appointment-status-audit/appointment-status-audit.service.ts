import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentStatusAuditDto, UpdateAppointmentStatusAuditDto } from '@src/api/dto/appointment-status-audit.dto';

@Injectable()
export class AppointmentStatusAuditService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAppointmentStatusAuditDto) {
    return this.prisma.appointmentStatusAudit.create({ data } as any);
  }

  findAll() {
    return this.prisma.appointmentStatusAudit.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.appointmentStatusAudit.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdateAppointmentStatusAuditDto) {
    return this.prisma.appointmentStatusAudit.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.appointmentStatusAudit.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
