import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
@Component({
  selector: 'app-criar-celebrante',
  templateUrl: './criar-celebrante.component.html',
  styleUrls: ['./criar-celebrante.component.css']
})
export class CriarCelebranteComponent implements OnInit {

  @ViewChild('teste') teste:any;
  @ViewChild('mes') mes:any;
   userForm: FormGroup;
   getparamid:any;
   select_celebranteData:any;
   select_missaData:any;
   resID:any; 
   response:any;
   loading:boolean = false;
   title = 'app-sta';
   sideBarOpen = true;
   celebrantes:any = [];
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
        celebrantes: this.fb.array([this.carregarcelebrantes()]),

      })
    }

    ngOnInit() {

      this.sideBarOpen = false;

      this.getparamid = this.route.snapshot.paramMap.get('id');
      if(this.getparamid){
 
         this.service.getSingleDataCelebrante(this.getparamid).subscribe((res)=>{
             this.resID = res;

             console.log(this.resID)

             this.celebrantes = JSON.parse(this.resID[0].celebrantes)


             
           this.userForm.patchValue({
             missa:res[0].missa,
             data:res[0].data,
        
           });
         
         });
     }
 
         this.service.select_celebranteData().subscribe((res)=>{
         this.select_celebranteData = res;
         console.log(res)
     });
         
         this.service.select_missaData().subscribe((res)=>{
         this.select_missaData = res;
        });
 
   }
 
    carregarcelebrantes():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    getcelebrantesControls() {
      return (this.userForm.get('celebrantes') as FormArray).controls;
    }


   addCelebrante(){
   const celebrantes: FormArray = this.userForm.get('celebrantes') as FormArray
   celebrantes.push(this.carregarcelebrantes())
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

    // console.log(this.userForm.value.celebrantes.length)

    if(this.userForm.value.celebrantes.length>5 || this.userForm.value.celebrantes.length>5){
      this.snackbar.openSnackBar(GlobalConstants.limitagente,GlobalConstants.error)
      this.loading = false
    }else{


    const celebrantes = JSON.stringify( this.userForm.value.celebrantes)



     let formData = {
      missa: this.userForm.value.missa,
      mes: mes,
      hora:'',
      dia:'',
      ano: ano,
      data: this.userForm.value.data,
      comunidade:'',
      celebrante: celebrantes,
    } 

    console.log(formData)

       this.service.createDataCel(formData).subscribe((res)=>{
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


     const celebrantes = JSON.stringify( this.userForm.value.celebrantes)

     

     let formData = {
      missa: this.userForm.value.missa,
      data: this.userForm.value.data,
      celebrante: celebrantes,
   
    } 

    console.log(formData)

        this.service.updateDataCelebrante(formData,this.getparamid).subscribe((res)=>{
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
