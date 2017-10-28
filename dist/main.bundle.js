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

/***/ "../../../../../src/app/_services/locationmap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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



var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.stateList = {
            "AL": "Alabama",
            "AK": "Alaska",
            "AS": "American Samoa",
            "AZ": "Arizona",
            "AR": "Arkansas",
            "CA": "California",
            "CO": "Colorado",
            "CT": "Connecticut",
            "DE": "Delaware",
            "DC": "District Of Columbia",
            "FM": "Federated States Of Micronesia",
            "FL": "Florida",
            "GA": "Georgia",
            "GU": "Guam",
            "HI": "Hawaii",
            "ID": "Idaho",
            "IL": "Illinois",
            "IN": "Indiana",
            "IA": "Iowa",
            "KS": "Kansas",
            "KY": "Kentucky",
            "LA": "Louisiana",
            "ME": "Maine",
            "MH": "Marshall Islands",
            "MD": "Maryland",
            "MA": "Massachusetts",
            "MI": "Michigan",
            "MN": "Minnesota",
            "MS": "Mississippi",
            "MO": "Missouri",
            "MT": "Montana",
            "NE": "Nebraska",
            "NV": "Nevada",
            "NH": "New Hampshire",
            "NJ": "New Jersey",
            "NM": "New Mexico",
            "NY": "New York",
            "NC": "North Carolina",
            "ND": "North Dakota",
            "MP": "Northern Mariana Islands",
            "OH": "Ohio",
            "OK": "Oklahoma",
            "OR": "Oregon",
            "PW": "Palau",
            "PA": "Pennsylvania",
            "PR": "Puerto Rico",
            "RI": "Rhode Island",
            "SC": "South Carolina",
            "SD": "South Dakota",
            "TN": "Tennessee",
            "TX": "Texas",
            "UT": "Utah",
            "VT": "Vermont",
            "VI": "Virgin Islands",
            "VA": "Virginia",
            "WA": "Washington",
            "WV": "West Virginia",
            "WI": "Wisconsin",
            "WY": "Wyoming"
        };
        this.selectedState = "";
    }
    LocationService.prototype.getState = function (state) {
        for (var s in this.stateList) {
            if (state == this.stateList[s]) {
                return s;
            }
        }
    };
    LocationService.prototype.getStates = function () {
        return this.stateList;
    };
    LocationService.prototype.getCities = function (state) {
        if (state.length == 2 && state.toUpperCase() in this.stateList) {
            var stateUrl = "http://gomashup.com/json.php?fds=geo/usa/zipcode/state/" + state.toUpperCase() + "&jsoncallback=";
            return this.http.get(stateUrl)
                .toPromise()
                .then(function (response) { return response; })
                .catch(function (error) {
                var errMsg = (error.message) ? error.message :
                    error.status ? error.status + " - " + error.statusText : 'Server error';
                return errMsg;
            });
        }
        else {
            return;
        }
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=locationmap.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = '/api/v1/users';
    }
    // get("/api/Users")
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/Users")
    UserService.prototype.createUser = function (newUser) {
        return this.http.post(this.usersUrl, newUser)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/Users/:id") endpoint not used by Angular app
    // delete("/api/Users/:id")
    UserService.prototype.deleteUser = function (delUserId) {
        return this.http.delete(this.usersUrl + '/' + delUserId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/Users/:id")
    UserService.prototype.updateUser = function (putUser) {
        var putUrl = this.usersUrl + '/' + putUser._id;
        return this.http.put(putUrl, putUser)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        //console.log(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:700);", ""]);

// module
exports.push([module.i, "body{\r\n\twidth: 100% !important;\r\n    height: 100%;\r\n    padding: 5%;\r\n    padding-top: 0;\r\n    background: none;\r\n}\r\n\r\n.navbar-brand{\r\n\ttext-shadow: 2px 2px 3px rgba(255,255,255,0.1);\r\n}\r\n\r\n#collapsible ul.nav * a{\r\n\tcolor: white !important;\r\n}\r\n\r\n#collapsible ul.nav * a:hover{\r\n    color: gold !important;\r\n}\r\n\r\n\r\nrouter-outlet{\r\n    text-align: center;\r\n\tmargin-top: 80px;\r\n\theight: auto;\r\n}\r\n\r\n.welcomeColor {\r\n    color: white;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"container\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" (click)=\"collapse()\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span> \r\n            </button>\r\n        <a class=\"navbar-brand colorChangeAnimation d-flex\" routerLink='/'>\r\n          <span class=\"d-inline\">Travel Buddy</span>\r\n        </a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"collapsible\" #collapsible>\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a class=\"active\" routerLink='/home'><i class=\"glyphicon glyphicon-home\"></i> Home</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink='/about'><i class=\"glyphicon glyphicon-info-sign\"></i> About</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li *ngIf=\"!this.isLoggedin\">\r\n            <a [routerLink]=\"['/signup', undefined]\"><i class=\"glyphicon glyphicon-user\"></i> Sign Up</a>\r\n          </li>\r\n          <li  *ngIf=\"!this.isLoggedin\">\r\n            <a [routerLink]=\"['/login', true]\"><i class=\"glyphicon glyphicon-log-in\"></i> Log In</a>\r\n          </li>\r\n          <li *ngIf=\"this.isLoggedin\">\r\n            <a [routerLink]=\"['/userprof']\"><i class=\"glyphicon glyphicon-user\"></i> User Profile</a>\r\n          </li>\r\n          <li *ngIf=\"this.isLoggedin\">\r\n            <a [routerLink]=\"['/login', false]\"><i class=\"glyphicon glyphicon-log-out\"></i> Logout</a>\r\n          </li>\r\n          \r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"wrapper\">\r\n    <h1 class=\"h1 text-center coolShadow\" *ngIf=\"!this.isLoggedin\">Welcome to\r\n      <span class=\"colorChangeAnimation\">Travel Buddies</span>\r\n    </h1>\r\n    <app-landing *ngIf=\"landing\"></app-landing>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n</body>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        sessionStorage.clear();
        var checker = setInterval(function () {
            //console.log("loginstate: " + this.isLoggedin, "sessionStore: " + sessionStorage.getItem('token'));
            if (sessionStorage.getItem('token')) {
                _this.isLoggedin = true;
            }
            else if (!sessionStorage.getItem('token')) {
                _this.isLoggedin = false;
            }
        }, 200);
    }
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__ = __webpack_require__("../../../../../src/app/users/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_forgot_pass_forgot_pass_component__ = __webpack_require__("../../../../../src/app/users/forgot-pass/forgot-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utility_error_error_component__ = __webpack_require__("../../../../../src/app/utility/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utility_landing_landing_component__ = __webpack_require__("../../../../../src/app/utility/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utility_about_about_component__ = __webpack_require__("../../../../../src/app/utility/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__["a" /* HomeComponent */] },
    { path: 'signup/:regstate', component: __WEBPACK_IMPORTED_MODULE_5__users_user_detail_user_detail_component__["a" /* UserDetailComponent */] },
    { path: 'signup', redirectTo: 'signup/undefined' },
    { path: 'login', redirectTo: 'login/true' },
    { path: 'login/:loginstate', component: __WEBPACK_IMPORTED_MODULE_9__users_login_login_component__["a" /* LoginComponent */] },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_12__users_forgot_pass_forgot_pass_component__["a" /* ForgotPassComponent */] },
    { path: 'userprof', component: __WEBPACK_IMPORTED_MODULE_11__users_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_13__utility_error_error_component__["a" /* ErrorComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__utility_about_about_component__["a" /* AboutComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_5__users_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__users_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__users_forgot_pass_forgot_pass_component__["a" /* ForgotPassComponent */],
            __WEBPACK_IMPORTED_MODULE_13__utility_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__utility_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_16__utility_about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__["DateTimePickerModule"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/forgot-pass/forgot-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n    margin-top: 10%;\r\n  }\r\n\r\n.glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.panel-heading{\r\n  color: black;\r\n  background: #FFA17F;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to top, rgb(255, 142, 37), rgb(247, 153, 122)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/forgot-pass/forgot-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n  <div class=\"row centered-form\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Forgot Password</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form role=\"form\" class=\"form-horizontal\" action=\" \" method=\"post\" #regForm=\"ngForm\" novalidate>\r\n                    <fieldset>\r\n                        <div class=\"alert\" [class.alert-danger]='regState == false' [class.alert-success]='regState == true' *ngIf=\"message\">{{message}}</div>\r\n                        \r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-12  inputGroupContainer\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <i class=\"glyphicon glyphicon-envelope\"></i>\r\n                                    </span>\r\n                                    <input name=\"email\" required placeholder=\"mail@example.com\" #email=\"ngModel\" [(ngModel)]=\"emailID\" [(value)]=\"emailID\" class=\"form-control\" type=\"email\">\r\n                                </div>\r\n                                <div class=\"alert alert-warning\" [hidden]=\"emailID && emailID.length > 3 && emailID.indexOf('@') > 2 && emailID.indexOf('.', emailID.indexOf('@')) >= 3\">Please enter a valid email.</div>\r\n                            </div>\r\n                            \r\n                        </div>                            \r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-12\">\r\n                                <button type=\"button\" (click)=\"createUser()\" class=\"btn btn-info btn-block\">Submit\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>             \r\n        </div>      \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/users/forgot-pass/forgot-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassComponent; });
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

var ForgotPassComponent = (function () {
    function ForgotPassComponent() {
    }
    ForgotPassComponent.prototype.ngOnInit = function () {
        this.emailID = "";
    };
    return ForgotPassComponent;
}());
ForgotPassComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-pass',
        template: __webpack_require__("../../../../../src/app/users/forgot-pass/forgot-pass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/forgot-pass/forgot-pass.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForgotPassComponent);

//# sourceMappingURL=forgot-pass.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin home\">\r\n    <div class=\"row centered-form\">\r\n        <div class=\"col\">\r\n            <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"panel-title\">\r\n                        {{this.message}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-content\">\r\n                    {{this.currentUser}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
        this.message = "Please login first.";
        setInterval(this.checkLoggedIn, 5000);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkLoggedIn();
    };
    HomeComponent.prototype.checkLoggedIn = function () {
        if (sessionStorage.getItem('token')) {
            var curr;
            if (curr = sessionStorage.getItem('token')) {
                curr = JSON.parse(curr);
                this.currentUser = curr.user;
                this.message = "Welcome " + this.currentUser.username;
            }
        }
        else {
            this.message = "Please login first.";
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/users/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/home/home.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n    margin-top: 10%;\r\n  }\r\n\r\n.glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.panel-heading{\r\n  background: #ffc578; /* Old browsers */\r\n  background: linear-gradient(to bottom, #ffc578 0%,#fb9d23 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc578', endColorstr='#fb9d23',GradientType=0 ); /* IE6-9 */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n    <div class=\"row centered-form\">\r\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Log In \r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <p class=\"text-warning\" *ngIf=\"this.message\">{{this.message}}</p>\r\n                    <p class=\"text-success\" *ngIf=\"!this.loginstate\">Logged out successfully.</p>\r\n                    <form class=\"form-horizontal\" #userLogin=\"ngForm\" method=\"post\">\r\n                        <fieldset>\r\n                            <p class=\"text-danger bg-danger\" *ngIf=\"this.error\">Invalid username or password.</p>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-user\"></i>\r\n                                        </span>\r\n                                        <input name=\"username\" #name=\"ngModel\" [(ngModel)]=\"this.username\" placeholder=\"User Name\" class=\"form-control\" type=\"text\" required>\r\n                                        <span class=\"text-warning\" *ngIf=\"username.errors\">Invalid username</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-lock\"></i>\r\n                                        </span>\r\n                                        <input class=\"form-control\" #name=\"ngModel\" name=\"password\" type=\"password\" [(ngModel)]=\"this.password\" placeholder=\"****\" minlength=\"4\"/>\r\n                                        <span class=\"text-warning\" *ngIf=\"password.errors\">Check password</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"button\" (click)=\"checkLogin()\" class=\"btn btn-info btn-block\">Login\r\n                                    <i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\" *ngIf=\"loading\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <a [routerLink]=\"['/forgotpass']\">Forgot Password</a>\r\n                                    </div>\r\n                                </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>             \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
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
    function LoginComponent(UserService, router, route) {
        var _this = this;
        this.UserService = UserService;
        this.router = router;
        this.route = route;
        this.users = undefined;
        this.loginstate = undefined;
        this.username = "";
        this.password = "";
        this.loading = false;
        this.error = false;
        this.error = this.loading = false;
        if (this.users == undefined) {
            this.UserService.getUsers().then(function (users) {
                if (users) {
                    _this.users = users.map(function (user) {
                        if (user)
                            return user;
                    });
                }
            });
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['loginstate'] === "false")
                _this.loginstate = false;
            else
                _this.loginstate = true;
            if (!_this.loginstate || sessionStorage.getItem('token')) {
                sessionStorage.clear();
                _this.loading = false;
                _this.error = false;
                _this.router.navigate(['login', true]);
                _this.message = undefined;
            }
            else if (sessionStorage.getItem('token')) {
                _this.message = "Already logged in, redirecting to home";
                setTimeout(function () {
                    this.router.navigate(['home']);
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        this.loading = true;
        if (this.users) {
            var USER = this.users.find(function (x) { return x.username.toLowerCase() == _this.username.toLowerCase() && x.password === _this.password; });
            if (USER) {
                var currentMilli = new Date().getMilliseconds();
                var token = {
                    user: USER,
                    start: currentMilli
                };
                sessionStorage.setItem('token', JSON.stringify(token));
                this.router.navigate(['home']);
                this.error = false;
                this.username = this.password = "";
            }
            else {
                this.error = true;
                this.password = "";
            }
        }
        else {
            this.message = "Server busy, please try after some time.";
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/users/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n  margin-top: 10%\r\n}\r\n\r\n\r\n\r\n.panel-heading{\r\n  background: #cdeb8e;\r\n  background: linear-gradient(to bottom, #cdeb8e 0%,#a5c956 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cdeb8e', endColorstr='#a5c956',GradientType=0 ); /* IE6-9 */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n    <div class=\"row centered-form\">\r\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">\r\n                        Sign Up <i class=\"glyphicon glyphicon-question-sign\" style=\"float: right;\"></i>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form role=\"form\" class=\"form-horizontal\" action=\" \" method=\"post\" #regForm=\"ngForm\" novalidate>\r\n                        <fieldset>\r\n                            <div class=\"alert\" [class.alert-danger]='regState == false' [class.alert-success]='regState == true' *ngIf=\"message\">{{message}}</div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-user\"></i>\r\n                                        </span>\r\n                                        <input name=\"name\" placeholder=\"Full Name\" required #name=\"ngModel\" [(ngModel)]=\"user.name\" [(value)]=\"user.name\" class=\"form-control\" type=\"text\">\r\n                                        \r\n                                    </div>\r\n                                    <div class=\"alert alert-warning\" [hidden]=\"user.name && user.name.length > 3\">Please enter a valid full name.</div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-envelope\"></i>\r\n                                        </span>\r\n                                        <input name=\"email\" required placeholder=\"mail@example.com\" #email=\"ngModel\" [(ngModel)]=\"user.email\" [(value)]=\"user.email\" class=\"form-control\" type=\"email\">\r\n                                    </div>\r\n                                    <div class=\"alert alert-warning\" [hidden]=\"user.email && user.email.length > 3 && user.email.indexOf('@') > 2 && user.email.indexOf('.', user.email.indexOf('@')) >= 3\">Please enter a valid email.</div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-earphone\"></i>\r\n                                        </span>\r\n                                        <input name=\"phone-mobile\" placeholder=\"9781232100\" required #phone=\"ngModel\" maxlength=\"10\" [(ngModel)]=\"user.phone\" [(value)]=\"user.phone\" class=\"form-control\"\r\n                                            type=\"phone\">\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        <!-- </fieldset>\r\n                        <fieldset> -->\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12 inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            @\r\n                                        </span>\r\n                                        <input name=\"username\" placeholder=\"Username\" #username=\"ngModel\" required maxlength=\"25\" [(ngModel)]=\"user.username\" [(value)]=\"user.username\" class=\"form-control\"\r\n                                            type=\"text\">\r\n                                    </div>\r\n                                    <div class=\"alert alert-warning\" [hidden]=\"user.username && user.username.length > 3 && user.username.indexOf('_') != 0\">Please enter a valid username.</div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group has-feedback\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-lock\"></i>\r\n                                        </span>\r\n                                        <input class=\"form-control\" #password=\"ngModel\" required type=\"password\" name=\"password\" placeholder=\"password\" [(value)]=\"user.password\" [(ngModel)]=\"user.password\"\r\n                                        />\r\n                                    </div>\r\n                                    <div class=\"alert alert-warning\" [hidden]=\"user.password && user.password.length >= 6\">Please enter a valid password.</div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"user.password.length < 6\">Password must be at least 6 characters long.</div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"form-group has-feedback\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-lock\"></i>\r\n                                        </span>\r\n                                        <input class=\"form-control\" type=\"password\" id=\"confirmpassword\" name=\"confirmpassword\" placeholder=\"Confirm password\" required [(ngModel)]=\"confirmpassword\"/>                                        \r\n                                        \r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" [hidden]=\"confirmpassword == user.password\">Passwords do not match</div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"button\" (click)=\"createUser()\" class=\"btn btn-info btn-block\">Register\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = (function () {
    function UserDetailComponent(UserService, route, router) {
        this.UserService = UserService;
        this.route = route;
        this.router = router;
        this.regState = undefined;
        this.message = undefined;
    }
    UserDetailComponent.prototype.initUser = function () {
        this.user = {
            name: "",
            username: "",
            created: {
                date: new Date()
            },
            email: "",
            phone: "",
            password: "",
            roles: ['user'],
            profileData: {}
        };
        this.confirmpassword = "";
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initUser();
        this.sub = this.route.params.subscribe(function (params) {
            //console.log(params);
            if (params['regstate'] == "false") {
                _this.regState = false;
                _this.message = "Failed to register, please check details.";
            }
            else if (params['regstate'] == "true") {
                _this.regState = true;
                _this.message = "Registered Successfully.";
                _this.initUser();
            }
            else if (params['regstate'] == "undefined") {
                _this.message = "Please enter your details.";
            }
            setTimeout(function () {
                _this.message = undefined;
            }, 10000);
        });
    };
    UserDetailComponent.prototype.createUser = function () {
        var _this = this;
        for (var key in this.user) {
            if (this.user[key] == "") {
                console.log("KEY: " + key);
                this.message = "Invalid input";
                this.regState = false;
                setTimeout(function () {
                    _this.message = undefined;
                    _this.regState = undefined;
                }, 5000);
                return;
            }
        }
        this.UserService.createUser(this.user).then(function (success) {
            if (success) {
                _this.router.navigate(['/signup/true']);
            }
        }, function (reject) {
            if (reject) {
                _this.router.navigate(['/signup/false']);
            }
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-detail',
        template: __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n  margin-top: 10%\r\n}\r\n\r\n.sub-heading {\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.panel-title-inner {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  color: inherit;\r\n  font-weight: bold;\r\n}\r\n\r\n.panel-heading{\r\n  background: #EBB38E;\r\n  background: linear-gradient(to bottom, #EBB38E 0%,#EE8F54 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EBB38E', endColorstr='#EE8F54',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\nowl-date-time{\r\n  border: none !important;\r\n  margin: 0 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n\t<div class=\"row centered-form\">\r\n\t\t<div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n            \t<div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">User Profile page \r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form class=\"form-horizontal\" action=\" \" method=\"post\">\r\n                        <fieldset>\r\n                           \r\n                            <div class=\"panel sub-heading form-group\">\r\n                                <h3 class=\"panel-title-inner\">From Trip Origin: \r\n                                </h3>\r\n                            </div>\t\t\t\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                        </span>\r\n                                        <input list=\"originState\" (change)=\"onSelect()\" name=\"user-originState\" [(ngModel)]=\"profileData.originAddress.state\" placeholder=\"State\" required class=\"form-control\"/>\r\n                                        <datalist id=\"originState\">\r\n                                            <option *ngFor=\"let state of this.states\" [ngValue]=\"this.LocationService.getState(state)\">{{state}}</option>\r\n                                        </datalist>\r\n                                    </div>\r\n                                </div>\r\n                            </div>                   \r\n                             <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                        </span>\r\n                                        <span class=\"alert alert-warning\" [hidden]=\"!this.loading\"></span>\r\n                                        <input list=\"originCity\" [hidden]=\"!this.loading\" name=\"user-originCity\" [(ngModel)]=\"profileData.originAddress.city\" placeholder=\"City\" required class=\"form-control\"/>\r\n                                        <datalist id=\"originCity\">\r\n                                                <option *ngFor=\"let city of this.cities\" [ngValue]=\"city\">{{city}}</option>\r\n                                        </datalist>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-time\"></i>\r\n                                        </span>\r\n                                        <owl-date-time [min]=\"profileData.originTime\" [required]=\"true\" [(ngModel)]=\"profileData.originTime\" [locale]=\"en\" name=\"user-originTime\" ></owl-date-time>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"panel sub-heading form-group\">\r\n                                    <h3 class=\"panel-title-inner\">To Trip Destination: \r\n                                    </h3>\r\n                                </div>\r\n    \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12  inputGroupContainer\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                            </span>\r\n                                            <input name=\"user-destinationCity\" placeholder=\"City\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n    \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12  inputGroupContainer\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"glyphicon glyphicon-time\"></i>\r\n                                            </span>\r\n                                            <owl-date-time [min]=\"profileData.originTime\" [required]=\"true\" [(ngModel)]=\"profileData.destinationTime\" [locale]=\"en\" name=\"user-destinationTime\"></owl-date-time>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"panel sub-heading form-group\">\r\n                                        <h3 class=\"panel-title-inner\">Additional Information: \r\n                                        </h3>\r\n                                    </div>\r\n        \r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-md-12  inputGroupContainer\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                                                </span>\r\n                                                <textarea name=\"user-bio\" placeholder=\"Short Bio\" required=\"\" class=\"form-control\" type=\"text\" ></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n\r\n                                    <div class=\"form-group\">\r\n                                            <div class=\"col-md-12  inputGroupContainer\">\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">\r\n                                                        <i class=\"glyphicon glyphicon-camera\"></i>\r\n                                                    </span>\r\n                                                    <input type=\"file\" name=\"user-pic\" accept=\"image/*\" class=\"form-control\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info btn-block\">Update\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_locationmap_service__ = __webpack_require__("../../../../../src/app/_services/locationmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = (function () {
    function UserProfileComponent(UserService, datepicker, LocationService) {
        this.UserService = UserService;
        this.datepicker = datepicker;
        this.LocationService = LocationService;
        this.states = [];
        this.cities = [];
        this.loading = false;
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
        for (var state in temp) {
            this.states.push(temp[state]);
        }
    }
    UserProfileComponent.prototype.ngOnInit = function () { };
    UserProfileComponent.prototype.onSelect = function () {
        var _this = this;
        if (this.profileData.originAddress.state) {
            this.loading = true;
            this.profileData.originAddress.state = this.LocationService.getState(this.profileData.originAddress.state);
            console.log(this.profileData.originAddress.state);
            this.LocationService.getCities(this.profileData.originAddress.state).then(function (response) {
                var x = response._body.substring(1, response._body.length - 1);
                x = JSON.parse(x);
                var result = x.result;
                for (var x_1 in result) {
                    _this.cities.push(result[x_1].City);
                }
                _this.cities = _this.cities.filter(function (elem, index) {
                    return index == _this.cities.indexOf(elem);
                });
                _this.loading = false;
            });
        }
    };
    UserProfileComponent.prototype.onSubmit = function () {
        console.log(this.profileData);
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-profile',
        template: __webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_locationmap_service__["a" /* LocationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__["DateTimePickerModule"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__["DateTimePickerModule"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_locationmap_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_locationmap_service__["a" /* LocationService */]) === "function" && _c || Object])
], UserProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-block{\r\n    margin: 0\r\n\r\n}\r\n\r\n.container{\r\n    padding: 1%;\r\n    background: #d6f9ff;\r\n    background: linear-gradient(to bottom, rgba(214, 250, 255, 0.8) 0%,rgba(158, 233, 250, 0.9) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d6f9ff', endColorstr='#9ee8fa',GradientType=0 );\r\n    border-radius: 5px;\r\n    box-shadow: 0px 1px 10px 1px rgba(90, 80, 80, 0.63);\r\n}\r\n\r\np{\r\n    padding: 1%;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n    padding: 5px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row center-block\">\n    <div class=\"col\">\n      <p>Looking for someone to join you on your next travel adventure? Looking for someone to meet up with on your next business trip? You've come to the right place! Let TravelBuddy connect you with other travelers instead of traveling alone.</p>\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">With TravelBuddy you can:</h4>\n        </div>\n        <div class=\"panel-content\">\n          <ul>\n            <li>Sign up and create a profile.</li>\n            <li>Create a trip you would like to take/are taking.</li>\n            <li>Search for trips to destinations you're interested in.</li>\n            <li>Follow and message other users.</li>\n          </ul>\n        </div>\n      </div>\n    \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utility/about/about.component.ts":
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
        template: __webpack_require__("../../../../../src/app/utility/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 center-block\">\r\n    <div class=\"panel\">\r\n      <div class=\"panel-title\">Error</div>\r\n      <div class=\"panel-body\">Please try again</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/utility/error/error.component.ts":
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
        template: __webpack_require__("../../../../../src/app/utility/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\r\n  margin: auto;\r\n  text-align: center !important;\r\n}\r\n\r\n.design{\r\n  background-color: rgba(104,200,204,0.47);\r\n  background: linear-gradient(to bottom, rgba(104,200,204,0.47) 0%,rgba(47,138,163,0.61) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7868c8cc', endColorstr='#9c2f8aa3',GradientType=0 );\r\n  border-radius: 50px;\r\n  width: 40%;\r\n}\r\n\r\ndiv{\r\n  padding: 10px;\r\n}\r\n\r\n.content{\r\n  -webkit-animation: landinganim 1s 0s alternate both ease-in;\r\n          animation: landinganim 1s 0s alternate both ease-in; \r\n}\r\n.content1{\r\n  color: lightsalmon;\r\n  -webkit-animation: landinganim 1s 1.1s alternate both ease-in;\r\n          animation: landinganim 1s 1.1s alternate both ease-in;\r\n}\r\n.content2{\r\n  color: lightgreen;\r\n  -webkit-animation: landinganim 1s 2.2s alternate both ease-in;\r\n          animation: landinganim 1s 2.2s alternate both ease-in;\r\n}\r\n.content3{\r\n  color: lightskyblue;\r\n  -webkit-animation: landinganim 1s 3.3s alternate both ease-in;\r\n          animation: landinganim 1s 3.3s alternate both ease-in;\r\n}\r\nspan{\r\n  color: gold !important;\r\n}\r\n\r\nimg{\r\n  width: 64px;\r\n}\r\n\r\n\r\n@-webkit-keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n\r\n@keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col center design\">\r\n        <img class=\"content coolShadow\" src=\"/assets/imgs/travellogoicon.png\"/>\r\n        <div class=\"content1 coolShadow\">\r\n            <h1>Find Buddies</h1>\r\n            <span>with whom you want to</span>\r\n        </div>\r\n        <div class=\"content2 coolShadow\">\r\n            <h1>Commute</h1>\r\n            <span>and</span>\r\n        </div>\r\n        <div class=\"content3 coolShadow\">\r\n            <h1>Share</h1>\r\n            <span>your boredom</span>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
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
    function LandingComponent(UserService) {
        this.UserService = UserService;
        this.userslen = 3;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/utility/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/landing/landing.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

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