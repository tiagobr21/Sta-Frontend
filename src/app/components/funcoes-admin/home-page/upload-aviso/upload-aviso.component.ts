import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/app.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-upload-aviso',
  templateUrl: './upload-aviso.component.html',
  styleUrls: ['./upload-aviso.component.css']
})
export class UploadAvisoComponent implements OnInit {

  iduser:any;
  file:any;
  response:any;
  loading:boolean = false
  id:string = ''

  constructor(private service:AppService,
    private dialogConfig:MatDialogRef<UploadAvisoComponent>,
    private snackbar:SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string}) { }

  ngOnInit(): void {
     this.id =  this.data.id;
     console.log(this.id)
  }

  inputFileChange(event:any){
    this.loading = true

    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const formData = new FormData();
      formData.append('file',this.file)
    
      
    this.service.uploadAvisos(formData,this.id).subscribe((res)=>{
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
