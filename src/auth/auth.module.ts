import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/repositories/user.repository';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository]
})
export class AuthModule {}
