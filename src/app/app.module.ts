import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatWebComponent } from './pages/chat-web/chat-web.component';
import { SmsComponent } from './pages/sms/sms.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HttpService } from './pages/service/http/http-client.service';
import { CustomerAccountService } from './pages/customer-account/customer-account.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WhatsappComponent,
    ChatWebComponent,
    SmsComponent,
    CustomerAccountComponent,
    FooterComponent
  ],  // Importando outros componentes    
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoadingBarService,
    HttpService,
    CustomerAccountService    
  ], 

})

export class AppModule { }
