import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { UsersModule } from '@/apps/users/src/users.module';
import { LocalStrategy } from './configuration/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './configuration/jwt.strategy';

@Module({
  imports: [PassportModule, UsersModule, 
    JwtModule.register({
      secret: 'chavesuperfoda123bettovcehfodamaseutocommuitosonopqp0318damanhaja',
      signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
