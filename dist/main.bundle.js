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

/***/ "../../../../../src/app/Users/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\n    margin: auto;\n    padding: 0;\n    width: 100%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Users/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row center\">\r\n        <div class=\"col center\">\r\n            <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"panel-title\">\r\n                        {{this.message}}\r\n                    </div>\r\n                </div>\r\n                <!-- *ngIf=\"this.loggedIn\" -->\r\n                \r\n                <div class=\"panel-content\">\r\n                    <ul class=\"nav nav-tabs\">\r\n                        <li><a [routerLink]=\"['create']\" ><i class=\"glyphicon glyphicon-plus-sign\"></i> Create Trip</a></li>\r\n                        <li><a [routerLink]=\"['manage']\"><i class=\"glyphicon glyphicon-cog\"></i> Manage Trips</a></li>\r\n                        <li><a [routerLink]=\"['inbox']\"><i class=\"glyphicon glyphicon-comment\"></i> Inbox</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Users/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
        if (sessionStorage.getItem('token')) {
            var curr;
            if (curr = sessionStorage.getItem('token')) {
                curr = JSON.parse(curr);
                this.currentUser = curr.user;
                this.message = "Welcome " + this.currentUser.name;
                this.loggedIn = true;
            }
        }
        else {
            this.message = "Please login first.";
            this.loggedIn = false;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/Users/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Users/home/home.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/Users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n    margin: auto;\r\n  }\r\n\r\n.glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n.panel-title{\r\n  color:#fff;\r\n  padding:5px;\r\n}\r\n.panel-heading{\r\n  background: #42925b;\r\n  background: linear-gradient(to bottom right, #42925b 0%,#a4eaba 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc578', endColorstr='#fb9d23',GradientType=0 );\r\n  height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container margin\">\r\n    <div class=\"row centered-form\">\r\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Log In \r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"g-signin2 btn\" data-onsuccess=\"onSignIn\">\r\n                    </div> \r\n                </div>\r\n            </div>             \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/Users/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Users/login/login.component.css")],
        providers: []
    })
], LoginComponent);

var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:700);", ""]);

