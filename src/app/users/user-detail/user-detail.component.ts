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

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private UserService: UserService) {}

  createUser(user: User) {
    this.UserService.createUser(user).then((newUser: User) => {
      this.createHandler(newUser);
    });
  }

  updateUser(user: User): void {
    this.UserService.updateUser(user).then((updatedUser: User) => {
      this.updateHandler(updatedUser);
    });
  }

  deleteUser(userId: String): void {
    this.UserService.deleteUser(userId).then((deletedUserId: String) => {
      this.deleteHandler(deletedUserId);
    });
  }
}