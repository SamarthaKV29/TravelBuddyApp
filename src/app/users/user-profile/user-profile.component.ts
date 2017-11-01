import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})

export class UserProfileComponent implements OnInit, AfterViewInit {
  loggedIn: boolean = false;
  loading: boolean = false;
  imgLoad: boolean = false;
  imgLoaded: boolean = undefined;
  users: User[];
  user: User;
  message: string = "";
  updStatus: boolean = false;
  @ViewChild('profilepic') profilepic: ElementRef;

  constructor(private UserService: UserService, private router: Router, private route: ActivatedRoute) {
    var t;
    if (t = sessionStorage.getItem('token')) {
      this.loggedIn = true;
      var s = JSON.parse(t);
      this.user = s.user;
    }
    else{
      this.sendLogin();
    }
  }

  sendLogin(){
    this.message = "Please login first. Redirecting . . 2s";
    setTimeout(() => {
      this.router.navigate(['login', 'true']);
    }, 2000);
  }


  ngAfterViewInit() {
    if (this.loggedIn)
      if (this.user.profileData.profilePic) {
        this.profilepic.nativeElement.src = this.user.profileData.profilePic;
        this.imgLoaded = true;
        return;
      }
    else
      this.sendLogin();
  }


  handleNewDP(event) {
    this.imgLoad = true;
    var image: File = event.target.files[0];
    if (image) {
      var reader = new FileReader();
      reader.onloadend = (e) => {
        this.user.profileData.profilePic = reader.result;
      }
      reader.readAsDataURL(image);
      this.imgLoaded = true;
      return
    }
    this.imgLoad = false;
  }

  initUserProfile(uname: string) {
    if(this.loggedIn){
      if (this.user.profileData == undefined || this.user.profileData == {}){
        this.user.profileData = {
          url: "",
          gender: "",
          bio: "",
          profilePic: ""
        };
        return;
      }
      else{
        if(this.user.profileData.profilePic)
          this.profilepic.nativeElement.src = this.user.profileData.profilePic;
      }
    }
    else
      this.sendLogin();
  }
  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      if (params['updstate'] == "false") {
        this.updStatus = false;
        this.message = "Failed to update, please check details.";
      }
      else if (params['updstate'] == "true") {
        this.updStatus = true;
        this.message = "Updated details Successfully.";
        this.router.navigate(['profile/', this.user.username]);
      }
      else {
        this.initUserProfile(params['updstate']);
        //this.validate();
      }
    });

    this.loading = false;
  }

  validate() {
    this.message = "";
    if (this.user)
      for (let key in this.user.profileData) {
        if (this.user.profileData[key] == "") {
          this.message = "Please enter update your " + key + ", ";
        }
      }
    else
      this.message = "Please try again."
    if (this.message == "")
      this.message = "Ready to submit."
  }



  onSubmit() {
    this.validate();
    if (this.message.length > 1)
      this.UserService.updateUser(this.user).then(success => {
        this.router.navigate(['profile', 'true']);
      }, reject => {
        this.router.navigate(['profile', 'false']);
      });
  }

}



// onSelect(){
//   if(this.profileData.originAddress.state){
//     this.loading = true;
//     this.profileData.originAddress.state = this.LocationService.getState(this.profileData.originAddress.state);
//     console.log(this.profileData.originAddress.state);
//     this.LocationService.getCities(this.profileData.originAddress.state).then((response)=>{
//       var x = response._body.substring(1, response._body.length - 1);
//       x = JSON.parse(x);
//       var result = x.result;
//       for(let x in result){
//         this.cities.push(result[x].City);
//       }
//       this.cities = this.cities.filter((elem, index)=>{
//         return index == this.cities.indexOf(elem);
//       });
//       this.loading = false;
//     });
//   }
// }