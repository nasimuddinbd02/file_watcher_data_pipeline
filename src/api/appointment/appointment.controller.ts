import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from '@src/api/dto/appointment.dto';

@ApiTags('appointments')
@ApiBearerAuth()
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Appointment record' })
  @ApiResponse({ status: 201, description: 'Record created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  create(@Body() data: CreateAppointmentDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Appointment records' })
  @ApiResponse({ status: 200, description: 'List of Appointment records.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single Appointment by ID' })
  @ApiParam({ name: 'id', description: 'Appointment identifier' })
  @ApiResponse({ status: 200, description: 'Appointment record found.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Appointment record (manual correction)' })
  @ApiParam({ name: 'id', description: 'Appointment identifier' })
  @ApiResponse({ status: 200, description: 'Record updated successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(@Param('id') id: string, @Body() data: UpdateAppointmentDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Appointment record' })
  @ApiParam({ name: 'id', description: 'Appointment identifier' })
  @ApiResponse({ status: 200, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
