import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  urlCadastrar = 'http://localhost:8080/user/signup';
  urlLogin = 'http://localhost:8080/user/login';

  constructor(private _http:HttpClient) { }
   
  
  cadastro(data:any){
    return this._http.post(`${this.urlCadastrar}`,data,{
      headers:new HttpHeaders().set("Content-Type","application/json")
    });
  }

  login(dados:any):Observable<any>{
    return this._http.post(`${this.urlLogin}`,dados);
  }

   

}