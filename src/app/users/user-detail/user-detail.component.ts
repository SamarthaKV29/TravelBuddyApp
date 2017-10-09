import { Component, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ UserService ]
})

export class UserDetailComponent {
  @Input()
  user: User;


  constructor (private UserService: UserService) {
    this.user = {
      _id: "",
      username: "",
      created: {
          date: new Date(),
      },
      roles: [
        "user"
      ],
      profileImageURL: "",
      password: "",
      email: "",
      phone: "",
      name: ""
    };
  }

  createUser(user: User) {
    this.UserService.createUser(user);
  }

}