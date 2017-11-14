import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { RouterLink, Router, ActivatedRoute, Event as RouterEvent, NavigationStart, NavigationCancel, NavigationEnd, NavigationError} from '@angular/router';
import { User } from './users/user';


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
  currentUser: User;

  @ViewChild('collapsible') collapsible: ElementRef;
  
  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2){
    this.router.events.subscribe((event: RouterEvent) => {
      this.navIntercept(event);
    });
    sessionStorage.clear();
    let checker = setInterval(()=>{
      //console.log("loginstate: " + this.isLoggedin, "sessionStore: " + sessionStorage.getItem('token'));
      if(sessionStorage.getItem('token')){
        this.isLoggedin = true;
        var tok = sessionStorage.getItem('token');
        var s = JSON.parse(tok);
        this.currentUser = s.user;
      }
      else if(!sessionStorage.getItem('token')){
        this.isLoggedin = false;
        this.currentUser = null;
      }
    }, 200);
    
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
