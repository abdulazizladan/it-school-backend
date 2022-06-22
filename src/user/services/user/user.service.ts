import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    getAllUsers() {
        return this.userRepository.find()
    }
}
