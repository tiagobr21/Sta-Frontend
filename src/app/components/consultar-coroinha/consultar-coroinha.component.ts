import { AppService } from '../../services/app.service';
import {jsPDF} from 'jspdf';
import { Inject,ElementRef,AfterViewInit,Component, OnInit,  ViewChild} from '@angular/core';
import { __values } from 'tslib';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-consultar-coroinha',
  templateUrl: './consultar-coroinha.component.html',
  styleUrls: ['./consultar-coroinha.component.css']
})
export class ConsultarCoroinhaComponent implements OnInit {
  @ViewChild('content',{static:false})el!:ElementRef;
  @ViewChild('meuP') parag:any;
  @ViewChild('nome_escala') input:any;
  formGroupPesquisa!: FormGroup;

  constructor(private service:AppService,private formBuilder:FormBuilder) { }
   
  readData:any;
  alt:any=false; 
  radio:any=true;
  searchInput:string="";
  mês:any=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']; 

 ocultarBotao(){
   this.alt = !this.alt;  
 }

 selecionarRadio(id:any){
   this.radio;
   console.log(this.radio);
   console.log(id,'deleteid->');
 }

  ngOnInit(): void {
    this.service.readData().subscribe((res)=>{
      this.readData = res;  
    });
     
}


  
printSimplePDF(){
  let pdf = new jsPDF('p','pt','a4',false);
  
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
