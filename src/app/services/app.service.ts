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
    urlCreate = 'https://back-sta.herokuapp.com/escala_coroinha/create';
    urlRead = 'https://back-sta.herokuapp.com/escala_coroinha/read';
    urlDelete = 'https://back-sta.herokuapp.com/escala_coroinha/delete';
    urlUpdate = 'https://back-sta.herokuapp.com/escala_coroinha/update';
    urlgetSingleData = 'https://back-sta.herokuapp.com/escala_coroinha/getSingleData';

  //Coroinhas
    urlUpdateCorinha = 'https://back-sta.herokuapp.com/escala_coroinha/update_coroinha';
    urlCreateCoroinha ='https://back-sta.herokuapp.com/escala_coroinha/create_coroinha';
    urlDeleteCoroinha = 'https://back-sta.herokuapp.com/escala_coroinha/delete_coroinha';
    urlUpdateAcolito = 'https://back-sta.herokuapp.com/escala_coroinha/update_acolito';
    urlCreateAcolito ='https://back-sta.herokuapp.com/escala_coroinha/create_acolito';
    urlDeleteAcolito = 'https://back-sta.herokuapp.com/escala_coroinha/delete_acolito';

    //Ministros
    urlUpdateMinistroAgente = 'https://back-sta.herokuapp.com/escala_ministro/update_ministro';
    urlCreateMinistroAgente ='https://back-sta.herokuapp.com/escala_ministro/create_ministro';
    urlDeleteMinistroAgente = 'https://back-sta.herokuapp.com/escala_ministro/delete_ministro';


  //PDF Coroinhha
    urlGerarPdf = 'https://back-sta.herokuapp.com/escala_coroinha/gerarpdf';
    urlGetPdf = 'https://back-sta.herokuapp.com/escala_coroinha/getpdf';
    urlDeletePdf = 'https://back-sta.herokuapp.com/escala_coroinha/deletepdf';


  // Escala Ministro
    urlCreateMinistro = 'https://back-sta.herokuapp.com/escala_ministro/create';
    urlReadMinistro = 'https://back-sta.herokuapp.com/escala_ministro/read';
    urlDeleteMinistro = 'https://back-sta.herokuapp.com/escala_ministro/delete';
    urlUpdateMinistro = 'https://back-sta.herokuapp.com/escala_ministro/update';
    urlgetSingleDataMinistro = 'https://back-sta.herokuapp.com/escala_ministro/getSingleData';

  // PDF Ministro
    urlGerarPdfMinistro = 'https://back-sta.herokuapp.com/escala_ministro/gerarpdf';
    urlGetPdfMinistro = 'https://back-sta.herokuapp.com/escala_ministro/getpdf';
    urlDeletePdfMinistro = 'https://back-sta.herokuapp.com/escala_ministro/deletepdf';
    
 
    //Selects
    urlSelect_Coroinha = 'https://back-sta.herokuapp.com/escala_coroinha/select_coroinha';
    urlSelect_Acolito = 'https://back-sta.herokuapp.com/escala_coroinha/select_acolito';
    urlSelect_Comunidades = 'https://back-sta.herokuapp.com/escala_coroinha/select_comunidades';
    urlSelect_Missa = 'https://back-sta.herokuapp.com/escala_coroinha/select_missa';
    urlSelectMinistros = 'https://back-sta.herokuapp.com/escala_ministro/select_ministro';
    urlSelectCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/select_celebrante';

    // Escala Celebrante
    urlCreateCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/create';
    urlReadCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/read';
    urlDeleteCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/delete';
    urlUpdateCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/update';
    urlgetSingleDataCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/getSingleData';
      
    //Celebrante
    urlUpdateCelebranteAgente = 'https://back-sta.herokuapp.com/escala_celebrante/update_celebrante';
    urlCreateCelebranteAgente ='https://back-sta.herokuapp.com/escala_celebrante/create_celebrante';
    urlDeleteCelebranteAgente = 'https://back-sta.herokuapp.com/escala_celebrante/delete_celebrante';
   
    //PDF Celebrantes
    urlGerarPdfCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/gerarpdf';
    urlGetPdfCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/getpdf';
    urlDeletePdfCelebrante = 'https://back-sta.herokuapp.com/escala_celebrante/deletepdf';
  

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