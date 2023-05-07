import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-escala-liturgia-pdf',
  templateUrl: './escala-liturgia-pdf.component.html',
  styleUrls: ['./escala-liturgia-pdf.component.css']
})
export class EscalaLiturgiaPdfComponent implements OnInit {

  
  // desenvolvimento: http://localhost:3000
  // prod: https://back-sta.herokuapp.com

  sideBarOpen = true;
  baselink:string = 'https://back-sta.herokuapp.com/pdfs/';
  link:string = ''
  response:any;
  loading:boolean = false
  responseDelete:any

  constructor(private service:AppService,private snackbar: SnackbarService) { }

  ngOnInit(): void {

    this.sideBarOpen = false;
    
    this.service.getPdfLiturgia().subscribe((res)=>{
      this.response = res;
      console.log(this.response)
    })
  }

  delete(id:any){
    this.loading =true
    this.service.deletePdfLiturgia(id).subscribe((res)=>{
      this.responseDelete = res
      this.snackbar.openSnackBar(this.responseDelete.message,"")
      this.loading = false
      this.service.getPdfLiturgia().subscribe((res)=>{
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
