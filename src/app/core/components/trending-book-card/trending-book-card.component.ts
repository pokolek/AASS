import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Book } from '../../models/book.model';


@Component({
  selector: 'app-trending-book-card',
  templateUrl: './trending-book-card.component.html',
  styleUrls: ['./trending-book-card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule
  ]
})
export class TrendingBookCardComponent implements OnInit {
  @Input() book!: Book;
  ngOnInit(){
    console.log(this.book.description)
  }
}
