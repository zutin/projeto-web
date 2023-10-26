import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { UserUpdateDTO } from './dtos/UserUpdateDTO';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.findUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  async createUser(@Body() data: UserCreateDTO) {
    return this.usersService.createUser(data);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: UserUpdateDTO) {
    return this.usersService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
