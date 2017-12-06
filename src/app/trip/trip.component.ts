import { Component, OnInit } from '@angular/core';
import {TripService} from './trip.service';
import {Trip} from './trip'; 

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {


  trips: Trip[];
  constructor(private TripService: TripService) { }

  ngOnInit() {
    this.TripService.getTrips().then((trips: Trip[])=>{
      this.trips = trips.map((trip) => {
        return trip;
      });
    });
  }

}