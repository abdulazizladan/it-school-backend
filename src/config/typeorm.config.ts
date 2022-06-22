import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Question } from "src/assessment/entities/question.entity";
import { Department } from "src/institution/entities/department.entity";
import { Faculty } from "src/institution/entities/faculty.entity";
import { Institution } from "src/institution/entities/institution.entity";
import { User } from "src/user/entities/user.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'secret',
    database: 'it-school', 
    /*type: 'mysql',
    host: '160.119.252.105',
    port: 3306,
    username: 'biznetap_admin',
    password: 'Br50crd-1257022-wdb',
    database: 'biznetap_database', */
    autoLoadEntities: true,
    entities: [User, Institution, Faculty, Department, Question],
    synchronize: true
}