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
        this.usersUrl = 'http://travel-buddy-app.herokuapp.com/api/v1/users';
        this.usersUrl2 = 'http://localhost:4500/api/v1/users';
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
        var putUrl = this.usersUrl2 + '/' + putUser._id;
        console.log(putUrl);
        return this.http.put(putUrl, putUser)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg, error);
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

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" (click)=\"collapse()\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span> \r\n            </button>\r\n        <a class=\"navbar-brand colorChangeAnimation d-flex\" routerLink='/'>\r\n          <span class=\"d-inline\">Travel Buddy</span>\r\n        </a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"collapsible\" #collapsible>\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a class=\"active\" [routerLink]=\"['/home']\"><i class=\"glyphicon glyphicon-home\"></i> Home</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/about']\"><i class=\"glyphicon glyphicon-info-sign\"></i> About</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li *ngIf=\"!this.isLoggedin\">\r\n            <a [routerLink]=\"['/signup', new]\"><i class=\"glyphicon glyphicon-user\"></i> Sign Up</a>\r\n          </li>\r\n          <li  *ngIf=\"!this.isLoggedin\">\r\n            <a [routerLink]=\"['/login', true]\"><i class=\"glyphicon glyphicon-log-in\"></i> Log In</a>\r\n          </li>\r\n          <li *ngIf=\"this.isLoggedin\">\r\n            <a [routerLink]=\"['/profile', this.currentUser.username]\"><i class=\"glyphicon glyphicon-user\"></i> User Profile</a>\r\n          </li>\r\n          <li *ngIf=\"this.isLoggedin\">\r\n            <a [routerLink]=\"['/login', false]\"><i class=\"glyphicon glyphicon-log-out\"></i> Logout</a>\r\n          </li>\r\n          \r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"wrapper\">\r\n    <h1 class=\"h1 text-center coolShadow\" *ngIf=\"this.landing\">Welcome to\r\n      <span class=\"colorChangeAnimation\">Travel Buddy</span>\r\n    </h1>\r\n    <app-landing *ngIf=\"landing\"></app-landing>\r\n    <div class=\"loading\" *ngIf=\"this.loading\">\r\n        <p class=\"alert alert-warning\">Loading . . . </p>\r\n    </div>\r\n    <router-outlet *ngIf=\"!this.loading\"></router-outlet>\r\n  </div>\r\n  \r\n</div>"

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
        this.loading = true;
        this.router.events.subscribe(function (event) {
            _this.navIntercept(event);
        });
        sessionStorage.clear();
        var checker = setInterval(function () {
            //console.log("loginstate: " + this.isLoggedin, "sessionStore: " + sessionStorage.getItem('token'));
            if (sessionStorage.getItem('token')) {
                _this.isLoggedin = true;
                var tok = sessionStorage.getItem('token');
                var s = JSON.parse(tok);
                _this.currentUser = s.user;
            }
            else if (!sessionStorage.getItem('token')) {
                _this.isLoggedin = false;
                _this.currentUser = null;
            }
        }, 200);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utility_error_error_component__ = __webpack_require__("../../../../../src/app/utility/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utility_landing_landing_component__ = __webpack_require__("../../../../../src/app/utility/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utility_about_about_component__ = __webpack_require__("../../../../../src/app/utility/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_user_profile_component_user_profile_component_component__ = __webpack_require__("../../../../../src/app/users/user-profile-component/user-profile-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { UserDetailComponent } from './users/user-detail/user-detail.component';




//import { HomeComponent } from './users/home/home.component';
//import { UserProfileComponent } from './users/user-profile/user-profile.component';
//import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';





//import { InboxComponent } from './users/inbox/inbox.component';
//import { ManagetripsComponent } from './users/managetrips/managetrips.component';
//import { CreatetripComponent } from './users/createtrip/createtrip.component';
// const homeRoutes: Routes = [
//   { path: "create", component: CreatetripComponent},
//   { path: "manage", component: ManagetripsComponent},
//   { path: "inbox", component: InboxComponent}
// ];
var appRoutes = [
    //{ path: 'home', component: HomeComponent, children: homeRoutes},
    //{ path: 'signup/:regstate', component: UserDetailComponent },
    { path: 'signup', redirectTo: 'signup/new' },
    { path: 'login', redirectTo: 'login/true' },
    { path: 'login/:loginstate', component: __WEBPACK_IMPORTED_MODULE_8__users_login_login_component__["a" /* LoginComponent */] },
    //{ path: 'forgotpass', component: ForgotPassComponent },
    //{ path: 'profile/:user', component: UserProfileComponent},
    //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_9__utility_error_error_component__["a" /* ErrorComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__utility_about_about_component__["a" /* AboutComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_8__users_login_login_component__["a" /* LoginComponent */],
            //HomeComponent,
            //UserProfileComponent,
            //ForgotPassComponent,
            __WEBPACK_IMPORTED_MODULE_9__utility_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__utility_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__utility_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__users_user_profile_component_user_profile_component_component__["a" /* UserProfileComponentComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__["DateTimePickerModule"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n    margin: auto;\r\n  }\r\n\r\n.glyphicon-refresh-animate {\r\n  -webkit-animation: spin .7s infinite linear;\r\n          animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.panel-heading{\r\n  background: #ffc578; /* Old browsers */\r\n  background: linear-gradient(to bottom, #ffc578 0%,#fb9d23 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc578', endColorstr='#fb9d23',GradientType=0 ); /* IE6-9 */\r\n}", ""]);

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
        this.UserService = UserService;
        this.router = router;
        this.route = route;
        this.users = undefined;
        this.loginstate = undefined;
        this.username = "";
        this.password = "";
        this.loading = false;
        this.error = false;
        this.loadUsers();
    }
    LoginComponent.prototype.loadUsers = function () {
        var _this = this;
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
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
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
                    this.router.navigate(['home/manage']);
                }, 2000);
            }
        });
        this.loading = false;
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
                this.router.navigate(['home/manage']);
                this.error = false;
                this.username = this.password = "";
                this.message = undefined;
                this.loading = false;
            }
            else {
                this.error = true;
                this.password = "";
            }
        }
        else {
            this.message = "Server busy, please try after some time.";
            setTimeout(function () {
                _this.message = undefined;
                _this.loading = false;
            }, 1000);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-profile-component/user-profile-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-profile-component/user-profile-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile-component works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/users/user-profile-component/user-profile-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponentComponent; });
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

