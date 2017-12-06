webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:700);", ""]);

// module
exports.push([module.i, "body{\n\twidth: 100% !important;\n    height: 100%;\n    padding: 5%;\n    padding-top: 0;\n}\n.navbar-inverse{\n    background-color:#2f296b;;\n}\n.navbar {\n    min-height: 50px;\n  }\n.navbar-brand{\n    height: 50px;\n\ttext-shadow: 2px 2px 3px rgba(255,255,255,0.1);\n}\n.container-fluid{\n    padding: 15px 7%;\n}\n#collapsible ul.nav * a{\n\tcolor: white !important;\n}\n\n#collapsible ul.nav * a:hover{\n    color: gold !important;\n}\n\nrouter-outlet{\n    text-align: center;\n\tmargin-top: 80px;\n\theight: auto;\n}\n\n.welcomeColor {\n    color: white;\n}\n.wrapper{\n    margin-top: 80px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" (click)=\"collapse()\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span> \n            </button>\n        <a class=\"navbar-brand colorChangeAnimation d-flex\" routerLink='/'>\n          <span class=\"d-inline\">Travel Buddy</span>\n        </a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"collapsible\" #collapsible>\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a class=\"active\" [routerLink]=\"['/home']\">Home</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/about']\">About</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/team']\">Team</a>\n          </li>\n          \n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li  *ngIf=\"!this.isLoggedin\">\n            <a [routerLink]=\"['/login']\"><i class=\"glyphicon glyphicon-log-in\"></i>Log In</a>\n          </li>\n          <li  *ngIf=\"this.isLoggedin\">\n            <a [routerLink]=\"['/message']\"><i class=\"glyphicon glyphicon-envelope\"></i>Message</a>\n          </li>\n          <li  *ngIf=\"this.isLoggedin\">\n            <a [routerLink]=\"['/manage']\"><i class=\"glyphicon glyphicon-plane\"></i>Trips</a>\n          </li>\n          <li *ngIf=\"this.isLoggedin\">\n            <a [routerLink]=\"['/login']\"><i class=\"glyphicon glyphicon-log-out\"></i>Logout</a>\n          </li>\n          \n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\" style=\"width:100%; padding:0;margin:0;\">\n    <div class=\"wrapper\">\n      <div class=\"loading\" *ngIf=\"this.loading\">\n          <p class=\"alert alert-warning\">Loading . . . </p>\n      </div>\n      <router-outlet *ngIf=\"!this.loading\"></router-outlet>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, route, renderer) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.renderer = renderer;
        this.landing = true;
        this.isLoggedin = false;
        this.title = 'TravelBuddy';
        this.collapsed = true;
        this.loading = true;
        this.router.events.subscribe(function (event) {
            _this.navIntercept(event);
        });
        // sessionStorage.clear();
        // let checker = setInterval(()=>{
        //   //console.log("loginstate: " + this.isLoggedin, "sessionStore: " + sessionStorage.getItem('token'));
        //   if(sessionStorage.getItem('token')){
        //     this.isLoggedin = true;
        //     var tok = sessionStorage.getItem('token');
        //     var s = JSON.parse(tok);
        //     this.currentUser = s.user;
        //   }
        //   else if(!sessionStorage.getItem('token')){
        //     this.isLoggedin = false;
        //     this.currentUser = null;
        //   }
        // }, 200);
        if (localStorage.getItem("UserTok")) {
            this.isLoggedin = true;
            try {
                var t = localStorage.getItem('UserTok');
                var tt = JSON.parse(t);
                if (tt instanceof __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__["SocialUser"]) {
                    this.currentUser = tt;
                }
            }
            catch (err) {
                console.log("Failed, please login.");
            }
        }
        else {
            this.isLoggedin = false;
        }
    }
    AppComponent.prototype.navIntercept = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
            this.loading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
            this.loading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */]) {
            this.loading = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.router.url);
        setInterval(function () {
            if (_this.router.url == "/") {
                _this.landing = true;
            }
            else {
                _this.landing = false;
            }
        }, 200);
    };
    AppComponent.prototype.collapse = function () {
        if (this.collapsed) {
            this.renderer.removeClass(this.collapsible.nativeElement, 'collapse');
            this.collapsed = false;
            return;
        }
        else {
            this.renderer.addClass(this.collapsible.nativeElement, 'collapse');
            this.collapsed = true;
            return;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('collapsible'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "collapsible", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_error_error_component__ = __webpack_require__("../../../../../src/app/utilities/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_landing_landing_component__ = __webpack_require__("../../../../../src/app/utilities/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilities_about_about_component__ = __webpack_require__("../../../../../src/app/utilities/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utilities_team_team_component__ = __webpack_require__("../../../../../src/app/utilities/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__chatbox_chatbox_component__ = __webpack_require__("../../../../../src/app/chatbox/chatbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trip_trip_component__ = __webpack_require__("../../../../../src/app/trip/trip.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { UserDetailComponent } from './users/user-detai




//import { UserProfileComponent } from './users/user-profile/user-profile.component';
//import { ForgotPassComponent } from './users/fl/user-detail.component';
//import { UserService } from './_services/user.service';orgot-pass/forgot-pass.component';









var config = new __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["GoogleLoginProvider"]("230271184229-ipk8nc2c9r1bfiuvpn0naa5a69ggnojk.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["FacebookLoginProvider"]("227631451109453")
    }
]);
function provideConfig() {
    return config;
}
var homeRoutes = [
    // { path: "create", component: CreatetripComponent},
    { path: "manage", component: __WEBPACK_IMPORTED_MODULE_16__trip_trip_component__["a" /* TripComponent */] },
];
var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], children: homeRoutes, pathMatch: "full" },
    //{ path: 'signup/:regstate', component: UserDetailComponent },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], pathMatch: "full" },
    //{ path: 'forgotpass', component: ForgotPassComponent },
    //{ path: 'profile/:user', component: UserProfileComponent},
    //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_9__utilities_error_error_component__["a" /* ErrorComponent */], pathMatch: "full" },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__utilities_about_about_component__["a" /* AboutComponent */], pathMatch: "full" },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_13__utilities_team_team_component__["a" /* TeamComponent */], pathMatch: "full" },
    { path: 'message', component: __WEBPACK_IMPORTED_MODULE_15__chatbox_chatbox_component__["a" /* ChatboxComponent */], pathMatch: "full" },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__utilities_landing_landing_component__["a" /* LandingComponent */], pathMatch: "full" }
];
//{ path: '**', component: AppComponent},
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            //UserDetailComponent,
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            //UserProfileComponent,
            //ForgotPassComponent,
            __WEBPACK_IMPORTED_MODULE_9__utilities_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__utilities_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__utilities_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__chatbox_chatbox_component__["a" /* ChatboxComponent */],
            // InboxComponent,
            // ManagetripsComponent,
            // CreatetripComponent,
            __WEBPACK_IMPORTED_MODULE_13__utilities_team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_16__trip_trip_component__["a" /* TripComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["SocialLoginModule"], __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__["DateTimePickerModule"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chatbox/chatbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right{\r\n    text-align: right;\r\n}\r\n.chatbox{\r\n    width:400px;\r\n    height:500px;\r\n    border: 1px solid #ccc;\r\n    padding: 16px;\r\n}\r\n.messages{\r\n    height:470px;\r\n    overflow: auto;\r\n}\r\n.input-container{\r\n    height: 30px;\r\n    margin-left: -16px;\r\n    margin-right: -16px;\r\n    vertical-align: middle;\r\n    padding-top: 10px;\r\n    border-top:1px solid #ccc;\r\n}\r\n.input-container .inputtext{\r\n    width:calc(100% - 100px);\r\n}\r\n.input-container button{\r\n    width: 90px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chatbox/chatbox.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\" integrity=\"sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ\"\r\n  crossorigin=\"anonymous\">\r\n\r\n<div class=\"chatbox\" style=\"border-radius:5px;\">\r\n  <div class=\"messages\">\r\n    <div *ngFor=\"let message of messages\" [class.right]=\"message.self\" class=\"alert alert-info \">\r\n      {{message.text}}\r\n    </div>\r\n  </div>\r\n  <div style=\"margin-top:30px;\">\r\n    <div>\r\n      <input type=\"text\" class=\"inputtext\" [(ngModel)]=\"replyMessage\" style=\"width:70%; height:50px; border-radius:5px\">\r\n      <button class=\"replyBtn alert alert-danger  \" (click)=\"reply()\" style=\"margin-left:10px\">Send</button>\r\n    </div>\r\n  </div>\r\n</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "

/***/ }),

