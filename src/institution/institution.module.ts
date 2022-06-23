import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { InstitutionRepository } from './repositories/institution.respository';
import { InstitutionService } from './services/institution/institution.service';
import { InstitutionController } from './controllers/institution.controller';
import { Faculty } from './entities/faculty.entity';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institution, Faculty, Department])],
  providers: [InstitutionService, InstitutionRepository],
  controllers: [InstitutionController]
})
export class InstitutionModule {}
