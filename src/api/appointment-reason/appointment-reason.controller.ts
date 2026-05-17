import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AppointmentReasonService } from './appointment-reason.service';
import { CreateAppointmentReasonDto, UpdateAppointmentReasonDto } from '@src/api/dto/appointment-reason.dto';

@ApiTags('appointment-reasons')
@ApiBearerAuth()
@Controller('appointment-reasons')
export class AppointmentReasonController {
  constructor(private readonly service: AppointmentReasonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new AppointmentReason record' })
  @ApiResponse({ status: 201, description: 'Record created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  create(@Body() data: CreateAppointmentReasonDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all AppointmentReason records' })
  @ApiResponse({ status: 200, description: 'List of AppointmentReason records.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single AppointmentReason by ID' })
  @ApiParam({ name: 'id', description: 'AppointmentReason identifier' })
  @ApiResponse({ status: 200, description: 'AppointmentReason record found.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a AppointmentReason record (manual correction)' })
  @ApiParam({ name: 'id', description: 'AppointmentReason identifier' })
  @ApiResponse({ status: 200, description: 'Record updated successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(@Param('id') id: string, @Body() data: UpdateAppointmentReasonDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a AppointmentReason record' })
  @ApiParam({ name: 'id', description: 'AppointmentReason identifier' })
  @ApiResponse({ status: 200, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
