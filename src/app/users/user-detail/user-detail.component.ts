import { Component, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-details',
  templateUrl: './User-details.component.html',
  styleUrls: ['./User-details.component.css']
})

export class UserDetailComponent {
  @Input()
  User: User;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private UserService: UserService) {}

  createUser(User: User) {
    this.UserService.createUser(User).then((newUser: User) => {
      this.createHandler(newUser);
    });
  }

  updateUser(User: User): void {
    this.UserService.updateUser(User).then((updatedUser: User) => {
      this.updateHandler(updatedUser);
    });
  }

  deleteUser(UserId: String): void {
    this.UserService.deleteUser(UserId).then((deletedUserId: String) => {
      this.deleteHandler(deletedUserId);
    });
  }
}