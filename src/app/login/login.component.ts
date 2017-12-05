import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { reject } from 'q';

@Component({
  selector: 'social-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService) { 
    setInterval(()=>{
      if(this.loggedIn && this.user){
        console.log("logged In : " + this.user.name);
      }
    }, 2000);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then()
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(resp=>{
      this.user = resp;
      console.log("USER");
    }, rej=>rej);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
