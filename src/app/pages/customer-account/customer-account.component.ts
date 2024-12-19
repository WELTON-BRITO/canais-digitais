import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';  // Corrigido o import
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CustomerAccountService } from './customer-account.service';
import { HttpService } from '../service/http/http-client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [
    CommonModule, 
    FooterComponent, 
    ReactiveFormsModule, 
    HttpClientModule
  ],  // Certifique-se de que ReactiveFormsModule está aqui
  providers: [CustomerAccountService, HttpService], 
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent {

  public formCustomerAccount!: FormGroup;  // Especificando o tipo de formCustomerAccount corretamente

  constructor(private formBuilder: FormBuilder, private router: Router,
    private serviceCep: CustomerAccountService
  ) { }

  ngOnInit() {
    // Criando o formulário com o FormBuilder
    this.formCustomerAccount = this.formBuilder.group({
      name: [null],  // Definindo os campos do formulário
      email: [null],
      phone: [null],
      zip: [null],
      street: [null],
      neighborhood: [{ value: null, disabled: true }],
      number: [null],
      city: [null],
      state: [null],
    });
    
  }

  buscaCep(data: any) {

    this.serviceCep.buscaCep(data.zip, null, (response: any) => {

      this.formCustomerAccount.controls['street'].setValue(response.logradouro.replace('Rua', '').replace('Avenida', '').trim());
      this.formCustomerAccount.controls['neighborhood'].setValue(response.bairro.trim());
      this.formCustomerAccount.controls['city'].setValue(response.localidade.trim());
      this.formCustomerAccount.controls['state'].setValue(response.uf.trim());

    }, (error: any) => {
     console.log(error)

    });
  }

}
