import { Component, OnInit } from '@angular/core';
import { PalService } from './pal.service';
import { Pal } from './pal';
import { SocialUser } from 'angular4-social-login';
import { TripService } from '../trip/trip.service';
import { Trip } from '../trip/trip';



@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements OnInit {


  currUser: SocialUser;
  trips: Trip[];
  pals: Pal[];
  /*  = [
    new Pal("snehakou@gmail.com", [], "req"),
  ]*/

  constructor(private palServe: PalService) {
    this.currUser = JSON.parse(localStorage.getItem("UserTok"));
    if (!this.pals && this.currUser != null)
      this.palServe.getPals(this.currUser.email).then((pals: Pal[]) => {
        this.pals = pals.map((pal) => {
          return pal;
        });
      });

  }

  ngOnInit() {

  }


}
