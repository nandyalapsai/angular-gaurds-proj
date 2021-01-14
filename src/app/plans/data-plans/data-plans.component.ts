import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-plans',
  templateUrl: './data-plans.component.html',
  styleUrls: ['./data-plans.component.css']
})
export class DataPlansComponent implements OnInit {

  plans = [
    {pack:"plan-399",info:"Monthly Charges Rs.399 unlimited and 30mbps"},
    {pack:"plan-699",info:"Monthly Charges Rs.699 unlimited and 50mbps"},
    {pack:"plan-999",info:"Monthly Charges Rs.999 unlimited and 80mbps"},
    {pack:"plan-1299",info:"Monthly Charges Rs.1299 unlimited and 100mbps"},
    {pack:"Your's Special Plan",info:"You are eligibile for free data for 30 days"},
  ]
  
  constructor() { }

  ngOnInit(): void {

    
  }

}
