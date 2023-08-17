import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santa-teresinha-ofertas',
  templateUrl: './santa-teresinha-ofertas.component.html',
  styleUrls: ['./santa-teresinha-ofertas.component.css']
})
export class SantaTeresinhaOfertasComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
