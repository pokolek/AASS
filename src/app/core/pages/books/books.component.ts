import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../models/book.model';
import { MOCK_BOOKS } from 'src/assets/mock/books.mock';
import { BooksService } from 'src/app/shared/services/books.service';
import { switchMap, tap } from 'rxjs';
import { BookCardComponent } from '../../components/book-card/book-card.component';

@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    imports: [
        CommonModule,
        BookCardComponent,
        MatCardModule,
    ]
})
export class BooksComponent  implements OnInit{
  public trendingBooks: Book[] = [];
  public books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().pipe(
      tap((books) =>{
        this.books = books;
      }),
      switchMap(() => this.booksService.getTrendingBooks())
      ).subscribe((trendingBooks) => {
        this.trendingBooks = trendingBooks;
      });
  }

  handleBookRented(rentedBook: Book) {
    // Option 1: Re-fetch all books data
    this.fetchBooks();
  }
  
  fetchBooks() {
    this.booksService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  }

}
