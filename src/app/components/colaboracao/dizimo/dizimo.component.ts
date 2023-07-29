import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dizimo',
  templateUrl: './dizimo.component.html',
  styleUrls: ['./dizimo.component.css']
})
export class DizimoComponent implements OnInit {

  constructor() { }

  
  sideBarOpen:boolean = true;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.sideBarOpen = false;
  }

}
