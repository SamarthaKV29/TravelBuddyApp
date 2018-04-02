import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { UserDetailComponent } from './users/user-detai
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RouterLink, ɵROUTER_PROVIDERS } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { UserProfileComponent } from './users/user-profile/user-profile.component';
//import { ForgotPassComponent } from './users/fl/user-detail.component';
//import { UserService } from './_services/user.service';orgot-pass/forgot-pass.component';
import { ErrorComponent } from './utilities/error/error.component';
import { LandingComponent } from './utilities/landing/landing.component';
import { AboutComponent } from './utilities/about/about.component';
import { TeamComponent } from './utilities/team/team.component';
import { SocialLoginModule } from "angular4-social-login";
import { ChatboxComponent } from './chatbox/chatbox.component'
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { TripComponent } from './trip/trip.component';
import { Trip } from './trip/trip';
import { TripService } from './trip/trip.service';
import { ProfileComponent } from './profile/profile.component';
import { PalComponent } from './pal/pal.component';
import { CountryService } from './countries/countries.service';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("230271184229-ipk8nc2c9r1bfiuvpn0naa5a69ggnojk.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("196067927661226")
  }
]);

export function provideConfig() {
  return config;
}

const homeRoutes: Routes = [
  // { path: "create", component: CreatetripComponent},
  { path: "trips", component: TripComponent },
  { path: "profile", component: ProfileComponent },
  { path: "friends", component: PalComponent }
  //{ path: "**", component: TripComponent, pathMatch:"full"}
];
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: homeRoutes },
  //{ path: 'signup/:regstate', component: UserDetailComponent },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  //{ path: 'forgotpass', component: ForgotPassComponent },
  //{ path: 'profile/:user', component: UserProfileComponent},
  //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
  { path: 'error', component: ErrorComponent, pathMatch: "full" },
  { path: 'about', component: AboutComponent, pathMatch: "full" },
  { path: 'team', component: TeamComponent, pathMatch: "full" },
  { path: 'message', component: ChatboxComponent, pathMatch: "full" },
  { path: '**', component: LandingComponent, pathMatch: "full" }
];
//{ path: '**', component: AppComponent},
@NgModule({
  declarations: [
    AppComponent,
    //UserDetailComponent,
    LoginComponent,
    HomeComponent,
    //UserProfileComponent,
    //ForgotPassComponent,
    ErrorComponent,
    LandingComponent,
    AboutComponent,
    ChatboxComponent,
    // InboxComponent,
    // ManagetripsComponent,
    // CreatetripComponent,
    TeamComponent,
    TripComponent,
    ProfileComponent,
    PalComponent
  ],
  imports: [
    BrowserModule, SocialLoginModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    TripService,
    CountryService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
