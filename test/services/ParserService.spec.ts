import { Test, TestingModule } from '@nestjs/testing';
import { ParserService } from '@src/services/ParserService';
import { LoggerProvider } from '@src/providers/LoggerProvider';

describe('ParserService', () => {
  let service: ParserService;
  let mockLogger: Partial<LoggerProvider>;

  beforeEach(async () => {
    mockLogger = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParserService,
        { provide: LoggerProvider, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should successfully parse valid JSON and normalize casing (TitleCase -> lowercase)', () => {
    const json = JSON.stringify({
      id: 'appt-1',
      Department: { Id: 'd1', Name: 'Dept 1' },
      Client: { Id: 'c1' },
      Patient: { PatientID: 'pat-1', PetID: 'pet-1' },
    });
    const result: any = service.parseAndValidate(json);
    expect(result.id).toBe('appt-1');
    expect(result.Department.id).toBe('d1');
    expect(result.Client.id).toBe('c1');
    expect(result.Patient.patient_id).toBe('pat-1');
    expect(result.Patient.pet_id).toBe('pet-1');
  });

  it('should handle null values correctly (nullish support)', () => {
    const json = JSON.stringify({
      id: 'appt-2',
      Department: { Id: 'd1', Name: 'Dept 1' },
      Client: { Id: 'c1' },
      Patient: { PetID: 'pet-2', Breed: null },
      Notes: null
    });
    const result: any = service.parseAndValidate(json);
    expect(result.Patient.breed).toBeUndefined(); // .transform(val => val.breed || val.Breed || undefined)
    expect(result.notes).toBeUndefined();
  });

  it('should coerce string-encoded numbers to actual numbers', () => {
    const json = JSON.stringify({
      id: 'appt-3',
      Department: { Id: 'd1', Name: 'Dept 1' },
      Client: { Id: 'c1' },
      Patient: { PetID: 'pet-3', LastWeightKgm: '12.5', RecordNumber: '1000' },
      StatusId: '1'
    });
    const result: any = service.parseAndValidate(json);
    expect(result.Patient.last_weight_kgm).toBe(12.5);
    expect(result.Patient.record_number).toBe(1000);
    expect(result.status_id).toBe(1);
  });

  it('should throw an error for invalid JSON format', () => {
    const invalidJson = "{ id: missing quotes }";
    expect(() => service.parseAndValidate(invalidJson)).toThrow('Invalid JSON format');
  });

  it('should throw an error if mandatory objects (Department, Client, Patient) are missing', () => {
    const json = JSON.stringify({ id: 'appt-1' });
    expect(() => service.parseAndValidate(json)).toThrow('Schema Validation Failed');
  });
});
