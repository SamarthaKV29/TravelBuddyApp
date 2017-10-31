import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ UserService ]
})

export class UserProfileComponent implements OnInit{
  loggedIn: boolean = false;
  loading: boolean = false;
  imgLoad: boolean = false;
  users: User[];
  user: User;
  agelist: number[] = new Array();
  message: string = "";
  updStatus: boolean = false;

  constructor (private UserService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = {
      name: "",
      username: "",
      password: "",
      email: "",
      created: {
        date: new Date()
      },
      phone: "",
      roles: ['user'],
      profileData: {
        url: "",
        gender:"",
        bio:"",
        profilePic: ""
      }
    };
  }

  ngOnInit(){  
    this.loading = true;
    for(var i=0;i<90;i++){
      this.agelist[i] = (i+13);
    }
    this.route.params.subscribe((params)=>{
      if(params['updstate'] == "false"){
        this.updStatus = false;
        this.message = "Failed to update, please check details.";
      }
      else if(params['updstate'] == "true"){
        this.updStatus = true;
        this.message = "Updated details Successfully.";
        this.ngOnInit();
      }
      else if (params['updstate']){
        this.message = "Please enter your details."
      }
      setTimeout(()=>{
        this.message = undefined;
      }, 8000);
    });
    var t;
    if(t = sessionStorage.getItem('token')){
      this.loggedIn = true;
      var s = JSON.parse(t);
      this.user = s.user;
    }
    else{
      this.message = "Please login first. Redirecting . . .";
      setTimeout(()=>{
        this.router.navigate(['login', 'true']);
      }, 3000);
    }
    this.loading = false;
  }

  handleNewDP(event){
    this.imgLoad = true;
    var image:File = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = (e)=>{
      this.user.profileData.profilePic = String(reader.result);
    }
    reader.readAsDataURL(image);
    this.imgLoad = false;
  }
  onSelect(){
    // if(this.profileData.originAddress.state){
    //   this.loading = true;
    //   this.profileData.originAddress.state = this.LocationService.getState(this.profileData.originAddress.state);
    //   console.log(this.profileData.originAddress.state);
    //   this.LocationService.getCities(this.profileData.originAddress.state).then((response)=>{
    //     var x = response._body.substring(1, response._body.length - 1);
    //     x = JSON.parse(x);
    //     var result = x.result;
    //     for(let x in result){
    //       this.cities.push(result[x].City);
    //     }
    //     this.cities = this.cities.filter((elem, index)=>{
    //       return index == this.cities.indexOf(elem);
    //     });
    //     this.loading = false;
    //   });
    // }
  }

  onSubmit(){
  	this.UserService.updateUser(this.user).then(success=>{
      this.router.navigate(['profile', 'true']);
    }, reject=>{
      this.router.navigate(['profile', 'false']);
    });
  }

}