import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TrendingBookCardComponent } from "../../../components/trending-book-card/trending-book-card.component";
import { Book } from 'src/app/core/models/book.model';
import { MOCK_BOOKS } from 'src/assets/mock/books.mock';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        TrendingBookCardComponent,
    ]
})
export class HomePageComponent implements OnInit{
    public trendingBooks: Book[] = [];
    ngOnInit(){
        this.trendingBooks = MOCK_BOOKS;
        console.log(this.trendingBooks)
    }

}
