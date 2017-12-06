import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { Router} from '@angular/router';

@Component({
  selector: 'social-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {   }
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
      
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(onfullilled=>{
        if(this.user && !localStorage.getItem("UserTok")){
          localStorage.setItem("UserTok", JSON.stringify(this.user));
        }
        console.log(this.user);
        this.router.navigate(['home']);
      });
    }
  
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(onfullilled=>{
        if(this.user && !localStorage.getItem("UserTok")){
          localStorage.setItem("UserTok", JSON.stringify(this.user));
        }
        console.log(this.user);
        this.router.navigate(['home']);
      });;
    }
  
    signOut(): void {
      this.authService.signOut().then(success=>{
        if(this.user && localStorage.getItem("UserTok")){
          localStorage.clear();
          this.user = null;
        }
      });
    }
}
