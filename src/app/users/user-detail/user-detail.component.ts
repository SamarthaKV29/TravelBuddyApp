import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ UserService, NgForm ]
})

export class UserDetailComponent implements OnInit{
  state: boolean = false;
  message: String;

  @Input()
  user: User;


  constructor (private UserService: UserService) {
    this.initUser();
  }

  initUser(){
    this.user =  {
      username: "",
      created: {
          date: new Date(),
      },
      roles: [
        "user"
      ],
      password: "",
      email: "",
      phone: "",
      name: "",
      profileData: new Object()
    };
  }
  ngOnInit(){}
  
  
  createUser(user: User) {
    console.log(user);
    for(let key in user){
      if(user[key] == "" || user[key] == null){
        console.log(key, user[key]);
        this.state = false;
        this.message = "Failed to register, please check details.";
        return;
      }
    }
    this.UserService.createUser(user).then(response => {
      this.state = true;
      this.message = "Registered Successfully.";
      this.initUser();
    }, reject => {
      this.state = false;
      this.message = "Failed to register, please check details.";
    });
  }

}