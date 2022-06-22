import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { InstitutionRepository } from './repositories/institution.respository';
import { InstitutionService } from './services/institution/institution.service';
import { InstitutionController } from './controllers/institution.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Institution])],
  providers: [InstitutionService, InstitutionRepository],
  controllers: [InstitutionController]
})
export class InstitutionModule {}
