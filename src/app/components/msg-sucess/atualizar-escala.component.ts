import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-atualizar-escala',
  templateUrl: './atualizar-escala.component.html',
  styleUrls: ['./atualizar-escala.component.css']
})
export class AtualizarEscalaComponent implements OnInit {

  constructor(private dialogRef:DialogRef) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
