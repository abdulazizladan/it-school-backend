import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDTO } from 'src/auth/dtos/auth.dto';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)        
        private userRepository: UserRepository
    ) {}

    signUp(authCredentials: RegisterUserDTO) {
        return this.userRepository.signUp(authCredentials)
    }
    /**async getUserById(id: number) {
        const found  = await this.userRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID: ${id} not found!`)
        }

        return found;
    }
    */
}
