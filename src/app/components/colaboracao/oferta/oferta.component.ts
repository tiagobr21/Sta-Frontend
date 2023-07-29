import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor() { }

  
  sideBarOpen:boolean = true;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.sideBarOpen = false;
  }

}
