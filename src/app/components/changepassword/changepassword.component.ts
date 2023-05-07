import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

    changepassordForm:any = FormGroup;
    showpassword:boolean = false;
    sideBarOpen = true;
    response:any;
    loading:boolean = false

  constructor(private fb:FormBuilder,
    private service:AppService,
    private snackbar:SnackbarService ) { }

  ngOnInit(): void {

    this.sideBarOpen = false;

    this.changepassordForm = this.fb.group({
      oldPassword:[null,[Validators.required]],
      newPassword:[null,[Validators.required]]
    })
  }

  ngSubmit(){
    this.loading = true
    let Formdata = this.changepassordForm.value
    let data = {
      oldPassword: Formdata.oldPassword,
      newPassword: Formdata.newPassword
    }
    
    this.service.mudarSenha(data).subscribe((res:any)=>{
       console.log(res);
       this.response = res;
       this.loading = false
       this.snackbar.openSnackBar(this.response.message,"")
    },(error)=>{
      if(error.error?.message){
        this.response = error.error?.message;
      }else{
        this.response = GlobalConstants.genericError
      }

      this.snackbar.openSnackBar(this.response,GlobalConstants.error);
    })

  }

 
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }


  changeView(){
    this.showpassword = !this.showpassword 

  }

}
