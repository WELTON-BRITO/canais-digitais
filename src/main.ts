import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // Importando as rotas

/*
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
*/


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Definindo as rotas
  ]
});