/***/ "../../../../../src/app/chatbox/chatbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatboxComponent = (function () {
    function ChatboxComponent() {
        //messages = ["Hi how are you","I am fine"];
        this.messages = [{
                "text": "Hi How are you?",
                "self": false
            }, {
                "text": "I am fine",
                "self": true
            }];
        this.replyMessage = "";
    }
    ChatboxComponent.prototype.ngOnInit = function () {
    };
    ChatboxComponent.prototype.reply = function () {
        this.messages.push({
            "text": this.replyMessage,
            "self": true
        });
        this.replyMessage = "";
    };
    return ChatboxComponent;
}());
ChatboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chatbox',
        template: __webpack_require__("../../../../../src/app/chatbox/chatbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chatbox/chatbox.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatboxComponent);

//# sourceMappingURL=chatbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\n    margin: auto;\n    padding: 0;\n    width: 100%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row center\">\n        <div class=\"col center\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <div class=\"panel-title\" *ngIf=\"!this.loggedIn\">\n                        {{this.message}}\n                    </div>\n                </div>\n                <!--  -->\n                \n                <div class=\"panel-content\">\n                    <ul class=\"nav nav-tabs\" *ngIf=\"this.loggedIn\">\n                        <li><a [routerLink]=\"['create']\" ><i class=\"glyphicon glyphicon-plus-sign\"></i> Create Trip</a></li>\n                        <li><a [routerLink]=\"['manage']\"><i class=\"glyphicon glyphicon-cog\"></i> Manage Trips</a></li>\n                        <li><a [routerLink]=\"['inbox']\"><i class=\"glyphicon glyphicon-comment\"></i> Inbox</a></li>\n                    </ul>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
        this.message = "Please login first.";
        this.loggedIn = false;
        setInterval(this.checkLoggedIn, 5000);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkLoggedIn();
    };
    HomeComponent.prototype.checkLoggedIn = function () {
        if (localStorage.getItem('UserTok')) {
            this.loggedIn = true;
            try {
                var t = localStorage.getItem('UserTok');
                var tt = JSON.parse(t);
                if (tt instanceof __WEBPACK_IMPORTED_MODULE_2_angular4_social_login__["SocialUser"]) {
                    this.currentUser = tt;
                }
            }
            catch (err) {
                console.log("Failed, please login.");
            }
        }
        else
            this.loggedIn = false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-transparent {\n  background-color: transparent;\n}\n\n:host {\n  height: 100%;\n}\n\n.photo {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.card {\n  width: 20rem;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-transparent text-center\">\n  <div *ngIf=\"!user\" class=\"card text-center\">\n    <h6 class=\"card-header\">\n      Login\n    </h6>\n    <div class=\"card-block\">\n      <h4><p class=\"card-text\">Sign in with</p></h4>\n    </div>\n    <div class=\"card-block\">\n      <button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\"><span class=\"fa fa-google\"></span></button>\n      <button class=\"btn btn-social-icon btn-facebook\" (click)=\"signInWithFB()\"><span class=\"fa fa-facebook\"></span></button>\n    </div>\n  </div>\n  <div *ngIf=\"user\" class=\"card text-center\">\n    <h6 class=\"card-header\">\n      Social Login Demo\n    </h6>\n    <div class=\"card-block\"></div>\n    <img class=\"card-img-top img-responsive photo\" src=\"{{ user.photoUrl }}\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ user.name }}</h4>\n      <p class=\"card-text\">{{ user.email }}</p>\n    </div>\n    <div class=\"card-block\">\n      <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (onfullilled) {
            if (_this.user && !localStorage.getItem("UserTok")) {
                localStorage.setItem("UserTok", JSON.stringify(_this.user));
            }
            console.log(_this.user);
            _this.router.navigate(['home']);
        });
    };
    LoginComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (onfullilled) {
            if (_this.user && !localStorage.getItem("UserTok")) {
                localStorage.setItem("UserTok", JSON.stringify(_this.user));
            }
            console.log(_this.user);
            _this.router.navigate(['home']);
        });
        ;
    };
    LoginComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().then(function (success) {
            if (_this.user && localStorage.getItem("UserTok")) {
                localStorage.clear();
                _this.user = null;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'social-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/trip/trip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trip/trip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel panel-content\">\n    <div class=\"alert alert-info\">\n      <ul>\n        <li *ngFor=\"let trip of this.trips\">\n          <ul>\n            <li>{{trip.from}}</li>  \n            <li>{{trip.to}}</li>  \n          </ul>\n          \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/trip/trip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trip_service__ = __webpack_require__("../../../../../src/app/trip/trip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripComponent = (function () {
    function TripComponent(TripService) {
        this.TripService = TripService;
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.TripService.getTrips().then(function (trips) {
            _this.trips = trips.map(function (trip) {
                return trip;
            });
        });
    };
    return TripComponent;
}());
TripComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trip',
        template: __webpack_require__("../../../../../src/app/trip/trip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trip/trip.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trip_service__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trip_service__["a" /* TripService */]) === "function" && _a || Object])
], TripComponent);

