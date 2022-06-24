import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { createBookDTO } from 'src/library/dto/book.dto';
import { Repository } from 'typeorm';
import { Book } from '../../entities/book.entity';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {

    }
    getAllBooks(): Observable<Book[]> {
        const books = this.bookRepository.find();
        return from(books);
    }

    getBookByID(id: number) {
        const book = this.bookRepository.findOne({where: {id}});
        if(book) {
            return book;
        }else throw new NotFoundException();
    }

    createBook(book: createBookDTO) {

    }

    updateBook(id: number) {

    }

    removeBook(id:number) {

    }
}
