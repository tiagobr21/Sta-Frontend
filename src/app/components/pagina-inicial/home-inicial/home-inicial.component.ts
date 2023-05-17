import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { CadastroComponent } from '../../cadastro/cadastro.component';
import { window } from 'rxjs';


@Component({
  selector: 'app-home-inicial',
  templateUrl: './home-inicial.component.html',
  styleUrls: ['./home-inicial.component.css']
})
export class HomeInicialComponent implements OnInit {
  
  display1:string = '';
  animationduration1:string ='0s';
  animationname1:string = ''
  display2:string = 'none';
  display3:string = 'none';

  enable:boolean = false

  constructor() { }

  ngOnInit(): void {
  
   /* 
   
    setTimeout(()=>{
      this.display2 = ''

      //alert1 
  
      this.animationduration1 = '3s';
      this.animationname1= 'go1'
      this.display1 = 'none'

      setTimeout(()=>{
        this.animationduration1 = '3s'
        this.animationname1 = 'back1'
        this.display2 = 'none'
        this.display1 =''
     
        setTimeout(()=>{
          location.reload()
        },3000)

      },5000)

    },5000)

   */


  }

  changeAlert1(){

      this.animationduration1 = '3s'
      this.animationname1 = 'back1'
      this.display2 = 'none'
      this.display1 =''
      this.display3 = 'none'

  }

  changeAlert12(){
    this.animationduration1 = '3s';
    this.animationname1= 'go2'
    this.display2 = ''
    this.display1 = 'none'
    this.display3 = 'none'
 

  }

  changeAlert13(){
 
    this.animationduration1 = '3s';
    this.animationname1 = 'go1'
    this.display3 = ''
    this.display1 = 'none'
    this.display2 = 'none'
 

  }


}
