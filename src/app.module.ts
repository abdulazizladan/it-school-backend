import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionModule } from './institution/institution.module';
import { typeOrmConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';
import { AssessmentModule } from './assessment/assessment.module';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    AuthModule, 
    InstitutionModule,
    AssessmentModule,
    LibraryModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
