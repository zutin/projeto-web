import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './users.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.usersService.findUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): string {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: UserDTO): string {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UserDTO): string {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.usersService.deleteUser(id);
  }
}
