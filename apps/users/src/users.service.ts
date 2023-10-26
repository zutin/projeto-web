import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../libs/utils/database/PrismaService';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { UserUpdateDTO } from './dtos/UserUpdateDTO';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async findUsers() {
    return 'Find all users!';
  }

  async getUser(id: string) {
    return `Get user ${id}!`;
  }

  async createUser(data: UserCreateDTO) {
    if(data.password == undefined || data.username == undefined || data.email == undefined){
      return "Username, Password and/or Email is missing";
    }

    if (data.username != undefined) {
      const checkUsername = await this.prisma.user.findFirst({
        where: {
          username: data.username,
        },
      });

      if(checkUsername != null){
        return "Username already exists";
      }
    }

    if (data.email != undefined) {
      const checkEmail = await this.prisma.user.findFirst({
        where: {
          email: data.email,
        },
      });

      if(checkEmail != null){
        return "Email already exists";
      }
    }

    try {
      const user = await this.prisma.user.create({
        data
      });

      return user;
    } catch (error) {
      return error;
    }

  }

  async updateUser(id: string, data: UserUpdateDTO) {
    const checkUser = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if(checkUser == null){
      return "User does not exist";
    }

    if (data.username != undefined) {
      const checkUsername = await this.prisma.user.findFirst({
        where: {
          username: data.username,
        },
      });

      if(checkUsername != null && checkUsername.id != id){
        return "Username already exists";
      }
    }

    if (data.email != undefined) {
      const checkEmail = await this.prisma.user.findFirst({
        where: {
          email: data.email,
        },
      });

      if(checkEmail != null && checkEmail.id != id){
        return "Email already exists";
      }
    }

    try {
      const user = await this.prisma.user.update({
        where: {
          id: id,
        },
        data
      });

      return user;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id: string) {
    return `Delete user ${id}!`;
  }
}
