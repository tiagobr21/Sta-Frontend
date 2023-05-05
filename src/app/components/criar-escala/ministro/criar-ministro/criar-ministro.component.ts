import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-criar-ministro',
  templateUrl: './criar-ministro.component.html',
  styleUrls: ['./criar-ministro.component.css']
})
export class CriarMinistroComponent implements OnInit {
  @ViewChild('teste') teste:any;
  @ViewChild('mes') mes:any;
   userForm: FormGroup;
   getparamid:any;
   select_ministroData:any;
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
   ministros:any = [];
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
        ministros: this.fb.array([this.carregarMinistros()]),

      })
    }

    ngOnInit() {

      this.sideBarOpen = false;

      this.getparamid = this.route.snapshot.paramMap.get('id');
      if(this.getparamid){
 
         this.service.getSingleDataMinistro(this.getparamid).subscribe((res)=>{
             this.resID = res;

             console.log(this.resID)

             this.ministros = JSON.parse(this.resID[0].ministros)


             
           this.userForm.patchValue({
             missa:res[0].missa,
             data:res[0].data,
        
           });
         
         });
     }
 
         this.service.select_ministroData().subscribe((res)=>{
         this.select_ministroData = res;
     });
         
         this.service.select_missaData().subscribe((res)=>{
         this.select_missaData = res;
        });
 
   }
 

    carregarMinistros():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    getMinistrosControls() {
      return (this.userForm.get('ministros') as FormArray).controls;
    }


   addMinistro(){
   const ministros: FormArray = this.userForm.get('ministros') as FormArray
   ministros.push(this.carregarMinistros())
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

    // console.log(this.userForm.value.ministros.length)

    if(this.userForm.value.ministros.length>5 || this.userForm.value.ministros.length>5){
      this.snackbar.openSnackBar(GlobalConstants.limitagente,GlobalConstants.error)
      this.loading = false
    }else{


    const ministros = JSON.stringify( this.userForm.value.ministros)



     let formData = {
      missa: this.userForm.value.missa,
      mes: mes,
      hora:'',
      dia:'',
      ano: ano,
      data: this.userForm.value.data,
      comunidade:'',
      ministro: ministros,
    } 

    console.log(formData)

       this.service.createDataMin(formData).subscribe((res)=>{
          console.log('response=> '+res);
          this.loading = false
          this.response = res;
          this.snackbar.openSnackBar(this.response.message,"");
          this.userForm.reset();

      },(error)=>{
        this.response = GlobalConstants.genericError

        this.snackbar.openSnackBar(this.response,GlobalConstants.error);
      });
    }
  }

  userUpdate(){


     const ministros = JSON.stringify( this.userForm.value.ministros)

     

     let formData = {
      missa: this.userForm.value.missa,
      data: this.userForm.value.data,
      ministros: ministros,
   
    } 

   

        this.service.updateDataMinistro(formData,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdate');
          this.response = res;      
          this.snackbar.openSnackBar(this.response.message,"");
          this.router.navigate(['/consultar-coroinha']);
        },(error)=>{
          this.response = GlobalConstants.genericError
          this.snackbar.openSnackBar(this.response,GlobalConstants.error);
        });
   
    }
    
  

}
