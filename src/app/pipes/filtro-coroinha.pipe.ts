import { Pipe, PipeTransform } from '@angular/core';


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

    
 
      if( dataSearch.toLowerCase().startsWith(sName)
       || diaSearch.toLowerCase().startsWith(sName) 
       || horaSearch.toLowerCase().startsWith(sName)
       || comSearch.toLowerCase().startsWith(sName)){


         readDataArray.push(value[i]);
         
      }

     }
     return readDataArray;
  
}
}

