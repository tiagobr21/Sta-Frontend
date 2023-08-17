import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santa-teresinha-doacoes',
  templateUrl: './santa-teresinha-doacoes.component.html',
  styleUrls: ['./santa-teresinha-doacoes.component.css']
})
export class SantaTeresinhaDoacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
