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


  //Config Home page

  urlReadAvisos = 'https://back-sta.herokuapp.com/config_home_page/read';
  urlUploadAvisos = 'https://back-sta.herokuapp.com/config_home_page/uploadaviso';

  //Pdf Geral

  urlGerarPdfGeral = 'https://back-sta.herokuapp.com/escala_geral/gerarpdf';
  urlGetPdfGeral = 'https://back-sta.herokuapp.com/escala_geral/getpdf';
  urlDeletePdfGeral = 'https://back-sta.herokuapp.com/escala_geral/deletepdf';

  //Escala Geral

  urlReadGeral = 'https://back-sta.herokuapp.com/escala_geral/read';

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
    urlSelectComentaristas = 'https://back-sta.herokuapp.com/escala_liturgia/select_comentaristas';
    urlSelectLeitores = 'https://back-sta.herokuapp.com/escala_liturgia/select_leitores';
    urlSelectMusicos = 'https://back-sta.herokuapp.com/escala_liturgia/select_musicos';
    urlSelectSalmistas = 'https://back-sta.herokuapp.com/escala_liturgia/select_salmistas';


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

    // Escala Liturgia
    urlCreateLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/create';
    urlReadLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/read';
    urlDeleteLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/delete';
    urlUpdateLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/update';
    urlgetSingleDataLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/getSingleData';

    //Comentarista
    urlUpdateComentarista = 'https://back-sta.herokuapp.com/escala_liturgia/update_comentarista';
    urlCreateComentarista ='https://back-sta.herokuapp.com/escala_liturgia/create_comentarista';
    urlDeleteComentarista = 'https://back-sta.herokuapp.com/escala_liturgia/delete_comentarista';

    //Leitores
    urlUpdateLeitores = 'https://back-sta.herokuapp.com/escala_liturgia/update_leitores';
    urlCreateLeitores ='https://back-sta.herokuapp.com/escala_liturgia/create_leitores';
    urlDeleteLeitores = 'https://back-sta.herokuapp.com/escala_liturgia/delete_leitores';

    //Musicos
    urlUpdateMusicos = 'https://back-sta.herokuapp.com/escala_liturgia/update_musicos';
    urlCreateMusicos ='https://back-sta.herokuapp.com/escala_liturgia/create_musicos';
    urlDeleteMusicos = 'https://back-sta.herokuapp.com/escala_liturgia/delete_musicos';

    //Salmistas
    urlUpdateSalmistas = 'https://back-sta.herokuapp.com/escala_liturgia/update_salmistas';
    urlCreateSalmistas ='https://back-sta.herokuapp.com/escala_liturgia/create_salmistas';
    urlDeleteSalmistas = 'https://back-sta.herokuapp.com/escala_liturgia/delete_salmistas';

    //PDF Liturgia
    urlGerarPdfLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/gerarpdf';
    urlGetPdfLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/getpdf';
    urlDeletePdfLiturgia = 'https://back-sta.herokuapp.com/escala_liturgia/deletepdf';
  

  constructor(private _http:HttpClient) { }

 // Read Avisos

 uploadAvisos(data:any,id:any):Observable<any>{
  return this._http.patch(`${this.urlUploadAvisos}/${id}`,data);
}

  // Read Avisos

  readAvisos():Observable<any>{
    return this._http.get(`${this.urlReadAvisos}`);
  }

  //Read Geral

  readDataGeral():Observable<any>{
    return this._http.get(`${this.urlReadGeral}`);
  }

  //Delete PDF

  deletePdf(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdf}/${id}`);
  }

  deletePdfMinistro(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdfMinistro}/${id}`);
  }

  deletePdfCelebrante(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdfCelebrante}/${id}`);
  }

  deletePdfLiturgia(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdfLiturgia}/${id}`);
  }

  deletePdfGeral(id:any):Observable<any>{
    return this._http.delete(`${this.urlDeletePdfGeral}/${id}`);
  }

  //Get PDF

  getPdf():Observable<any>{
    return this._http.get(`${this.urlGetPdf}`);
  }

   getPdfMinistro():Observable<any>{
    return this._http.get(`${this.urlGetPdfMinistro}`);
  }

  getPdfCelebrante():Observable<any>{
    return this._http.get(`${this.urlGetPdfCelebrante}`);
  }
  
  getPdfLiturgia():Observable<any>{
    return this._http.get(`${this.urlGetPdfLiturgia}`);
  }

  getPdfGeral():Observable<any>{
    return this._http.get(`${this.urlGetPdfGeral}`);
  }

  //Gerar PDF

  gerarPdf(data:any):Observable<any>{
     return this._http.post(`${this.urlGerarPdf}`,data);
  }

  gerarPdfMinistro(data:any):Observable<any>{
    return this._http.post(`${this.urlGerarPdfMinistro}`,data);
 }

 gerarPdfCelebrante(data:any):Observable<any>{
    return this._http.post(`${this.urlGerarPdfCelebrante}`,data);
 }

 gerarPdfLiturgia(data:any):Observable<any>{
  return this._http.post(`${this.urlGerarPdfLiturgia}`,data);
}

