import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";


@Injectable({  
    providedIn:'root'
})

export class AppService{
  
  urlCreate = 'http://localhost:8080/escala_coroinha/create';
  urlRead = 'http://localhost:8080/escala_coroinha/read';
  urlDelete = 'http://localhost:8080/escala_coroinha/delete';
  urlUpdate = 'http://localhost:8080/escala_coroinha/update';
  urlSelect = 'http://localhost:8080/escala_coroinha/select';

  constructor(private _http:HttpClient) { }


  createData(data:any):Observable<any>{
    console.log(data,'createapi=>');
     return this._http.post(`${this.urlCreate}`,data);
  }

  readData():Observable<any>{
     return this._http.get(`${this.urlRead}`);
  }

  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.urlDelete}/${ids}`);
  }
  
  updateData(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.urlUpdate}/${ids}`,data);
  }

   getSingleData(id:any):Observable<any>{
    let ids =id;
    return this._http.get(`${this.urlCreate}/${ids}`);
  } 
   
  selectData():Observable<any>{
    return this._http.get(`${this.urlSelect}`);
  } 
  

}