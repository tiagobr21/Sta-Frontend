import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPasswordForm:any = FormGroup;


  constructor(private service:AppService, private fb:FormBuilder, private dialog:MatDialog, private dialogRef:MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email:[null,[Validators.required]]
    })
  }

  ngSubmit(){
    var formData = this.forgotPasswordForm.value;
    var data = {
      email: formData.email
    }
    this.service.esqueceuSenha(data).subscribe((res)=>{
      console.log(res);
    })
  }

  close(){
    this.dialogRef.close()
  }

}
