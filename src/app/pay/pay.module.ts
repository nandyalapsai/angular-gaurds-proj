import { NgModule } from '@angular/core';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { Routes, RouterModule } from '@angular/router';
import { ActivatePayGuard } from '../gaurds/activate-pay.guard';
import { FormsModule } from '@angular/forms';
import { GoOutGuard } from '../gaurds/go-out.guard';


const routes: Routes = [
  {path: '', component: MakePaymentComponent,
  canActivate:[ActivatePayGuard],
  canDeactivate:[GoOutGuard]
}
];

@NgModule({
  declarations: [MakePaymentComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class PayModule { }
