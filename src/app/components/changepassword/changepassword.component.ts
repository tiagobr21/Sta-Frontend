import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {


    showpassword:boolean = false;
    sideBarOpen = true;


  constructor() { }

  ngOnInit(): void {
  }


 
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }


  changeView(){
    this.showpassword = !this.showpassword 

  }

}
