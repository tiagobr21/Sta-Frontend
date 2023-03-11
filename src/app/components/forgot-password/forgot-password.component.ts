import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPasswordForm:any = FormGroup;
  response:any;
  loading:boolean = false
  


  constructor(private service:AppService,
     private fb:FormBuilder,
     private snackbar: SnackbarService,
     private dialog:MatDialog,
     private dialogRef:MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email:[null,[Validators.required]]
    })
  }

  ngSubmit(){
    this.loading = true;
    console.log(this.loading)
    var formData = this.forgotPasswordForm.value;
    var data = {
      email: formData.email
    }
    console.log(data);
    this.service.esqueceuSenha(data).subscribe((res)=>{
      this.response = res;
      this.loading = false;
      console.log(this.response);
      this.snackbar.openSnackBar(this.response.message,"")
    },(error)=>{
      if(error.error?.message){
        this.response = error.error?.message
      }else{
        this.response = GlobalConstants.genericError;
      } 

      this.snackbar.openSnackBar(this.response,GlobalConstants.error)
    })
  }

  close(){
    this.dialogRef.close();
  }

}
