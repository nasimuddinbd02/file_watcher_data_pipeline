import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAppointmentStatusAuditDto {
  @ApiProperty()
  @IsString()
  appointment_id!: string;

  @ApiProperty()
  @IsString()
  time_stamp!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  status_changed_to?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  changed_by_user_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  application_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  resource_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  resource_name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  appointment_date_time?: string;
}

export class UpdateAppointmentStatusAuditDto extends PartialType(CreateAppointmentStatusAuditDto) {}
