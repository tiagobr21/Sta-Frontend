import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-rosario-ofertas',
  templateUrl: './ns-rosario-ofertas.component.html',
  styleUrls: ['./ns-rosario-ofertas.component.css']
})
export class NsRosarioOfertasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }


}
