import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [UserService]
})
export class LandingComponent implements OnInit {

  constructor(private UserService: UserService) { }
  userslen: number = 3;

  ngOnInit() {

  }

}
