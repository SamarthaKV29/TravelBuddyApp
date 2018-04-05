import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angular4-social-login';
import { TripService } from '../trip/trip.service';
import { Trip } from '../trip/trip';
import { Pal } from '../pal/pal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  currentUser: SocialUser;
  trips: Trip[];
  pals: Pal[] = [
    new Pal("snehakou@gmail.com", [], "req"),
  ]
  constructor(private router: Router, private tripservice: TripService) { }


  ngOnInit() {
    if (localStorage.getItem("UserTok")) {
      this.currentUser = JSON.parse(localStorage.getItem("UserTok"));
      if (!this.trips)
        this.tripservice.getTrips(this.currentUser.email).then((trips: Trip[]) => {
          this.trips = trips.map((trip) => {
            return trip;
          });
        });

    }
    else {
      console.log("Please log in");
      localStorage.clear();
      this.router.navigate(['login']);

    }
  }


}
