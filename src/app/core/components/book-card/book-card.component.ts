import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BookCardComponent {
  @Input() book: Book | undefined;

  constructor(private booksService: BooksService) {}

  
  ngOnInit(): void {
  }

  rentBook(book: Book): void {
    this.booksService.rentBook(book).subscribe();
  }
}
