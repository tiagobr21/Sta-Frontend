import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-msgerrorlogin',
  templateUrl: './msgerrorlogin.component.html',
  styleUrls: ['./msgerrorlogin.component.css']
})
export class MsgerrorloginComponent implements OnInit {

  constructor(private matDialog:MatDialog,private matDialogRef:MatDialogRef<MsgerrorloginComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.matDialogRef.close();
  }

}
