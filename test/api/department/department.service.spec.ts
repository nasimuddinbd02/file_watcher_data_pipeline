import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from '@src/api/department/department.service';
import { PrismaService } from '@src/prisma/prisma.service';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentService,
        {
          provide: PrismaService,
          useValue: {
            department: {
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

    service = module.get<DepartmentService>(DepartmentService);
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
