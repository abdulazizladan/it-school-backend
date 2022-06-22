import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstitutionDTO } from 'src/institution/dto/institution.dto';
import { Institution } from 'src/institution/entities/institution.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {

    constructor(
        @InjectRepository(Institution)
        private institutionRepository: Repository<Institution>
    ) {}

    getInstitution() {
        return this.institutionRepository.findOne({where: {id : 1}, relations: ['faculties', 'faculties.departments']})
    }

    addInstitution( institution: CreateInstitutionDTO) {
        const newInstitution = institution;
        this.institutionRepository.save(newInstitution)
    }    
}
