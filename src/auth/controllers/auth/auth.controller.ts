import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDTO, RegisterUserDTO } from 'src/auth/dtos/auth.dto';
import { UserService } from 'src/user/services/user/user.service';
import { AuthService } from '../../services/auth/auth.service'

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor( 
        private readonly authService: AuthService,
        private userService: UserService
        ) {

    }

    @Post('/login')
    login(@Body() credentials: LoginUserDTO) {

    }

    @Post('/register')
    register(@Body() credentials: RegisterUserDTO) {
        return this.authService.signUp(credentials)
    }

}
