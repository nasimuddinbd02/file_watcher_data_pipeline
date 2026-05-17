import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AppointmentTypeService } from './appointment-type.service';
import { CreateAppointmentTypeDto, UpdateAppointmentTypeDto } from '@src/api/dto/appointment-type.dto';

@ApiTags('appointment-types')
@ApiBearerAuth()
@Controller('appointment-types')
export class AppointmentTypeController {
  constructor(private readonly service: AppointmentTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new AppointmentType record' })
  @ApiResponse({ status: 201, description: 'Record created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  create(@Body() data: CreateAppointmentTypeDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all AppointmentType records' })
  @ApiResponse({ status: 200, description: 'List of AppointmentType records.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single AppointmentType by ID' })
  @ApiParam({ name: 'id', description: 'AppointmentType identifier' })
  @ApiResponse({ status: 200, description: 'AppointmentType record found.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a AppointmentType record (manual correction)' })
  @ApiParam({ name: 'id', description: 'AppointmentType identifier' })
  @ApiResponse({ status: 200, description: 'Record updated successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(@Param('id') id: string, @Body() data: UpdateAppointmentTypeDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a AppointmentType record' })
  @ApiParam({ name: 'id', description: 'AppointmentType identifier' })
  @ApiResponse({ status: 200, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
