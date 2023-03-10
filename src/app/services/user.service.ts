import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  urlCadastrar = 'https://app-sta.herokuapp.com/user/signup';
  urlLogin = 'https://app-sta.herokuapp.com/user/login';
  urlEsqueceuSenha = 'https://app-sta.herokuapp.com/user/forgotpassword';
  urlcheckToken ='https://app-sta.herokuapp.com/user/checkToken'

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