import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentStatusAuditController } from '@src/api/appointment-status-audit/appointment-status-audit.controller';
import { AppointmentStatusAuditService } from '@src/api/appointment-status-audit/appointment-status-audit.service';

describe('AppointmentStatusAuditController', () => {
  let controller: AppointmentStatusAuditController;
  let service: AppointmentStatusAuditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentStatusAuditController],
      providers: [
        {
          provide: AppointmentStatusAuditService,
          useValue: {
            create: jest.fn().mockResolvedValue({ id: '1', ...{ mock: 'data' } }),
            findAll: jest.fn().mockResolvedValue([{ id: '1' }]),
            findOne: jest.fn().mockResolvedValue({ id: '1' }),
            update: jest.fn().mockResolvedValue({ id: '1' }),
            remove: jest.fn().mockResolvedValue({ id: '1' }),
          },
        },
      ],
    }).compile();

    controller = module.get<AppointmentStatusAuditController>(AppointmentStatusAuditController);
    service = module.get<AppointmentStatusAuditService>(AppointmentStatusAuditService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call create', async () => {
    expect(await controller.create({} as any)).toEqual({ id: '1', mock: 'data' });
  });

  it('should call findAll', async () => {
    expect(await controller.findAll()).toEqual([{ id: '1' }]);
  });

  it('should call findOne', async () => {
    expect(await controller.findOne('1')).toEqual({ id: '1' });
  });

  it('should call update', async () => {
    expect(await controller.update('1', {} as any)).toEqual({ id: '1' });
  });

  it('should call remove', async () => {
    expect(await controller.remove('1')).toEqual({ id: '1' });
  });
});
