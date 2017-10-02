import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'user-list',
  templateUrl: './User-list.component.html',
  styleUrls: ['./User-list.component.css'],
  providers: [UserService]
})

export class UserListComponent implements OnInit {

  Users: User[]
  selectedUser: User

  constructor(private UserService: UserService) { }

  ngOnInit() {
     this.UserService
      .getUsers()
      .then((Users: User[]) => {
        this.Users = Users.map((User) => {
          if (!User.phone) {
            User.phone = {
              mobile: '',
              work: ''
            }
          }
          return User;
        });
      });
  }

  private getIndexOfUser = (UserId: String) => {
    return this.Users.findIndex((User) => {
      return User._id === UserId;
    });
  }

  selectUser(User: User) {
    this.selectedUser = User
  }

  createNewUser() {
    var User: User = {
      name: '',
      email: '',
      phone: {
        work: '',
        mobile: ''
      }
    };

    // By default, a newly-created User will have the selected state.
    this.selectUser(User);
  }

  deleteUser = (UserId: String) => {
    var idx = this.getIndexOfUser(UserId);
    if (idx !== -1) {
      this.Users.splice(idx, 1);
      this.selectUser(null);
    }
    return this.Users;
  }

  addUser = (User: User) => {
    this.Users.push(User);
    this.selectUser(User);
    return this.Users;
  }

  updateUser = (User: User) => {
    var idx = this.getIndexOfUser(User._id);
    if (idx !== -1) {
      this.Users[idx] = User;
      this.selectUser(User);
    }
    return this.Users;
  }
}