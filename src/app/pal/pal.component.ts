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
  pals: Pal[] = [
    new Pal("snehakou@gmail.com", [], "req"),
  ]
  constructor(private tripservice: TripService) {
    this.currUser = JSON.parse(localStorage.getItem("UserTok"));
    if (!this.trips && this.currUser != null)
      this.tripservice.getTrips(this.currUser.email).then((trips: Trip[]) => {
        this.trips = trips.map((trip) => {
          return trip;
        });
      });
  }

  ngOnInit() {

  }


}
