import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserService } from './users/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '/api/home', component: AppComponent },
  { path: '/api/userslist', component: UsersListComponent},
  { path: '', redirectTo: '/api/home', pathMatch: 'full'},
  { path: 'api/signup', component: UserDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