// module
exports.push([module.i, "body{\r\n\twidth: 100% !important;\r\n    height: 100%;\r\n    padding: 5%;\r\n    padding-top: 0;\r\n    background: none;\r\n}\r\n.navbar-inverse{\r\n    background-color:#2f296b;;\r\n}\r\n.navbar {\r\n    min-height: 50px;\r\n  }\r\n.navbar-brand{\r\n    height: 50px;\r\n\ttext-shadow: 2px 2px 3px rgba(255,255,255,0.1);\r\n}\r\n.container-fluid{\r\n    padding: 15px 7%;\r\n}\r\n#collapsible ul.nav * a{\r\n\tcolor: white !important;\r\n}\r\n\r\n#collapsible ul.nav * a:hover{\r\n    color: gold !important;\r\n}\r\n\r\nrouter-outlet{\r\n    text-align: center;\r\n\tmargin-top: 80px;\r\n\theight: auto;\r\n}\r\n\r\n.welcomeColor {\r\n    color: white;\r\n}\r\n.wrapper{\r\n    margin-top: 80px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" (click)=\"collapse()\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span> \r\n            </button>\r\n        <a class=\"navbar-brand colorChangeAnimation d-flex\" routerLink='/'>\r\n          <span class=\"d-inline\">Travel Buddy</span>\r\n        </a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"collapsible\" #collapsible>\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a class=\"active\" [routerLink]=\"['/home']\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/about']\">About</a>\r\n          </li>\r\n          <li>\r\n              <a [routerLink]=\"['/team']\">Team</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li *ngIf=\"!this.isLoggedin\">\r\n            <a [routerLink]=\"['/signup', new]\"> Sign Up</a>\r\n          </li>\r\n          <li  *ngIf=\"!this.isLoggedin\">\r\n            <a [routerLink]=\"['/login', true]\"> Log In</a>\r\n          </li>\r\n          <li *ngIf=\"this.isLoggedin\">\r\n            <a [routerLink]=\"['/profile', this.currentUser.username]\"><i class=\"glyphicon glyphicon-user\"></i> User Profile</a>\r\n          </li>\r\n          <li *ngIf=\"this.isLoggedin\">\r\n            <a [routerLink]=\"['/login', false]\"><i class=\"glyphicon glyphicon-log-out\"></i> Logout</a>\r\n          </li>\r\n          \r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"wrapper\">\r\n    <app-landing *ngIf=\"landing\"></app-landing>\r\n    <div class=\"loading\" *ngIf=\"this.loading\">\r\n        <p class=\"alert alert-warning\">Loading . . . </p>\r\n    </div>\r\n    <router-outlet *ngIf=\"!this.loading\"></router-outlet>\r\n  </div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_login_login_component__ = __webpack_require__("../../../../../src/app/Users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_home_home_component__ = __webpack_require__("../../../../../src/app/Users/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utility_error_error_component__ = __webpack_require__("../../../../../src/app/utility/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utility_landing_landing_component__ = __webpack_require__("../../../../../src/app/utility/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utility_about_about_component__ = __webpack_require__("../../../../../src/app/utility/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/users/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_managetrips_managetrips_component__ = __webpack_require__("../../../../../src/app/users/managetrips/managetrips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_createtrip_createtrip_component__ = __webpack_require__("../../../../../src/app/users/createtrip/createtrip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utility_team_team_component__ = __webpack_require__("../../../../../src/app/utility/team/team.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { UserDetailComponent } from './users/user-detail/user-detail.component';
//import { UserService } from './_services/user.service';




//import { UserProfileComponent } from './users/user-profile/user-profile.component';
//import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';








var homeRoutes = [
    { path: "create", component: __WEBPACK_IMPORTED_MODULE_15__users_createtrip_createtrip_component__["a" /* CreatetripComponent */] },
    { path: "manage", component: __WEBPACK_IMPORTED_MODULE_14__users_managetrips_managetrips_component__["a" /* ManagetripsComponent */] },
    { path: "inbox", component: __WEBPACK_IMPORTED_MODULE_13__users_inbox_inbox_component__["a" /* InboxComponent */] }
];
var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__Users_home_home_component__["a" /* HomeComponent */], children: homeRoutes },
    //{ path: 'signup/:regstate', component: UserDetailComponent },
    { path: 'signup', redirectTo: 'signup/new' },
    { path: 'login', redirectTo: 'login/true' },
    { path: 'login/:loginstate', component: __WEBPACK_IMPORTED_MODULE_7__Users_login_login_component__["a" /* LoginComponent */] },
    //{ path: 'forgotpass', component: ForgotPassComponent },
    //{ path: 'profile/:user', component: UserProfileComponent},
    //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_9__utility_error_error_component__["a" /* ErrorComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__utility_about_about_component__["a" /* AboutComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_16__utility_team_team_component__["a" /* TeamComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_7__Users_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Users_home_home_component__["a" /* HomeComponent */],
            //UserProfileComponent,
            //ForgotPassComponent,
            __WEBPACK_IMPORTED_MODULE_9__utility_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__utility_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__utility_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__users_inbox_inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_14__users_managetrips_managetrips_component__["a" /* ManagetripsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__users_createtrip_createtrip_component__["a" /* CreatetripComponent */],
            __WEBPACK_IMPORTED_MODULE_16__utility_team_team_component__["a" /* TeamComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__["DateTimePickerModule"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/createtrip/createtrip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\n    margin-top: 10%\n  }\n  \n  .sub-heading {\n    font-weight: 100;\n    font-size: 15px;\n    color: #333;\n    background-color: #f5f5f5;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 5px;\n  }\n  \n  .panel-title-inner {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 14px;\n    color: inherit;\n    font-weight: bold;\n  }\n  \n  .panel-heading{\n    background: #EBB38E;\n    background: linear-gradient(to bottom, #EBB38E 0%,#EE8F54 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EBB38E', endColorstr='#EE8F54',GradientType=0 ); /* IE6-9 */\n  }\n  \n  owl-date-time{\n    border: none !important;\n    margin: 0 !important;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/createtrip/createtrip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\n    <div class=\"row centered-form\">\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Create Trip\n                    </h3>\n                </div>\n                <div class=\"panel-body\">\n                    <form class=\"form-horizontal\" action=\" \" method=\"post\">\n                        <fieldset>\n\n                            <div class=\"panel sub-heading form-group\">\n                                <h3 class=\"panel-title-inner\"> Origin:\n                                </h3>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12  inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\n                                        </span>\n                                        <input list=\"originState\" (change)=\"onSelect()\" name=\"user-originState\" [(ngModel)]=\"profileData.originAddress.state\" placeholder=\"State\"\n                                            required class=\"form-control\" />\n                                        <datalist id=\"originState\">\n                                            <option *ngFor=\"let state of this.states\" [ngValue]=\"this.LocationService.getState(state)\">{{state}}</option>\n                                        </datalist>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12  inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\n                                        </span>\n                                        <span class=\"alert alert-warning\" [hidden]=\"!this.loading\"></span>\n                                        <input list=\"originCity\" [hidden]=\"!this.loading\" name=\"user-originCity\" [(ngModel)]=\"profileData.originAddress.city\" placeholder=\"City\"\n                                            required class=\"form-control\" />\n                                        <datalist id=\"originCity\">\n                                            <option *ngFor=\"let city of this.cities\" [ngValue]=\"city\">{{city}}</option>\n                                        </datalist>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"panel sub-heading form-group\">\n                                <h3 class=\"panel-title-inner\"> Destination:\n                                </h3>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12  inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\n                                        </span>\n                                        <input name=\"user-destinationCity\" placeholder=\"City\" required=\"\" class=\"form-control\" type=\"text\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel sub-heading form-group\">\n                                <h3 class=\"panel-title-inner\">Start Time:\n                                </h3>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12  inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"glyphicon glyphicon-time\"></i>\n                                        </span>\n                                        <owl-date-time [min]=\"profileData.originTime\" [required]=\"true\" [(ngModel)]=\"profileData.originTime\" [locale]=\"en\" name=\"user-originTime\"></owl-date-time>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel sub-heading form-group\">\n                                <h3 class=\"panel-title-inner\">Return Time:\n                                </h3>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12  inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"glyphicon glyphicon-time\"></i>\n                                        </span>\n                                        <owl-date-time [min]=\"profileData.originTime\" [required]=\"true\" [(ngModel)]=\"profileData.destinationTime\" [locale]=\"en\" name=\"user-destinationTime\"></owl-date-time>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12\">\n                                    <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info btn-block\">Create\n                                    </button>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/createtrip/createtrip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatetripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreatetripComponent = (function () {
    function CreatetripComponent() {
        this.states = [];
        this.cities = [];
        this.loading = false;
    }
    return CreatetripComponent;
}());
CreatetripComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createtrip',
        template: __webpack_require__("../../../../../src/app/users/createtrip/createtrip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/createtrip/createtrip.component.css")],
        providers: []
    })
], CreatetripComponent);

