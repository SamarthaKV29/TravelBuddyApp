import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit{
  landing: boolean = true;
  isLoggedin: boolean = false;
  title = 'TravelBuddy';  
  
  
  constructor(private router: Router, private route: ActivatedRoute){
    
    sessionStorage.clear();
    let checker = setInterval(()=>{
      //console.log("loginstate: " + this.isLoggedin, "sessionStore: " + sessionStorage.getItem('token'));
      if(sessionStorage.getItem('token')){
        this.isLoggedin = true;
      }
      else if(!sessionStorage.getItem('token')){
        this.isLoggedin = false;
        
      }
    }, 200);
    
  }

  ngOnInit(){
    setInterval(()=>{
      if(this.route){
        console.log(this.route);
      }
    }, 1000);
  }

  

}
