import { Component, OnInit } from '@angular/core';
import {PalService} from './pal.service';
import {Pal} from './pal';
import {SocialUser} from 'angular4-social-login';



@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements OnInit {


  currUser: SocialUser;
  
  constructor() { }

  ngOnInit() {

  }

}
