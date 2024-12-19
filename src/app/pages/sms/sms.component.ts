import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
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

}