//# sourceMappingURL=createtrip.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/inbox/inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  inbox works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/users/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
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

var InboxComponent = (function () {
    function InboxComponent() {
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    return InboxComponent;
}());
InboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inbox',
        template: __webpack_require__("../../../../../src/app/users/inbox/inbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/inbox/inbox.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InboxComponent);

//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/managetrips/managetrips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/managetrips/managetrips.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th>Trip</th>\r\n            <th>Day</th>\r\n            <th>Time</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n            <td>\r\n                <input [(ngModel)]=\"field.code\" class=\"form-control\" type=\"text\" name=\"{{field.code}}\" />\r\n            </td>\r\n            <td>\r\n                <input [(ngModel)]=\"field.name\" class=\"form-control\" type=\"text\" name=\"{{field.name}}\" />\r\n            </td>\r\n            <td>\r\n                <input [(ngModel)]=\"field.price\" class=\"form-control\" type=\"text\" name=\"{{field.price}}\" />\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue(i)\">Delete</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <input class=\"form-control\" type=\"text\" id=\"newAttributeCode\" [(ngModel)]=\"newAttribute.code\" name=\"newAttributeCode\" />\r\n            </td>\r\n            <td>\r\n                <input class=\"form-control\" type=\"text\" id=\"newAttributeName\" [(ngModel)]=\"newAttribute.name\" name=\"newAttributeName\" />\r\n            </td>\r\n            <td>\r\n                <input class=\"form-control\" type=\"text\" id=\"newAttributePrice\" [(ngModel)]=\"newAttribute.price\" name=\"newAttributePrice\" />\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue()\">Add</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/users/managetrips/managetrips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagetripsComponent; });
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

var ManagetripsComponent = (function () {
    function ManagetripsComponent() {
        this.fieldArray = [];
        this.newAttribute = {};
    }
    ManagetripsComponent.prototype.ngOnInit = function () {
    };
    ManagetripsComponent.prototype.addFieldValue = function () {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
    };
    ManagetripsComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    return ManagetripsComponent;
}());
ManagetripsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-managetrips',
        template: __webpack_require__("../../../../../src/app/users/managetrips/managetrips.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/managetrips/managetrips.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManagetripsComponent);

//# sourceMappingURL=managetrips.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n    box-sizing: border-box;\r\n  }\r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\nimg{\r\n    width:100%;\r\n    height:250px;\r\n}\r\nh2{\r\n    color: #333180;\r\n}\r\n  .column {\r\n    float: left;\r\n    width: 33.3%;\r\n    margin-bottom: 16px;\r\n    padding: 0 8px;\r\n  }\r\n  \r\n  @media (max-width: 650px) {\r\n    .column {\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .inner-content {\r\n    padding: 16px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .inner-content::after, .row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n  \r\n  .title {\r\n    color: grey;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container box\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <img src=\"/assets/imgs/subway.jpg\" >\r\n            <div class=\"inner-content\">\r\n              <h2>Create</h2><br>\r\n              <p class=\"title\">Create profile and trip</p><br>\r\n              <p>Like other User to travel with them</p><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <img src=\"/assets/imgs/friends1.jpg\">\r\n            <div class=\"inner-content\">\r\n              <h2>Match</h2><br>\r\n              <p class=\"title\">If they Like you, Its a Match</p><br>\r\n              <p>Keep Searching</p><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <img src=\"/assets/imgs/friends.jpg\">\r\n            <div class=\"inner-content\">\r\n              <h2>Travel</h2><br>\r\n              <p class=\"title\">Travel and Chat with matched user</p><br>\r\n              <p>Get Started Now!</p><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>"

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

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 center-block\">\n    <div class=\"panel\">\n      <div class=\"panel-title\">Error</div>\n      <div class=\"panel-body\">Please try again</div>\n    </div>\n  </div>\n</div>\n"

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
exports.push([module.i, "@media only screen and (max-width: 768px) {\r\n  .img1 {\r\n    display: none;\r\n  }\r\n}\r\n.btn {\r\n  background: #191842;\r\n  background-image: linear-gradient(to bottom, #191842, #6461b3);\r\n  border-radius: 58px;\r\n  box-shadow: 0px 1px 3px #666666;\r\n  font-family: Arial;\r\n  color: #ffffff;\r\n  font-size: 20px;\r\n  padding: 15px 40px 15px 40px;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn:hover {\r\n  background: #6461b3;\r\n  background-image: linear-gradient(to bottom, #6461b3, #191842);\r\n  text-decoration: none;\r\n}\r\n\r\n.img1{\r\n  width:500px;\r\n  -webkit-transform: rotate(-7deg);\r\n          transform: rotate(-7deg);\r\n  margin-top: 50px; \r\n}\r\n.center{\r\n  margin: auto;\r\n  text-align: center !important;\r\n}\r\n\r\n.design{\r\n  border-top-left-radius: 400px;\r\n  border-top-right-radius: 400px;\r\n  border-bottom-left-radius: 200px;\r\n  border-bottom-right-radius: 200px;\r\n  \r\n  -webkit-animation: fade-in 4s ease infinite alternate;\r\n  \r\n          animation: fade-in 4s ease infinite alternate;\r\n}\r\n.fade-in{\r\n  -webkit-animation: fade 1s ease 1 alternate;\r\n          animation: fade 1s ease 1 alternate;\r\n}\r\n@-webkit-keyframes fade{\r\n  0%{opacity: 0%;}\r\n  25%{opacity: 50%;}\r\n  90%{opacity: 70}\r\n  100%{opacity: 100%;}\r\n}\r\n@keyframes fade{\r\n  0%{opacity: 0%;}\r\n  25%{opacity: 50%;}\r\n  90%{opacity: 70}\r\n  100%{opacity: 100%;}\r\n}\r\n@-webkit-keyframes fade-in{\r\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\r\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\r\n}\r\n@keyframes fade-in{\r\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\r\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\r\n}\r\ndiv{\r\n  padding: 10px;\r\n}\r\n\r\n.content{\r\n  -webkit-animation: landinganim 0.5s 0s alternate both ease-in;\r\n          animation: landinganim 0.5s 0s alternate both ease-in; \r\n}\r\n.content1{\r\n  color: lightsalmon;\r\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\r\n          animation: landinganim2 1s 0.6s alternate both ease-in;\r\n}\r\n.content2{\r\n  color: lightgreen;\r\n  -webkit-animation: landinganim3 1s 0.6s alternate both ease-in;\r\n          animation: landinganim3 1s 0.6s alternate both ease-in;\r\n}\r\n.content3{\r\n  color: lightskyblue;\r\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\r\n          animation: landinganim2 1s 0.6s alternate both ease-in;\r\n}\r\nspan{\r\n  color: gold !important;\r\n}\r\n.logo{\r\n  width: 64px;\r\n}\r\n\r\n@-webkit-keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@-webkit-keyframes landinganim2 {\r\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim2 {\r\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@-webkit-keyframes landinganim3 {\r\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim3 {\r\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row center\">\r\n            <div class=\"col-md-6 center \">\r\n                <img class=\"img1 coolShadow\" src=\"/assets/imgs/friends1.jpg\"/>\r\n            </div>\r\n            <div class=\"col-md-6 center design fade-in\">\r\n                <img class=\"logo content coolShadow\" src=\"/assets/imgs/travellogoicon.png\"/>\r\n                <div class=\"content1 coolShadow\">\r\n                    <h1>Find Buddies</h1>\r\n                    <span>with whom you want to</span>\r\n                </div>\r\n                <div class=\"content2 coolShadow\">\r\n                    <h1>Commute</h1>\r\n                    <span>and</span>\r\n                </div>\r\n                <div class=\"content3 coolShadow\">\r\n                    <h1>Share</h1>\r\n                    <span>your boredom</span>\r\n                </div>\r\n\r\n          </div>\r\n          <button class=\"btn\">Sign Up Online</button>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/utility/landing/landing.component.ts":
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
        providers: []
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.heading-title {\r\n    margin-bottom: 100px;\r\n}\r\n.text-center {\r\n    text-align: center;\r\n}\r\n.heading-title h3 {\r\n    margin-bottom: 0;\r\n    letter-spacing: 2px;\r\n    font-weight: normal;\r\n}\r\n.team-member, .team-member .team-img {\r\n    position: relative;\r\n}\r\n.team-member {\r\n    overflow: hidden;\r\n}\r\n.team-member, .team-member .team-img {\r\n    position: relative;\r\n}\r\n.team-member{\r\n    margin: 0 10px;\r\n    color: #333;\r\n    font-size: 16px;\r\n}\r\n.team-title {\r\n    position: static;\r\n    padding: 20px 0;\r\n    display: inline-block;\r\n    letter-spacing: 2px;\r\n    width: 100%;\r\n}\r\n.team-title h5 {\r\n    margin-bottom: 0px;\r\n    display: block;\r\n    text-transform: uppercase;\r\n}\r\n.team-title span {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    color: #a5a5a5;\r\n    letter-spacing: 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"heading-title text-center\">\r\n            <h3>OUR TEAM </h3>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/aanchal.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Aanchal Sharma</h5>\r\n                <span>Computer Science</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/akul.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Akul Swami</h5>\r\n                <span>Computer Engineering</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/sam.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Samartha</h5>\r\n                <span>Computer Science</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/riya.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Riya Bulia</h5>\r\n                <span>Computer Science</span>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/utility/team/team.component.ts":
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
        template: __webpack_require__("../../../../../src/app/utility/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/team/team.component.css")]
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