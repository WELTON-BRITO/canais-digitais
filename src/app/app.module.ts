import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChatWebComponent } from './pages/chat-web/chat-web.component';
import { SmsComponent } from './pages/sms/sms.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    WhatsappComponent,
    ChatWebComponent,
    SmsComponent,
    CustomerAccountComponent
  ],  // Importando outros componentes  
})

export class AppModule { }
