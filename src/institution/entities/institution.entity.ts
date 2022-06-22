import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsUrl } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from "./faculty.entity";

@Entity()
export class Institution extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @Column()
    code:string;

    @Column()
    description: string;

    @IsUrl()
    @Column()
    website: string;

    @IsEmail()
    @Column()
    email: string;

    @OneToMany(() => Faculty, faculty => faculty.institution)
    faculties: Faculty[]

}