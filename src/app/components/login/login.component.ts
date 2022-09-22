import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private service: AppService,private router:Router) { }

  ngOnInit(): void {
  }
  
  loginForm = new FormGroup({
    'email':new FormControl('',Validators.required),
    'senha':new FormControl('',Validators.required)
  })
  

  ngSubmit(){
   if(this.loginForm.valid){
     this.service.login(this.loginForm.value).subscribe((res)=>{
         console.log('response =>', res.data);
     })
   }
  }
}
