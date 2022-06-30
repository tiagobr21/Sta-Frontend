import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import {jsPDF} from 'jspdf';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-consulta-escala',
  templateUrl: './consulta-escala.component.html',
  styleUrls: ['./consulta-escala.component.css']
})
export class ConsultaEscalaComponent implements OnInit {


constructor(private service:AppService) { }
   

 
  ngOnInit(): void {
 
  };

 





}
