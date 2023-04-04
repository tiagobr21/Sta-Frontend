import { AppService } from '../../../../services/app.service';
import {jsPDF} from 'jspdf';
import { ElementRef,Component, OnInit,  ViewChild} from '@angular/core';
import { __values } from 'tslib';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { elementAt, EmptyError } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { coerceStringArray } from '@angular/cdk/coercion';




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
   pagina4:any =[];
   pagina5:any =[];
   pagina6:any =[];
   pagina7:any =[];
   pagina8:any =[];
   pagina9:any =[];
   pagina10:any =[];
   response:any;
   newReadData:any = []
   acolitos:any = [];
   coroinhas:any = [];
   qtdcoroinhas:number = 0;
   qtdacolitos:number = 0;
 
 

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
            
            console.log(this.readData)

             
            this.readData.forEach((element:any) => {
            
              let escala = {

                missa: element.missa,
                data: element.data,
                dia: element.dia,
                hora: element.hora,
                mes: element.mes,
                ano:element.ano,
                comunidade: element.comunidade,
                coroinhas: JSON.parse(element.acolito),
                acolitos: JSON.parse(element.coroinha),
                id: element.id

              }

              this.newReadData.push(escala) 
          
            });

           console.log(this.newReadData)


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
             console.log(checkArray.value);
            return i;
        } 

        if(id == -1){
          i.checked = this.allCheckes;
          checkArray.push(new FormControl(i.id));
          this.checks = true;
          this.returnCheck =  checkArray.value
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
    
         let novaescalas = [];
         let corte = 10;

         for (var i = 0; i < this.escalas.length; i = i + corte) {
          novaescalas.push(this.escalas.slice(i, i + corte));
        }

        if(novaescalas.length <=10){

          if(novaescalas.length == 1){
            this.pagina1 = novaescalas[0]
          }

          if(novaescalas.length == 2){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
          }
          
          if(novaescalas.length == 3){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
          }
          if(novaescalas.length == 4){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
          }
          if(novaescalas.length == 5){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
            this.pagina5 =  novaescalas[4]
          }
          if(novaescalas.length == 6){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
            this.pagina5 =  novaescalas[4]
            this.pagina6 =  novaescalas[5]
          }
          if(novaescalas.length == 7){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
            this.pagina5 =  novaescalas[4]
            this.pagina6 =  novaescalas[5]
            this.pagina7 =  novaescalas[6]
          }
          if(novaescalas.length == 8){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
            this.pagina5 =  novaescalas[4]
            this.pagina6 =  novaescalas[5]
            this.pagina7 =  novaescalas[6]
            this.pagina8 =  novaescalas[7]
          }
          if(novaescalas.length == 9){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
            this.pagina5 =  novaescalas[4]
            this.pagina6 =  novaescalas[5]
            this.pagina7 =  novaescalas[6]
            this.pagina8 =  novaescalas[7]
            this.pagina9 =  novaescalas[8]
          }
          if(novaescalas.length == 10){
            this.pagina1 = novaescalas[0]
            this.pagina2 =  novaescalas[1]
            this.pagina3 =  novaescalas[2]
            this.pagina4 =  novaescalas[3]
            this.pagina5 =  novaescalas[4]
            this.pagina6 =  novaescalas[5]
            this.pagina7 =  novaescalas[6]
            this.pagina8 =  novaescalas[7]
            this.pagina9 =  novaescalas[8]
            this.pagina10 =  novaescalas[9]
          }
         
          this.loading = true
  
        }else{
          this.snackbar.openSnackBar(GlobalConstants.limitescala,"");
        }
           

      if(this.pagina2[0] == null){
 
          const pagina1 = JSON.stringify( this.pagina1)
      
          let formData = [{
            "tipo":"Coroinha",
            "pagina1": pagina1
          }]

         this.service.gerarPdf(formData).subscribe((res)=>{
          this.response = res
          this.loading = false
          this.snackbar.openSnackBar(this.response.message,"");
        
          setTimeout(function() {
            window.location.reload();
          }, 3000); 

        },(error)=>{
          this.loading = false
          if(error.error?.message){
            this.response = error.error?.message;
          }else{
            this.response = GlobalConstants.genericError
          }
  
           this.snackbar.openSnackBar(this.response,GlobalConstants.error);
        })   

      }else if(this.pagina3[0] == null){
        
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

          setTimeout(function() {
            window.location.reload();
          }, 3000); 

      },(error)=>{
        this.loading = false
        if(error.error?.message){
          this.response = error.error?.message;
        }else{
          this.response = GlobalConstants.genericError
        }

         this.snackbar.openSnackBar(this.response,GlobalConstants.error);
      })  
    
    }else if(this.pagina4[0] == null){
        
      const pagina1 = JSON.stringify( this.pagina1)
      const pagina2 = JSON.stringify( this.pagina2)
      const pagina3 = JSON.stringify( this.pagina3)

        let formData = [
          {
            "tipo":"Coroinha",
            "pagina1": pagina1
          },
          {
            "tipo":"Coroinha",
            "pagina2": pagina2
          },
          {
            "tipo":"Coroinha",
            "pagina3": pagina3
          }
        ]

       
       this.service.gerarPdf(formData).subscribe((res)=>{
        this.response = res
        this.loading = false
        this.snackbar.openSnackBar(this.response.message,"");
        
        setTimeout(function() {
          window.location.reload();
        }, 3000); 
    },(error)=>{
      if(error.error?.message){
        this.response = error.error?.message;
      }else{
        this.response = GlobalConstants.genericError
      }

       this.snackbar.openSnackBar(this.response,GlobalConstants.error);
    })  
  
  }else if(this.pagina5[0] == null){
        
    const pagina1 = JSON.stringify( this.pagina1)
    const pagina2 = JSON.stringify( this.pagina2)
    const pagina3 = JSON.stringify( this.pagina3)
    const pagina4 = JSON.stringify( this.pagina4)

      let formData = [
        {
          "tipo":"Coroinha",
          "pagina1": pagina1
        },
        {
          "tipo":"Coroinha",
          "pagina2": pagina2
        },
        {
          "tipo":"Coroinha",
          "pagina3": pagina3
        },
        {
          "tipo":"Coroinha",
          "pagina4": pagina4
        }
      ]

     
     this.service.gerarPdf(formData).subscribe((res)=>{
      this.response = res
      this.loading = false
      this.snackbar.openSnackBar(this.response.message,"");
      
      setTimeout(function() {
        window.location.reload();
      }, 3000); 
  },(error)=>{
    if(error.error?.message){
      this.response = error.error?.message;
    }else{
      this.response = GlobalConstants.genericError
    }

     this.snackbar.openSnackBar(this.response,GlobalConstants.error);
  })  

}else if(this.pagina6[0] == null){
        
  const pagina1 = JSON.stringify( this.pagina1)
  const pagina2 = JSON.stringify( this.pagina2)
  const pagina3 = JSON.stringify( this.pagina3)
  const pagina4 = JSON.stringify( this.pagina4)
  const pagina5 = JSON.stringify( this.pagina5)

    let formData = [
      {
        "tipo":"Coroinha",
        "pagina1": pagina1
      },
      {
        "tipo":"Coroinha",
        "pagina2": pagina2
      },
      {
        "tipo":"Coroinha",
        "pagina3": pagina3
      },
      {
        "tipo":"Coroinha",
        "pagina4": pagina4
      },
      {
        "tipo":"Coroinha",
        "pagina5": pagina5
      }
    ]

   
   this.service.gerarPdf(formData).subscribe((res)=>{
    this.response = res
    this.loading = false
    this.snackbar.openSnackBar(this.response.message,"");
    
    setTimeout(function() {
      window.location.reload();
    }, 3000); 
},(error)=>{
  if(error.error?.message){
    this.response = error.error?.message;
  }else{
    this.response = GlobalConstants.genericError
  }

   this.snackbar.openSnackBar(this.response,GlobalConstants.error);
})  

}else if(this.pagina7[0] == null){
        
  const pagina1 = JSON.stringify( this.pagina1)
  const pagina2 = JSON.stringify( this.pagina2)
  const pagina3 = JSON.stringify( this.pagina3)
  const pagina4 = JSON.stringify( this.pagina4)
  const pagina5 = JSON.stringify( this.pagina5)
  const pagina6 = JSON.stringify( this.pagina6)

    let formData = [
      {
        "tipo":"Coroinha",
        "pagina1": pagina1
      },
      {
        "tipo":"Coroinha",
        "pagina2": pagina2
      },
      {
        "tipo":"Coroinha",
        "pagina3": pagina3
      },
      {
        "tipo":"Coroinha",
        "pagina4": pagina4
      },
      {
        "tipo":"Coroinha",
        "pagina5": pagina5
      },
      {
        "tipo":"Coroinha",
        "pagina6": pagina6
      }
    ]

   
   this.service.gerarPdf(formData).subscribe((res)=>{
    this.response = res
    this.loading = false
    this.snackbar.openSnackBar(this.response.message,"");
    
    setTimeout(function() {
      window.location.reload();
    }, 3000); 
},(error)=>{
  if(error.error?.message){
    this.response = error.error?.message;
  }else{
    this.response = GlobalConstants.genericError
  }

   this.snackbar.openSnackBar(this.response,GlobalConstants.error);
})  

}else if(this.pagina8[0] == null){
        
  const pagina1 = JSON.stringify( this.pagina1)
  const pagina2 = JSON.stringify( this.pagina2)
  const pagina3 = JSON.stringify( this.pagina3)
  const pagina4 = JSON.stringify( this.pagina4)
  const pagina5 = JSON.stringify( this.pagina5)
  const pagina6 = JSON.stringify( this.pagina6)
  const pagina7 = JSON.stringify( this.pagina7)

    let formData = [
      {
        "tipo":"Coroinha",
        "pagina1": pagina1
      },
      {
        "tipo":"Coroinha",
        "pagina2": pagina2
      },
      {
        "tipo":"Coroinha",
        "pagina3": pagina3
      },
      {
        "tipo":"Coroinha",
        "pagina4": pagina4
      },
      {
        "tipo":"Coroinha",
        "pagina5": pagina5
      },
      {
        "tipo":"Coroinha",
        "pagina6": pagina6
      },
      {
        "tipo":"Coroinha",
        "pagina7": pagina7
      }
    ]

   
   this.service.gerarPdf(formData).subscribe((res)=>{
    this.response = res
    this.loading = false
    this.snackbar.openSnackBar(this.response.message,"");
    
    setTimeout(function() {
      window.location.reload();
    }, 3000); 
},(error)=>{
  if(error.error?.message){
    this.response = error.error?.message;
  }else{
    this.response = GlobalConstants.genericError
  }

   this.snackbar.openSnackBar(this.response,GlobalConstants.error);
})  

}else if(this.pagina9[0] == null){
        
  const pagina1 = JSON.stringify( this.pagina1)
  const pagina2 = JSON.stringify( this.pagina2)
  const pagina3 = JSON.stringify( this.pagina3)
  const pagina4 = JSON.stringify( this.pagina4)
  const pagina5 = JSON.stringify( this.pagina5)
  const pagina6 = JSON.stringify( this.pagina6)
  const pagina7 = JSON.stringify( this.pagina7)
  const pagina8 = JSON.stringify( this.pagina8)

    let formData = [
      {
        "tipo":"Coroinha",
        "pagina1": pagina1
      },
      {
        "tipo":"Coroinha",
        "pagina2": pagina2
      },
      {
        "tipo":"Coroinha",
        "pagina3": pagina3
      },
      {
        "tipo":"Coroinha",
        "pagina4": pagina4
      },
      {
        "tipo":"Coroinha",
        "pagina5": pagina5
      },
      {
        "tipo":"Coroinha",
        "pagina6": pagina6
      },
      {
        "tipo":"Coroinha",
        "pagina7": pagina7
      },
      {
        "tipo":"Coroinha",
        "pagina8": pagina8
      }
    ]

   
   this.service.gerarPdf(formData).subscribe((res)=>{
    this.response = res
    this.loading = false
    this.snackbar.openSnackBar(this.response.message,"");
    
    setTimeout(function() {
      window.location.reload();
    }, 3000); 
},(error)=>{
  if(error.error?.message){
    this.response = error.error?.message;
  }else{
    this.response = GlobalConstants.genericError
  }

   this.snackbar.openSnackBar(this.response,GlobalConstants.error);
})  

}else if(this.pagina10[0] == null){
        
  const pagina1 = JSON.stringify( this.pagina1)
  const pagina2 = JSON.stringify( this.pagina2)
  const pagina3 = JSON.stringify( this.pagina3)
  const pagina4 = JSON.stringify( this.pagina4)
  const pagina5 = JSON.stringify( this.pagina5)
  const pagina6 = JSON.stringify( this.pagina6)
  const pagina7 = JSON.stringify( this.pagina7)
  const pagina8 = JSON.stringify( this.pagina8)
  const pagina9 = JSON.stringify( this.pagina9)

    let formData = [
      {
        "tipo":"Coroinha",
        "pagina1": pagina1
      },
      {
        "tipo":"Coroinha",
        "pagina2": pagina2
      },
      {
        "tipo":"Coroinha",
        "pagina3": pagina3
      },
      {
        "tipo":"Coroinha",
        "pagina4": pagina4
      },
      {
        "tipo":"Coroinha",
        "pagina5": pagina5
      },
      {
        "tipo":"Coroinha",
        "pagina6": pagina6
      },
      {
        "tipo":"Coroinha",
        "pagina7": pagina7
      },
      {
        "tipo":"Coroinha",
        "pagina8": pagina8
      },
      {
        "tipo":"Coroinha",
        "pagina9": pagina9
      }
    ]

   
   this.service.gerarPdf(formData).subscribe((res)=>{
    this.response = res
    this.loading = false
    this.snackbar.openSnackBar(this.response.message,"");
    
    setTimeout(function() {
      window.location.reload();
    }, 3000); 
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
  const pagina3 = JSON.stringify( this.pagina3)
  const pagina4 = JSON.stringify( this.pagina4)
  const pagina5 = JSON.stringify( this.pagina5)
  const pagina6 = JSON.stringify( this.pagina6)
  const pagina7 = JSON.stringify( this.pagina7)
  const pagina8 = JSON.stringify( this.pagina8)
  const pagina9 = JSON.stringify( this.pagina9)
  const pagina10 = JSON.stringify( this.pagina10)

    let formData = [
      {
        "tipo":"Coroinha",
        "pagina1": pagina1
      },
      {
        "tipo":"Coroinha",
        "pagina2": pagina2
      },
      {
        "tipo":"Coroinha",
        "pagina3": pagina3
      },
      {
        "tipo":"Coroinha",
        "pagina4": pagina4
      },
      {
        "tipo":"Coroinha",
        "pagina5": pagina5
      },
      {
        "tipo":"Coroinha",
        "pagina6": pagina6
      },
      {
        "tipo":"Coroinha",
        "pagina7": pagina7
      },
      {
        "tipo":"Coroinha",
        "pagina8": pagina8
      },
      {
        "tipo":"Coroinha",
        "pagina9": pagina9
      },
      {
        "tipo":"Coroinha",
        "pagina10": pagina10
      }
    ]

   
   this.service.gerarPdf(formData).subscribe((res)=>{
    this.response = res
    this.loading = false
    this.snackbar.openSnackBar(this.response.message,"");
    
    setTimeout(function() {
      window.location.reload();
    }, 3000); 
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
