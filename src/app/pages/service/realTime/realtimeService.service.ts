import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class RealtimeService {
  constructor(private socket: Socket) {}

  // Enviar mensagem para o canal
  enviarMensagem(canal: string, mensagem: string) {
    this.socket.emit('enviarMensagem', { canal, mensagem });
  }

  // Ouvir mensagens de um canal
  ouvirMensagens() {
    return this.socket.fromEvent('receberMensagem');
  }
}
