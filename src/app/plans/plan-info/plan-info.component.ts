import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.css']
})
export class PlanInfoComponent implements OnInit {

  plans = [
    {pack:"plan-399",info:"Monthly Charges Rs.399 unlimited and 30mbps"},
    {pack:"plan-699",info:"Monthly Charges Rs.699 unlimited and 50mbps"},
    {pack:"plan-999",info:"Monthly Charges Rs.999 unlimited and 80mbps"},
    {pack:"plan-1299",info:"Monthly Charges Rs.1299 unlimited and 100mbps"},
    {pack:"Your's Special Plan",info:"You are eligibile for free data for 30 days"},
  ]

  selectedPlan:number = -1


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param=>{
      this.selectedPlan = param.id
    })
  }

  

}
