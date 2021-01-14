import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivatePayGuard implements CanActivate {

  constructor(){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      let isLogged = localStorage.getItem('showLogin')
      if(isLogged == "false"){
        return true;
      }else{
        return false
      }
  }
  
}
