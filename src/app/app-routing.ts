import { HomeComponent } from './core/pages/home-page/home.component';
import { BooksComponent } from './core/pages/books/books.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent }
];

