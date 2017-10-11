import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})



export class LoginComponent implements OnInit {

  username: String;

  password: String;

  private users: User[];
  constructor(private UserService: UserService) { }

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
    
    for (let user of this.users) {
      if(this.username){
        if (user.username.toLowerCase() === this.username.toLowerCase() && user.password === this.password) {
          console.log("Login success");
        }
        else {
          console.log("error");
        }
    }
  }
}
}
