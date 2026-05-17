import { Module } from '@nestjs/common';
import { AppointmentStatusAuditService } from './appointment-status-audit.service';
import { AppointmentStatusAuditController } from './appointment-status-audit.controller';

@Module({
  controllers: [AppointmentStatusAuditController],
  providers: [AppointmentStatusAuditService],
})
export class AppointmentStatusAuditModule {}
