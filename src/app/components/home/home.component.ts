import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app-sta';
  sideBarOpen = true;

  constructor(private router: Router, private userService: AppService){}
  
  ngOnInit(){
    if(localStorage.getItem('token') != null){
        this.userService.checkToken().subscribe((res)=>{
          this.router.navigate(['/home']);
        },(error:any)=>{
           console.log(error);

        })
    }
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
