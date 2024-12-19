import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  constructor(private router: Router) { }

  buscaCanais(event: Event, canal: string) {

    event.preventDefault()

    // Lógica para abrir a tela correspondente com base no canal clicado
    switch (canal) {
      case 'sms':
        this.openSms();
        break;
      case 'chat-web':
        this.openChatWeb();
        break;
      case 'whatsapp':
        this.openWhatsapp();
        break;
      default:
        console.log('Canal desconhecido');
    }
  }

  // Função para abrir a tela de Sms

  openSms() {
    this.router.navigate(['/sms']); // Exemplo de link para abrir a tela de SMS
  }

  // Função para abrir a tela de Chat Web
  openChatWeb() {
    this.router.navigate(['/chat-web']);  // Substitua pelo link do seu chat
  }

  // Função para abrir o WhatsApp
  openWhatsapp() {
    this.router.navigate(['/whatsapp']);  // Link para abrir o WhatsApp
  }
  
}
