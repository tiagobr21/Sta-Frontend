import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  show:any=false; 
  show2:any=false; 
  role:any


  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    console.log(this.role)
  }

  showOptions(){
    this.show = !this.show;
  }

  showOptions2(){
    this.show2 = !this.show2;
  }
}
