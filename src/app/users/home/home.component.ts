import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppComponent } from '../../app.component';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  currentUser: User;
  username: string = "";
  message: string = "Please login first.";

  constructor() { 
    if(AppComponent.getLoginStatus()){
      var curr;
      if (curr = localStorage.getItem("currentUser")){
        curr = JSON.parse(curr);
        this.username = curr.username;
        this.message = "Welcome " + this.username;
      }
    }
  }

  // ngOnInit() {
    
  // }

}
