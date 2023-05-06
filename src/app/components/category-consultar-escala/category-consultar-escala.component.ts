import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-consultar-escala',
  templateUrl: './category-consultar-escala.component.html',
  styleUrls: ['./category-consultar-escala.component.css']
})
export class CategoryConsultarEscalaComponent implements OnInit {
  
  title = 'app-sta';
  sideBarOpen = true;


  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
    this.sideBarOpen = false
  }

}
