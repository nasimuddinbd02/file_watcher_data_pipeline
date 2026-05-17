import { Test, TestingModule } from '@nestjs/testing';
import { FileProcessingRecordController } from '@src/api/file-processing-record/file-processing-record.controller';
import { FileProcessingRecordService } from '@src/api/file-processing-record/file-processing-record.service';

describe('FileProcessingRecordController', () => {
  let controller: FileProcessingRecordController;
  let service: FileProcessingRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileProcessingRecordController],
      providers: [
        {
          provide: FileProcessingRecordService,
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

    controller = module.get<FileProcessingRecordController>(FileProcessingRecordController);
    service = module.get<FileProcessingRecordService>(FileProcessingRecordService);
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
