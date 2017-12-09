import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SocialUser} from 'angular4-social-login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: SocialUser;

  constructor(private router: Router) { }


  ngOnInit() {
    if(localStorage.getItem("UserTok")){
      this.currentUser = JSON.parse(localStorage.getItem("UserTok"));
      console.log(this.currentUser);
    }
    else{
      console.log("Please log in");
      localStorage.clear();
      this.router.navigate(['login']);

    }
  }
  

}
