import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AppointmentStatusAuditService } from './appointment-status-audit.service';
import { CreateAppointmentStatusAuditDto, UpdateAppointmentStatusAuditDto } from '@src/api/dto/appointment-status-audit.dto';

@ApiTags('appointment-status-audits')
@ApiBearerAuth()
@Controller('appointment-status-audits')
export class AppointmentStatusAuditController {
  constructor(private readonly service: AppointmentStatusAuditService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new AppointmentStatusAudit record' })
  @ApiResponse({ status: 201, description: 'Record created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  create(@Body() data: CreateAppointmentStatusAuditDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all AppointmentStatusAudit records' })
  @ApiResponse({ status: 200, description: 'List of AppointmentStatusAudit records.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single AppointmentStatusAudit by ID' })
  @ApiParam({ name: 'id', description: 'AppointmentStatusAudit identifier' })
  @ApiResponse({ status: 200, description: 'AppointmentStatusAudit record found.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a AppointmentStatusAudit record (manual correction)' })
  @ApiParam({ name: 'id', description: 'AppointmentStatusAudit identifier' })
  @ApiResponse({ status: 200, description: 'Record updated successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(@Param('id') id: string, @Body() data: UpdateAppointmentStatusAuditDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a AppointmentStatusAudit record' })
  @ApiParam({ name: 'id', description: 'AppointmentStatusAudit identifier' })
  @ApiResponse({ status: 200, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
