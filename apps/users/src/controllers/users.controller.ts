import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common'
import { FindUserUseCase } from '../usecases/findUser/findUser.useCase'
import { CreateUserUseCase } from '../usecases/createUser/createUser.useCase'
import { UpdateUserUseCase } from '../usecases/updateUser/updateUser.useCase'
import { DeleteUserUseCase } from '../usecases/deleteUser/deleteUser.useCase'
import { CreateUserRequest } from '../usecases/createUser/createUser.dto'
import { UpdateUserRequest } from '../usecases/updateUser/updateUser.dto'
import { ApiAcceptedResponse, ApiConflictResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiResponse } from '@nestjs/swagger'

@Controller()
export class UsersController {
  constructor(
      private findUserUseCase: FindUserUseCase,
      private createUserUseCase: CreateUserUseCase,
      private updateUserUseCase: UpdateUserUseCase,
      private deleteUserUseCase: DeleteUserUseCase
    ) {}

  //Pode ser uma coisa interessante tipar a saída daqui também, mas já está sendo tipado dentro do UseCase :)

  @Get(':id?')
  @ApiParam({ name: 'id', required: false, example: '598f5184-e74a-40d2-a2e6-de97b739ff83' })
  @ApiOkResponse({ status: 200, description: 'Returns all users if no id is provided, otherwise returns the user with the provided id' })
  @ApiNotFoundResponse({ status: 400, description: 'User not found' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async findUser(@Param('id') id?: string) {
    return this.findUserUseCase.execute(id);
  }

  @Post()
  @ApiCreatedResponse({ status: 201, description: 'User created successfully' })
  @ApiNotFoundResponse({ status: 400, description: 'Username, Password and/or Email is missing' })
  @ApiConflictResponse({ status: 409, description: 'Username is already being used' })
  @ApiConflictResponse({ status: 409, description: 'Email is already being used' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async createUser(@Body() data: CreateUserRequest) {
    return this.createUserUseCase.execute(data);
  }

  @Put(':id')
  @ApiParam({ name: 'id', example: '598f5184-e74a-40d2-a2e6-de97b739ff83' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiNotFoundResponse({ status: 400, description: 'Username, Password and/or Email is missing' })
  @ApiConflictResponse({ status: 409, description: 'Username is already being used' })
  @ApiConflictResponse({ status: 409, description: 'Email is already being used' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserRequest) {
    return this.updateUserUseCase.execute(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', example: '598f5184-e74a-40d2-a2e6-de97b739ff83' })
  @ApiNoContentResponse({ description: 'User deleted successfully' })
  @ApiNotFoundResponse({ status: 400, description: 'User not found' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async deleteUser(@Param('id') id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
