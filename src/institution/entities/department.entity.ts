import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from "./faculty.entity";

@Entity()
export class Department extends BaseEntity {
    @PrimaryColumn({unique: true, type: 'varchar'})
    code: string;

    @Column()
    name: string;

    @ManyToOne(() => Faculty, faculty => faculty.departments)
    faculty:Faculty;
}