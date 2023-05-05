import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLiturgiaData'
})
export class FilterLiturgiaDataPipe implements PipeTransform {

  transform(value_mes: any, sName: string): any {
    if(sName==="Geral"){
      return value_mes;
     }
     
     const readMesArray:any[]=[];
     for(let i=0;i<value_mes.length;i++){
      console.log(value_mes[i])
      let mesSearch:string=value_mes[i].mes;
      console.log(mesSearch);
      if(mesSearch.startsWith(sName)){
         readMesArray.push(value_mes[i]);
         
      }  
    }
   
     return readMesArray; 
   
      
  }


}
