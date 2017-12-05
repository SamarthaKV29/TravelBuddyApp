import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './utilities/landing/landing.component';
import { ErrorComponent } from './utilities/error/error.component';
import { AboutComponent } from './utilities/about/about.component';
import { TeamComponent } from './utilities/team/team.component';
import { DateTimePickerModule } from 'ng-pick-datetime';

import { InboxComponent } from './inbox/inbox.component';
import { ManagetripsComponent } from './managetrips/managetrips.component';
import { CreatetripComponent } from './createtrip/createtrip.component';

const homeRoutes: Routes = [
  { path: "create", component: CreatetripComponent},
  { path: "manage", component: ManagetripsComponent},
  { path: "inbox", component: InboxComponent}
];
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: homeRoutes},
  //{ path: 'signup/:regstate', component: UserDetailComponent },
  { path: 'signup', redirectTo: 'signup/new'},
  { path: 'login', redirectTo: 'login/true'},
  { path: 'login/:loginstate', component: LoginComponent},
  //{ path: 'forgotpass', component: ForgotPassComponent },
  //{ path: 'profile/:user', component: UserProfileComponent},
  //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
  { path: 'error', component: ErrorComponent},
  { path: 'about', component: AboutComponent},
  { path: 'team', component: TeamComponent}
];

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("230271184229-ipk8nc2c9r1bfiuvpn0naa5a69ggnojk.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("227631451109453")
  }
]);

export function provideConfig() {
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    ErrorComponent,
    AboutComponent,
    TeamComponent,
    InboxComponent,
    ManagetripsComponent,
    CreatetripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocialLoginModule.initialize(provideConfig()),
    RouterModule.forRoot( appRoutes )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
