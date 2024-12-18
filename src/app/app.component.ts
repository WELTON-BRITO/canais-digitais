import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'canais-digitais';

  constructor(private router: Router) {}

  buscaCanais(event: any) {
    const value = event.target.value;
    console.log('Valor do botão:', value);
    // Aqui você pode usar o valor do botão

    if(value === 'chat'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/chat-web']);
    }else if(value === 'sms'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/sms']);
    }else if(value === 'whatsapp'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/whatsapp']);
    }else if(value === 'customer-account'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/customer-account']);
    }

  }
}
