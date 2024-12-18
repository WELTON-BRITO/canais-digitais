import { Routes } from '@angular/router';
import { ChatWebComponent } from './pages/chat-web/chat-web.component';  // Importe o componente ChatWebComponent
import { AppComponent } from './app.component';  // Importe o componente AppComponent
import { SmsComponent } from './pages/sms/sms.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';

export const routes: Routes = [
  { path: '', component: AppComponent },  // Caminho para a página principal
  { path: 'chat-web', component: ChatWebComponent },  // Caminho para o Chat Web
  { path: 'sms', component: SmsComponent }, // Caminho para do SMS
  { path: 'whatsapp', component: WhatsappComponent }, // Caminho para do Whatsapp
  { path: 'customer-account', component: CustomerAccountComponent } // Caminho para o Cliente
];