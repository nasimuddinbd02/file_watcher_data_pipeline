import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentTypeService } from '@src/api/appointment-type/appointment-type.service';
import { PrismaService } from '@src/prisma/prisma.service';

describe('AppointmentTypeService', () => {
  let service: AppointmentTypeService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppointmentTypeService,
        {
          provide: PrismaService,
          useValue: {
            appointmentType: {
              create: jest.fn().mockResolvedValue({ id: '1' }),
              findMany: jest.fn().mockResolvedValue([{ id: '1' }]),
              findUnique: jest.fn().mockResolvedValue({ id: '1' }),
              update: jest.fn().mockResolvedValue({ id: '1' }),
              delete: jest.fn().mockResolvedValue({ id: '1' }),
            },
          },
        },
      ],
    }).compile();

    service = module.get<AppointmentTypeService>(AppointmentTypeService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call create', async () => {
    expect(await service.create({} as any)).toEqual({ id: '1' });
  });

  it('should call findAll', async () => {
    expect(await service.findAll()).toEqual([{ id: '1' }]);
  });

  it('should call findOne', async () => {
    expect(await service.findOne('1')).toEqual({ id: '1' });
  });

  it('should call update', async () => {
    expect(await service.update('1', {} as any)).toEqual({ id: '1' });
  });

  it('should call remove', async () => {
    expect(await service.remove('1')).toEqual({ id: '1' });
  });
});
