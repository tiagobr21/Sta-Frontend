import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { UploadAvisoComponent } from '../upload-aviso/upload-aviso.component';

@Component({
  selector: 'app-config-home-page',
  templateUrl: './config-home-page.component.html',
  styleUrls: ['./config-home-page.component.css']
})
export class ConfigHomePageComponent implements OnInit {

// http://localhost:3000
// https://back-sta.herokuapp.com


  sideBarOpen = false;
  readAvisos:any;
  baseurl:string = 'https://back-sta.herokuapp.com/files/';
  link:string = '';
  

  constructor( private service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {

    this.service.readAvisos().subscribe((res)=>{
       this.readAvisos = res;
     
    });
    
  }

  uploadImage(id:any){

    this.dialog.open(UploadAvisoComponent,{
      width:'600px',
      height:'130px',
      data:{id:id}
    })
   }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
