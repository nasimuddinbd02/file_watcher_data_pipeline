import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentStatusAuditService } from '@src/api/appointment-status-audit/appointment-status-audit.service';
import { PrismaService } from '@src/prisma/prisma.service';

describe('AppointmentStatusAuditService', () => {
  let service: AppointmentStatusAuditService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppointmentStatusAuditService,
        {
          provide: PrismaService,
          useValue: {
            appointmentStatusAudit: {
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

    service = module.get<AppointmentStatusAuditService>(AppointmentStatusAuditService);
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
