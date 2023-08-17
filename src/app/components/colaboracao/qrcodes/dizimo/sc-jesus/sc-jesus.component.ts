import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-jesus',
  templateUrl: './sc-jesus.component.html',
  styleUrls: ['./sc-jesus.component.css']
})
export class ScJesusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
