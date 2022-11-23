import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-msg-sucess',
  templateUrl: './msg-sucess.component.html',
  styleUrls: ['./msg-sucess.component.css']
})
export class MsgSucessComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<MsgSucessComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