gerarPdfGeral(data:any):Observable<any>{
  return this._http.post(`${this.urlGerarPdfGeral}`,data);
}


 // Create Escala

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

 createDataLit(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateLiturgia}`,data);
}

// Get Escala

  readData():Observable<any>{
     return this._http.get(`${this.urlRead}`);
  }

  readDataMinistro():Observable<any>{
    return this._http.get(`${this.urlReadMinistro}`);
 }

 readDataCelebrate():Observable<any>{
  return this._http.get(`${this.urlReadCelebrante}`);
}

 readDataLiturgia():Observable<any>{
  return this._http.get(`${this.urlReadLiturgia}`);
}


//Delete Escala

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

  deleteDataLiturgia(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.urlDeleteLiturgia}/${ids}`);
  }

// Update Escala

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

  updateDataLiturgia(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.urlUpdateLiturgia}/${ids}`,data);
  }

  //getSingle Escala
 
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

  getSingleDataLiturgia(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.urlgetSingleDataLiturgia}/${ids}`);
  } 

  //Selects
   
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

  select_comentaristasData():Observable<any>{
    return this._http.get(`${this.urlSelectComentaristas}`);
  } 

  select_leitoresData():Observable<any>{
    return this._http.get(`${this.urlSelectLeitores}`);
  } 

  select_musicosData():Observable<any>{
    return this._http.get(`${this.urlSelectMusicos}`);
  }

  select_salmistasData():Observable<any>{
    return this._http.get(`${this.urlSelectSalmistas}`);
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

 //Comentarista - criar-atualizar-deletar

 updateComentarista(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateComentarista}/${ids}`,data);
}

createComentarista(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateComentarista}`,data);
}

deleteComentarista(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteComentarista}/${ids}`);
}

 //Leitores - criar-atualizar-deletar

 updateLeitores(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateLeitores}/${ids}`,data);
}

createLeitores(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateLeitores}`,data);
}

deleteLeitores(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteLeitores}/${ids}`);
}

 //Musicos - criar-atualizar-deletar

 updateMusicos(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateMusicos}/${ids}`,data);
}

createMusicos(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateMusicos}`,data);
}

deleteMusicos(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteMusicos}/${ids}`);
}

 //Salmistas - criar-atualizar-deletar

 updateSalmistas(data:any,id:any):Observable<any>{
  let ids = id;
  return this._http.put(`${this.urlUpdateSalmistas}/${ids}`,data);
}

createSalmistas(data:any):Observable<any>{
  return this._http.post(`${this.urlCreateSalmistas}`,data);
}

deleteSalmistas(id:any):Observable<any>{
  let ids = id;
  return this._http.delete(`${this.urlDeleteSalmistas}/${ids}`);
}














}