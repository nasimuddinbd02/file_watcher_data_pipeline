import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { CreatePatientDto, UpdatePatientDto } from '@src/api/dto/patient.dto';

@ApiTags('patients')
@ApiBearerAuth()
@Controller('patients')
export class PatientController {
  constructor(private readonly service: PatientService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Patient record' })
  @ApiResponse({ status: 201, description: 'Record created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  create(@Body() data: CreatePatientDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Patient records' })
  @ApiResponse({ status: 200, description: 'List of Patient records.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single Patient by ID' })
  @ApiParam({ name: 'id', description: 'Patient identifier' })
  @ApiResponse({ status: 200, description: 'Patient record found.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Patient record (manual correction)' })
  @ApiParam({ name: 'id', description: 'Patient identifier' })
  @ApiResponse({ status: 200, description: 'Record updated successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(@Param('id') id: string, @Body() data: UpdatePatientDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Patient record' })
  @ApiParam({ name: 'id', description: 'Patient identifier' })
  @ApiResponse({ status: 200, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
