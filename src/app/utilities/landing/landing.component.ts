import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: []
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //localStorage.clear();
  }

}
