import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { goOut } from '../../gaurds/go-out.guard';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit,goOut {

  @ViewChild('f') myform:any;

  constructor() { }


  canGoOut(): boolean {
    if(this.myform.touched && this.myform.valid){
      let status:boolean = confirm("are sure to cancel transaction!...")
      return false
    }else{
      return true
    }
  }

  ngOnInit(): void {
  }

  onPayment(formData:NgForm){
    if(formData.touched && formData.valid){
      alert("payment is successfull")
      formData.reset()
    }

  }

}
