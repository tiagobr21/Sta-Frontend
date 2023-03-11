import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  urlCadastrar = 'http://localhost:3000/user/signup';
  urlLogin = 'http://localhost:3000/user/login';
  urlEsqueceuSenha = 'http://localhost:3000/user/forgotpassword';
  urlcheckToken ='http://localhost:3000/user/checkToken'

  constructor(private _http:HttpClient) { }
   
  
  cadastro(data:any){
    return this._http.post(`${this.urlCadastrar}`,data,{
      headers:new HttpHeaders().set("Content-Type","application/json")
    });
  }

  esqueceuSenha(data:any){
    return this._http.post(`${this.urlEsqueceuSenha}`,data,{
      headers:new HttpHeaders().set("Content-Type","application/json")
    })
  }

  login(dados:any):Observable<any>{
    return this._http.post(`${this.urlLogin}`,dados);
  }

  checkToken(){
    return this._http.get(`${this.urlcheckToken}`);
  }

   

}