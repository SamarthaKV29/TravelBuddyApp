import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ UserService, NgForm ]
})


export class UserDetailComponent implements OnInit{
  regState: boolean = undefined;
  message: String = undefined;
  sub: any;
  confirmpassword: string;
  user: User;

  constructor (private UserService: UserService, private route: ActivatedRoute, private router: Router) {}


  initUser(){
    this.user = {
      name: "",
      username: "",
      created: {
        date: new Date()
      },
      email: "",
      phone: "",
      password: "",
      roles: ['user'],
      profileData: {}
    };
  }
  ngOnInit(){
    this.initUser();  
    
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      if(params['regstate'] == "false"){
        this.regState = false;
        this.message = "Failed to register, please check details.";
      }
      else if(params['regstate'] == "true"){
        this.regState = true;
        this.message = "Registered Successfully.";
        return;
      }
      else if(params['regstate'] == "undefined"){
        this.message = "Please enter your details."
      }
      setTimeout(()=>{
        this.message = undefined;
      }, 10000);
    });
  }
  
  createUser() {
    for(let key in this.user){
      if(this.user[key] == ""){
        console.log("KEY: " + key);
        this.message = "Invalid input";
        this.regState = false;
        setTimeout(()=>{
          this.message = undefined;
          this.regState = undefined;
        }, 5000)
        return;
      }
    }
    this.UserService.createUser(this.user).then(success=>{
      if(success){
        this.router.navigate(['/signup/true']);
      }
    }, reject=>{
      if(reject){
        this.router.navigate(['/signup/false']);
      }
    });    
  }

}