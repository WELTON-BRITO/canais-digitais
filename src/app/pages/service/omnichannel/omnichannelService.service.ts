import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmnichannelService {
  private apiUrl = 'http://api.seuserviço.com'; // URL da API backend

  constructor(private http: HttpClient) {}

  // Iniciar interação no canal selecionado
  iniciarInteracao(canal: string, usuarioId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/iniciar-interacao`, { canal, usuarioId });
  }

  // Continuar interação no canal escolhido
  continuarInteracao(canal: string, usuarioId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/continuar-interacao`, { canal, usuarioId });
  }

  // Enviar mensagem para o canal
  enviarMensagem(canal: string, mensagem: string, usuarioId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-mensagem`, { canal, mensagem, usuarioId });
  }

  // Receber mensagens do canal
  receberMensagens(canal: string, usuarioId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/receber-mensagens`, { params: { canal, usuarioId } });
  }
}
