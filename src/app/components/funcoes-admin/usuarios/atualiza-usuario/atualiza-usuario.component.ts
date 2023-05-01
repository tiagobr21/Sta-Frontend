import { Component, OnInit,Inject} from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';


@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {
 
  option:boolean =false;
  categoria:any;
  response:any;


  constructor(private service:AppService,
    private snackbar:SnackbarService,
    private dialog:MatDialog,
    private dialogRef:MatDialogRef<AtualizaUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string}) { }

  ngOnInit(): void {
 
  }

  selectOption = new FormGroup({
    'categoria':new FormControl('',Validators.required)
  })

  userForm = new FormGroup({
    'nome': new FormControl('',Validators.required)
  });
  
  selectCategoria(){
    this.option = true;
     this.categoria = this.selectOption.value['categoria'];
   
  }

  atualizarCoroinha(){
      this.service.updateCoroinha(this.userForm.value,this.data.id).subscribe((res:any)=>{
          console.log(res);
          this.response = res;
          this.snackbar.openSnackBar(this.response.message,"");
      
    },(error)=>{
      this.response ='Você não tem permissão para executar está ação' 

       this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized);

    })    
  }
  
  atualizarAcolito(){
    this.service.updateAcolito(this.userForm.value,this.data.id).subscribe((res:any)=>{
        console.log(res);
        this.response = res;
        this.snackbar.openSnackBar(this.response.message,"");
    
  },(error)=>{

    if(error.error?.message){
      this.response = error.error?.message
    }else{
      this.response = GlobalConstants.unauthroized;
    } 

     this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized)})    
}

atualizarMinistro(){
  console.log(this.userForm.value)
  this.service.updateMinistros(this.userForm.value,this.data.id).subscribe((res:any)=>{
      console.log(res);
      this.response = res;
      this.snackbar.openSnackBar(this.response.message,"");
  
},(error)=>{

  if(error.error?.message){
    this.response = error.error?.message
  }else{
    this.response = GlobalConstants.unauthroized;
  } 

   this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized)})    
}

atualizarCelebrante(){
  console.log(this.userForm.value)
  this.service.updateCelebrante(this.userForm.value,this.data.id).subscribe((res:any)=>{
      console.log(res);
      this.response = res;
      this.snackbar.openSnackBar(this.response.message,"");
  
},(error)=>{

  if(error.error?.message){
    this.response = error.error?.message
  }else{
    this.response = GlobalConstants.unauthroized;
  } 

   this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized)})    
}

atualizarComentarista(){
  console.log(this.userForm.value)
  this.service.updateComentarista(this.userForm.value,this.data.id).subscribe((res:any)=>{
      console.log(res);
      this.response = res;
      this.snackbar.openSnackBar(this.response.message,"");
  
},(error)=>{

  if(error.error?.message){
    this.response = error.error?.message
  }else{
    this.response = GlobalConstants.unauthroized;
  } 

   this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized)})    
}

atualizarLeitores(){
  console.log(this.userForm.value)
  this.service.updateLeitores(this.userForm.value,this.data.id).subscribe((res:any)=>{
      console.log(res);
      this.response = res;
      this.snackbar.openSnackBar(this.response.message,"");
  
},(error)=>{

  if(error.error?.message){
    this.response = error.error?.message
  }else{
    this.response = GlobalConstants.unauthroized;
  } 

   this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized)})    
}

atualizarMusicos(){
  console.log(this.userForm.value)
  this.service.updateLeitores(this.userForm.value,this.data.id).subscribe((res:any)=>{
      console.log(res);
      this.response = res;
      this.snackbar.openSnackBar(this.response.message,"");
  
},(error)=>{

  if(error.error?.message){
    this.response = error.error?.message
  }else{
    this.response = GlobalConstants.unauthroized;
  } 

   this.snackbar.openSnackBar(this.response,GlobalConstants.unauthroized)})    
}

  close(){
    this.dialogRef.close();
  }

}
