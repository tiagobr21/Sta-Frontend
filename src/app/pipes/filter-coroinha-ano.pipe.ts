import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterCoroinhaAno'
})
export class FilterCoroinhaAnoPipe implements PipeTransform {
  anos:any[]=[];


  transform(value_mes: any, sName: string): any {


    if(sName==="Geral"){
      return value_mes;
     }
  
     const readMesArray:any[]=[];
     for(let i=0;i<value_mes.length;i++){
      
      let mesSearch:string=value_mes[i].ano;
 
       if(mesSearch == sName){
          readMesArray.push(value_mes[i]);
          
        }   
    }
   
     return readMesArray; 
   
      
  }

}
