import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})


export class HomeComponent implements OnInit{
  //currentUser: SocialUser;
  message: string = "Please login first.";
  loggedIn: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { 
    //setInterval(this.checkLoggedIn, 5000);
  }

  ngOnInit() {
    //this.checkLoggedIn();
  }


  checkLoggedIn(){
    
  }
  

}
