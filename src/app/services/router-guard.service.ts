import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route:ActivatedRouteSnapshot):boolean{
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray.expectedRole
     

    const token:any = localStorage.getItem('token');
    let tokenPayload:any;
    try{
      tokenPayload = jwt_decode(token);
    }catch(err){
      localStorage.clear();
      this.router.navigate(['/']);
    }


    let checkRole = false;

   for (let i= 0; i < expectedRoleArray.length; i++) {
       if(expectedRoleArray[i] == tokenPayload.role){
         checkRole = true;
       }
      
    } 
    if(tokenPayload.role == 'user' || tokenPayload == 'admin'){
      if(this.auth.isAuthenticated() && checkRole ){
        return true;
      }
      this.router.navigate(['/home']);
      return false;
    }
    else{
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}
