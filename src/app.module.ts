import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { DepartmentModule } from './api/department/department.module';
import { ClientModule } from './api/client/client.module';
import { PatientModule } from './api/patient/patient.module';
import { AppointmentModule } from './api/appointment/appointment.module';
import { AppointmentTypeModule } from './api/appointment-type/appointment-type.module';
import { AppointmentReasonModule } from './api/appointment-reason/appointment-reason.module';
import { AppointmentStatusAuditModule } from './api/appointment-status-audit/appointment-status-audit.module';
import { FileProcessingRecordModule } from './api/file-processing-record/file-processing-record.module';

@Module({
  imports: [
    CoreModule,        // @Global — provides LoggerProvider + AppConfigService to all modules
    PrismaModule,      // @Global — provides PrismaService to all modules
    AuthModule,
    DepartmentModule,
    ClientModule,
    PatientModule,
    AppointmentModule,
    AppointmentTypeModule,
    AppointmentReasonModule,
    AppointmentStatusAuditModule,
    FileProcessingRecordModule,
  ],
  providers: [
    // JwtAuthGuard registered as a global guard via APP_GUARD token.
    // Every route is protected by default; use @Public() to opt out.
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
