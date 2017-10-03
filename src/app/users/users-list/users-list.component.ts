import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService]
})

export class UsersListComponent implements OnInit {

  users: User[]
  selectedUser: User

  constructor(private UserService: UserService) { }

  ngOnInit() {
     this.UserService
      .getUsers()
      .then((Users: User[]) => {
        this.users = Users.map((User) => {
          if (!User.phone) {
            User.phone = {
              mobile: "",
              work: ""
            }
          }
          return User;
        });
      });
  }

  private getIndexOfUser = (userId: String) => {
    return this.users.findIndex((user) => {
      return user._id === userId;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user
  }

  createNewUser() {
    var user: User = {
      _id: "",
      salt: "",
      displayName: "",
      provider: "local",
      username: "",
      created: {
          $date: new Date(),
      },
      roles: [
        "user"
      ],
      profileImageURL: "",
      password: "",
      email: "",
      phone: {
        mobile: "",
        work: ""
      },
      name: "",
      __v: 0
    };

    // By default, a newly-created User will have the selected state.
    this.selectUser(user);
  }

  deleteUser = (userId: String) => {
    var idx = this.getIndexOfUser(userId);
    if (idx !== -1) {
      this.users.splice(idx, 1);
      this.selectUser(null);
    }
    return this.users;
  }

  addUser = (user: User) => {
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }

  updateUser = (user: User) => {
    var idx = this.getIndexOfUser(user._id);
    if (idx !== -1) {
      this.users[idx] = user;
      this.selectUser(user);
    }
    return this.users;
  }
}