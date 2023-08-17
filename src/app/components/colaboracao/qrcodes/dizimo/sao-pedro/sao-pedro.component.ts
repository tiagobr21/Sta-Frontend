import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sao-pedro',
  templateUrl: './sao-pedro.component.html',
  styleUrls: ['./sao-pedro.component.css']
})
export class SaoPedroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
