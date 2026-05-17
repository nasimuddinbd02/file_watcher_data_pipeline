import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto, UpdateUserDto } from '@src/api/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });
    if (existing) {
      throw new ConflictException(`Username "${dto.username}" is already taken`);
    }
    const hash = await bcrypt.hash(dto.password, 10);
    const { password, ...user } = await this.prisma.user.create({
      data: { username: dto.username, password: hash, role: dto.role ?? 'user' },
    });
    return user;
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, username: true, role: true, createdAt: true, updatedAt: true },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, username: true, role: true, createdAt: true, updatedAt: true },
    });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.findOne(id); // throws 404 if not found
    const data: any = { ...dto };
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }
    const { password, ...user } = await this.prisma.user.update({ where: { id }, data });
    return user;
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
    return { message: `User #${id} deleted successfully` };
  }
}
