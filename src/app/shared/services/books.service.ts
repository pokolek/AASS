import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get('api/books');
  }

  rentBook(book: Book){
    console.log(book);
    const formattedDate = new Date().toISOString().slice(0, 10);
    return this.http.post('api/rentals/', {
      "book": book.id,
      "rented_date": formattedDate,
      "rented_by": 1
    }).pipe(
      catchError((error) => {
        console.error('Error renting book:', error);
        return throwError(error); // or handle the error appropriately
      })
    );
  }
  
}
