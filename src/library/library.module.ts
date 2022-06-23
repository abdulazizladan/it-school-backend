import { Module } from '@nestjs/common';
import { BookController } from './controllers/book/book.controller';
import { BookService } from './services/book/book.service';

@Module({
  controllers: [BookController],
  providers: [BookService]
})
export class LibraryModule {}