var UserProfileComponentComponent = (function () {
    function UserProfileComponentComponent() {
    }
    UserProfileComponentComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponentComponent;
}());
UserProfileComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile-component',
        template: __webpack_require__("../../../../../src/app/users/user-profile-component/user-profile-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-profile-component/user-profile-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponentComponent);

//# sourceMappingURL=user-profile-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-block{\r\n    margin: 0\r\n}\r\n\r\n.container{\r\n    background: #d6f9ff;\r\n    background: linear-gradient(to bottom, rgba(214, 250, 255, 0.8) 0%,rgba(158, 233, 250, 0.9) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d6f9ff', endColorstr='#9ee8fa',GradientType=0 );\r\n    border-radius: 5px;\r\n    box-shadow: 0px 1px 10px 1px rgba(90, 80, 80, 0.63);\r\n    width: 100%;\r\n}\r\n\r\np{\r\n    padding: 1%;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n    padding: 5px;\r\n    \r\n}", ""]);

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
exports.push([module.i, ".center{\r\n  margin: auto;\r\n  text-align: center !important;\r\n}\r\n\r\n.design{\r\n  background-color: rgba(59, 58, 65, 0.479);\r\n  border-top-left-radius: 400px;\r\n  border-top-right-radius: 400px;\r\n  border-bottom-left-radius: 200px;\r\n  border-bottom-right-radius: 200px;\r\n  width: 100%;\r\n  \r\n  -webkit-animation: fade-in 4s ease infinite alternate;\r\n  \r\n          animation: fade-in 4s ease infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes fade-in{\r\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\r\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\r\n}\r\n\r\n@keyframes fade-in{\r\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\r\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\r\n}\r\ndiv{\r\n  padding: 10px;\r\n}\r\n\r\n.content{\r\n  -webkit-animation: landinganim 0.5s 0s alternate both ease-in;\r\n          animation: landinganim 0.5s 0s alternate both ease-in; \r\n}\r\n.content1{\r\n  color: lightsalmon;\r\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\r\n          animation: landinganim2 1s 0.6s alternate both ease-in;\r\n}\r\n.content2{\r\n  color: lightgreen;\r\n  -webkit-animation: landinganim3 1s 0.6s alternate both ease-in;\r\n          animation: landinganim3 1s 0.6s alternate both ease-in;\r\n}\r\n.content3{\r\n  color: lightskyblue;\r\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\r\n          animation: landinganim2 1s 0.6s alternate both ease-in;\r\n}\r\nspan{\r\n  color: gold !important;\r\n}\r\n\r\nimg{\r\n  width: 64px;\r\n}\r\n\r\n\r\n@-webkit-keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n\r\n@keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@-webkit-keyframes landinganim2 {\r\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim2 {\r\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@-webkit-keyframes landinganim3 {\r\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim3 {\r\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row center\">\r\n    <div class=\"col-md-6 center design\">\r\n        <img class=\"content coolShadow\" src=\"/assets/imgs/travellogoicon.png\"/>\r\n        <div class=\"content1 coolShadow\">\r\n            <h1>Find Buddies</h1>\r\n            <span>with whom you want to</span>\r\n        </div>\r\n        <div class=\"content2 coolShadow\">\r\n            <h1>Commute</h1>\r\n            <span>and</span>\r\n        </div>\r\n        <div class=\"content3 coolShadow\">\r\n            <h1>Share</h1>\r\n            <span>your boredom</span>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

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