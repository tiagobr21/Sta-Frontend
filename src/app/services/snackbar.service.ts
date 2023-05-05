import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  openSnackBar(message:string,action:string){
    if(action === 'error'){
      this.snackbar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:3000,
        panelClass:['red-snackbar']
      });
     }else if(action == 'Você não está altorizado para fazer isso'){
      this.snackbar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:3000,
        panelClass:['red-snackbar']
      });
    }else{
       this.snackbar.open(message,'',{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000,
          panelClass:['green-snackbar']
       })
     }
     

  }
}
