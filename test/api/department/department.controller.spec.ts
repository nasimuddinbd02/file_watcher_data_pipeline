import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentController } from '@src/api/department/department.controller';
import { DepartmentService } from '@src/api/department/department.service';

describe('DepartmentController', () => {
  let controller: DepartmentController;
  let service: DepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentController],
      providers: [
        {
          provide: DepartmentService,
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

    controller = module.get<DepartmentController>(DepartmentController);
    service = module.get<DepartmentService>(DepartmentService);
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
