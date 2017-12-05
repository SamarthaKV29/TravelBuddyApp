import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './utilities/error/error.component';
import { LandingComponent } from './utilities/landing/landing.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { AboutComponent } from './utilities/about/about.component';
import { InboxComponent } from './inbox/inbox.component';
import { ManagetripsComponent } from './managetrips/managetrips.component';
import { CreatetripComponent } from './createtrip/createtrip.component';
import { TeamComponent } from './utilities/team/team.component';


const homeRoutes: Routes = [
  { path: "create", component: CreatetripComponent, pathMatch: "full" },
  { path: "manage", component: ManagetripsComponent, pathMatch: "full" },
  { path: "inbox", component: InboxComponent, pathMatch: "full" }
];
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: homeRoutes, pathMatch: "full" },
  //{ path: 'signup/:regstate', component: UserDetailComponent },
  { path: 'signup', component: LoginComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  //{ path: 'forgotpass', component: ForgotPassComponent },
  //{ path: 'profile/:user', component: UserProfileComponent},
  //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
  { path: 'error', component: ErrorComponent, pathMatch: "full" },
  { path: 'about', component: AboutComponent, pathMatch: "full" },
  { path: 'team', component: TeamComponent, pathMatch: "full" },
  { path: '**', component: LandingComponent, pathMatch: "full" }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    LandingComponent,
    AboutComponent,
    InboxComponent,
    ManagetripsComponent,
    CreatetripComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    DateTimePickerModule,
    BrowserAnimationsModule, ReactiveFormsModule,
    FormsModule, HttpModule, RouterModule.forRoot(appRoutes),
  ],
  
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

