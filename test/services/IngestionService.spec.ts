import { Test, TestingModule } from '@nestjs/testing';
import { IngestionService } from '@src/services/IngestionService';
import { ParserService } from '@src/services/ParserService';
import { AppointmentRepository } from '@src/repositories/AppointmentRepository';

describe('IngestionService', () => {
  let service: IngestionService;
  let parserService: ParserService;
  let repository: AppointmentRepository;

  const mockParsedData = {
    id: 'appt-1',
    Department: { id: 'd1' },
    Client: { id: 'c1' },
    Patient: { patient_id: 'p1' },
  } as any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IngestionService,
        {
          provide: ParserService,
          useValue: {
            parseAndValidate: jest.fn(),
          },
        },
        {
          provide: AppointmentRepository,
          useValue: {
            upsertAppointmentData: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<IngestionService>(IngestionService);
    parserService = module.get<ParserService>(ParserService);
    repository = module.get<AppointmentRepository>(AppointmentRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should parse and upsert valid file content', async () => {
    (parserService.parseAndValidate as jest.Mock).mockReturnValue(mockParsedData);
    (repository.upsertAppointmentData as jest.Mock).mockResolvedValue(undefined);

    await expect(service.processFileContent(JSON.stringify(mockParsedData))).resolves.not.toThrow();

    expect(parserService.parseAndValidate).toHaveBeenCalledTimes(1);
    expect(repository.upsertAppointmentData).toHaveBeenCalledWith(mockParsedData);
  });

  it('should propagate an error if parsing fails', async () => {
    (parserService.parseAndValidate as jest.Mock).mockImplementation(() => {
      throw new Error('Invalid JSON format');
    });

    await expect(service.processFileContent('bad json')).rejects.toThrow('Invalid JSON format');
    expect(repository.upsertAppointmentData).not.toHaveBeenCalled();
  });

  it('should propagate an error if the repository save fails', async () => {
    (parserService.parseAndValidate as jest.Mock).mockReturnValue(mockParsedData);
    (repository.upsertAppointmentData as jest.Mock).mockRejectedValue(new Error('DB Error'));

    await expect(service.processFileContent(JSON.stringify(mockParsedData))).rejects.toThrow('DB Error');
  });
});
