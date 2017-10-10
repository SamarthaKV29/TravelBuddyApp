import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserService } from './users/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './users/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: UserDetailComponent, },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot( appRoutes )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
