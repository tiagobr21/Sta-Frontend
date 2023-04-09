import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// http://localhost:3000
// https://back-sta.herokuapp.com

export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

  user:any
  filename:any;
  iduser:any;
  response:any;
  deleteFoto:any;
  loading:any;
  baseurl:string = 'http://localhost:3000/files/';
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
 

/*       this.service.getImage(this.iduser).subscribe((res)=>{
        this.response = res;
        
        this.filename = this.response[0].filename;
        this.link = this.baseurl + this.filename
        
     }) */
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

 uploadImage(){
  this.dialog.open(UploadImageComponent,{
    width:'600px',
    height:'130px'
  })
 }

 logout(){
  this.router.navigate(['/login']);
  localStorage.clear();

}

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
