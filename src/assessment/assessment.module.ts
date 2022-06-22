import { Module } from '@nestjs/common';
import { AssessmentController } from './controllers/assessment/assessment.controller';
import { AssessmentService } from './services/assessment/assessment.service';

@Module({
  controllers: [AssessmentController],
  providers: [AssessmentService]
})
export class AssessmentModule {}
