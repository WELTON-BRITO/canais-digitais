import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {
  message: string = '';

  constructor(private router: Router) { }

  chatHistory: { sender: string, message: string }[] = [
    { sender: 'Atendente', message: 'Como posso te ajudar hoje?' },
    //{ sender: 'Você', message: 'Quero saber o status do meu pedido.' }
  ];

  sendWhatsappMessage() {
    if (this.message.trim()) {
      this.chatHistory.push({ sender: 'Você', message: this.message });
      this.message = ''; // Limpa a caixa de entrada
    }
  }
 
}
