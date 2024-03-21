import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from 'src/app/shared/services/books.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    console.log(this.booksService.getBooks().subscribe(
      console.log
    ));

  }

}
