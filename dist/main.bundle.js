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
exports.push([module.i, "body{\r\n\twidth: 100% !important;\r\n\theight: 960px;\r\n}\r\n\r\n\r\n\r\n.backgroundImage {\r\n    background-image: url(\"/assets/imgs/header.jpg\");\r\n    background-repeat:no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.navbar-brand{\r\n\ttext-shadow: 2px 2px 3px rgba(255,255,255,0.1);\r\n}\r\n\r\nul.nav * a{\r\n\tcolor: white !important;\r\n}\r\n\r\n\r\nrouter-outlet{\r\n    text-align: center;\r\n\tmargin-top: 80px;\r\n\theight: auto;\r\n}\r\n\r\n.welcomeColor {\r\n    color: white;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"container backgroundImage\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand colorChangeAnimation d-flex\" routerLink='/'>\r\n          <span class=\"d-inline\">Travel Buddy</span>\r\n        </a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a class=\"active\" routerLink='/home'>Home</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!this.isLoggedin\">\r\n          <a [routerLink]=\"['/signup', undefined]\">Sign Up</a>\r\n        </li>\r\n        <li  *ngIf=\"!this.isLoggedin\">\r\n          <a [routerLink]=\"['/login', true]\">Log In</a>\r\n        </li>\r\n        <li *ngIf=\"!this.isLoggedin\">\r\n          <a [routerLink]=\"['/userprof']\">User Profile</a>\r\n        </li>\r\n        <li *ngIf=\"this.isLoggedin\">\r\n          <a [routerLink]=\"['/login', false]\">Logout</a>\r\n        </li>\r\n        \r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <div class=\"wrapper\">\r\n    <h1 class=\"h1 text-center coolShadow\" *ngIf=\"!this.isLoggedin\">Welcome to\r\n      <span class=\"colorChangeAnimation\">Travel Buddies</span>\r\n    </h1>\r\n    <app-landing *ngIf=\"landing\"></app-landing>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n</body>"

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
    function AppComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.landing = true;
        this.isLoggedin = false;
        this.title = 'TravelBuddy';
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
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
            __WEBPACK_IMPORTED_MODULE_14__utility_landing_landing_component__["a" /* LandingComponent */]
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
exports.push([module.i, ".margin {\r\n    margin-top: 10%;\r\n  }\r\n\r\n.glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.panel-heading{\r\n  background: #ffc578; /* Old browsers */\r\n  background: linear-gradient(to bottom, #a1f31c 0%,#a1f31c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc578', endColorstr='#fb9d23',GradientType=0 ); /* IE6-9 */\r\n}\r\n.panel-body{\r\n  background: #feffe8; /* Old browsers */\r\n  background: linear-gradient(to bottom, #feffe8 0%,#d6dbbf 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#d6dbbf',GradientType=0 ); /* IE6-9 */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/forgot-pass/forgot-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n  <div class=\"row centered-form\">\r\n      <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n          <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Forgot Password \r\n                  </h3>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"panel-body\">\r\n                    <form role=\"form\" class=\"form-horizontal\" action=\" \" method=\"post\" #regForm=\"ngForm\" novalidate>\r\n                        <fieldset>\r\n                            <div class=\"alert\" [class.alert-danger]='regState == false' [class.alert-success]='regState == true' *ngIf=\"message\">{{message}}</div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-envelope\"></i>\r\n                                        </span>\r\n                                        <input name=\"email\" required placeholder=\"mail@example.com\" #email=\"ngModel\" [(ngModel)]=\"emailID\" [(value)]=\"emailID\" class=\"form-control\" type=\"email\">\r\n                                    </div>\r\n                                    <div class=\"alert alert-warning\" [hidden]=\"emailID && emailID.length > 3 && emailID.indexOf('@') > 2 && emailID.indexOf('.', emailID.indexOf('@')) >= 3\">Please enter a valid email.</div>\r\n                                </div>\r\n                                \r\n                            </div>                            \r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"button\" (click)=\"createUser()\" class=\"btn btn-info btn-block\">Submit\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n              </div>\r\n          </div>             \r\n      </div>\r\n  </div>\r\n</div>\r\n"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row centered-form\">\r\n    <div class=\"col-md-6\">\r\n        <h1>{{this.message}}</h1>\r\n    </div>\r\n\r\n</div>"

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
exports.push([module.i, ".margin {\r\n    margin-top: 10%;\r\n  }\r\n\r\n.glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.panel-heading{\r\n  background: #ffc578; /* Old browsers */\r\n  background: linear-gradient(to bottom, #ffc578 0%,#fb9d23 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc578', endColorstr='#fb9d23',GradientType=0 ); /* IE6-9 */\r\n}\r\n.panel-body{\r\n  background: #feffe8; /* Old browsers */\r\n  background: linear-gradient(to bottom, #feffe8 0%,#d6dbbf 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#d6dbbf',GradientType=0 ); /* IE6-9 */\r\n}", ""]);

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
                _this.users = users.map(function (user) {
                    return user;
                });
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
            }
        }
        else {
            this.error = true;
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
exports.push([module.i, ".margin {\r\n  margin-top: 10%\r\n}\r\n\r\n.sub-heading {\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.panel-title-inner {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  color: inherit;\r\n  font-weight: bold;\r\n}\r\n\r\n.panel-heading{\r\n  background: #EBB38E;\r\n  background: linear-gradient(to bottom, #EBB38E 0%,#EE8F54 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EBB38E', endColorstr='#EE8F54',GradientType=0 ); /* IE6-9 */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n\t<div class=\"row centered-form\">\r\n\t\t<div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n            \t<div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">User Profile page \r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form class=\"form-horizontal\" action=\" \" method=\"post\">\r\n                        <fieldset>\r\n                           \r\n                            <div class=\"panel sub-heading form-group\">\r\n                                <h3 class=\"panel-title-inner\">From Trip Origin: \r\n                                </h3>\r\n                            </div>\t\t\t\r\n                                                \r\n                             <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                        </span>\r\n                                        <input name=\"user-originCity\" placeholder=\"City\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-time\"></i>\r\n                                        </span>\r\n                                        <owl-date-time [(ngModel)]=\"moment\" name=\"user-originTime\" class=\"form-control\" ></owl-date-time>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"panel sub-heading form-group\">\r\n                                    <h3 class=\"panel-title-inner\">To Trip Destination: \r\n                                    </h3>\r\n                                </div>\r\n    \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12  inputGroupContainer\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                            </span>\r\n                                            <input name=\"user-destinationCity\" placeholder=\"City\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n    \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12  inputGroupContainer\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"glyphicon glyphicon-time\"></i>\r\n                                            </span>\r\n                                            <input name=\"user-destinationTime\" placeholder=\"Time\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"panel sub-heading form-group\">\r\n                                        <h3 class=\"panel-title-inner\">Additional Information: \r\n                                        </h3>\r\n                                    </div>\r\n        \r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-md-12  inputGroupContainer\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                                                </span>\r\n                                                <input name=\"user-bio\" placeholder=\"Short Bio\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-md-12  inputGroupContainer\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"glyphicon glyphicon-question-sign\"></i>\r\n                                                </span>\r\n                                                <input name=\"user-seatsOffered\" placeholder=\"Seats Offered\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-md-12  inputGroupContainer\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"glyphicon glyphicon-question-sign\"></i>\r\n                                                </span>\r\n                                                <input name=\"user-seatRequired\" placeholder=\"Seats Required\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                            </div>\r\n                                       </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                            <div class=\"col-md-12  inputGroupContainer\">\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">\r\n                                                        <i class=\"glyphicon glyphicon-camera\"></i>\r\n                                                    </span>\r\n                                                    <input type=\"file\" name=\"user-pic\" accept=\"image/*\" class=\"form-control\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                   \r\n            \r\n\r\n                        <!-- \r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"col-md-12  inputGroupContainer\">\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">\r\n                                                        <i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                                                    </span>\r\n                                                    <input name=\"user-desc\" placeholder=\"Full Name\" required=\"\" [(ngModel)]=\"profileData.desc\" class=\"form-control\" type=\"text\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                        -->\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info btn-block\">Update\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
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


var UserProfileComponent = (function () {
    function UserProfileComponent(UserService) {
        this.UserService = UserService;
        this.profileData = {
            originCity: "",
            originTime: "",
            destinationCity: "",
            destinationTime: "",
            bio: "",
            seatsOffered: "",
            seatRequired: ""
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserService
            .getUsers()
            .then(function (Users) {
            _this.users = Users.map(function (User) {
                return User;
            });
        });
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
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

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
exports.push([module.i, "\r\n  .font-anim\r\n  {\r\n    /* background-color:rgba(148, 125, 57, 0.65); */\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0; \r\n    bottom: 0;\r\n    left:0; \r\n    right: 0;\r\n    overflow: hidden;\r\n  }\r\n  .travel-content1\r\n  {\r\n    margin-top: 150px;\r\n    -webkit-animation-duration: 5s;\r\n            animation-duration: 5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-name: content1;\r\n            animation-name: content1;\r\n   }\r\n  @-webkit-keyframes content1 \r\n  {\r\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\r\n    20% {-webkit-transform: translate(000px,65px);transform: translate(000px,65px);}\r\n    25%,65%,75% {-webkit-transform: translate(000px,85px);transform: translate(000px,85px);}\r\n    100% {-webkit-transform: translate(000px,-150px);transform: translate(000px,-150px);}\r\n  }\r\n  @keyframes content1 \r\n  {\r\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\r\n    20% {-webkit-transform: translate(000px,65px);transform: translate(000px,65px);}\r\n    25%,65%,75% {-webkit-transform: translate(000px,85px);transform: translate(000px,85px);}\r\n    100% {-webkit-transform: translate(000px,-150px);transform: translate(000px,-150px);}\r\n  }\r\n  .travel-content11\r\n  {\r\n    vertical-align: top;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    font-family: 'Roboto';\r\n    margin-left: 10px;\r\n    height:95px;\r\n    overflow: hidden;\r\n    -webkit-animation-delay: 1.3s;\r\n            animation-delay: 1.3s;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-name: content11;\r\n            animation-name: content11;\r\n  }\r\n  @-webkit-keyframes content11 \r\n  {\r\n    0% {opacity:0;}\r\n    100% {opacity:1;}\r\n  }\r\n  .travel-content2\r\n  {\r\n    -webkit-animation-delay: 4s;\r\n            animation-delay: 4s;\r\n    -webkit-animation-duration: 4.8s;\r\n            animation-duration: 4.8s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-name: content2;\r\n            animation-name: content2;\r\n   }\r\n  \r\n  @-webkit-keyframes content2 \r\n  {\r\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\r\n    20% {-webkit-transform: translate(000px,-165px);transform: translate(000px,-165px);}\r\n    25%,65% {-webkit-transform: translate(000px,-105px);transform: translate(000px,-105px);}\r\n    100% {-webkit-transform: scale(0.6) translate(0px, -85px);transform: scale(0.6) translate(0px, -85px); }\r\n  }\r\n  \r\n  @keyframes content2 \r\n  {\r\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\r\n    20% {-webkit-transform: translate(000px,-165px);transform: translate(000px,-165px);}\r\n    25%,65% {-webkit-transform: translate(000px,-105px);transform: translate(000px,-105px);}\r\n    100% {-webkit-transform: scale(0.6) translate(0px, -85px);transform: scale(0.6) translate(0px, -85px); }\r\n  }\r\n  .travel-content21\r\n  {\r\n    vertical-align: top;\r\n    text-align: center;\r\n    color: #FFFFFF;;\r\n    font-family: 'Roboto';\r\n    margin-left: 10px;\r\n    height:95px;\r\n    overflow: hidden;\r\n    -webkit-animation-delay: 5.5s;\r\n            animation-delay: 5.5s;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-name: content21;\r\n            animation-name: content21;\r\n  }\r\n  @-webkit-keyframes content21 \r\n  {\r\n    0% {opacity:0;}\r\n    100% {opacity:1;}\r\n  }\r\n  @keyframes content21 \r\n  {\r\n    0% {opacity:0;}\r\n    100% {opacity:1;}\r\n  }\r\n  .travel-content3\r\n  {\r\n    top: 75px;\r\n    font-family: 'Roboto';\r\n    color:#FFFFFF;\r\n    -webkit-animation-delay: 9s;\r\n            animation-delay: 9s;\r\n    -webkit-animation-duration: 2.5s;\r\n            animation-duration: 2.5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-name: content3;\r\n            animation-name: content3;\r\n  }\r\n  @-webkit-keyframes content3 \r\n  {\r\n    0% {-webkit-transform: scale(0);transform: scale(0);}\r\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n    20% {-webkit-transform: scale(1);transform: scale(1);}\r\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\r\n    100% {-webkit-transform: translate(000px,-250px);transform: translate(000px,-250px);}\r\n  }\r\n  @keyframes content3 \r\n  {\r\n    0% {-webkit-transform: scale(0);transform: scale(0);}\r\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n    20% {-webkit-transform: scale(1);transform: scale(1);}\r\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\r\n    100% {-webkit-transform: translate(000px,-250px);transform: translate(000px,-250px);}\r\n  }\r\n  .travel-content4\r\n  {\r\n    font-family: 'Roboto';\r\n    top: 75px;\r\n    color:#FFFFFF;;\r\n    -webkit-animation-delay: 12s;;\r\n            animation-delay: 12s;\r\n    -webkit-animation-duration: 2.5s;\r\n            animation-duration: 2.5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-name: content4;\r\n            animation-name: content4;\r\n  }\r\n  \r\n  @-webkit-keyframes content4 \r\n  {\r\n    0% {-webkit-transform: scale(0);transform: scale(0);}\r\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n    20% {-webkit-transform: scale(1);transform: scale(1);}\r\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\r\n    100% {-webkit-transform: translate(000px,-250px);transform: translate(000px,-250px);}\r\n  }\r\n  \r\n  @keyframes content4 \r\n  {\r\n    0% {-webkit-transform: scale(0);transform: scale(0);}\r\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n    20% {-webkit-transform: scale(1);transform: scale(1);}\r\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\r\n    100% {-webkit-transform: translate(000px,-250px);transform: translate(000px,-250px);}\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"font-anim\" align=\"center\">\r\n  <div class=\"travel-content1\">\r\n    <img src=\"http://www.freeiconspng.com/uploads/travel-guide-icon-map-ticket-travel-icon-17.png\" width=\"100px\" />\r\n  </div>\r\n  <div class=\"travel-content2\">\r\n    <div class=\"travel-content21\">\r\n      <font style=\"font-weight:400;font-size: 45px;\" class=\"coolShadow text-primary\">Share</font>\r\n      <br />\r\n      <font style=\"font-weight:300; font-size: 18px;\" class=\"coolShadow\">your boredom</font>\r\n    </div>\r\n  </div>\r\n  <div class=\"travel-content3\">\r\n    <font style=\"font-weight:300;font-size: 55px;\" class=\"coolShadow text-warning\">Find Buddies</font>\r\n    <br />\r\n    <font style=\"font-weight:300; font-size: 18px;\" class=\"coolShadow\"> with whom you want to </font>\r\n  </div>\r\n  <div class=\"travel-content4\">\r\n    <font style=\"font-weight:300;font-size: 45px;\" class=\"coolShadow text-danger\"> Commute</font>\r\n    <br />\r\n    <font style=\"font-weight:300; font-size: 18px;\"class=\"coolShadow\">And</font>\r\n  </div>\r\n</div>"

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