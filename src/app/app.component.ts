import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'canais-digitais';

  showButtons: boolean = true;
  showHeader: boolean = false;
  showVoltar: boolean = false;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        const hideHeaderRoutes = ['']; // Aqui adicione rotas onde o header deve ser ocultado
        this.showHeader = !hideHeaderRoutes.includes(currentRoute);

        if (currentRoute === '/customer-account') {
          this.showButtons = false;
          this.showVoltar = true;
        } else if (currentRoute === '/chat-web') {
          this.showButtons = false;
          this.showVoltar = true;
        } else if (currentRoute === '/sms') {
          this.showButtons = false;
          this.showVoltar = true;
        } else if (currentRoute === '/whatsapp') {
          this.showButtons = false;
          this.showVoltar = true;
        } else {
          this.showButtons = true;
          this.showVoltar = false;
        }
      }
    });

  }

  buscaCanais(event: any) {
    const value = event.target.value;

    if (value === 'chat') {
      this.showVoltar = true;
      this.router.navigate(['/chat-web']);
    } else if (value === 'sms') {
      this.showVoltar = true;
      this.router.navigate(['/sms']);
    } else if (value === 'whatsapp') {
      this.showVoltar = true;
      this.router.navigate(['/whatsapp']);
    } else if (value === 'customer-account') {
      this.showVoltar = true;
      this.router.navigate(['/customer-account']);
    } else if (value === 'voltar') {
      this.showVoltar = false;
      this.router.navigate(['']);
    }

  }
}
