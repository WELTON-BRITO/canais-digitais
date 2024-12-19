import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    // Monitorando as mudanças de rota
    this.router.events.subscribe(() => {
      // Verifica se a rota atual é uma das páginas que devem esconder os botões
      const currentRoute = this.router.url;
      const hideRoutes = ['/sms', '/chat-web', '/whatsapp', '/customer-account']; // Adicione suas rotas aqui
      this.showButtons = !hideRoutes.includes(currentRoute);
    });

  }

  buscaCanais(event: any) {
    const value = event.target.value;
    
    if (value === 'chat') {
      this.router.navigate(['/chat-web']);
    } else if (value === 'sms') {
      this.router.navigate(['/sms']);
    } else if (value === 'whatsapp') {
      this.router.navigate(['/whatsapp']);
    } else if (value === 'customer-account') {
      this.router.navigate(['/customer-account']);
    }else if (value === 'voltar') {
      this.router.navigate(['']);
    }

  }
}
