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
  //prod: https://back-sta.herokuapp.com

  // Escala Coroinha
    urlCreate = 'http://localhost:3000/escala_coroinha/create';
    urlRead = 'http://localhost:3000/escala_coroinha/read';
    urlDelete = 'http://localhost:3000/escala_coroinha/delete';
    urlUpdate = 'http://localhost:3000/escala_coroinha/update';
    urlgetSingleData = 'http://localhost:3000/escala_coroinha/getSingleData';

  //Coroinhas
    urlUpdateCorinha = 'http://localhost:3000/escala_coroinha/update_coroinha';
    urlCreateCoroinha ='http://localhost:3000/escala_coroinha/create_coroinha';
    urlDeleteCoroinha = 'http://localhost:3000/escala_coroinha/delete_coroinha';
    urlUpdateAcolito = 'http://localhost:3000/escala_coroinha/update_acolito';
    urlCreateAcolito ='http://localhost:3000/escala_coroinha/create_acolito';
    urlDeleteAcolito = 'http://localhost:3000/escala_coroinha/delete_acolito';

    //Ministros
    urlUpdateMinistroAgente = 'http://localhost:3000/escala_ministro/update_ministro';
    urlCreateMinistroAgente ='http://localhost:3000/escala_ministro/create_ministro';
    urlDeleteMinistroAgente = 'http://localhost:3000/escala_ministro/delete_ministro';


  //PDF Coroinhha
    urlGerarPdf = 'http://localhost:3000/escala_coroinha/gerarpdf';
    urlGetPdf = 'http://localhost:3000/escala_coroinha/getpdf';
    urlDeletePdf = 'http://localhost:3000/escala_coroinha/deletepdf';


  // Escala Ministro
    urlCreateMinistro = 'http://localhost:3000/escala_ministro/create';
    urlReadMinistro = 'http://localhost:3000/escala_ministro/read';
    urlDeleteMinistro = 'http://localhost:3000/escala_ministro/delete';
    urlUpdateMinistro = 'http://localhost:3000/escala_ministro/update';
    urlgetSingleDataMinistro = 'http://localhost:3000/escala_ministro/getSingleData';

  // PDF Ministro
    urlGerarPdfMinistro = 'http://localhost:3000/escala_ministro/gerarpdf';
    urlGetPdfMinistro = 'http://localhost:3000/escala_ministro/getpdf';
    urlDeletePdfMinistro = 'http://localhost:3000/escala_ministro/deletepdf';
    
 
    //Selects
    urlSelect_Coroinha = 'http://localhost:3000/escala_coroinha/select_coroinha';
    urlSelect_Acolito = 'http://localhost:3000/escala_coroinha/select_acolito';
    urlSelect_Comunidades = 'http://localhost:3000/escala_coroinha/select_comunidades';
    urlSelect_Missa = 'http://localhost:3000/escala_coroinha/select_missa';
    urlSelectMinistros = 'http://localhost:3000/escala_ministro/select_ministro';
    urlSelectCelebrante = 'http://localhost:3000/escala_celebrante/select_celebrante';

    // Escala Celebrante
    urlCreateCelebrante = 'http://localhost:3000/escala_celebrante/create';
    urlReadCelebrante = 'http://localhost:3000/escala_celebrante/read';
    urlDeleteCelebrante = 'http://localhost:3000/escala_celebrante/delete';
    urlUpdateCelebrante = 'http://localhost:3000/escala_celebrante/update';
    urlgetSingleDataCelebrante = 'http://localhost:3000/escala_celebrante/getSingleData';
      
    //Celebrante
    urlUpdateCelebranteAgente = 'http://localhost:3000/escala_celebrante/update_celebrante';
    urlCreateCelebranteAgente ='http://localhost:3000/escala_celebrante/create_celebrante';
    urlDeleteCelebranteAgente = 'http://localhost:3000/escala_celebrante/delete_celebrante';
   
    //PDF Celebrantes
    urlGerarPdfCelebrante = 'http://localhost:3000/escala_celebrante/gerarpdf';
    urlGetPdfCelebrante = 'http://localhost:3000/escala_celebrante/getpdf';
    urlDeletePdfCelebrante = 'http://localhost:3000/escala_celebrante/deletepdf';
  

  constructor(private _http:HttpClient) { }

  deletePdf(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdf}/${id}`);
  }

  deletePdfMinistro(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdfMinistro}/${id}`);
  }

  deletePdfCelebrante(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdfCelebrante}/${id}`);
  }

  getPdf():Observable<any>{
    return this._http.get(`${this.urlGetPdf}`);
  }

   getPdfMinistro():Observable<any>{
    return this._http.get(`${this.urlGetPdfMinistro}`);
  }

  getPdfCelebrante():Observable<any>{
    return this._http.get(`${this.urlGetPdfCelebrante}`);
  }

  gerarPdf(data:any):Observable<any>{
     return this._http.post(`${this.urlGerarPdf}`,data);
  }

  gerarPdfMinistro(data:any):Observable<any>{
    return this._http.post(`${this.urlGerarPdfMinistro}`,data);
 }

 gerarPdfCelebrante(data:any):Observable<any>{
    return this._http.post(`${this.urlGerarPdfCelebrante}`,data);
 }

  createData(data:any):Observable<any>{
    console.log(data,'createapi=>');
     return this._http.post(`${this.urlCreate}`,data);
  }

  createDataMin(data:any):Observable<any>{
     return this._http.post(`${this.urlCreateMinistro}`,data);
  }

  createDataCel(data:any):Observable<any>{
    return this._http.post(`${this.urlCreateCelebrante}`,data);
 }

  readData():Observable<any>{
     return this._http.get(`${this.urlRead}`);
  }

  readDataMinistro():Observable<any>{
    return this._http.get(`${this.urlReadMinistro}`);
 }

 readDataCelebrate():Observable<any>{
  return this._http.get(`${this.urlReadCelebrante}`);
}


  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.urlDelete}/${ids}`);
  }

  deleteDataMinistro(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.urlDeleteMinistro}/${ids}`);
  }
  
  deleteDataCelebrante(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.urlDeleteCelebrante}/${ids}`);
  }

  updateData(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.urlUpdate}/${ids}`,data);
  }

  updateDataMinistro(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.urlUpdateMinistro}/${ids}`,data);
  }

  updateDataCelebrante(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.urlUpdateCelebrante}/${ids}`,data);
  }

   getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.urlgetSingleData}/${ids}`);
   } 

   getSingleDataMinistro(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.urlgetSingleDataMinistro}/${ids}`);
   } 

   getSingleDataCelebrante(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.urlgetSingleDataCelebrante}/${ids}`);
   } 
   
  select_coroinhaData():Observable<any>{
    return this._http.get(`${this.urlSelect_Coroinha}`);
  } 

  select_acolitoData():Observable<any>{
    return this._http.get(`${this.urlSelect_Acolito}`);
  } 

  select_ministroData():Observable<any>{
    return this._http.get(`${this.urlSelectMinistros}`);
  } 

  select_celebranteData():Observable<any>{
    return this._http.get(`${this.urlSelectCelebrante}`);
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


 //ministros - criar-atualizar-deletar

 updateMinistros(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateMinistroAgente}/${ids}`,data);
}

createMinistro(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateMinistroAgente}`,data);
}

deleteMinistro(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteMinistroAgente}/${ids}`);
}

 //celebrante - criar-atualizar-deletar

 updateCelebrante(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateCelebranteAgente}/${ids}`,data);
}

createCelebrante(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateCelebranteAgente}`,data);
}

deleteCelebrante(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteCelebranteAgente}/${ids}`);
}














}