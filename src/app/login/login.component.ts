import { Component } from '@angular/core';

// import { AuthService } from 'angular4-social-login';
// import { SocialUser } from 'angular4-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'social-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // user: SocialUser;
  loggedIn: boolean;

  // constructor(private authService: AuthService) { }

  // ngOnInit() {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //   });
  // }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }

}
