import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPlansComponent } from './data-plans/data-plans.component';
import { Routes, RouterModule } from '@angular/router';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { ShowPlanGuard } from '../gaurds/show-plan.guard';

const routes: Routes = [
  {path: '', component:DataPlansComponent ,canActivateChild:[ShowPlanGuard],children:[
    {path:':id',component:PlanInfoComponent}
  ]}
];

@NgModule({
  declarations: [DataPlansComponent, PlanInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PlansModule { }
