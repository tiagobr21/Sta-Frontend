import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  // desenvolvimento: http://localhost:3000
  // prod: https://back-sta.herokuapp.com

  urlCadastrar = 'https://back-sta.herokuapp.com/user/signup';
  urlLogin = 'https://back-sta.herokuapp.com/user/login';
  urlEsqueceuSenha = 'https://back-sta.herokuapp.com/user/forgotpassword';
  urlcheckToken ='https://back-sta.herokuapp.com/user/checkToken';
  urlMudarSenha = 'https://back-sta.herokuapp.com/user/changePassword';
  urlObter = 'https://back-sta.herokuapp.com/user/get';
  urlUptadeUser = 'https://back-sta.herokuapp.com/user/updateuser';
  urlObterById = 'https://back-sta.herokuapp.com/user/getbyid';
  urlDelete = 'https://back-sta.herokuapp.com/user/delete';
  urlUpload = 'https://back-sta.herokuapp.com/user/uploadimage';
  urlGetImage = 'https://back-sta.herokuapp.com/user/getimage'
  urlDeleteImage = 'https://back-sta.herokuapp.com/user/deleteimage'

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

  mudarSenha(data:any):Observable<any>{
    return this._http.post(`${this.urlMudarSenha}`,data);
  }

  obter():Observable<any>{
    return this._http.get(`${this.urlObter}`);
  }

  obterById(id:any):Observable<any>{
    return this._http.get(`${this.urlObterById}/${id}`);
  }

  uptade(data:any,id:any):Observable<any>{
    return this._http.patch(`${this.urlUptadeUser}/${id}`,data);
  }
  
  delete(id:any):Observable<any>{
     return this._http.delete(`${this.urlDelete}/${id}`)
  }
  
  upload(data:any,id:any):Observable<any>{
 
    return this._http.patch(`${this.urlUpload}/${id}`,data);
  }

  getImage(id:any):Observable<any>{
    return this._http.get(`${this.urlGetImage}/${id}`);
  }

  deleteImage(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeleteImage}/${id}`);
  }

  checkToken(){
    return this._http.get(`${this.urlcheckToken}`);
  }

   

}