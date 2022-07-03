import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-criar-escala',
  templateUrl: './criar-escala.component.html',
  styleUrls: ['./criar-escala.component.css']
})
export class CriarEscalaComponent implements OnInit {


  constructor(private service: AppService,private router:ActivatedRoute) { }
 
   getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id'),'getid';
     this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res);
    }); 
  }

  userForm = new FormGroup({
    'missa':new FormControl('',Validators.required),
    'data':new FormControl('',Validators.required),
    'dia':new FormControl('',Validators.required),
    'hora':new FormControl('',Validators.required),
    'comunidade':new FormControl('',Validators.required),
    'acolito':new FormControl('',Validators.required),
    'coroinha':new FormControl('',Validators.required)
  });
  

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
          console.log(res,'res==>');
          this.userForm.reset();
      });
    }
  }

  userUpdate(){

  }
 
}
