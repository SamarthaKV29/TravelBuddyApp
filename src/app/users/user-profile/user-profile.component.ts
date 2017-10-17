import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../_services/user.service';
import { DateTimePickerModule } from 'ng-pick-datetime'

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ UserService ]
})

export class UserProfileComponent implements OnInit{
  
  profileData: {
  	originCity: string;
    originTime: Date;
    destinationCity: string;
    destinationTime: Date;
    bio: string;
    seatsOffered: string;
    seatRequired: string;
  };
  users: User[];
  constructor (private UserService: UserService, private datepicker: DateTimePickerModule) {
  	this.profileData = {
  		originCity: "",
      originTime: new Date(),
      destinationCity: "",
      destinationTime: new Date(),
      bio: "",
      seatsOffered: "",
      seatRequired: ""
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

  onSubmit(){
  	console.log(this.profileData);
  }

}