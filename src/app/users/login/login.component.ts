import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})



export class LoginComponent implements OnInit {
  
  @Input()
  username: String;

  @Input()
  password: String;

  users: User[];
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

  checkLogin(unam: String, pass: String){
    for(let user of this.users){
      if(user.username.toLowerCase() == unam && user.password == pass){
        console.log("Login success");
      }
      else{
        console.log("error");
      }
    }
  }

}
