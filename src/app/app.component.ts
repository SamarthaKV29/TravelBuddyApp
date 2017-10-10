import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserDetailComponent ]
})

export class AppComponent {
  title = 'TravelBuddy';
}
