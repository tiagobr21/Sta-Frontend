import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-cria-usuario',
  templateUrl: './cria-usuario.component.html',
  styleUrls: ['./cria-usuario.component.css']
})
export class CriaUsuarioComponent implements OnInit {
  
  option:boolean =false;
  categoria:any
  response:any


  constructor(private service:AppService,
    private dialog:MatDialog,
    private snackbar: SnackbarService,
    private dialogRef:MatDialogRef<CriaUsuarioComponent>) { }

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

  criarCoroinha(){
       this.service.createCoroinha(this.userForm.value).subscribe((res:any)=>{
          console.log(res);
          this.response = res;
          this.snackbar.openSnackBar(this.response.message,""); 
    })  
  }

  criarAcolito(){
    this.service.createAcolito(this.userForm.value).subscribe((res:any)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,"");
      
 })  
}

  

  close(){
    this.dialogRef.close();
  }
}
