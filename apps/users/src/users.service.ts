import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../projeto-web/src/database/PrismaService';
import { UserDTO } from './users.dto';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  findUsers(): string {
    return 'Find all users!';
  }

  getUser(id: string): string {
    return `Get user ${id}!`;
  }

  createUser(user: UserDTO): string {
    return `Create user ${user.username}!`;
  }

  updateUser(id: string, user: UserDTO): string {
    return `Update user ${id}!`;
  }

  deleteUser(id: string): string {
    return `Delete user ${id}!`;
  }
}
