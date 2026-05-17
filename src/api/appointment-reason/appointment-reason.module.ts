import { Module } from '@nestjs/common';
import { AppointmentReasonService } from './appointment-reason.service';
import { AppointmentReasonController } from './appointment-reason.controller';

@Module({
  controllers: [AppointmentReasonController],
  providers: [AppointmentReasonService],
})
export class AppointmentReasonModule {}
