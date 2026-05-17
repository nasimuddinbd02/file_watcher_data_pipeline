import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentTypeController } from '@src/api/appointment-type/appointment-type.controller';
import { AppointmentTypeService } from '@src/api/appointment-type/appointment-type.service';

describe('AppointmentTypeController', () => {
  let controller: AppointmentTypeController;
  let service: AppointmentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentTypeController],
      providers: [
        {
          provide: AppointmentTypeService,
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

    controller = module.get<AppointmentTypeController>(AppointmentTypeController);
    service = module.get<AppointmentTypeService>(AppointmentTypeService);
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
