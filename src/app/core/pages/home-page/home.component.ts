import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from 'src/app/core/models/book.model';
import { MOCK_BOOKS } from 'src/assets/mock/books.mock';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
    ]
})
export class HomeComponent implements OnInit{
    ngOnInit(){
    }

}
