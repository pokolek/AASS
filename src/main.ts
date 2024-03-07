import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes), provideAnimations()]
})
  .catch(err => console.error(err));
