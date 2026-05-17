import { Controller, Post, Body, Get, Patch, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { Public } from '../common/decorators/public.decorator';
import { LoginDto, CreateUserDto, UpdateUserDto } from '@src/api/dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  // ── Authentication ──────────────────────────────────────────────────────────

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Login and receive a JWT access token' })
  @ApiResponse({ status: 200, description: 'Returns access_token.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body.username, body.password);
  }

  // ── User Management ─────────────────────────────────────────────────────────

  @ApiBearerAuth()
  @Post('users')
  @ApiOperation({ summary: 'Create a new user (admin only)' })
  @ApiResponse({ status: 201, description: 'User created.' })
  @ApiResponse({ status: 409, description: 'Username already taken.' })
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @ApiBearerAuth()
  @Get('users')
  @ApiOperation({ summary: 'List all users' })
  findAllUsers() {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @Get('users/:id')
  @ApiOperation({ summary: 'Get a user by ID' })
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch('users/:id')
  @ApiOperation({ summary: 'Update a user' })
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @ApiBearerAuth()
  @Delete('users/:id')
  @ApiOperation({ summary: 'Delete a user' })
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
