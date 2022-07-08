import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  urlSignup = 'http://localhost:8080/user/signup';

  constructor(private _http:HttpClient) { }
  
  signup(data:any){
    return this._http.post(`${this.urlSignup}`,data,{
      headers:new HttpHeaders().set("Content-Type","application/json")
    });
  }

   

}