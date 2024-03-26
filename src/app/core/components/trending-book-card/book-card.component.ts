import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Book } from '../../models/book.model';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-trending-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule, 
    MatButtonModule,
    CommonModule
  ]
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;
  ngOnInit(){
    console.log(this.book.description)
  }
}
