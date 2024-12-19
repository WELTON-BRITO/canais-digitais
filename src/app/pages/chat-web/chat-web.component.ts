import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-chat-web',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
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

}
