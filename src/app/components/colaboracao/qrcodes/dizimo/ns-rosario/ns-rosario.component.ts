import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-rosario',
  templateUrl: './ns-rosario.component.html',
  styleUrls: ['./ns-rosario.component.css']
})
export class NsRosarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
