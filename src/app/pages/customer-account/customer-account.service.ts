import { Injectable } from '@angular/core';
import { HttpService } from '../service/http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {

  constructor(private httpService: HttpService) { } 
 
  buscaCep(cep: any, data: any, successHandle: Function, erroHandle: Function){
    return this.httpService.doGetCep('/ws/' + cep  + '/json/', data, successHandle, erroHandle);
  }

}
