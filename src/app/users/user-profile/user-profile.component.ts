import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../_services/locationmap.service';
import { User } from '../user';
import { UserService } from '../../_services/user.service';
import { DateTimePickerModule } from 'ng-pick-datetime'

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ UserService, LocationService ]
})

export class UserProfileComponent implements OnInit{
  states: any = [];
  cities: any = [];
  loading: boolean = false;
  profileData: {
  	originAddress: {
      city: string;
      state: string[2];
      zip: string;
    };
    originTime: Date;
    destinationAddress: {
      city: string;
      state: string[2];
      zip: string;
    };
    destinationTime: Date;
    bio: string;
    profilePic: string;
  };
  users: User[];
  constructor (private UserService: UserService, private datepicker: DateTimePickerModule, private LocationService: LocationService) {
  	this.profileData = {
  		originAddress: {
        city: "",
        state: "",
        zip: ""
      },
      originTime: new Date(),
      destinationAddress: {
        city: "",
        state: "",
        zip: ""
      },
      destinationTime: new Date(),
      bio: "",
      profilePic: ""
    };
    var temp = this.LocationService.getStates();
    for(let state in temp){
      this.states.push(temp[state]);
    }
  }

  ngOnInit(){  }

  onSelect(){
    if(this.profileData.originAddress.state){
      this.loading = true;
      this.profileData.originAddress.state = this.LocationService.getState(this.profileData.originAddress.state);
      console.log(this.profileData.originAddress.state);
      this.LocationService.getCities(this.profileData.originAddress.state).then((response)=>{
        var x = response._body.substring(1, response._body.length - 1);
        x = JSON.parse(x);
        var result = x.result;
        for(let x in result){
          this.cities.push(result[x].City);
        }
        this.cities = this.cities.filter((elem, index)=>{
          return index == this.cities.indexOf(elem);
        });
        this.loading = false;
      });
    }
  }

  onSubmit(){
  	console.log(this.profileData);
  }

}