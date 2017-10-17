import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserService } from './_services/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './users/home/home.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';
import { ErrorComponent } from './utility/error/error.component';
import { LandingComponent } from './utility/landing/landing.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup/:regstate', component: UserDetailComponent },
  { path: 'signup', redirectTo: 'signup/undefined'},
  { path: 'login', redirectTo: 'login/true'},
  { path: 'login/:loginstate', component: LoginComponent},
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: 'userprof', component: UserProfileComponent},
  { path: 'error', component: ErrorComponent},
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
    LandingComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, RouterModule.forRoot( appRoutes )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
