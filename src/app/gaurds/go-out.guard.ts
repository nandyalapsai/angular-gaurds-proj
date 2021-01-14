import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface goOut{
  canGoOut():boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GoOutGuard implements CanDeactivate<goOut> {
  canDeactivate(
    component: goOut,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canGoOut();
  }
  
}
