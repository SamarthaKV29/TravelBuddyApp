import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ UserService ]
})

export class UserDetailComponent implements OnInit{
  
  profileData: Object;

  constructor (private UserService: UserService) {
  	profileData = {
  		
  	};
  }

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
    if(this.user._id === ""){
      this.user._id = (this.userslen + 1).toString();
      console.log(this.user);
    }
    this.UserService.createUser(user);
  }

}