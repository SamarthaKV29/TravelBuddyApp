import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
//import { UserDetailComponent } from './users/user-detail/user-detail.component';
//import { UserService } from './_services/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { UserProfileComponent } from './users/user-profile/user-profile.component';
//import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';
import { ErrorComponent } from './utilities/error/error.component';
import { LandingComponent } from './utilities/landing/landing.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { AboutComponent } from './utilities/about/about.component';
import { TeamComponent } from './utilities/team/team.component';


const homeRoutes: Routes = [
  // { path: "create", component: CreatetripComponent},
  // { path: "manage", component: ManagetripsComponent},
  // { path: "inbox", component: InboxComponent}
];
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: homeRoutes, pathMatch: "full"},
  //{ path: 'signup/:regstate', component: UserDetailComponent },
  { path: 'signup', redirectTo: 'signup/new', pathMatch: "full"},
  { path: 'login', redirectTo: 'login/true', pathMatch: "full"},
  { path: 'login/:loginstate', component: LoginComponent, pathMatch: "full"},
  //{ path: 'forgotpass', component: ForgotPassComponent },
  //{ path: 'profile/:user', component: UserProfileComponent},
  //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
  { path: 'error', component: ErrorComponent, pathMatch: "full"},
  { path: 'about', component: AboutComponent, pathMatch: "full"},
  { path: 'team', component: TeamComponent, pathMatch: "full"},
  { path: '**', component: AppComponent, pathMatch: "full"}
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
    // InboxComponent,
    // ManagetripsComponent,
    // CreatetripComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule, DateTimePickerModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, HttpModule, RouterModule.forRoot( appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
