import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadCompGuard } from './gaurds/load-comp.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"plans",loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule)},
  {path:"payment",loadChildren: () => import('./pay/pay.module').then(m => m.PayModule),canLoad:[LoadCompGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
