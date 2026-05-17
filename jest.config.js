module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.json',
    }],
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    '!src/main.ts',
    '!src/watcher.main.ts',
    '!src/app.module.ts',
    '!src/ingestion.module.ts',
    '!src/**/*.module.ts',
    '!src/**/*.dto.ts',
    '!src/prisma/**',
    '!src/domain/**',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};
