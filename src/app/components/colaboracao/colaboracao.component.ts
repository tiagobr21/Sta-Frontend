import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboracao',
  templateUrl: './colaboracao.component.html',
  styleUrls: ['./colaboracao.component.css']
})
export class ColaboracaoComponent implements OnInit {

  constructor() { }

  sideBarOpen = true;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.sideBarOpen = false
  }

}
