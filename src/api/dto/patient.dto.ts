import { IsString, IsOptional, IsBoolean, IsInt, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  patient_id!: string;

  @ApiProperty()
  @IsString()
  pet_id!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  client_id?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  record_number?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  pet_name?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_new_patient?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  has_belongings?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  breed?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  species?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  date_of_birth?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  profile_image_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  sex_name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  sterilization?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  last_weight_kgm?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  last_weight_lb?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  alert?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  has_bites_or_scratches?: boolean;
}

export class UpdatePatientDto extends PartialType(CreatePatientDto) {}
