import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  signupForm:any = FormGroup;
  responseMessage:any;

  constructor(private formBuider:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuider.group({
      name:[null,[Validators.required]]
    })
  }

}
