import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository]), UserRepository],
    providers: [UserService],
    exports: [UserService, UserRepository]
})
export class UserModule {}
