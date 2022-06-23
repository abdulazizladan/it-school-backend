import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { Role } from './user.roles';

@Entity({})
export class User extends BaseEntity{

    @PrimaryColumn()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    role: Role;

   @CreateDateColumn({default: () => 'NOW()'})
    createdAt: Date;
}