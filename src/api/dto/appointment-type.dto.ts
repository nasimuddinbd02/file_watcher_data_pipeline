import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAppointmentTypeDto {
  @ApiProperty()
  @IsString()
  id!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  color_code?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  bu_appointment_type_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  sub_type_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  sub_type_name?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  sub_type_duration?: number;
}

export class UpdateAppointmentTypeDto extends PartialType(CreateAppointmentTypeDto) {}
