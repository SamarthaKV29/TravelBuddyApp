import { Component, Input, OnInit } from '@angular/core';
import { DateTimePickerModule } from 'ng-pick-datetime'

@Component({
  selector: 'app-createtrip',
  templateUrl: './createtrip.component.html',
  styleUrls: ['./createtrip.component.css'],
  providers: [DateTimePickerModule]
})
export class CreatetripComponent {
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
 
}
