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
      this.loggedIn = false;
      this.user = null;
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
      setInterval(()=>{
        if(this.user){
          console.log("LOGGED IN");
        }
      }, 1000);
    }
  
    signInWithGoogle(): void {
      this.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
  
    signInWithFB(): void {
      this.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signIn(prov_id): void {
      this.authService.signIn(prov_id).then(success=>{
        localStorage.clear();
        if(this.user && !localStorage.getItem("UserTok")){
          localStorage.setItem("UserTok", JSON.stringify(this.user));
        }
        this.router.navigate(['home']);
      });
      
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
