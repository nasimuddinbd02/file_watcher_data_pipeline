import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from '@src/api/dto/department.dto';

@ApiTags('departments')
@ApiBearerAuth()
@Controller('departments')
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Department record' })
  @ApiResponse({ status: 201, description: 'Record created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  create(@Body() data: CreateDepartmentDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Department records' })
  @ApiResponse({ status: 200, description: 'List of Department records.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single Department by ID' })
  @ApiParam({ name: 'id', description: 'Department identifier' })
  @ApiResponse({ status: 200, description: 'Department record found.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Department record (manual correction)' })
  @ApiParam({ name: 'id', description: 'Department identifier' })
  @ApiResponse({ status: 200, description: 'Record updated successfully.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(@Param('id') id: string, @Body() data: UpdateDepartmentDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Department record' })
  @ApiParam({ name: 'id', description: 'Department identifier' })
  @ApiResponse({ status: 200, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
