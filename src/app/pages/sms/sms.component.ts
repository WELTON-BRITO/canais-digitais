import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.scss'
})

export class SmsComponent {
  message: string = '';

  constructor(private router: Router) { }

  chatHistory: { sender: string, message: string }[] = [
    { sender: 'Atendente', message: 'Olá, como posso te ajudar?' },
    //{ sender: 'Você', message: 'Gostaria de saber o status do meu pedido.' }
  ];

  sendSmsMessage() {
    if (this.message.trim()) {
      this.chatHistory.push({ sender: 'Você', message: this.message });
      this.message = ''; // Limpa a caixa de entrada
    }
  }

  buscaCanais(event: Event, canal: string) {
   
   event.preventDefault()
  // console.log('Evento:', event.);
  
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

  openSms() {
    console.log('Abrindo SMS...');  
    this.router.navigate(['/sms']); // Exemplo de link para abrir a tela de SMS
  }

   // Função para abrir a tela de Chat Web
   openChatWeb() {
    console.log('Abrindo Chat Web...');
    this.router.navigate(['/chat-web']);  // Substitua pelo link do seu chat
  }

  // Função para abrir o WhatsApp
  openWhatsapp() {
    console.log('Abrindo WhatsApp...');
    window.open('https://wa.me/', '_blank');  // Link para abrir o WhatsApp
  }

    /*if(value === 'chat'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/chat-web']);
    }else if(value === 'sms'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/sms']);
    }else if(value === 'whatsapp'){
      console.log('Entrei na tela:', value);
      this.router.navigate(['/whatsapp']);
    }*/

  

  voltarTela() {
    this.router.navigate(['']);
  }
}
