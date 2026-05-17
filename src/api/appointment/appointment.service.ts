import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from '@src/api/dto/appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data } as any);
  }

  findAll() {
    return this.prisma.appointment.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.appointment.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdateAppointmentDto) {
    return this.prisma.appointment.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.appointment.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
