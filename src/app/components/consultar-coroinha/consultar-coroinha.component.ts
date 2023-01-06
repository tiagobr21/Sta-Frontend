import { AppService } from '../../services/app.service';
import {jsPDF} from 'jspdf';
import { Inject,ElementRef,AfterViewInit,Component, OnInit,  ViewChild, ɵɵqueryRefresh} from '@angular/core';
import { __values } from 'tslib';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-consultar-coroinha',
  templateUrl: './consultar-coroinha.component.html',
  styleUrls: ['./consultar-coroinha.component.css']
})
export class ConsultarCoroinhaComponent implements OnInit {
  @ViewChild('content',{static:false})el!:ElementRef;
  
  title = 'app-sta';
   sideBarOpen = true;

 
   sideBarToggler(){
     this.sideBarOpen = !this.sideBarOpen;
   }

  formGroupPesquisa!: FormGroup;

  constructor(private service:AppService,private formBuilder:FormBuilder) { }
  

  readData:any;
  alt:any=false; 
  checked:any=[''];
  check:any;
  searchInput:string="";
  dataInput:string="Geral";
  anoInput:string="Geral";
  mes:string ="";
  allcoroinhas:any;
  anoAtual:any

 ocultarBotao(){
   this.alt = !this.alt;  
 }

/* checkButton(){
   let checkBoxs = document.querySelectorAll('input[type=checkbox]');
   
   for(let i=0;i<this.readData.length;i++){
     this.checked[i] = checkBoxs[i];
   }

   this.checked.forEach(function(value:any,key:any) {
    console.log(key);
     }); 
  
   
      for(let j=0;j<this.readData.length;j++){

            
        if(j==0){
          checkBoxs =  this.readData[0].id
          console.log(checkBoxs);
        }

        if(j==1){
          checkBoxs =  this.readData[1].id
          console.log(checkBoxs);
        }

        if(j==2){
          checkBoxs =  this.readData[2].id
          console.log(checkBoxs);
        }
       
    }  
     
} */


  ngOnInit(): void {
    this.service.readData().subscribe((res)=>{
      this.readData = res; 

      for(let i=0;i<this.readData.length;i++){
        console.log(this.readData[i].ano);
      }
    });
    
    let date = new Date();
    this.anoAtual = date.getFullYear();
    console.log( this.anoAtual );
}

limparFiltro(){
  location.reload()
}
  
printSimplePDF(){


console.log(this.anoInput) 
  let pdf = new jsPDF('p','pt','a4',false);

  pdf.html(this.el.nativeElement,{
     callback:(pdf)=>{
      
       pdf.save('Escala Coroinha '+this.dataInput+'.pdf');
   
     } 
     
  }); 

  
} 


deleteID(id:any){
  this.service.deleteData(id).subscribe((res)=>{
       console.log(res); 
       this.service.readData().subscribe((res)=>{
        this.readData = res;
    });     
  });
}

}
