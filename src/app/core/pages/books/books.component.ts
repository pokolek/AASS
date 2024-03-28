import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { MatCardModule } from '@angular/material/card';
import { TrendingBookCardComponent } from '../../components/trending-book-card/book-card.component';
import { Book } from '../../models/book.model';
import { MOCK_BOOKS } from 'src/assets/mock/books.mock';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    BookCardComponent,
    MatCardModule,
    TrendingBookCardComponent,
  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent  implements OnInit{
  public trendingBooks: Book[] = [];
  ngOnInit(){
      this.trendingBooks = MOCK_BOOKS;
      console.log(this.trendingBooks) 
  }

}
