import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }
  
 cadastrarModal(){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.width = "100%";
   dialogConfig.height = "100%";
   this.dialog.open(CadastroComponent,dialogConfig);

 }

 logout(){
  this.router.navigate(['/login']);

}



  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
