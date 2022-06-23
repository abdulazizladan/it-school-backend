import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createBookDTO } from 'src/library/dto/book.dto';
import { BookService } from 'src/library/services/book/book.service';

@ApiTags('Library')
@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {

    }

    @Get()
    @ApiOperation({summary: 'Retrieve a list of all books'})
    getAllBooks() {

    }

    @Get(':id')
    @ApiOperation({summary: 'Retrieve a book by ID'})
    getBookByID(@Param('id', ParseIntPipe)id: number) {

    }

    @Post()
    @ApiOperation({summary: 'Upload book details'})
    createBook( @Body()createBookDTO: createBookDTO) {

    }

    @Patch(':id')
    @ApiOperation({summary: 'Update book record'})
    updateBook(@Param('id', ParseIntPipe)id: number) {

    }

    @Delete(':id')
    @ApiOperation({summary: 'Remove book by ID'})
    removeBook(@Param('id', ParseIntPipe)id: number) {

    }
}
