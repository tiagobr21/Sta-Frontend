import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-perpetuo-socorro-ofertas',
  templateUrl: './ns-perpetuo-socorro-ofertas.component.html',
  styleUrls: ['./ns-perpetuo-socorro-ofertas.component.css']
})
export class NsPerpetuoSocorroOfertasComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
