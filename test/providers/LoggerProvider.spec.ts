import { Test, TestingModule } from '@nestjs/testing';
import { LoggerProvider } from '@src/providers/LoggerProvider';

describe('LoggerProvider', () => {
  let provider: LoggerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerProvider],
    }).compile();

    provider = module.get<LoggerProvider>(LoggerProvider);
    
    // Mock the internal winston logger
    (provider as any).logger = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
    };
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should log info correctly', () => {
    provider.info('Test Info');
    expect((provider as any).logger.info).toHaveBeenCalledWith('Test Info');
  });

  it('should log warn correctly', () => {
    provider.warn('Test Warn');
    expect((provider as any).logger.warn).toHaveBeenCalledWith('Test Warn');
  });

  it('should log error correctly', () => {
    provider.error('Test Error');
    expect((provider as any).logger.error).toHaveBeenCalledWith('Test Error', { trace: undefined, context: undefined });
  });

  it('should implement NestJS LoggerService log method', () => {
    provider.log('Test log');
    expect((provider as any).logger.info).toHaveBeenCalledWith('Test log');
  });
});
