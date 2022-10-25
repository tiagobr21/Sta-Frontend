import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/user.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:any = FormGroup;

  constructor(private fb:FormBuilder,private service: AppService,private router:Router,private dialog:MatDialog) { }

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
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/home'])
    },(error)=>{
      alert('Senha Incorreta, tente novamente !!!');
      setTimeout(function(){ location.reload(); }, 5000);
    })
  }
}