var _a;
//# sourceMappingURL=trip.component.js.map

/***/ }),

/***/ "../../../../../src/app/trip/trip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripService = (function () {
    function TripService(http) {
        this.http = http;
        this.TripsUrl = '/api/v1/trips';
    }
    // get("/api/Trips")
    TripService.prototype.getTrips = function () {
        return this.http.get(this.TripsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(handle);
    };
    //post`
    TripService.prototype.createTrip = function (newTrip) {
        return this.http.post(this.TripsUrl, newTrip)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(handle);
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TripService);

function handle(err) {
    console.log(err);
}
var _a;
//# sourceMappingURL=trip.service.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\n    box-sizing: border-box;\n  }\n*, *:before, *:after {\n    box-sizing: inherit;\n  }\nimg{\n    width:100%;\n    height:250px;\n}\nh2{\n    color: #333180;\n}\n  .column {\n    float: left;\n    width: 33.3%;\n    margin-bottom: 16px;\n    padding: 0 8px;\n  }\n  \n  @media (max-width: 650px) {\n    .column {\n      width: 100%;\n      display: block;\n    }\n  }\n  \n  .card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  }\n  \n  .inner-content {\n    padding: 16px;\n    text-align: center;\n  }\n  \n  .inner-content::after, .row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  \n  .title {\n    color: grey;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container box\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <img src=\"/assets/imgs/subway.jpg\" >\n            <div class=\"inner-content\">\n              <h2>Create</h2><br>\n              <p class=\"title\">Create profile and trip</p><br>\n              <p>Like other User to travel with them</p><br>\n            </div>\n          </div>\n        </div>\n      \n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <img src=\"/assets/imgs/friends1.jpg\">\n            <div class=\"inner-content\">\n              <h2>Match</h2><br>\n              <p class=\"title\">If they Like you, Its a Match</p><br>\n              <p>Keep Searching</p><br>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <img src=\"/assets/imgs/friends.jpg\">\n            <div class=\"inner-content\">\n              <h2>Travel</h2><br>\n              <p class=\"title\">Travel and Chat with matched user</p><br>\n              <p>Get Started Now!</p><br>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/utilities/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 center-block\">\n    <div class=\"panel\">\n      <div class=\"panel-title\">Error</div>\n      <div class=\"panel-body\">Please try again</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/utilities/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/utilities/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\n  .img1 {\n    display: none;\n\n  }\n}\n.btn {\n  background: #191842;\n  background-image: linear-gradient(to bottom, #191842, #6461b3);\n  border-radius: 58px;\n  box-shadow: 0px 1px 3px #666666;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 20px;\n  padding: 15px 40px 15px 40px;\n  text-decoration: none;\n}\n\n.btn:hover {\n  background: #6461b3;\n  background-image: linear-gradient(to bottom, #6461b3, #191842);\n  text-decoration: none;\n}\n\n.img1{\n  width:500px;\n  -webkit-transform: rotate(-7deg);\n          transform: rotate(-7deg);\n  margin-top: 50px; \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.center{\n  margin: auto;\n  text-align: center !important;\n}\n\n.design{\n  border-top-left-radius: 400px;\n  border-top-right-radius: 400px;\n  border-bottom-left-radius: 200px;\n  border-bottom-right-radius: 200px;\n  \n  -webkit-animation: fade-in 4s ease infinite alternate;\n  \n          animation: fade-in 4s ease infinite alternate;\n}\n.fade-in{\n  -webkit-animation: fade 1s ease 1 alternate;\n          animation: fade 1s ease 1 alternate;\n}\n@-webkit-keyframes fade{\n  0%{opacity: 0%;}\n  25%{opacity: 50%;}\n  90%{opacity: 70}\n  100%{opacity: 100%;}\n}\n@keyframes fade{\n  0%{opacity: 0%;}\n  25%{opacity: 50%;}\n  90%{opacity: 70}\n  100%{opacity: 100%;}\n}\n@-webkit-keyframes fade-in{\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\n}\n@keyframes fade-in{\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\n}\ndiv{\n  padding: 10px;\n}\n\n.content{\n  -webkit-animation: landinganim 0.5s 0s alternate both ease-in;\n          animation: landinganim 0.5s 0s alternate both ease-in; \n}\n.content1{\n  color: lightsalmon;\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\n          animation: landinganim2 1s 0.6s alternate both ease-in;\n}\n.content2{\n  color: lightgreen;\n  -webkit-animation: landinganim3 1s 0.6s alternate both ease-in;\n          animation: landinganim3 1s 0.6s alternate both ease-in;\n}\n.content3{\n  color: lightskyblue;\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\n          animation: landinganim2 1s 0.6s alternate both ease-in;\n}\nspan{\n  color: gold !important;\n}\n.logo{\n  width: 64px;\n}\n\n@-webkit-keyframes landinganim{\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\n}\n\n@keyframes landinganim{\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\n}\n\n@-webkit-keyframes landinganim2 {\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\n}\n\n@keyframes landinganim2 {\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\n}\n\n@-webkit-keyframes landinganim3 {\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\n}\n\n@keyframes landinganim3 {\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row center\">\n            <div class=\"col-md-6 center \">\n                <img class=\"img1 coolShadow\" src=\"/assets/imgs/friends1.jpg\"/>\n            </div>\n            <div class=\"col-md-6 center design fade-in\">\n                <img class=\"logo content coolShadow\" src=\"/assets/imgs/travellogoicon.png\"/>\n                <div class=\"content1 coolShadow\">\n                    <h1>Find Buddies</h1>\n                    <span>with whom you want to</span>\n                </div>\n                <div class=\"content2 coolShadow\">\n                    <h1>Commute</h1>\n                    <span>and</span>\n                </div>\n                <div class=\"content3 coolShadow\">\n                    <h1>Share</h1>\n                    <span>your boredom</span>\n                </div>\n\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/utilities/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/utilities/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/landing/landing.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.heading-title {\n    margin-bottom: 100px;\n}\n.text-center {\n    text-align: center;\n}\n.heading-title h3 {\n    margin-bottom: 0;\n    letter-spacing: 2px;\n    font-weight: normal;\n}\n.team-member, .team-member .team-img {\n    position: relative;\n}\n.team-member {\n    overflow: hidden;\n}\n.team-member, .team-member .team-img {\n    position: relative;\n}\n.team-member{\n    margin: 0 10px;\n    color: #333;\n    font-size: 16px;\n}\n.team-title {\n    position: static;\n    padding: 20px 0;\n    display: inline-block;\n    letter-spacing: 2px;\n    width: 100%;\n}\n.team-title h5 {\n    margin-bottom: 0px;\n    display: block;\n    text-transform: uppercase;\n}\n.team-title span {\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #a5a5a5;\n    letter-spacing: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"heading-title text-center\">\n            <h3>OUR TEAM </h3>\n        </div>\n\n        <div class=\"col-md-3 col-sm-3\">\n            <div class=\"team-member\">\n                <div class=\"team-img\">\n                    <img src=\"/assets/imgs/aanchal.jpeg\" alt=\"team member\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"team-title\">\n                <h5>Aanchal Sharma</h5>\n                <span>Computer Science</span>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-sm-3\">\n            <div class=\"team-member\">\n                <div class=\"team-img\">\n                    <img src=\"/assets/imgs/akul.jpeg\" alt=\"team member\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"team-title\">\n                <h5>Akul Swami</h5>\n                <span>Computer Engineering</span>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-sm-3\">\n            <div class=\"team-member\">\n                <div class=\"team-img\">\n                    <img src=\"/assets/imgs/sam.jpeg\" alt=\"team member\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"team-title\">\n                <h5>Samartha</h5>\n                <span>Computer Science</span>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-3\">\n            <div class=\"team-member\">\n                <div class=\"team-img\">\n                    <img src=\"/assets/imgs/riya.jpeg\" alt=\"team member\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"team-title\">\n                <h5>Riya Bulia</h5>\n                <span>Computer Science</span>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/utilities/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map