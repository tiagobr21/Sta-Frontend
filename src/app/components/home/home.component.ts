import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterGuardService } from 'src/app/services/router-guard.service';
import { AppService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app-sta';
  sideBarOpen = true;
  user:any;


  constructor(private router: Router, private userService: AppService){}
  
  ngOnInit(){
    if(localStorage.getItem('token') != null){
        this.userService.checkToken().subscribe((res)=>{
          this.router.navigate(['/home']);
        },(error:any)=>{
           console.log(error);

        })
    }
    
    this.user = localStorage.getItem("user");
    console.log(this.user);
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
