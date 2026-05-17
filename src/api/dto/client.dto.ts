import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  id!: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  account_number_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  primary_phone_number?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_new_client?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_opt_in?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_org?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_phone_selected?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_locked?: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  is_guest_account?: boolean;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {}
