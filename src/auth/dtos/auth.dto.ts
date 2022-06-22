import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class LoginUserDTO {    

    @IsEmail()
    @ApiProperty({required: true, example: 'example@example.com'})
    email: string;

    @ApiProperty({example: '........', required: true})
    password: string;
}

export class RegisterUserDTO {

    @IsEmail()
    @ApiProperty({required: true, example: 'example@example.com'})
    email: string;

    @ApiProperty({required: true, example: '........', minLength: 8})
    password: string;

    @ApiProperty({required: true})
    firstName: string;

    @ApiProperty({required: false})
    middleName: string;

    @ApiProperty({required: true})
    lastName: string;

    @ApiProperty({type: 'date', nullable: true})
    createdAt: string;
}