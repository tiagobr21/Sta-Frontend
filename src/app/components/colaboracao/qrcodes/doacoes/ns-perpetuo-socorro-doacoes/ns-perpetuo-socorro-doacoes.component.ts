import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-perpetuo-socorro-doacoes',
  templateUrl: './ns-perpetuo-socorro-doacoes.component.html',
  styleUrls: ['./ns-perpetuo-socorro-doacoes.component.css']
})
export class NsPerpetuoSocorroDoacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
