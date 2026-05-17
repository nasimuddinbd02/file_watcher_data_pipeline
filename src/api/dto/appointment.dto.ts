import { IsString, IsOptional, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty()
  @IsString()
  id!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ouid?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  resource_guid?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  department_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  client_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  patient_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  appointment_type_id?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_emergency?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  appointment_date?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  date_created?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  date_ste?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  created_by?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  created_application_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  start_time?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  start_time_ms?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  duration?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  admission_status_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  admission_display_name?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  status_id?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  modified_by?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  date_modified?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_walkin?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  arrival_ts?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_confirmed?: boolean;

  @ApiProperty({ default: true })
  @IsBoolean()
  @IsOptional()
  is_doctor?: boolean;

  @ApiProperty({ default: true })
  @IsBoolean()
  @IsOptional()
  is_real_staff?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  payment_due_warning?: boolean;
}

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}
