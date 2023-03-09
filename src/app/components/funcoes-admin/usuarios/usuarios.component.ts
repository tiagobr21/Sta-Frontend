import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { CriaUsuarioComponent } from './cria-usuario/cria-usuario.component';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

   
  constructor(private service: AppService,
    private router:ActivatedRoute,
    private snackbar: SnackbarService,
    private dialog: MatDialog) { }
 
   sideBarOpen = true;
   listaCoroinhas:any
   listaAcolitos:any
   coroinhasVisib:boolean = false;
   acolitosVisib:boolean = false;
   response:any;

   sideBarToggler(){
     this.sideBarOpen = !this.sideBarOpen;
   }

   ngOnInit(): void {
      this.service.select_coroinhaData().subscribe((res)=>{
        this.listaCoroinhas = res
        console.log(this.listaCoroinhas);
      });

      this.service.select_acolitoData().subscribe((res)=>{
        this.listaAcolitos = res;
        console.log(this.listaAcolitos);
      }); 
   }

   deleteCoroinha(id:any){
     this.service.deleteCoroinha(id).subscribe((res)=>{
        this.response = res;
        this.snackbar.openSnackBar(this.response.message,"");   
        this.service.select_coroinhaData().subscribe((res)=>{
          this.listaCoroinhas = res;
      });   
     }) 
   }

   deleteAcolito(id:any){
    this.service.deleteAcolito(id).subscribe((res)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,""); 
       this.service.select_acolitoData().subscribe((res)=>{
        this.listaAcolitos = res;
     });   
    }) 
  }

   opencriarUsuario(){
    const dialogConfig = this.dialog.open(CriaUsuarioComponent,{
      width:'550px',
      height:'30%'
    })
   }

   
   openatualizarUsuario(id:any){
     const dialogConfig = this.dialog.open(AtualizaUsuarioComponent,{
      width:'550px',
      height:'30%',
      data:{id:id}
    })
   }
    
   onoffCoroinhas(){
     this.coroinhasVisib = !this.coroinhasVisib;
   }


   onoffAcolitos(){
    this.acolitosVisib = !this.acolitosVisib;
  }

  refresh(){
 
      window.location.reload();
   
  }
}
