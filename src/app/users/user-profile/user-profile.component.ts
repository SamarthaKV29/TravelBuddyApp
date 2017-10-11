import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ UserService ]
})

export class UserProfileComponent implements OnInit{
  
  profileData: Object;
  users: User[];
  constructor (private UserService: UserService) {
  	this.profileData = {

  	};
  }

  ngOnInit(){
    this.UserService
    .getUsers()
    .then((Users: User[]) => {
      this.users = Users.map((User) => {
        return User;
      });
    });
    
  }

}