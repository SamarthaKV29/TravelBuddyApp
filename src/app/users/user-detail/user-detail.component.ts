import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { User } from '../user';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ UserService, NgForm ]
})

export class UserDetailComponent implements OnInit{
  regState: boolean = false;
  message: String = undefined;
  sub: any;

  
  

  @Input()
  user: User;


  constructor (private UserService: UserService, private route: ActivatedRoute) {
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
  ngOnInit(){
    this.initUser();
    this.sub = this.route.params.subscribe(params => {
      if(params['regstate'] === "false"){
        this.regState = false;
        this.message = "Failed to register, please check details.";
        
      }
      else{
        this.regState = true;
        this.message = "Registered Successfully.";
        this.initUser();
      }
       
    });
  }
  
  
  createUser(user: User) {
    console.log(user);
    for(let key in user){
      if(user[key] == "" || user[key] == null){
        console.log(key, user[key]);
        this.regState = false;
        this.message = "Failed to register, please check details.";
        return;
      }
      this.UserService.createUser(user);
      return;
    }
    
  }

}