import { Injectable } from '@angular/core';
import { Country } from './Country';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CountryService {
    private CountriesUrl = 'https://travel-buddy-app.herokuapp.com/api/v1/countries';

    constructor(private http: Http) { }

    // get("/api/Countrys")
    getCountrys(): Promise<void | Country[]> {

        return this.http.get(this.CountriesUrl)
            .toPromise()
            .then(response => {
                var Countries = response.json() as Country[];
                return Countries;
            })
            .catch(handle);
    }

}


function handle(err) {
    console.log(err);
}