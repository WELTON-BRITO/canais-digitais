import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'; 
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Injectable({
  providedIn: 'root',  // Isso registra o serviço globalmente
})

export class HttpService {
  protected urlBase = environment.url_server;
  protected urlCep = 'https://viacep.com.br';

  constructor(
    private http: HttpClient,
    private loadingBarService: LoadingBarService,
    private route: ActivatedRoute,
  ) {}

  private responsecallback(
    observable: Observable<HttpResponse<Object>>,
    successHandle: Function,
    errorHandle?: Function
  ) {
    try {
      observable.subscribe(
        (res) => {
          successHandle(res.body);
          this.loadingBarService.complete();
        },
        (err) => {
          if (errorHandle != null) {
            errorHandle(this.getErrorMessage(err));
            this.loadingBarService.complete();
          } else {
            this.loadingBarService.complete();
            throw err;
          }
        }
      );
    } catch (err) {
      if (errorHandle != null) {
        errorHandle({
          message:
            "Algo inesperado aconteceu. Entre em contato com o administrador do sistema.",
          status: null,
        });
        this.loadingBarService.complete();
      } else {
        this.loadingBarService.complete();
        throw err;
      }
    }
  }

  private getErrorMessage(err: any): any {

    if (parseInt(err.status) >= 400 && parseInt(err.status) < 500) {
      if (err.error.errors && err.error.errors.length > 0) {
        let errMessage = "";
        if (err.error.errors[0].simpleUserMessage) {
          errMessage = err.error.errors[0].simpleUserMessage;
        } else if (err.error.errors[0].userMessage) {
          errMessage = err.error.errors[0].userMessage;
        } else {
          errMessage = err.error.errors[0].technicalMessage;
        }
        return { message: errMessage, status: err.status };
      }
    } else if (parseInt(err.status) >= 500 ) {
      return { message: "Não foi possível realizar a operação. ", status: err.status };
    } else {
      return { message: 'Erro não verificado.', status: err.status };
    }
  }

  public doPost(
    path: string,
    body: any,
    successHandle: Function,
    errorHandle?: Function
  ) {
    //this.loadingBarService.reset();
    this.loadingBarService.start();

    let url = this.urlBase + path;

    return this.responsecallback(
      this.http.post(url, body, { observe: "response" }),
      successHandle,
      errorHandle
    );
  }

  public doPut(
    path: string,
    body: any,
    successHandle: Function,
    errorHandle?: Function
  ) {
   // this.loadingBarService.reset();
    this.loadingBarService.start();

    let url = this.urlBase + path;

    return this.responsecallback(
      this.http.put(url, body, { observe: "response" }),
      successHandle,
      errorHandle
    );
  }

  public doDelete(
    path: string,
    successHandle: Function,
    errorHandle?: Function
  ) {
    //this.loadingBarService.reset();
    this.loadingBarService.start();

    let url = this.urlBase + path;

    return this.responsecallback(
      this.http.delete(url, { observe: "response" }),
      successHandle,
      errorHandle
    );
  }

  public doGet(
    path: string,
    params: any,
    successHandle: Function,
    errorHandle?: Function
  ) {
   /// this.loadingBarService.reset();
    this.loadingBarService.start();

    let url = this.urlBase + path;
    //let message: string = null;
    if (params == null) params = {};

    return this.responsecallback(
      this.http.get(url, { params, observe: "response" }),
      successHandle,
      errorHandle
    );
  }

  public doGetCep(
    path: string,
    params: any,
    successHandle: Function,
    errorHandle?: Function
  ) {
    this.loadingBarService.start();
    let url = this.urlCep + path;
    if (params == null) params = {};

    return this.responsecallback(
      this.http.get(url, { params, observe: "response" }),
      successHandle,
      errorHandle
    );
  }
  public doPatch(
    path: string,
    body: any,
    successHandle: Function,
    errorHandle?: Function
  ) {
    //  this.loadingBarService.reset();
      this.loadingBarService.start();

      let url = this.urlBase + path;

      return this.responsecallback(
        this.http.patch(url, body, { observe: "response" }),
        successHandle,
        errorHandle
    );
  }

}
