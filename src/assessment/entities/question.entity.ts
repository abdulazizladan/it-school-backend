import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    course: string;

    @Column({nullable: false})
    question: string;

    @Column({nullable: false})
    optionA: string;

    @Column({nullable: false})
    optionB: string;

    @Column({nullable: false})
    optionC: string;

    @Column({nullable: false})
    optionD: string;

    @Column({nullable: false})
    answer: string;

    @Column({type: 'date'})
    createdAt: Date;
}