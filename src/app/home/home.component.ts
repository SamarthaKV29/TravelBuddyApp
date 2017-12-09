import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute} from '@angular/router';
import { SocialUser } from 'angular4-social-login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RouterLink]
})


export class HomeComponent implements OnInit{
  currentUser: SocialUser;
  message: string = "Please login first.";
  loggedIn: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { 
    setInterval(this.checkLoggedIn, 200);
  }

  ngOnInit() {
    setInterval(()=>{
      this.checkLoggedIn();
    }, 200);
  }


  checkLoggedIn(){
    if(localStorage.getItem('UserTok')){
      
      try{
        var t = localStorage.getItem('UserTok');
        var tt = JSON.parse(t);
        if(tt instanceof SocialUser){
          this.currentUser = tt;
        }
        this.loggedIn = true;
      }
      catch(err){
        console.log("Failed, please login.");
      }
    }
    else
      this.loggedIn = false;
  }
  

}
