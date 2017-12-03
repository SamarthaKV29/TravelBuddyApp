import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})


export class LoginComponent implements OnInit {
  private users: User[] = undefined;
  private loginstate: boolean = undefined;
  private sub: any;
  message: string;
  username: string = "";

  password: string = "";

  loading: boolean = false;
  error: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute){
    
  }

  ngOnInit(){}
  
  checkLogin(){
    this.loading = true;
    if(this.users){
      var USER = this.users.find(x => x.username.toLowerCase() == this.username.toLowerCase() && x.password === this.password);
      
      if(USER){
        var currentMilli = new Date().getMilliseconds();
        var token = {
          user: USER,
          start: currentMilli
        };
        sessionStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['home']);
        this.error = false;
        this.username = this.password = "";
      }
      else{
        this.error = true;
        this.password = "";
      }
    }
    else{
      this.message = "Server busy, please try after some time.";
    }
  }
}

export class User{
  username: string;
  age: number;
  password: string;
  name: string;
}
