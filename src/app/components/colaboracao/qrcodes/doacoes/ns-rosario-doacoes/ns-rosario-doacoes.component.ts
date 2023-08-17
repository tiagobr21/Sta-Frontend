import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-rosario-doacoes',
  templateUrl: './ns-rosario-doacoes.component.html',
  styleUrls: ['./ns-rosario-doacoes.component.css']
})
export class NsRosarioDoacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
