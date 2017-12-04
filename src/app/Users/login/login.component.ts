import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})


export class LoginComponent {
  
}

export class User{
  username: string;
  age: number;
  password: string;
  name: string;
}
