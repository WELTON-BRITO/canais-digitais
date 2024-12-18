import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-web',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-web.component.html',
  styleUrl: './chat-web.component.scss'
})

export class ChatWebComponent {
  message: string = '';

  constructor(private router: Router) { }

  chatHistory: { sender: string, message: string }[] = [
    { sender: 'Atendente', message: 'Olá! Como posso ajudá-lo hoje?' },
    //{ sender: 'Você', message: 'Preciso de informações sobre meu pedido.' }
  ];

  sendMessage() {
    if (this.message.trim()) {
      this.chatHistory.push({ sender: 'Você', message: this.message });
      this.message = ''; // Limpa a caixa de entrada
    }
  }

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

  voltarTela() {
    this.router.navigate(['']);
  }
}
