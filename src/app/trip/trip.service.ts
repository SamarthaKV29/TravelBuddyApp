import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TripService {
    private TripsUrl = 'https://travel-buddy-app.herokuapp.com/api/v1/trips';

    constructor (private http: Http) {}

    // get("/api/Trips")
    getTrips(userEmailID: String): Promise<void | Trip[]> {

      return this.http.get(this.TripsUrl)
                 .toPromise()
                 .then(response => {
                     var trips = response.json() as Trip[];
                     trips = trips.filter(trip => trip.uname == userEmailID);
                     return trips;
                    })
                 .catch(handle);
    }
    //post`
    createTrip(newTrip: Trip): Promise<void | Trip> {
        return this.http.post(this.TripsUrl, newTrip)
                   .toPromise()
                   .then(response => response.json() as Trip)
                   .catch(handle);
      }
  
}


function handle(err){
    console.log(err);
}