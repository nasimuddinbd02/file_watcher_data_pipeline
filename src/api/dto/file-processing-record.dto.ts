import { IsString, IsOptional, IsInt, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateFileProcessingRecordDto {
  @ApiProperty()
  @IsString()
  file_name!: string;

  @ApiProperty({ required: false, description: 'ISO 8601 datetime string' })
  @IsDateString()
  @IsOptional()
  process_time?: string;

  @ApiProperty()
  @IsInt()
  file_size_bytes!: number;

  @ApiProperty()
  @IsNumber()
  total_time_ms!: number;

  @ApiProperty()
  @IsString()
  status!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  error_message?: string;
}

export class UpdateFileProcessingRecordDto extends PartialType(CreateFileProcessingRecordDto) {}
