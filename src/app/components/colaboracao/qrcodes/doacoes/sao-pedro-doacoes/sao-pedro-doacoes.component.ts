import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sao-pedro-doacoes',
  templateUrl: './sao-pedro-doacoes.component.html',
  styleUrls: ['./sao-pedro-doacoes.component.css']
})
export class SaoPedroDoacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
