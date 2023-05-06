import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-criar-liturgia',
  templateUrl: './criar-liturgia.component.html',
  styleUrls: ['./criar-liturgia.component.css']
})
export class CriarLiturgiaComponent implements OnInit {

  @ViewChild('teste') teste:any;
  @ViewChild('mes') mes:any;
   userForm: FormGroup;
   getparamid:any;
   select_comentaristasData:any;
   select_leitoresData:any;
   select_musicosData:any;
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
        comentarista: this.fb.array([this.carregarComentaristas()]),
        leitor: this.fb.array([this.carregarLeitores()]),
        musico: this.fb.array([this.carregarMusicos()])
      })
    }

    ngOnInit() {

      this.sideBarOpen = false;

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
         this.service.select_comentaristasData().subscribe((res)=>{
         this.select_comentaristasData = res;  
     }); 
 
         this.service.select_leitoresData().subscribe((res)=>{
         this.select_leitoresData = res;
     });

        this.service.select_musicosData().subscribe((res)=>{
        this.select_musicosData = res;
     });
         
         this.service.select_missaData().subscribe((res)=>{
         this.select_missaData = res;
        });

       
 
   }



    carregarComentaristas():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    carregarLeitores():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    carregarMusicos():FormGroup{
      return this.fb.group({
        nome:['',Validators.required]
      })
    }

    getComentaristasControls() {
      return (this.userForm.get('comentarista') as FormArray).controls;
    }

    getLeitoresControls() {
      return (this.userForm.get('leitor') as FormArray).controls;
    }

    getMusicosControls() {
      return (this.userForm.get('musico') as FormArray).controls;
    }
   

   addComentaristas(){
   const comentaristas: FormArray = this.userForm.get('comentarista') as FormArray
   comentaristas.push(this.carregarComentaristas())

  }

  addLeitores(){
    const leitores: FormArray = this.userForm.get('leitor') as FormArray
    leitores.push(this.carregarLeitores())
  }

  addMusicos(){
    const musicos: FormArray = this.userForm.get('musico') as FormArray
    musicos.push(this.carregarMusicos())
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

   

    if(this.userForm.value.comentarista.length>5 || this.userForm.value.leitor.length>5 || this.userForm.value.musico.length>5){
      this.snackbar.openSnackBar(GlobalConstants.limitagente,GlobalConstants.error)
      this.loading = false
    }else{


    const comentaristas = JSON.stringify( this.userForm.value.comentarista)
    const leitores = JSON.stringify( this.userForm.value.leitor) 
    const musicos = JSON.stringify( this.userForm.value.musico) 


     let formData = {
      missa: this.userForm.value.missa,
      mes: mes,
      hora:'',
      dia:'',
      ano: ano,
      data: this.userForm.value.data,
      comunidade:'',
      comentarista: comentaristas,
      leitores: leitores,
      musicos: musicos
    } 
  
 

       this.service.createDataLit(formData).subscribe((res)=>{
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
  }

  userUpdate(){



    const acolitos = JSON.stringify( this.userForm.value.acolito)
    const coroinhas = JSON.stringify( this.userForm.value.coroinha) 

      
  
     let formData = {
      missa: this.userForm.value.missa,
      data: this.userForm.value.data,
      coroinha: coroinhas,
      acolito: acolitos,
    } 

    console.log(formData)


        this.service.updateData(formData,this.getparamid).subscribe((res)=>{
          this.response = res;      
          console.log(this.response)
          this.snackbar.openSnackBar(this.response.message,"");
          this.router.navigate(['/consultar-coroinha']);
        },(error)=>{
          this.response = GlobalConstants.genericError

          this.snackbar.openSnackBar(this.response,GlobalConstants.error);
        });
   
    }

}
