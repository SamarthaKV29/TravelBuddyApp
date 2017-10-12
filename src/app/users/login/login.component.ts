import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { AppComponent } from "../../app.component";
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})



export class LoginComponent implements OnInit {

  username: string;

  password: string;

  loading: boolean = false;

  private users: User[];
  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
    this.UserService
      .getUsers()
      .then((Users: User[]) => {
        this.users = Users.map((User) => {
          return User;
        });
      });
  }

  
  checkLogin() {
    this.loading = true;
    for (let user of this.users) {
      if(this.username.toLowerCase() === user.username.toLowerCase() && this.password === user.password){
        if(!localStorage.getItem("currentUser") || localStorage.getItem("currentUser") == ""){
          this.login();
          break;
        }
        else{
          var curr = JSON.parse(localStorage.getItem("currentUser"));
          if(curr.username == user.username){
            this.reset();
            this.login();
          }
          else{
            this.router.navigate(["/login"]);
          }
        }
      }
      else{
        this.reset();
      }
      
    }
  }

  genToken() : string {
    return new Date().toTimeString();
  }

  login(){
    localStorage.setItem("currentUser", JSON.stringify({username: this.username, token: this.genToken()}));    
    AppComponent.setLoggedIn();
    this.router.navigate(["home"]);
  }
  reset(){
    this.loading = false;
    localStorage.setItem("currentUser", "");
    AppComponent.resetLoggedIn();
    this.password = "";
  }
}
