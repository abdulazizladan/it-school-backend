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
        if(books) {
            return from(books);
         } else throw new NotFoundException
        
    }

    getBookByID(id: number) {
        const book = this.bookRepository.findOne({where: {id}});
        if(book) {
            return book;
        }else throw new NotFoundException();
    }

    async createBook(book: createBookDTO) {
        const newBook = await this.bookRepository.save(book);
        return newBook;
    }

    updateBook(id: number) {

    }

    async removeBook(id:number) {
        const book = await this.bookRepository.findOne({where: {id}})
        if(book) {
            this.bookRepository.remove(book);
        } else throw new NotFoundException()
    }
}
