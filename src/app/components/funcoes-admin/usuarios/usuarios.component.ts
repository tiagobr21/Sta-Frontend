import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

   
  constructor(private service: AppService,private router:ActivatedRoute,private dialog: MatDialog) { }
 
   sideBarOpen = true;
   listaCoroinhas:any
   listaAcolitos:any
   coroinhasVisib:boolean = false;
   acolitosVisib:boolean = false;

   sideBarToggler(){
     this.sideBarOpen = !this.sideBarOpen;
   }

   ngOnInit(): void {
      this.service.select_coroinhaData().subscribe((res)=>{
        this.listaCoroinhas = res
        console.log(this.listaCoroinhas);
      })

      this.service.select_acolitoData().subscribe((res)=>{
        this.listaAcolitos = res;
        console.log(this.listaAcolitos);
      })
   }
    
   onoffCoroinhas(){
     this.coroinhasVisib = !this.coroinhasVisib;
   }


   onoffAcolitos(){
    this.acolitosVisib = !this.acolitosVisib;
  }
}
