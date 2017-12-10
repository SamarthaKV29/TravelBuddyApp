import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { RouterLink, Router, ActivatedRoute, Event as RouterEvent, NavigationStart, NavigationCancel, NavigationEnd, NavigationError} from '@angular/router';
import {SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit{
  landing: boolean = true;
  isLoggedin: boolean = false;
  title = 'TravelBuddy';  
  collapsed: boolean = true;
  loading: boolean = true;
  currentUser: SocialUser;

  @ViewChild('collapsible') collapsible: ElementRef;
  
  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2){
    this.router.events.subscribe((event: RouterEvent) => {
      this.navIntercept(event);
    });
    if(localStorage.getItem("UserTok")){
      this.isLoggedin = true;
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
    else{
      this.isLoggedin = false;
    }
    
  }

  navIntercept(event: RouterEvent): void{
    if(event instanceof NavigationStart){
      this.loading = true;
    }
    if(event instanceof NavigationEnd){
      this.loading = false;
    }
    if(event instanceof NavigationCancel || event instanceof NavigationError){
      this.loading = false;
    }
  }
  ngOnInit(){
    //console.log(this.router.url);
    setInterval(()=>{
      if(this.router.url == "/"){
        this.landing = true;
      }
      else{
        this.landing = false;
      }
    }, 200)
  }

  collapse(){
    if(this.collapsed){
      this.renderer.removeClass(this.collapsible.nativeElement, 'collapse');
      this.collapsed = false;
      return;
    }
    else{
      this.renderer.addClass(this.collapsible.nativeElement, 'collapse');
      this.collapsed = true;
      return;
    }
        
  }
  

}
