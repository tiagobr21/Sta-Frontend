import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-escala-coroinha-pdf',
  templateUrl: './escala-coroinha-pdf.component.html',
  styleUrls: ['./escala-coroinha-pdf.component.css']
})
export class EscalaCoroinhaPdfComponent implements OnInit {

  // desenvolvimento: http://localhost:3000
  // prod: https://back-sta.herokuapp.com

  sideBarOpen = true;
  baselink:string = 'http://localhost:3000/pdfs/';
  link:string = ''
  response:any;
  loading:boolean = false
  responseDelete:any

  constructor(private service:AppService,private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.service.getPdf().subscribe((res)=>{
      this.response = res;
      console.log(this.response)
    })
  }

  delete(id:any){
    this.loading =true
    this.service.deletePdf(id).subscribe((res)=>{
      this.responseDelete = res
      this.snackbar.openSnackBar(this.responseDelete.message,"")
      this.loading = false
      this.service.getPdf().subscribe((res)=>{
        this.response = res;
      })
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
}
