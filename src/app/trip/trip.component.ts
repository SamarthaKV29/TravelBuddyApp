import { Component, OnInit } from '@angular/core';
import {TripService} from './trip.service';
import {Trip} from './trip'; 


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})


export class TripComponent implements OnInit {

  selectedTrip: Trip;
  trips: Trip[] = [{"_id":"5a272a97734d1d08d124fbb4","uname":"samarthakv29@gmail.com","from":"Boston","to":"Lowell","days":[1,0,1,0,0,0,0]},{"_id":"5a272b16734d1d08d124ff06","uname":"swami.akul@gmail.com","from":"Nashua","to":"Lawrence","days":[1,0,1,1,0,0,0]},{"_id":"5a272b62734d1d08d125017d","uname":"aanchal.sharma.punj@gmail.com","from":"Nashua","to":"Lawrence","days":[1,1,1,1,0,0,0]},{"_id":"5a272b9d734d1d08d12502e9","uname":"riyabulia12@gmail.com","from":"Boston","to":"Lowell","days":[1,0,1,0,0,0,0]}];
  constructor(private TripService: TripService) { }

  ngOnInit() {
    if(!this.trips)
      this.TripService.getTrips().then((trips: Trip[])=>{
        this.trips = trips.map((trip) => {
          return trip;
        });
      });
  }


  onSelect(trip: Trip){
    this.selectedTrip = trip;
  }

}
