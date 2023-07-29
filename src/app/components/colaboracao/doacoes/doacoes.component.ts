import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.css']
})
export class DoacoesComponent implements OnInit {

  constructor() { }

  
  sideBarOpen:boolean = true;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.sideBarOpen = false;
  }

}
