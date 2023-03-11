import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
<<<<<<< HEAD
  urlCadastrar = 'http://localhost:3000/user/signup';
  urlLogin = 'http://localhost:3000/user/login';
  urlEsqueceuSenha = 'http://localhost:3000/user/forgotpassword';
  urlcheckToken ='http://localhost:3000/user/checkToken'
=======
  urlCadastrar = 'https://back-sta.herokuapp.com/user/signup';
  urlLogin = 'https://back-sta.herokuapp.com/user/login';
  urlEsqueceuSenha = 'https://back-sta.herokuapp.com/user/forgotpassword';
  urlcheckToken ='https://back-sta.herokuapp.com/user/checkToken'
>>>>>>> 634c3627a02da14ff2b990393aa75f878f74b97a

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