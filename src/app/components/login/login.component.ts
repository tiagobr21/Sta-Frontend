import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/user.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:any = FormGroup;
  response:any;
  user:any;
  role:any;
  filename:any
  iduser:any
  token:any;

  constructor(private fb:FormBuilder,
    private service: AppService,
    private snackbar:SnackbarService,
    private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[null,[Validators.required]],
      password: [null,[Validators.required]]
    })
  }

  forgotPassword(){
   const dialogConfig = new MatDialogConfig()
   dialogConfig.width = "550px";
   this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

  ngSubmit(){
   let formData = this.loginForm.value;
   let data = {
    email: formData.email,
    password: formData.password
   }
    this.service.login(data).subscribe((res:any)=>{
      this.response = res;
      console.log(this.response)
      this.role = this.response.role;
      this.filename = this.response.filename;
      this.user = this.response.user;
      this.token = this.response.token;
      this.iduser = this.response.id;
      this.snackbar.openSnackBar(this.response.message,"");
      localStorage.setItem('filename',this.filename)
      localStorage.setItem('role',this.role)
      localStorage.setItem('user',this.user);
      localStorage.setItem('iduser',this.iduser);
      localStorage.setItem('token',this.token);
      this.router.navigate(['/home']);

    },(error)=>{
       if(error.error?.message){
         this.response = error.error?.message
       }else{
         this.response = GlobalConstants.genericError;
       } 

       this.snackbar.openSnackBar(this.response,GlobalConstants.error)
   
    })
  }

  
}
