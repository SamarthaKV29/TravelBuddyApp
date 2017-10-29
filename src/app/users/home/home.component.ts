import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../_services/user.service';
import { Router, RouterLink, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit{
  currentUser: User;
  message: string = "Please login first.";
  loggedIn: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { 
    setInterval(this.checkLoggedIn, 5000);
  }

  ngOnInit() {
    this.checkLoggedIn();
  }


  checkLoggedIn(){
    if(sessionStorage.getItem('token')){
      var curr;
      if (curr = sessionStorage.getItem('token')){
        curr = JSON.parse(curr);
        this.currentUser = curr.user;
        this.message = "Welcome " + this.currentUser.name;
        this.loggedIn = true;
      }
    }
    else{
      this.message = "Please login first.";
      this.loggedIn = false;
    }
  }
  

}
