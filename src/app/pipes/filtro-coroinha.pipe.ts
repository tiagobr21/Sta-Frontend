import { Pipe, PipeTransform } from '@angular/core';
import { single } from 'rxjs';

@Pipe({
  name: 'filtroCoroinha'
})
export class FiltroCoroinhaPipe implements PipeTransform {

  transform(value: any, sName: string): any {
     if(sName===""){
      return value;
     }
     const readDataArray:any[]=[];
     for(let i=0;i<value.length;i++){
 
      let dataSearch:string=value[i].data;
      let diaSearch:string=value[i].dia;
      let horaSearch:string=value[i].hora;
      let comSearch: string = value[i].comunidade; 
      let cor1Search: string = value[i].coroinha1; 
      let aco1Serarch: string = value[i].acolito1;
      
      let cor2Search: string = value[i].coroinha2; 
      let aco2Search: string = value[i].acolito2; 
      let cor3Search: string = value[i].coroinha3; 
      let aco3Search: string = value[i].acolito3; 
      let cor4Search: string = value[i].coroinha4; 
      let cor5Search: string = value[i].coroinha5; 
    
   


      if( dataSearch.toLowerCase().startsWith(sName)
       || diaSearch.toLowerCase().startsWith(sName) 
       || horaSearch.toLowerCase().startsWith(sName)
       || comSearch.toLowerCase().startsWith(sName)
       || cor1Search.toLowerCase().startsWith(sName)
       || aco1Serarch.toLowerCase().startsWith(sName)){
  
         readDataArray.push(value[i]);
         
      }

      if(cor2Search || aco2Search || cor3Search 
        || aco3Search || cor4Search || cor5Search != null){
          if( cor2Search.toLowerCase().startsWith(sName)
          || aco2Search.toLowerCase().startsWith(sName) 
          || cor3Search.toLowerCase().startsWith(sName)
          || aco3Search.toLowerCase().startsWith(sName)
          || cor4Search.toLowerCase().startsWith(sName)
          || cor5Search.toLowerCase().startsWith(sName)){
     
            readDataArray.push(value[i]);
            
         }
        }
      
     }
     return readDataArray;
  
}
}

