import { BaseEntity, Column, Entity, ManyToOne,  OneToMany,  PrimaryColumn } from "typeorm";
import { Department } from "./department.entity";
import { Institution } from "./institution.entity";

@Entity()
export class Faculty extends BaseEntity {

    

    @PrimaryColumn({unique: true, type: 'varchar'})
    code: string;

    @Column({unique: true, type: 'varchar'})
    name: string;

    @ManyToOne(() => Institution, institution => institution.faculties)
    institution: Institution;

    @OneToMany(() => Department, department => department.faculty)
    departments: Department[]

}