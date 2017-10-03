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
              mobile: "",
              work: ""
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
      lastName: "",
      firstName: "",
      __v: 0
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