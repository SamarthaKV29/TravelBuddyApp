import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute} from '@angular/router';
import { SocialUser } from 'angular4-social-login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})


export class HomeComponent implements OnInit{
  currentUser: SocialUser;
  
  message: string = "Please login first.";
  loggedIn: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { 
    setInterval(this.checkLoggedIn, 5000);
  }

  ngOnInit() {
    this.checkLoggedIn();
  }


  checkLoggedIn(){
    if(localStorage.getItem('UserTok')){
      this.loggedIn = true;
      try{
        var t = localStorage.getItem('UserTok');
        var tt = JSON.parse(t);
        if(tt instanceof SocialUser){
          this.currentUser = tt;
        }
      }
      catch(err){
        console.log("Failed, please login.");
      }
    }
    else
      this.loggedIn = false;
  }
  

}
