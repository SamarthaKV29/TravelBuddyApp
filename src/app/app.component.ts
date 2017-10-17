import { Component, OnInit } from '@angular/core';
import { RouterLink, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit{
  
  isLoggedin : boolean = false;
  title = 'TravelBuddy';  
  

  constructor(private router: Router){
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
    this.router.navigate(['landing']);
  }

  ngOnInit(){
    
  }

  

}
