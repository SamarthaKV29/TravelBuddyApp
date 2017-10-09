import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserService ]
})
export class SignupComponent implements OnInit{
  @Input()
  user: User;

  @Input()
  createHandler: Function;

  users: User[];
  userslen: number;

  constructor (private UserService: UserService) { }

  ngOnInit(){
    this.UserService
    .getUsers()
    .then((Users: User[]) => {
      
      this.users = Users.map((User) => {
        return User;
      });
      this.userslen = this.users.length;
    });
  }
  createUser(user: User) {
    user._id = this.userslen.toString();
    this.UserService.createUser(user).then((newUser: User) => {
      this.createHandler(newUser);
    });
  }
  lookupUser(user: User){
    for(let u of this.users){
      if(user.username.toLowerCase() == u.username.toLowerCase()){
        return true;
      }
      else return false;
    }
  }

}
