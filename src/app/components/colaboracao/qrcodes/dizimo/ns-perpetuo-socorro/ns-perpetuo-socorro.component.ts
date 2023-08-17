import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-perpetuo-socorro',
  templateUrl: './ns-perpetuo-socorro.component.html',
  styleUrls: ['./ns-perpetuo-socorro.component.css']
})
export class NsPerpetuoSocorroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
