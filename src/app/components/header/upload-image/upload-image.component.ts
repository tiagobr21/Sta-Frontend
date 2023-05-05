import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  
  iduser:any;
  file:any;
  response:any;
  loading:boolean = false

  constructor(private service:AppService,
    private dialogConfig:MatDialogRef<UploadImageComponent>,
    private snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.iduser = localStorage.getItem("iduser");
  }

  inputFileChange(event:any){
    this.loading = true

    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const formData = new FormData();
      formData.append('file',this.file)
    
      
    this.service.upload(formData,this.iduser).subscribe((res)=>{
        this.response = res;
        this.loading = false;
        this.snackbar.openSnackBar(this.response.message,"");
    },(error)=>{
      if(error.error?.message){
        this.response = error.error?.message
      }else{
        this.response = GlobalConstants.uploadError
      }
      this.snackbar.openSnackBar(this.response,GlobalConstants.error)
    })   

    }
  }

  close(){
    this.dialogConfig.close()
  }

}

 