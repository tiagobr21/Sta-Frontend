import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { MsgSucessComponent } from '../msg-sucess/msg-sucess.component';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { AtualizarEscalaComponent } from '../msg-sucess/atualizar-escala.component';

@Component({
  selector: 'app-criar-coroinha',
  templateUrl: './criar-coroinha.component.html',
  styleUrls: ['./criar-coroinha.component.css']
})
export class CriarCoroinhaComponent implements OnInit {
  @ViewChild('teste') teste:any;
  @ViewChild('mes') mes:any;
   
  constructor(private service: AppService,private router:ActivatedRoute,private dialog: MatDialog) { }
 
   getparamid:any;
   select_coroinhaData:any;
   select_acolitoData:any;
   select_missaData:any;
   resID:any; 

   title = 'app-sta';
   sideBarOpen = true;

 
   sideBarToggler(){
     this.sideBarOpen = !this.sideBarOpen;
   }

  ngOnInit(): void {
     this.getparamid = this.router.snapshot.paramMap.get('id');
     if(this.getparamid){

        this.service.getSingleData(this.getparamid).subscribe((res)=>{
            this.resID = res;

          this.userForm.patchValue({
            missa:res[0].missa,
            data:res[0].data,
            mes:res[0].mes,
            ano:res[0].ano,
            dia:res[0].dia,
            hora:res[0].hora,
            comunidade:res[0].comunidade,
            acolito1:res[0].acolito1,
            acolito2:res[0].acolito2,
            acolito3:res[0].acolito3,
            coroinha1:res[0].coroinha1,
            coroinha2:res[0].coroinha2,
            coroinha3:res[0].coroinha3,
            coroinha4:res[0].coroinha4,
            coroinha5:res[0].coroinha5,
          });
        
        });
    }
        this.service.select_coroinhaData().subscribe((res)=>{
        this.select_coroinhaData = res;  
    }); 

        this.service.select_acolitoData().subscribe((res)=>{
        this.select_acolitoData = res;
    });
        
        this.service.select_missaData().subscribe((res)=>{
        this.select_missaData = res;
       });



  }
  
  userForm = new FormGroup({
    'missa':new FormControl('',Validators.required),
    'data':new FormControl('',Validators.required),
    'mes':new FormControl('',Validators.required),
    'ano':new FormControl('',Validators.required),
    'dia':new FormControl('',Validators.prototype),
    'hora':new FormControl('',Validators.prototype),
    'comunidade':new FormControl('',Validators.prototype),
    'acolito1':new FormControl('',Validators.required),
    'acolito2':new FormControl('',Validators.prototype),
    'acolito3':new FormControl('',Validators.prototype),
    'coroinha1':new FormControl('',Validators.required),
    'coroinha2':new FormControl('',Validators.prototype),
    'coroinha3':new FormControl('',Validators.prototype),
    'coroinha4':new FormControl('',Validators.prototype),
    'coroinha5':new FormControl('',Validators.prototype)
  });
  

  userSubmit(){

    
    if(this.userForm.valid){
      this.service.createData(this.userForm.value).subscribe((res)=>{
          console.log(res,'res==>');

          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = "550px";
          this.dialog.open(MsgSucessComponent,dialogConfig);
   
          this.userForm.reset();


      });
    }
  }

  userUpdate(){
     console.log(this.userForm.value,'updateform');
     
   

     if(this.userForm.valid){
        this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdate');
          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = "550px";
          this.dialog.open(AtualizarEscalaComponent,dialogConfig);
          this.userForm.reset();
        });
   
    }else{
       console.log("algo deu errado");
     }
   }  

  
}
