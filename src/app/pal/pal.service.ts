import { Injectable } from '@angular/core';
import { Pal } from './pal';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PalService{
    private PalsUrl="https://travel-buddy-app.herokuapp.com/api/v1/pals";
    constructor (private http: Http) {}

    getPals(userEmail: String): Promise<void| Pal[]>{
        return this.http.get(this.PalsUrl)
                        .toPromise()
                        .then(res=>{
                            var pals = res.json() as Pal[];
                            pals = pals.filter(pal => pal.userID == userEmail);
                            return pals;
                        })
                        .catch(handle);

    }

}


function handle(err){
    console.log(err);
}