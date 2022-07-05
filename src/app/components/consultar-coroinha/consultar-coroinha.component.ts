import { Component, OnInit,  ViewChild  } from '@angular/core';
import { AppService } from '../../services/app.service';
import {jsPDF} from 'jspdf';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-consultar-coroinha',
  templateUrl: './consultar-coroinha.component.html',
  styleUrls: ['./consultar-coroinha.component.css']
})
export class ConsultarCoroinhaComponent implements OnInit {
  @ViewChild('content',{static:false})el!:ElementRef;
  @ViewChild('meuP') parag:any;
  @ViewChild('nome_escala') input:any;



  constructor(private service:AppService) { }
   
  readData:any;
  nome:any;
  nome_escala:any;
 
  quebrarLinha() {

    if(this.parag.length >= 11){
       this.parag.value.replace("\n","<br>");
     } 
 }

  ngOnInit(): void {
    this.service.readData().subscribe((res)=>{
      this.readData = res;
  })
  }

  

printSimplePDF(){
  let pdf = new jsPDF('p','pt','a3');
  pdf.html(this.el.nativeElement,{
     callback:(pdf)=>{
       pdf.save('teste_pdf.pdf');
     } 
  }); 
} 


deleteID(id:any){
  console.log(id,'deleteid->');
  this.service.deleteData(id).subscribe((res)=>{
       console.log(res); 
       this.service.readData().subscribe((res)=>{
        this.readData = res;
    });     
  });
}
}
