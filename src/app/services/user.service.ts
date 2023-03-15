import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  // desenvolvimento: http://localhost:3000
  // prod: https://back-sta.herokuapp.com

  urlCadastrar = 'http://localhost:3000/user/signup';
  urlLogin = 'http://localhost:3000/user/login';
  urlEsqueceuSenha = 'http://localhost:3000/user/forgotpassword';
  urlcheckToken ='http://localhost:3000/user/checkToken';
  urlMudarSenha = 'http://localhost:3000/user/changePassword';
  urlObter = 'http://localhost:3000/user/get';
  urlUptadeUser = 'http://localhost:3000/user/updateuser';
  urlObterById = 'http://localhost:3000/user/getbyid';
  urlDelete = 'http://localhost:3000/user/delete';
  urlUpload = 'http://localhost:3000/user/uploadimage';
  urlGetImage = 'http://localhost:3000/user/getimage'
  urlDeleteImage = 'http://localhost:3000/user/deleteimage'

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