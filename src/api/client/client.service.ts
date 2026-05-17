import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateClientDto, UpdateClientDto } from '@src/api/dto/client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateClientDto) {
    return this.prisma.client.create({ data } as any);
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: any) {
    if (id === undefined) return null;
    return this.prisma.client.findUnique({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }

  update(id: any, data: UpdateClientDto) {
    return this.prisma.client.update({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) }, data } as any);
  }

  remove(id: any) {
    return this.prisma.client.delete({ where: { id: isNaN(Number(id)) ? id.toString() : Number(id) } } as any);
  }
}
