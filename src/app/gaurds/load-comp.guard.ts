import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadCompGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
      let isLogged = localStorage.getItem('showLogin')
      if(isLogged == "true"){
        return false;
      }else{
        return true
      }
  }
}
