import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santa-teresinha',
  templateUrl: './santa-teresinha.component.html',
  styleUrls: ['./santa-teresinha.component.css']
})
export class SantaTeresinhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
