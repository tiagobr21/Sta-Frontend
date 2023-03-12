import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { FormGroup } from "@angular/forms";
import { ContentObserver } from "@angular/cdk/observers";


@Injectable({  
    providedIn:'root'
})

export class AppService{

  formularioRegistro!:FormGroup;

  // dev: http://localhost:3000
  //prod: http://back-sta.herokuapp.com

  urlCreate = 'http://back-sta.herokuapp.com/escala_coroinha/create';
  urlRead = 'http://back-sta.herokuapp.com/escala_coroinha/read';
  urlDelete = 'http://back-sta.herokuapp.com/escala_coroinha/delete';
  urlUpdate = 'http://back-sta.herokuapp.com/escala_coroinha/update';
  urlgetSingleData = 'http://back-sta.herokuapp.com/escala_coroinha/getSingleData';
  urlSelect_Coroinha = 'http://back-sta.herokuapp.com/escala_coroinha/select_coroinha';
  urlSelect_Acolito = 'http://back-sta.herokuapp.com/escala_coroinha/select_acolito';
  urlSelect_Comunidades = 'http://back-sta.herokuapp.com/escala_coroinha/select_comunidades';
  urlSelect_Missa = 'http://back-sta.herokuapp.com/escala_coroinha/select_missa';

  urlUpdateCorinha = 'http://back-sta.herokuapp.com/escala_coroinha/update_coroinha';
  urlCreateCoroinha ='http://back-sta.herokuapp.com/escala_coroinha/create_coroinha';
  urlDeleteCoroinha = 'http://back-sta.herokuapp.com/escala_coroinha/delete_coroinha';

  urlUpdateAcolito = 'http://back-sta.herokuapp.com/escala_coroinha/update_acolito';
  urlCreateAcolito ='http://back-sta.herokuapp.com/escala_coroinha/create_acolito';
  urlDeleteAcolito = 'http://back-sta.herokuapp.com/escala_coroinha/delete_acolito';



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
    let ids = id;
    return this._http.get(`${this.urlgetSingleData}/${ids}`);
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

//coroinhas - criar-atualizar-deletar

  updateCoroinha(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.urlUpdateCorinha}/${ids}`,data);
  }

  createCoroinha(data:any):Observable<any>{
     console.log(data)
     return this._http.post(`${this.urlCreateCoroinha}`,data);
  }
  
  deleteCoroinha(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.urlDeleteCoroinha}/${ids}`);
 }

 //acolitos - criar-atualizar-deletar

 updateAcolito(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateAcolito}/${ids}`,data);
}

createAcolito(data:any):Observable<any>{
   console.log(data)
   return this._http.post(`${this.urlCreateAcolito}`,data);
}

deleteAcolito(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteAcolito}/${ids}`);
}


















}