import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLogin:any = true
  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem('showLogin')){
      localStorage.setItem('showLogin',"true")
    }
    if(localStorage.getItem('showLogin')){
      this.showLogin = eval(""+localStorage.getItem('showLogin'))
    }
  }

  onLogin(formData:NgForm){
    let isLogged = formData.value.email == "admin@gmail.com" && formData.value.password == "admin123" ? true : false
    if(isLogged){
      localStorage.setItem('showLogin',"false")
      this.showLogin = false
    }
  }

  onLogout(){
    this.showLogin = true;
    localStorage.setItem('showLogin',"true")
  }
}
