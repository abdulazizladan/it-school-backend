import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateInstitutionDTO } from '../dto/institution.dto';
import { InstitutionService } from '../services/institution/institution.service';

@ApiTags('Institution')
@Controller('institution')
export class InstitutionController {

    constructor( private institutionService: InstitutionService) {

    }

    @Get()
    @ApiOperation({summary: 'Get institution information'})
    get() {
        return this.institutionService.getInstitution()
    }

    @Post()
    @ApiOperation({summary: 'Add institution information'})
    create(@Body() institution: CreateInstitutionDTO) {
        this.institutionService.addInstitution(institution)
    }

    @Patch()
    @ApiOperation({summary: 'Update institution information'})
    update() {

    }

    @Get('faculties')
    @ApiOperation({summary: 'Get all faculties'})
    getFaculties() {
        return this.institutionService.getFaculties()
    }

    @Get('faculty/:code/departments')
    @ApiOperation({summary: 'Get all departments in a department'})
    getDepartmentsByFaculty() {

    }
}
