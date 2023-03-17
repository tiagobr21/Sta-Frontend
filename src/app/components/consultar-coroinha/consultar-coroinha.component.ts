import { AppService } from '../../services/app.service';
import {jsPDF} from 'jspdf';
import { ElementRef,Component, OnInit,  ViewChild} from '@angular/core';
import { __values } from 'tslib';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { elementAt } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';




@Component({
  selector: 'app-consultar-coroinha',
  templateUrl: './consultar-coroinha.component.html',
  styleUrls: ['./consultar-coroinha.component.css']
})
export class ConsultarCoroinhaComponent implements OnInit {
  @ViewChild('content',{static:false})el!:ElementRef;
  
   formCheck: FormGroup;

   title = 'app-sta';
   sideBarOpen = true;
   loading:boolean = false;
   deleteData:any
   readData:any;
   alt:any=false; 
   checked:any=[''];
   check:any;
   searchInput:string="";
   dataInput:string="Geral";
   anoInput:string="Geral";
   mes:string ="";
   allcoroinhas:any;
   anoAtual:any;
   checks:boolean = false
   allCheckes:any
   returnCheck:any = [];
   escalas:any[] = [];
   pagina1:any =[];
   pagina2:any =[];
   pagina3:any =[];
   response:any;
 
 

  constructor(private service:AppService,
    private fb:FormBuilder,
    private snackbar:SnackbarService) { 

      this.formCheck = this.fb.group({
        checkArray: this.fb.array([],[Validators.required])
      });

    }
  


      ngOnInit(): void {
        
          this.service.readData().subscribe((res)=>{
            this.readData = res; 
            
            this.readData.map( (diplomado:any) => {
              diplomado.checked = false;
            });


            for(let i=0;i<this.readData.length;i++){
        
            }
          
          });

         
          

          let date = new Date();
          this.anoAtual = date.getFullYear();
     

    }

    onCheckboxChange(e:any){
      const checkArray: FormArray = this.formCheck.get('checkArray') as FormArray
      const id = e.target.value;
      const isChecked = e.target.checked;
    
       this.readData = this.readData.map((i:any)=>{

         if(i.id == id){
      
            if(i.checked == false){
               i.checked = isChecked
               console.log(i.checked)
               this.allCheckes = false;
               checkArray.push(new FormControl(i.id))
            }else{
              let contador = 0;

              checkArray.controls.forEach((item:any)=>{
                 if(item.value = e.target.value){
                    checkArray.removeAt(contador);
                    return;
                 }
                 contador++;
              })
            }
             this.returnCheck = checkArray.value
            //  console.log(checkArray.value);
            return i;
        } 

        if(id == -1){
          i.Checked = this.allCheckes;
          checkArray.push(new FormControl(i.id)) ;
          this.checks = true;
          this.returnCheck =  checkArray.value
          // console.log(checkArray.value);
          return i;
        }
  
        return i;
      });
       
    }

    sideBarToggler(){
      this.sideBarOpen = !this.sideBarOpen;
    }

    ocultarBotao(){
      this.alt = !this.alt;  
    }

    limparFiltro(){
      location.reload()
    }
      
    printSimplePDF():any{
    
     
      this.readData.forEach((escala:any,i:any) => {
          this.returnCheck.forEach((check:any,i:any) => {
                  if(escala.id == check){
                     this.escalas.push(escala)
                  }
          }); 

      });


       if(this.escalas.length <= 8){
        this.pagina1 = this.escalas
        this.loading = true
      }else if (this.escalas.length > 8 && this.escalas.length <= 16 ){
         let novaescalas = [];
         let corte = 8;

         for (var i = 0; i < this.escalas.length; i = i + corte) {
          novaescalas.push(this.escalas.slice(i, i + corte));
        }
           
        this.pagina1 = novaescalas[0]
        this.pagina2 =  novaescalas[1]
        this.loading = true

      }else{
        this.snackbar.openSnackBar(GlobalConstants.limit,GlobalConstants.error);
        return false;
      }




      if(this.pagina2[0] == null){
          const pagina1 = JSON.stringify( this.pagina1)
        
          console.log(pagina1)
      
          let formData = [{
            "tipo":"Coroinha",
            "pagina1": pagina1
        }]
        

        
         this.service.gerarPdf(formData).subscribe((res)=>{
          this.response = res
          this.loading = false
          this.snackbar.openSnackBar(this.response.message,"");
          
        },(error)=>{
          if(error.error?.message){
            this.response = error.error?.message;
          }else{
            this.response = GlobalConstants.genericError
          }
 
           this.snackbar.openSnackBar(this.response,GlobalConstants.error);
        })

      }else{
        
        const pagina1 = JSON.stringify( this.pagina1)
        const pagina2 = JSON.stringify( this.pagina2)

          let formData = [
            {
              "tipo":"Coroinha",
              "pagina1": pagina1
            },
            {
              "tipo":"Coroinha",
              "pagina2": pagina2
            }
          ]

         
         this.service.gerarPdf(formData).subscribe((res)=>{
          this.response = res
          this.loading = false
          this.snackbar.openSnackBar(this.response.message,"");
      },(error)=>{
        if(error.error?.message){
          this.response = error.error?.message;
        }else{
          this.response = GlobalConstants.genericError
        }

         this.snackbar.openSnackBar(this.response,GlobalConstants.error);
      })  
    
    }
    

    

    
    }


    deleteID(id:any){
      this.loading = true
      this.service.deleteData(id).subscribe((res)=>{
          
          this.deleteData = res;
          this.snackbar.openSnackBar(this.deleteData.message,"") 
          this.loading = true;

          this.service.readData().subscribe((res)=>{
            this.readData = res;
          });     
      });
    }

}
