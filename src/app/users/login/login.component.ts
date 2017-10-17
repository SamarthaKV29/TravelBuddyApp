import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
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

  constructor(private UserService: UserService, private router: Router, private route: ActivatedRoute){
    this.error = this.loading = false;
    if(this.users == undefined){
      this.UserService.getUsers().then((users: User[]) =>{
        this.users = users.map((user)=>{
          return user;
        });
      });
    }
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      if(params['loginstate'] === "false")
        this.loginstate = false;
      else
        this.loginstate = true;
      if(!this.loginstate || sessionStorage.getItem('token')){
        sessionStorage.clear();
        this.loading = false;
        this.error = false;
        this.router.navigate(['login', true]);
        this.message = undefined;
      }
      else if(sessionStorage.getItem('token')){
        this.message = "Already logged in, redirecting to home";
        setTimeout(function() {
          this.router.navigate(['home']);
        }, 2000);
      }
    });
    
  }
  
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
      }
    }
    else{
      this.error = true;
    }
  }
}
