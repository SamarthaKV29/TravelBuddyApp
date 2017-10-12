import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TravelBuddy';
  static loggedin: boolean = false;

  static getLoginStatus(): boolean {
    return this.loggedin;
  }
  static setLoggedIn(){
    this.loggedin = true;
  }

  static resetLoggedIn(){
    this.loggedin = false;
  }

  
}
