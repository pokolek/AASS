import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { HomeComponent } from "./core/pages/home-page/home.component";
import { NavigationComponent } from '../app/shared/navigation/navigation.component'
import { BooksComponent } from './core/pages/books/books.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      NgSwitch,
      NgSwitchDefault,
      NgSwitchCase,
      RouterOutlet,
      HomeComponent,
      NavigationComponent,
      RouterModule,
      MatToolbarModule,
      MatButtonModule
    ]
})
export class AppComponent {
  title = 'LibraryWeb';
}
