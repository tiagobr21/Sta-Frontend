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
   listaMinistros:any
   listaCelebrantes:any
   listaComentaristas:any
   listaLeitores:any
   listaMusicos:any
   coroinhasVisib:boolean = false;
   acolitosVisib:boolean = false;
   ministrosVisib:boolean = false;
   celebrantesVisib:boolean = false;
   comentaristasVisib:boolean = false;
   leitoresVisib:boolean = false;
   musicosVisib:boolean = false;
   response:any;

   sideBarToggler(){
     this.sideBarOpen = !this.sideBarOpen;
   }

   ngOnInit(): void {
     
    this.sideBarOpen = false;

      this.service.select_coroinhaData().subscribe((res)=>{
        this.listaCoroinhas = res

      });

      this.service.select_acolitoData().subscribe((res)=>{
        this.listaAcolitos = res;
  
      }); 
      
      this.service.select_ministroData().subscribe((res)=>{
        this.listaMinistros = res;
  
      });

      this.service.select_celebranteData().subscribe((res)=>{
        this.listaCelebrantes = res;
      });

      this.service.select_comentaristasData().subscribe((res)=>{
        this.listaComentaristas = res;
      });

      this.service.select_leitoresData().subscribe((res)=>{
        this.listaLeitores = res;
      });

      this.service.select_musicosData().subscribe((res)=>{
        this.listaMusicos = res;
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

  deleteMinistro(id:any){
  
    this.service.deleteMinistro(id).subscribe((res)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,""); 
       this.service.select_ministroData().subscribe((res)=>{
        this.listaMinistros = res;
     });   
    }) 
  }

  deleteCelebrante(id:any){
  
    this.service.deleteCelebrante(id).subscribe((res)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,""); 
       this.service.select_celebranteData().subscribe((res)=>{
        this.listaCelebrantes = res;
     });   
    }) 

  }

  deleteComentarista(id:any){
  
    this.service.deleteComentarista(id).subscribe((res)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,""); 
       this.service.select_celebranteData().subscribe((res)=>{
        this.listaCelebrantes = res;
     });   
    }) 

  }

  
  deleteLeitores(id:any){
  
    this.service.deleteLeitores(id).subscribe((res)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,""); 
       this.service.select_celebranteData().subscribe((res)=>{
        this.listaCelebrantes = res;
     });   
    }) 

  }

    
  deleteMusicos(id:any){
  
    this.service.deleteMusicos(id).subscribe((res)=>{
       console.log(res);
       this.response = res;
       this.snackbar.openSnackBar(this.response.message,""); 
       this.service.select_celebranteData().subscribe((res)=>{
        this.listaCelebrantes = res;
     });   
    }) 

  }

   opencriarUsuario(){
    const dialogConfig = this.dialog.open(CriaUsuarioComponent,{
      width:'550px',
      height:'35%'
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

  onoffMinistros(){
    this.ministrosVisib = !this.ministrosVisib;
  }

  onoffCelebrantes(){
    this.celebrantesVisib = !this.celebrantesVisib;
  }

  onoffComentaristas(){
    this.comentaristasVisib = !this.comentaristasVisib;
  }

  onoffLeitores(){
    this.leitoresVisib = !this.leitoresVisib;
  }

  onoffMusicos(){
    this.musicosVisib = !this.musicosVisib;
  }

  refresh(){
 
      window.location.reload();
   
  }
}
