import { Repository } from "typeorm";
import { Book } from "../entities/book.entity";

export class CreateBookRepository extends Repository<Book> {
    title: string;
    author: string;
}