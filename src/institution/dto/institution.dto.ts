import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsUrl } from "class-validator";

export class CreateInstitutionDTO {

    @ApiProperty({required: true})
    name: string;

    @ApiProperty({required: false})
    code: string;

    @ApiProperty()
    description: string;
    
    @IsUrl()
    @ApiProperty()
    website: string;
    
    @IsEmail()
    @ApiProperty()
    email: string;
}