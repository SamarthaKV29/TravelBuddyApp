import { Component, OnInit } from '@angular/core';
import { TripService } from './trip.service';
import { Trip } from './trip';
import { SocialUser } from 'angular4-social-login';



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})


export class TripComponent implements OnInit {
  loggedIn: boolean = false;
  currUser: SocialUser = null;
  selectedTrip: Trip;
  trips: Trip[];
  viewing: Boolean = true;
  constructor(private TripService: TripService) { }

  ngOnInit() {
    this.currUser = JSON.parse(localStorage.getItem("UserTok"));
    if (!this.trips && this.currUser != null) {
      this.loggedIn = true;
      this.TripService.getTrips(this.currUser.email).then((trips: Trip[]) => {
        this.trips = trips.map((trip) => {
          return trip;
        });
      });
    }
    else {
      this.currUser = null;
      this.loggedIn = false;
    }


  }


  onSelect(trip: Trip) {
    this.selectedTrip = trip;
  }

}
