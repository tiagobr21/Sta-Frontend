import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sao-pedro-ofertas',
  templateUrl: './sao-pedro-ofertas.component.html',
  styleUrls: ['./sao-pedro-ofertas.component.css']
})
export class SaoPedroOfertasComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
