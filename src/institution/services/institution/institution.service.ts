import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { CreateInstitutionDTO } from '../../dto/institution.dto';
import { Department } from '../../entities/department.entity';
import { Faculty } from '../../entities/faculty.entity';
import { Institution } from '../../entities/institution.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {

    constructor(
        @InjectRepository(Institution)
        private institutionRepository: Repository<Institution>,
        @InjectRepository(Faculty)
        private facultyRepository: Repository<Faculty>,
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>
    ) {}

    getInstitution() {
        return this.institutionRepository.findOne({where: {id : 1}, relations: ['faculties', 'faculties.departments']})
    }

    addInstitution( institution: CreateInstitutionDTO) {
        const newInstitution = institution;
        this.institutionRepository.save(newInstitution)
    }
    
    getFaculties(): Observable<Faculty[]> {
        const faculties = this.facultyRepository.find({})
        return from(faculties)
    }

    addFaculty() {

    }

    updateFaculty() {

    }

    removeFaculty() {

    }

    getDepartments(): Observable<Department[]> {
        const departments = this.departmentRepository.find({})
        return from(departments);
    }

    getDepartmentsByFaculty( code: string ): Observable<Department[]> {
        const departments = this.departmentRepository.find({where: {code}})
        return from(departments)
    }

    addDepartment() {

    }

    updateDepartment() {

    }

    removeDepartment() {

    }


}
