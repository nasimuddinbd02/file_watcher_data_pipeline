import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAppointmentReasonDto {
  @ApiProperty()
  @IsString()
  appointment_id!: string;

  @ApiProperty()
  @IsString()
  reason_id!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;
}

export class UpdateAppointmentReasonDto extends PartialType(CreateAppointmentReasonDto) {}
