import { Module } from '@nestjs/common';
import { AppointmentTypeService } from './appointment-type.service';
import { AppointmentTypeController } from './appointment-type.controller';

@Module({
  controllers: [AppointmentTypeController],
  providers: [AppointmentTypeService],
})
export class AppointmentTypeModule {}
