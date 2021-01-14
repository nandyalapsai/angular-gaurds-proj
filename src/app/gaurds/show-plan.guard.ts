import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowPlanGuard implements CanActivateChild {
  constructor(){
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(childRoute.params.id !=="4"){
        return true
      }else{
        let isLogged = localStorage.getItem('showLogin')
        if(isLogged == "false"){
          return true;
        }else{
          return false
        }
      }
  }
  
}
