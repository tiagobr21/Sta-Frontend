
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdate:any = FormGroup;
  response:any;
  user:any;
  status:any
  loading:boolean = false;

  constructor(private fb:FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public id: {id: any},
    private service:AppService,
    private snackbar:SnackbarService,
    private dialogRef:MatDialogRef<UpdateComponent>) { }


  ngOnInit(): void {
   
    this.service.obterById(this.id).subscribe((res:any)=>{
      this.user = res;
<<<<<<< HEAD
=======
    
      if(this.user[0].status == "true"){
        this.user[0].status = 'ativo'
      }

      if(this.user[0].status == "false"){
        this.user[0].status = 'desativo'
      }
>>>>>>> 9837d96b3a8dbc641958f83d0522e1144d2ac666
  
    })

     this.formUpdate = this.fb.group({
        name: [null,[Validators.required]],
        email: [null,[Validators.required]],
        password: [null,[Validators.required]],
        status: [null,[Validators.required]],
        role: [null,[Validators.required]]
     })
  }

  close(){
    this.dialogRef.close()
  }

  uptadeUser(){
    this.loading = true;
<<<<<<< HEAD
    console.log(this.formUpdate.value)    
    let id = this.id
    let Formdata = this.formUpdate.value
=======

    
  
    let id = this.id
    let Formdata = this.formUpdate.value

    if(Formdata.status=="desativo"){
      Formdata.status = "false";
    }
    
    if(Formdata.status == "ativo"){
      Formdata.status = "true";
    }

>>>>>>> 9837d96b3a8dbc641958f83d0522e1144d2ac666
    let data = {
      name: Formdata.name,
      email: Formdata.email,
      password: Formdata.password,
      status: Formdata.status,
      role: Formdata.role
    }
       this.service.uptade(data,id).subscribe((res)=>{
          this.response = res;
          this.loading = false;
          this.snackbar.openSnackBar(this.response.message,"");
       },(error)=>{
         if(error.error?.message){
           this.response = error.error?.message;
         }else{
           this.response = GlobalConstants.genericError
         }

          this.snackbar.openSnackBar(this.response,GlobalConstants.error);
       })
    }
}
