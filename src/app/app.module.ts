import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserService } from './_services/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './users/home/home.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';
import { ErrorComponent } from './utility/error/error.component';
import { LandingComponent } from './utility/landing/landing.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { AboutComponent } from './utility/about/about.component';
import { InboxComponent } from './users/inbox/inbox.component';
import { ManagetripsComponent } from './users/managetrips/managetrips.component';
import { CreatetripComponent } from './users/createtrip/createtrip.component';


export const homeRoutes: Routes = [
  { path: "create", component: CreatetripComponent},
  { path: "manage", component: ManagetripsComponent},
  { path: "inbox", component: InboxComponent}
];
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: homeRoutes},
  { path: 'signup/:regstate', component: UserDetailComponent },
  { path: 'signup', redirectTo: 'signup/new'},
  { path: 'login', redirectTo: 'login/true'},
  { path: 'login/:loginstate', component: LoginComponent},
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: 'userprof', component: UserProfileComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'about', component: AboutComponent}
];
//{ path: '**', component: AppComponent},
@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    LoginComponent,
    HomeComponent,
    UserProfileComponent,
    ForgotPassComponent,
    ErrorComponent,
    LandingComponent,
    AboutComponent,
    InboxComponent,
    ManagetripsComponent,
    CreatetripComponent
  ],
  imports: [
    BrowserModule, DateTimePickerModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, HttpModule, RouterModule.forRoot( appRoutes, {enableTracing:true} )
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
