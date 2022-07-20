import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { FormGroup } from "@angular/forms";


@Injectable({  
    providedIn:'root'
})

export class AppService{

  formularioRegistro!:FormGroup;
  urlCreate = 'http://localhost:8080/escala_coroinha/create';
  urlRead = 'http://localhost:8080/escala_coroinha/read';
  urlDelete = 'http://localhost:8080/escala_coroinha/delete';
  urlUpdate = 'http://localhost:8080/escala_coroinha/update';
  urlSearch = 'http://localhost:8080/escala_coroinha/search';
  urlSelect_Coroinha = 'http://localhost:8080/escala_coroinha/select_coroinha';
  urlSelect_Acolito = 'http://localhost:8080/escala_coroinha/select_acolito';
  urlSelect_Comunidades = 'http://localhost:8080/escala_coroinha/select_comunidades';
  urlSelect_Missa = 'http://localhost:8080/escala_coroinha/select_missa';
  
  filtroSearch!:'';

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
   
  select_coroinhaData():Observable<any>{
    return this._http.get(`${this.urlSelect_Coroinha}`);
  } 

  select_acolitoData():Observable<any>{
    return this._http.get(`${this.urlSelect_Acolito}`);
  } 
  
  select_comunidadeData():Observable<any>{
    return this._http.get(`${this.urlSelect_Comunidades}`);
  } 
  
  select_missaData():Observable<any>{
    return this._http.get(`${this.urlSelect_Missa}`);
  } 

/*   searchData():Observable<any>{
    return this._http.get(`${this.urlSearch}`);
 } */

 
  searchData(search:any):Observable<any>{
  return this._http.get(`${this.urlSearch}`,search);
} 

}