import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-jesus-ofertas',
  templateUrl: './sc-jesus-ofertas.component.html',
  styleUrls: ['./sc-jesus-ofertas.component.css']
})
export class ScJesusOfertasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
