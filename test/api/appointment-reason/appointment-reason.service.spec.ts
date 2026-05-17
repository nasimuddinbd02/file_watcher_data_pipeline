import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentReasonService } from '@src/api/appointment-reason/appointment-reason.service';
import { PrismaService } from '@src/prisma/prisma.service';

describe('AppointmentReasonService', () => {
  let service: AppointmentReasonService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppointmentReasonService,
        {
          provide: PrismaService,
          useValue: {
            appointmentReason: {
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

    service = module.get<AppointmentReasonService>(AppointmentReasonService);
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
