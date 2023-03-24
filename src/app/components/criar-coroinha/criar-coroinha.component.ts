import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-criar-coroinha',
  templateUrl: './criar-coroinha.component.html',
  styleUrls: ['./criar-coroinha.component.css']
})
export class CriarCoroinhaComponent implements OnInit {
  @ViewChild('teste') teste:any;
  @ViewChild('mes') mes:any;
   userForm: FormGroup;
   getparamid:any;
   select_coroinhaData:any;
   select_acolitoData:any;
   select_missaData:any;
   resID:any; 
   response:any;
   loading:boolean = false;
   contadoracolitos:number = 1;
   numeroacolitos:any = ['1'];
   contadorcoroinhas:number = 1;
   numerocoroinhas:any = ['1'];
   title = 'app-sta';
   sideBarOpen = true;
   acolitos:any = [];
   coroinhas:any = [];
   test:any

   constructor(private service: AppService,
    private route:ActivatedRoute,
    private router:Router,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private fb:FormBuilder) { 
      this.userForm = this.fb.group({
        missa: ['',Validators.required],
        data: ['',Validators.required],
        acolitos: this.fb.array([this.carregarAcolitos()]),
        coroinhas: this.fb.array([this.carregarCoroinhas()])
      })
    }

    ngOnInit() {

      this.getparamid = this.route.snapshot.paramMap.get('id');
      if(this.getparamid){
 
         this.service.getSingleData(this.getparamid).subscribe((res)=>{
             this.resID = res;
         
     

             this.coroinhas = JSON.parse(this.resID[0].coroinha)
             this.acolitos = JSON.parse(this.resID[0].acolito)
             
           this.userForm.patchValue({
             missa:res[0].missa,
             data:res[0].data,
        
           });
         
         });
     }
         this.service.select_coroinhaData().subscribe((res)=>{
         this.select_coroinhaData = res;  
     }); 
 
         this.service.select_acolitoData().subscribe((res)=>{
         this.select_acolitoData = res;
     });
         
         this.service.select_missaData().subscribe((res)=>{
         this.select_missaData = res;
        });
 
   }

 

    carregarAcolitos():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    carregarCoroinhas():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    getAcolitoControls() {
      return (this.userForm.get('acolitos') as FormArray).controls;
    }

    getCoroinhaControls() {
      return (this.userForm.get('coroinhas') as FormArray).controls;
    }
   

   addAcolito(){
   const acolitos: FormArray = this.userForm.get('acolitos') as FormArray
   acolitos.push(this.carregarAcolitos())

 
  }

  addCorinha(){
    const coroinhas: FormArray = this.userForm.get('coroinhas') as FormArray
    coroinhas.push(this.carregarCoroinhas())
  }
 
   sideBarToggler(){
     this.sideBarOpen = !this.sideBarOpen;
   }



  
 
  
  userSubmit(){
   
    this.loading = true

    let data = this.userForm.value.data;

    let ano = data?.substring(0,4);
    let mes = data?.substring(5,7); 
   
    if(mes == '01'){
      mes = 'Janeiro';
    }else if(mes == '02'){
      mes = 'Fevereiro';
    }else if(mes == '03'){
      mes = 'Março';
    }else if(mes == '04'){
      mes = 'Abril';
    }else if(mes == '05'){
      mes = 'Maio';
    }else if(mes == '06'){
      mes = 'Junho';
    }else if(mes == '07'){
      mes = 'Julho';
    }else if(mes == '08'){
      mes = 'Agosto';
    }else if(mes == '09'){
      mes = 'Setembro';
    }else if(mes == '10'){
      mes = 'Outubro';
    }else if(mes == '11'){
      mes = 'Novembro';
    }else if(mes == '12'){
      mes = 'Dezembro';
    }

    const acolitos = JSON.stringify( this.userForm.value.acolitos)
    const coroinhas = JSON.stringify( this.userForm.value.coroinhas) 
  

     let formData = {
      missa: this.userForm.value.missa,
      mes: mes,
      hora:'',
      dia:'',
      ano: ano,
      data: this.userForm.value.data,
      comunidade:'',
      coroinha: coroinhas,
      acolito: acolitos,
    } 


       this.service.createData(formData).subscribe((res)=>{
          console.log(res);
          this.loading = false
          this.response = res;
          this.snackbar.openSnackBar(this.response.message,"");
          this.userForm.reset();

      },(error)=>{
        this.response = GlobalConstants.genericError

        this.snackbar.openSnackBar(this.response,GlobalConstants.error);
      });
     
  }

  userUpdate(){

  
     console.log(this.userForm.value,'updateform');
     return

     if(this.userForm.valid){
        this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdate');
          this.response = res;      
          this.snackbar.openSnackBar(this.response.message,"");
          this.router.navigate(['/consultar-coroinha']);
        },(error)=>{
          this.response = GlobalConstants.genericError

          this.snackbar.openSnackBar(this.response,GlobalConstants.error);
        });
   
    }else{
      this.snackbar.openSnackBar('Algo deu errado',GlobalConstants.error);
     }
   }  

  
}
