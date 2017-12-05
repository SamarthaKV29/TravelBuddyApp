webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:700);", ""]);

// module
exports.push([module.i, "\nbody{\n\twidth: 100% !important;\n    height: 100%;\n    padding: 5%;\n    padding-top: 0;\n    background: none;\n}\n.navbar-inverse{\n    background-color:#2f296b;;\n}\n.navbar {\n    min-height: 50px;\n  }\n.navbar-brand{\n    height: 50px;\n\ttext-shadow: 2px 2px 3px rgba(255,255,255,0.1);\n}\n.container-fluid{\n    padding: 15px 7%;\n}\n#collapsible ul.nav * a{\n\tcolor: white !important;\n}\n\n#collapsible ul.nav * a:hover{\n    color: gold !important;\n}\n\nrouter-outlet{\n    text-align: center;\n\tmargin-top: 80px;\n\theight: auto;\n}\n\n.welcomeColor {\n    color: white;\n}\n.wrapper{\n    margin-top: 80px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" (click)=\"collapse()\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span> \n          </button>\n      <a class=\"navbar-brand colorChangeAnimation d-flex\" routerLink='/'>\n        <span class=\"d-inline\">Travel Buddy</span>\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"collapsible\" #collapsible>\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a class=\"active\" [routerLink]=\"['/home']\">Home</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/about']\">About</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['/team']\">Team</a>\n          </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!this.isLoggedin\">\n          <a [routerLink]=\"['/signup', new]\"> Sign Up</a>\n        </li>\n        <li  *ngIf=\"!this.isLoggedin\">\n          <a [routerLink]=\"['/login', true]\"> Log In</a>\n        </li>\n        <li *ngIf=\"this.isLoggedin\">\n          <a [routerLink]=\"['/profile', this.currentUser.username]\"><i class=\"glyphicon glyphicon-user\"></i> User Profile</a>\n        </li>\n        <li *ngIf=\"this.isLoggedin\">\n          <a [routerLink]=\"['/login', false]\"><i class=\"glyphicon glyphicon-log-out\"></i> Logout</a>\n        </li>\n        \n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <app-landing *ngIf=\"landing\"></app-landing>\n  <div class=\"loading\" *ngIf=\"this.loading\">\n      <p class=\"alert alert-warning\">Loading . . . </p>\n  </div>\n  <router-outlet *ngIf=\"!this.loading\"></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
        this.collapsed = false;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('collapsible'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "collapsible", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_landing_landing_component__ = __webpack_require__("../../../../../src/app/utilities/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_error_error_component__ = __webpack_require__("../../../../../src/app/utilities/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utilities_about_about_component__ = __webpack_require__("../../../../../src/app/utilities/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilities_team_team_component__ = __webpack_require__("../../../../../src/app/utilities/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__managetrips_managetrips_component__ = __webpack_require__("../../../../../src/app/managetrips/managetrips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__createtrip_createtrip_component__ = __webpack_require__("../../../../../src/app/createtrip/createtrip.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var homeRoutes = [
    { path: "create", component: __WEBPACK_IMPORTED_MODULE_15__createtrip_createtrip_component__["a" /* CreatetripComponent */] },
    { path: "manage", component: __WEBPACK_IMPORTED_MODULE_14__managetrips_managetrips_component__["a" /* ManagetripsComponent */] },
    { path: "inbox", component: __WEBPACK_IMPORTED_MODULE_13__inbox_inbox_component__["a" /* InboxComponent */] }
];
var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], children: homeRoutes },
    //{ path: 'signup/:regstate', component: UserDetailComponent },
    { path: 'signup', redirectTo: 'signup/new' },
    { path: 'login', redirectTo: 'login/true' },
    { path: 'login/:loginstate', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    //{ path: 'forgotpass', component: ForgotPassComponent },
    //{ path: 'profile/:user', component: UserProfileComponent},
    //{ path: 'profile/:user/:updstate', component: UserProfileComponent },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_10__utilities_error_error_component__["a" /* ErrorComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__utilities_about_about_component__["a" /* AboutComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_12__utilities_team_team_component__["a" /* TeamComponent */] }
];
var config = new __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["GoogleLoginProvider"]("230271184229-ipk8nc2c9r1bfiuvpn0naa5a69ggnojk.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["FacebookLoginProvider"]("227631451109453")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__utilities_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__utilities_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__utilities_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__utilities_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_13__inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_14__managetrips_managetrips_component__["a" /* ManagetripsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__createtrip_createtrip_component__["a" /* CreatetripComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["SocialLoginModule"].initialize(provideConfig()),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/createtrip/createtrip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\r\n    margin-top: 10%\r\n  }\r\n  \r\n  .sub-heading {\r\n    font-weight: 100;\r\n    font-size: 15px;\r\n    color: #333;\r\n    background-color: #f5f5f5;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 5px;\r\n  }\r\n  \r\n  .panel-title-inner {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    color: inherit;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .panel-heading{\r\n    background: #EBB38E;\r\n    background: linear-gradient(to bottom, #EBB38E 0%,#EE8F54 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EBB38E', endColorstr='#EE8F54',GradientType=0 ); /* IE6-9 */\r\n  }\r\n  \r\n  owl-date-time{\r\n    border: none !important;\r\n    margin: 0 !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createtrip/createtrip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\r\n    <div class=\"row centered-form\">\r\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Create Trip\r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form class=\"form-horizontal\" action=\" \" method=\"post\">\r\n                        <fieldset>\r\n\r\n                            <div class=\"panel sub-heading form-group\">\r\n                                <h3 class=\"panel-title-inner\"> Origin:\r\n                                </h3>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                        </span>\r\n                                        <input list=\"originState\" (change)=\"onSelect()\" name=\"user-originState\" [(ngModel)]=\"profileData.originAddress.state\" placeholder=\"State\"\r\n                                            required class=\"form-control\" />\r\n                                        <datalist id=\"originState\">\r\n                                            <option *ngFor=\"let state of this.states\" [ngValue]=\"this.LocationService.getState(state)\">{{state}}</option>\r\n                                        </datalist>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                        </span>\r\n                                        <span class=\"alert alert-warning\" [hidden]=\"!this.loading\"></span>\r\n                                        <input list=\"originCity\" [hidden]=\"!this.loading\" name=\"user-originCity\" [(ngModel)]=\"profileData.originAddress.city\" placeholder=\"City\"\r\n                                            required class=\"form-control\" />\r\n                                        <datalist id=\"originCity\">\r\n                                            <option *ngFor=\"let city of this.cities\" [ngValue]=\"city\">{{city}}</option>\r\n                                        </datalist>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel sub-heading form-group\">\r\n                                <h3 class=\"panel-title-inner\"> Destination:\r\n                                </h3>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                                        </span>\r\n                                        <input name=\"user-destinationCity\" placeholder=\"City\" required=\"\" class=\"form-control\" type=\"text\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"panel sub-heading form-group\">\r\n                                <h3 class=\"panel-title-inner\">Start Time:\r\n                                </h3>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-time\"></i>\r\n                                        </span>\r\n                                        <owl-date-time [min]=\"profileData.originTime\" [required]=\"true\" [(ngModel)]=\"profileData.originTime\" [locale]=\"en\" name=\"user-originTime\"></owl-date-time>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"panel sub-heading form-group\">\r\n                                <h3 class=\"panel-title-inner\">Return Time:\r\n                                </h3>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12  inputGroupContainer\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"glyphicon glyphicon-time\"></i>\r\n                                        </span>\r\n                                        <owl-date-time [min]=\"profileData.originTime\" [required]=\"true\" [(ngModel)]=\"profileData.destinationTime\" [locale]=\"en\" name=\"user-destinationTime\"></owl-date-time>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info btn-block\">Create\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/createtrip/createtrip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatetripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    CreatetripComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createtrip',
            template: __webpack_require__("../../../../../src/app/createtrip/createtrip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/createtrip/createtrip.component.css")],
            providers: []
        })
    ], CreatetripComponent);
    return CreatetripComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\r\n    margin: auto;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row center\">\r\n        <div class=\"col center\">\r\n            <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"panel-title\">\r\n                        {{this.message}}\r\n                    </div>\r\n                </div>\r\n                <!-- *ngIf=\"this.loggedIn\" -->\r\n                \r\n                <div class=\"panel-content\">\r\n                    <ul class=\"nav nav-tabs\">\r\n                        <li><a [routerLink]=\"['create']\" ><i class=\"glyphicon glyphicon-plus-sign\"></i> Create Trip</a></li>\r\n                        <li><a [routerLink]=\"['manage']\"><i class=\"glyphicon glyphicon-cog\"></i> Manage Trips</a></li>\r\n                        <li><a [routerLink]=\"['inbox']\"><i class=\"glyphicon glyphicon-comment\"></i> Inbox</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
        //setInterval(this.checkLoggedIn, 5000);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.checkLoggedIn();
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
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  inbox works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("../../../../../src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxComponent);
    return InboxComponent;
}());



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__);
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
    function LoginComponent(authService) {
        var _this = this;
        this.authService = authService;
        setInterval(function () {
            if (_this.loggedIn && _this.user) {
                console.log("logged In : " + _this.user.name);
            }
        }, 2000);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then();
    };
    LoginComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (resp) {
            _this.user = resp;
            console.log("USER");
        }, function (rej) { return rej; });
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'social-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/managetrips/managetrips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/managetrips/managetrips.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th>Trip</th>\r\n            <th>Day</th>\r\n            <th>Time</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n            <td>\r\n                <input [(ngModel)]=\"field.code\" class=\"form-control\" type=\"text\" name=\"{{field.code}}\" />\r\n            </td>\r\n            <td>\r\n                <input [(ngModel)]=\"field.name\" class=\"form-control\" type=\"text\" name=\"{{field.name}}\" />\r\n            </td>\r\n            <td>\r\n                <input [(ngModel)]=\"field.price\" class=\"form-control\" type=\"text\" name=\"{{field.price}}\" />\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue(i)\">Delete</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <input class=\"form-control\" type=\"text\" id=\"newAttributeCode\" [(ngModel)]=\"newAttribute.code\" name=\"newAttributeCode\" />\r\n            </td>\r\n            <td>\r\n                <input class=\"form-control\" type=\"text\" id=\"newAttributeName\" [(ngModel)]=\"newAttribute.name\" name=\"newAttributeName\" />\r\n            </td>\r\n            <td>\r\n                <input class=\"form-control\" type=\"text\" id=\"newAttributePrice\" [(ngModel)]=\"newAttribute.price\" name=\"newAttributePrice\" />\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue()\">Add</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/managetrips/managetrips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagetripsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    ManagetripsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managetrips',
            template: __webpack_require__("../../../../../src/app/managetrips/managetrips.component.html"),
            styles: [__webpack_require__("../../../../../src/app/managetrips/managetrips.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagetripsComponent);
    return ManagetripsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utilities/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n    box-sizing: border-box;\r\n  }\r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\nimg{\r\n    width:100%;\r\n    height:250px;\r\n}\r\nh2{\r\n    color: #333180;\r\n}\r\n  .column {\r\n    float: left;\r\n    width: 33.3%;\r\n    margin-bottom: 16px;\r\n    padding: 0 8px;\r\n  }\r\n  \r\n  @media (max-width: 650px) {\r\n    .column {\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .inner-content {\r\n    padding: 16px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .inner-content::after, .row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n  \r\n  .title {\r\n    color: grey;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container box\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <img src=\"/assets/imgs/subway.jpg\" >\r\n            <div class=\"inner-content\">\r\n              <h2>Create</h2><br>\r\n              <p class=\"title\">Create profile and trip</p><br>\r\n              <p>Like other User to travel with them</p><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <img src=\"/assets/imgs/friends1.jpg\">\r\n            <div class=\"inner-content\">\r\n              <h2>Match</h2><br>\r\n              <p class=\"title\">If they Like you, Its a Match</p><br>\r\n              <p>Keep Searching</p><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n            <img src=\"/assets/imgs/friends.jpg\">\r\n            <div class=\"inner-content\">\r\n              <h2>Travel</h2><br>\r\n              <p class=\"title\">Travel and Chat with matched user</p><br>\r\n              <p>Get Started Now!</p><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/utilities/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utilities/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/utilities/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utilities/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utilities/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\r\n  .img1 {\r\n    display: none;\r\n  }\r\n}\r\n.btn {\r\n  background: #191842;\r\n  background-image: linear-gradient(to bottom, #191842, #6461b3);\r\n  border-radius: 58px;\r\n  box-shadow: 0px 1px 3px #666666;\r\n  font-family: Arial;\r\n  color: #ffffff;\r\n  font-size: 20px;\r\n  padding: 15px 40px 15px 40px;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn:hover {\r\n  background: #6461b3;\r\n  background-image: linear-gradient(to bottom, #6461b3, #191842);\r\n  text-decoration: none;\r\n}\r\n\r\n.img1{\r\n  width:500px;\r\n  -webkit-transform: rotate(-7deg);\r\n          transform: rotate(-7deg);\r\n  margin-top: 50px; \r\n}\r\n.center{\r\n  margin: auto;\r\n  text-align: center !important;\r\n}\r\n\r\n.design{\r\n  border-top-left-radius: 400px;\r\n  border-top-right-radius: 400px;\r\n  border-bottom-left-radius: 200px;\r\n  border-bottom-right-radius: 200px;\r\n  \r\n  -webkit-animation: fade-in 4s ease infinite alternate;\r\n  \r\n          animation: fade-in 4s ease infinite alternate;\r\n}\r\n.fade-in{\r\n  -webkit-animation: fade 1s ease 1 alternate;\r\n          animation: fade 1s ease 1 alternate;\r\n}\r\n@-webkit-keyframes fade{\r\n  0%{opacity: 0%;}\r\n  25%{opacity: 50%;}\r\n  90%{opacity: 70}\r\n  100%{opacity: 100%;}\r\n}\r\n@keyframes fade{\r\n  0%{opacity: 0%;}\r\n  25%{opacity: 50%;}\r\n  90%{opacity: 70}\r\n  100%{opacity: 100%;}\r\n}\r\n@-webkit-keyframes fade-in{\r\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\r\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\r\n}\r\n@keyframes fade-in{\r\n  0%{ box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.185) inset;}\r\n  100%{ box-shadow: 0px 0px 10px 10px rgba(58, 2, 2, 0.445) inset;}\r\n}\r\ndiv{\r\n  padding: 10px;\r\n}\r\n\r\n.content{\r\n  -webkit-animation: landinganim 0.5s 0s alternate both ease-in;\r\n          animation: landinganim 0.5s 0s alternate both ease-in; \r\n}\r\n.content1{\r\n  color: lightsalmon;\r\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\r\n          animation: landinganim2 1s 0.6s alternate both ease-in;\r\n}\r\n.content2{\r\n  color: lightgreen;\r\n  -webkit-animation: landinganim3 1s 0.6s alternate both ease-in;\r\n          animation: landinganim3 1s 0.6s alternate both ease-in;\r\n}\r\n.content3{\r\n  color: lightskyblue;\r\n  -webkit-animation: landinganim2 1s 0.6s alternate both ease-in;\r\n          animation: landinganim2 1s 0.6s alternate both ease-in;\r\n}\r\nspan{\r\n  color: gold !important;\r\n}\r\n.logo{\r\n  width: 64px;\r\n}\r\n\r\n@-webkit-keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim{\r\n  0%{ -webkit-transform: scale(0) translate(0px, -400px); transform: scale(0) translate(0px, -400px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@-webkit-keyframes landinganim2 {\r\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim2 {\r\n  0%{ -webkit-transform: scale(0) translate(-400px, 0px); transform: scale(0) translate(-400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@-webkit-keyframes landinganim3 {\r\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}\r\n\r\n@keyframes landinganim3 {\r\n  0%{ -webkit-transform: scale(0) translate(400px, 0px); transform: scale(0) translate(400px, 0px)}\r\n  100% { -webkit-transform: scale(1) translate(0px, 0px); transform: scale(1) translate(0px, 0px)}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row center\">\r\n            <div class=\"col-md-6 center \">\r\n                <img class=\"img1 coolShadow\" src=\"/assets/imgs/friends1.jpg\"/>\r\n            </div>\r\n            <div class=\"col-md-6 center design fade-in\">\r\n                <img class=\"logo content coolShadow\" src=\"/assets/imgs/travellogoicon.png\"/>\r\n                <div class=\"content1 coolShadow\">\r\n                    <h1>Find Buddies</h1>\r\n                    <span>with whom you want to</span>\r\n                </div>\r\n                <div class=\"content2 coolShadow\">\r\n                    <h1>Commute</h1>\r\n                    <span>and</span>\r\n                </div>\r\n                <div class=\"content3 coolShadow\">\r\n                    <h1>Share</h1>\r\n                    <span>your boredom</span>\r\n                </div>\r\n\r\n          </div>\r\n          <button class=\"btn\">Sign Up Online</button>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/utilities/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/utilities/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utilities/landing/landing.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utilities/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.heading-title {\r\n    margin-bottom: 100px;\r\n}\r\n.text-center {\r\n    text-align: center;\r\n}\r\n.heading-title h3 {\r\n    margin-bottom: 0;\r\n    letter-spacing: 2px;\r\n    font-weight: normal;\r\n}\r\n.team-member, .team-member .team-img {\r\n    position: relative;\r\n}\r\n.team-member {\r\n    overflow: hidden;\r\n}\r\n.team-member, .team-member .team-img {\r\n    position: relative;\r\n}\r\n.team-member{\r\n    margin: 0 10px;\r\n    color: #333;\r\n    font-size: 16px;\r\n}\r\n.team-title {\r\n    position: static;\r\n    padding: 20px 0;\r\n    display: inline-block;\r\n    letter-spacing: 2px;\r\n    width: 100%;\r\n}\r\n.team-title h5 {\r\n    margin-bottom: 0px;\r\n    display: block;\r\n    text-transform: uppercase;\r\n}\r\n.team-title span {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    color: #a5a5a5;\r\n    letter-spacing: 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"heading-title text-center\">\r\n            <h3>OUR TEAM </h3>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/aanchal.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Aanchal Sharma</h5>\r\n                <span>Computer Science</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/akul.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Akul Swami</h5>\r\n                <span>Computer Engineering</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/sam.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Samartha</h5>\r\n                <span>Computer Science</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3\">\r\n            <div class=\"team-member\">\r\n                <div class=\"team-img\">\r\n                    <img src=\"/assets/imgs/riya.jpeg\" alt=\"team member\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"team-title\">\r\n                <h5>Riya Bulia</h5>\r\n                <span>Computer Science</span>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/utilities/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utilities/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map