import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { CadastroComponent } from '../../cadastro/cadastro.component';


@Component({
  selector: 'app-home-inicial',
  templateUrl: './home-inicial.component.html',
  styleUrls: ['./home-inicial.component.css']
})
export class HomeInicialComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

  user:any
  filename:any;
  iduser:any;
  response:any;
  deleteFoto:any;
  loading:any;
  baseurl:string = 'https://back-sta.herokuapp.com/files/';
  link:string = '';

  constructor(private dialog:MatDialog,
    private router:Router,
    private service: AppService,
    private snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.filename = localStorage.getItem("filename");
    this.iduser = localStorage.getItem("iduser");

    if( this.filename != null){
      this.link = this.baseurl + this.filename;
    }
 

  }

  deleteImage(){
   this.loading = true
   console.log(this.iduser)
   this.service.deleteImage(this.iduser).subscribe((res)=>{
      this.deleteFoto =  res;
      this.loading = false;
      this.snackbar.openSnackBar(this.deleteFoto.message,"");
   },(error)=>{
    if(error.error?.message){
      this.deleteFoto = error.error?.message;
    }else{
      this.deleteFoto = GlobalConstants.genericError;
    }
    this.snackbar.openSnackBar(this.deleteFoto,GlobalConstants.error);
   })
  }
  
 cadastrarModal(){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.width = "100%";
   dialogConfig.height = "100%";
   this.dialog.open(CadastroComponent,dialogConfig);

 }


 logout(){
  this.router.navigate(['/']);
  localStorage.clear();

}

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
