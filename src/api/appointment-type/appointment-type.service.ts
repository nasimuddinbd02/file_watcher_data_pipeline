import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentTypeDto, UpdateAppointmentTypeDto } from '@src/api/dto/appointment-type.dto';

@Injectable()
export class AppointmentTypeService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAppointmentTypeDto) {
    return this.prisma.appointmentType.create({ data } as any);
  }

  findAll() {
    return this.prisma.appointmentType.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.appointmentType.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdateAppointmentTypeDto) {
    return this.prisma.appointmentType.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.appointmentType.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
