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
<<<<<<< HEAD
=======
    this.sideBarOpen = false
>>>>>>> 9837d96b3a8dbc641958f83d0522e1144d2ac666
  }

}
