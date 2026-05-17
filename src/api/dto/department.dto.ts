import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ description: 'Department ID' })
  @IsString()
  id!: string;

  @ApiProperty({ description: 'Department Name' })
  @IsString()
  name!: string;

  @ApiProperty({ description: 'Department Language', required: false })
  @IsString()
  @IsOptional()
  language?: string;
}

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
