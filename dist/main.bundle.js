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
exports.push([module.i, "body{\n\twidth: 90% !important;\n\theight: 960px;\n}\n\n.backgroundImage {\n    background-image: url(\"/assets/imgs/header.jpg\");\n    background-repeat:no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.center, router-outlet{\n    text-align: center;\n    font-size:45px;\n    font-weight: bold;\n\tmargin-top: 80px;\n\theight: 60%;\n}\n\n.welcomeColor {\n    color: white;\n}\n\n\n.colorChangeAnimation {\n      \n    font-family: futura;\n    font-style: italic;\n      \n    width:100%;\n      \n    margin: 0 auto;\n     \n    color:#313131;\n     \n    -webkit-animation:colorchange 20s infinite alternate;\n      \n      \n}\n\n@-webkit-keyframes colorchange {\n\t0% {\n\t\tcolor: #464a4e;\n\t}\n\n\t10% {\n    \tcolor: #856404;\n\t}\n\n\t20% {\n    \tcolor: #721c24;\n\t}\n\n\t30% {\n    \tcolor: #dc3545;\n\t}\n\n\t40% {\n    \tcolor: #0b3114;\n\t}\n\n\t50% {\n    \tcolor: #34495e;\n\t}\n\n\t60% {\n    \tcolor: #818182;\n\t}\n\n\t70% {\n    \tcolor: #0b5561;\n\t}\n\n\t80% {\n    \tcolor: #9e810b;\n\t}\n\n\t90% {\n    \tcolor: #094416;\n\t}\n\n\t100% {\n    \tcolor: #055818;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"container backgroundImage\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">Travel Buddy</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n          <li><a class=\"active\" routerLink='/home'>Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink='/signup'>Sign Up</a></li>\n          <li><a routerLink='/login'>Log In</a></li>\n          <li></li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"wrapper\">\n    <h1 class=\"h1 text-center\">Welcome to <span class=\"colorChangeAnimation\">Travel Buddies</span></h1>\n  </div>\n  <router-outlet></router-outlet>\n</body>\n\n`"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TravelBuddy';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__users_user_detail_user_detail_component__["a" /* UserDetailComponent */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/users/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__ = __webpack_require__("../../../../../src/app/users/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__["a" /* HomeComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__users_users_list_users_list_component__["a" /* UsersListComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__users_user_detail_user_detail_component__["a" /* UserDetailComponent */], },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__users_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__users_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_5__users_users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__users_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__users_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

module.exports = ""

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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/users/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/home/home.component.css")]
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
exports.push([module.i, ".login{\n    margin: 0;\n    width: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Login here</h2>\n    <form class=\"signup-form col-md-5\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input class=\"form-control\" name=\"username\" [(ngModel)]=\"username\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pass\">Password</label>\n        <input class=\"form-control\" name=\"pass\" type=\"password\" [(ngModel)]=\"password\"/>\n      </div>\n      <button (click)=\"checkLogin()\">Login</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
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
    function LoginComponent(UserService) {
        this.UserService = UserService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserService
            .getUsers()
            .then(function (Users) {
            _this.users = Users.map(function (User) {
                return User;
            });
        });
    };
    LoginComponent.prototype.checkLogin = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (this.username)
                if (user.username.toLowerCase() === this.username.toLowerCase() && user.password === this.password) {
                    console.log("Login success");
                }
                else {
                    console.log("error");
                }
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "username", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/users/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-image {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 0;\n  }\n  .full-width-image:before {\n    content: \"\";\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: -1;\n    display: block;\n    background-image: url(\"/../assets/imgs/subway.jpg\");\n    background-size: cover;\n    height: 100vh;\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n  }\n  .signup{\n    background-color:rgba(65, 86, 121, 0.45);\n      width:80%;\n      margin:100px auto;\n      padding:0;\n  }\n  \n  .signup .signup-image {\n    width: 50%;\n    float: left;\n    background: url(\"/../assets/imgsimages/friends1.jpg\") no-repeat;\n    background-position: center;\n    background-size: cover;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    -ms-background-size: cover;\n    height: 555px;\n  }\n  .signup .signup-form {\n      width: 50%;\n    float: left;\n    padding: 25px 0 0;\n  }\n  input#userid,input#email,input#password1,input#password2,input#name,input#username, input#mobile {\n      width:300px;\n      height:50px;\n      padding:0 15px;\n      color:#fff;\n      font-size:17px;\n      font-weight:200;\n      background-color:transparent;\n      /*-- w3layouts --*/ \n      border-bottom:2px solid #fff;\n      border-top-color:transparent;\n      border-left-color:transparent;\n      border-right-color:transparent;\n      font-family: 'Raleway', sans-serif;\n      margin:0 auto 20px;\n      display:block;\n    outline:none;\n    letter-spacing: 1px;\n  }\n  input:focus,input:hover {\n      color:#fff;\n      border-bottom:2px solid #3970b0;\n  }\n  input::-webkit-input-placeholder{\n    color:rgba(184, 207, 218, 0.86);\n  }\n  input:-ms-input-placeholder{\n    color:rgba(184, 207, 218, 0.86);\n  }\n  input::placeholder{\n    color:rgba(184, 207, 218, 0.86);\n  }\n  input.register {\n    width: 300px;\n    margin: 30px auto;\n    display: block;\n    height: 50px;\n    text-align: center;\n    font-size: 17px;\n    font-weight: normal;\n    color: #fff;\n    background-color:#3970b0;\n    border-color: transparent;\n    font-family: sans-serif;\n    /*-- w3ls --*/\n    transition:all 0.5s ease-in-out;\n    -webkit-transition:all 0.5s ease-in-out;\n    -moz-transition:all 0.5s ease-in-out;\n    -o-transition:all 0.5s ease-in-out;\n    -ms-transition:all 0.5s ease-in-out;\n    cursor:pointer;\n    letter-spacing: 1px;\n  }\n  input.register:hover {\n    color: #fff;\n    background-color:#2b5f9a;\n  }\n  .clear {\n      clear:both;\n  }/* clear float */\n  \n  .font-anim\n  {\n    background-color:rgba(148, 125, 57, 0.65);\n    width: 100%;\n    height: 100%;\n    top: 0; \n    bottom: 0;\n    left:0; \n    right: 0;\n    overflow: hidden;\n  }\n  .travel-content1\n  {\n    margin-top: 150px;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: content1;\n            animation-name: content1;\n   }\n  @-webkit-keyframes content1 \n  {\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\n    20% {-webkit-transform: translate(000px,65px);transform: translate(000px,65px);}\n    25%,65%,75% {-webkit-transform: translate(000px,85px);transform: translate(000px,85px);}\n    100% {-webkit-transform: translate(000px,-350px);transform: translate(000px,-350px);}\n  }\n  @keyframes content1 \n  {\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\n    20% {-webkit-transform: translate(000px,65px);transform: translate(000px,65px);}\n    25%,65%,75% {-webkit-transform: translate(000px,85px);transform: translate(000px,85px);}\n    100% {-webkit-transform: translate(000px,-350px);transform: translate(000px,-350px);}\n  }\n  .travel-content11\n  {\n    vertical-align: top;\n    text-align: center;\n    color: #FFFFFF;\n    font-family: 'Roboto';\n    margin-left: 10px;\n    height:95px;\n    overflow: hidden;\n    -webkit-animation-delay: 1.3s;\n            animation-delay: 1.3s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: content11;\n            animation-name: content11;\n  }\n  @-webkit-keyframes content11 \n  {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  .travel-content2\n  {\n    -webkit-animation-delay: 4s;\n            animation-delay: 4s;\n    -webkit-animation-duration: 4.8s;\n            animation-duration: 4.8s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: content2;\n            animation-name: content2;\n   }\n  \n  @-webkit-keyframes content2 \n  {\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\n    20% {-webkit-transform: translate(000px,-165px);transform: translate(000px,-165px);}\n    25%,65% {-webkit-transform: translate(000px,-145px);transform: translate(000px,-145px);}\n    100% {-webkit-transform: scale(0.6);transform: scale(0.6);}\n  }\n  \n  @keyframes content2 \n  {\n    0% {-webkit-transform: translate(000px,1000px);transform: translate(000px,1000px);}\n    20% {-webkit-transform: translate(000px,-165px);transform: translate(000px,-165px);}\n    25%,65% {-webkit-transform: translate(000px,-145px);transform: translate(000px,-145px);}\n    100% {-webkit-transform: scale(0.6);transform: scale(0.6);}\n  }\n  .travel-content21\n  {\n    vertical-align: top;\n    text-align: center;\n    color: #FFFFFF;;\n    font-family: 'Roboto';\n    margin-left: 10px;\n    height:95px;\n    overflow: hidden;\n    -webkit-animation-delay: 5.5s;\n            animation-delay: 5.5s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: content21;\n            animation-name: content21;\n  }\n  @-webkit-keyframes content21 \n  {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  @keyframes content21 \n  {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  .travel-content3\n  {\n    top: 75px;\n    font-family: 'Roboto';\n    color:#FFFFFF;;\n    -webkit-animation-delay: 9s;;\n            animation-delay: 9s;\n    -webkit-animation-duration: 2.5s;\n            animation-duration: 2.5s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: content3;\n            animation-name: content3;\n  }\n  @-webkit-keyframes content3 \n  {\n    0% {-webkit-transform: scale(0);transform: scale(0);}\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\n    20% {-webkit-transform: scale(1);transform: scale(1);}\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\n    100% {-webkit-transform: translate(000px,-300px);transform: translate(000px,-300px);}\n  }\n  @keyframes content3 \n  {\n    0% {-webkit-transform: scale(0);transform: scale(0);}\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\n    20% {-webkit-transform: scale(1);transform: scale(1);}\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\n    100% {-webkit-transform: translate(000px,-300px);transform: translate(000px,-300px);}\n  }\n  .travel-content4\n  {\n    font-family: 'Roboto';\n    top: 75px;\n    color:#FFFFFF;;\n    -webkit-animation-delay: 12s;;\n            animation-delay: 12s;\n    -webkit-animation-duration: 2.5s;\n            animation-duration: 2.5s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: content4;\n            animation-name: content4;\n  }\n  \n  @-webkit-keyframes content4 \n  {\n    0% {-webkit-transform: scale(0);transform: scale(0);}\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\n    20% {-webkit-transform: scale(1);transform: scale(1);}\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\n    100% {-webkit-transform: translate(000px,-300px);transform: translate(000px,-300px);}\n  }\n  \n  @keyframes content4 \n  {\n    0% {-webkit-transform: scale(0);transform: scale(0);}\n    10% {-webkit-transform: scale(1.2);transform: scale(1.2);}\n    20% {-webkit-transform: scale(1);transform: scale(1);}\n    80% {-webkit-transform: translate(000px,0px);transform: translate(000px,0px);}\n    100% {-webkit-transform: translate(000px,-300px);transform: translate(000px,-300px);}\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margins\">\n  <div class=\"full-width-image\">\n    <div class=\"signup\">\n      <div class=\"signup-image\">\n          <div class=\"font-anim\" align=\"center\">\n              <div class=\"travel-content1\">\n                  <img src=\"http://www.freeiconspng.com/uploads/travel-guide-icon-map-ticket-travel-icon-17.png\" width=\"100px\"/>\n                  <div class=\"travel-content11\">\n                      <font style=\"font-weight:300;font-size: 45px;\"> TRAVEL </font> <font style=\"font-weight:50;font-size: 45px;\">BUDDY</font>\n                      <br />\n                      <font style=\"font-weight:300; font-size: 18px;\">Yes It's so crazy</font>\n                  </div>\n              </div>\n              <div class=\"travel-content2\">\n                  <div class=\"travel-content21\">\n                  <font style=\"font-weight:400;font-size: 45px;\">Share</font>\n                      <br />\n                  <font style=\"font-weight:300; font-size: 18px;\">your boredom</font>\n                  </div>\n              </div>\n              <div class=\"travel-content3\">\n                  <font style=\"font-weight:300;font-size: 55px;\">Find Buddies</font>\n                      <br />\n                  <font style=\"font-weight:300; font-size: 18px;\"> with whom you want to </font>\n              </div>\n              <div class=\"travel-content4\">\n                  <font style=\"font-weight:300;font-size: 45px;\"> Commute</font>\n                      <br />\n                  <font style=\"font-weight:300; font-size: 18px;\">And</font>\n              </div>\n          </div>\n      </div>\n      <div class=\"signup-form\">\n          <form action=\"#\" method=\"post\">\n              <input type=\"text\" id=\"userid\" name=\"user-id\" placeholder=\"User Id\" required=\"\" [(ngModel)]=\"user._id\" disabled>\n              <input type=\"text\" id=\"name\" name=\"user-name\" placeholder=\"Full Name\" required=\"\" [(ngModel)]=\"user.name\">\n              <input type=\"text\" id=\"username\" name=\"user-uname\" placeholder=\"User Name\" required=\"\" [(ngModel)]=\"user.username\">\n              <input type=\"email\" id=\"email\" name=\"user-email\" placeholder=\"mail@example.com\" required=\"\" [(ngModel)]=\"user.email\">\n              <input type=\"text\" id=\"mobile\" name=\"user-phone-mobile\" placeholder=\"+91 9781232100\" [(ngModel)]=\"user.phone\"/>\n              <input type=\"password\" class=\"lock\" name=\"user-pass\" placeholder=\"Password\" id=\"password1\" required=\"\" [(ngModel)]=\"user.password\">\n              <input type=\"password\" class=\"lock\" name=\"confirm-password\" placeholder=\"Confirm Password\" id=\"password2\" required=\"\">\n\n              <input type=\"submit\" class=\"register\" value=\"Register\" (click)=\"createUser(user)\">\n          </form>\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n</div> \n\n<!-- <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>New User Signup</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <form class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"user-id\">ID</label>\n        <input class=\"form-control\" name=\"user-id\" [(ngModel)]=\"user._id\" disabled/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"user-name\">Name</label>\n        <input class=\"form-control\" name=\"user-name\" [(ngModel)]=\"user.name\" placeholder=\"Name\"/>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"user-uname\">Username</label>\n          <input class=\"form-control\" name=\"user-uname\" [(ngModel)]=\"user.username\" placeholder=\"Username\"/>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"user-email\">Email</label>\n        <input class=\"form-control\" name=\"user-email\" [(ngModel)]=\"user.email\" placeholder=\"support@mlab.com\"/>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"user-pass\">Password</label>\n          <input class=\"form-control\" name=\"user-pass\" [(ngModel)]=\"user.password\" placeholder=\"T*****\" type=\"password\"/>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"user-phone-mobile\">Phone</label>\n        <input class=\"form-control\" name=\"user-phone-mobile\" [(ngModel)]=\"user.phone\" placeholder=\"1234567890\"/>\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"createUser(user)\">Register</button>\n    </form>\n  </div> -->"

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
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
    function UserDetailComponent(UserService) {
        this.UserService = UserService;
        this.user = {
            _id: "",
            username: "",
            created: {
                date: new Date(),
            },
            roles: [
                "user"
            ],
            profileImageURL: "",
            password: "",
            email: "",
            phone: "",
            name: ""
        };
    }
    UserDetailComponent.prototype.createUser = function (user) {
        this.UserService.createUser(user);
    };
    return UserDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]) === "function" && _a || Object)
], UserDetailComponent.prototype, "user", void 0);
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-detail',
        template: __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserDetailComponent);

var _a, _b;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
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
        this.usersUrl = '/api/users';
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
        console.error(errMsg); // log to console instead
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Users</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let user of users\"\n        (click)=\"selectUser(user)\"\n        [class.active]=\"user === selectedUser\">\n        {{user.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewUser()\">New</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(UserService) {
        var _this = this;
        this.UserService = UserService;
        this.getNewID = function () {
            return (_this.userslen + 1).toString();
        };
        this.getIndexOfUser = function (userId) {
            return _this.users.findIndex(function (user) {
                return user._id === userId;
            });
        };
        this.deleteUser = function (userId) {
            var idx = _this.getIndexOfUser(userId);
            if (idx !== -1) {
                _this.users.splice(idx, 1);
                _this.selectUser(null);
            }
            return _this.users;
        };
        this.addUser = function (user) {
            _this.users.push(user);
            _this.selectUser(user);
            return _this.users;
        };
        this.updateUser = function (user) {
            var idx = _this.getIndexOfUser(user._id);
            if (idx !== -1) {
                _this.users[idx] = user;
                _this.selectUser(user);
            }
            return _this.users;
        };
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserService
            .getUsers()
            .then(function (Users) {
            _this.users = Users.map(function (User) {
                return User;
            });
            _this.userslen = _this.users.length;
        });
    };
    UsersListComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    UsersListComponent.prototype.createNewUser = function () {
        var user = {
            _id: this.getNewID(),
            username: "",
            created: {
                date: new Date(),
            },
            roles: [
                "user"
            ],
            profileImageURL: "",
            password: "",
            email: "",
            phone: "",
            name: ""
        };
        // By default, a newly-created User will have the selected state.
        this.selectUser(user);
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-list',
        template: __webpack_require__("../../../../../src/app/users/users-list/users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-list/users-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UsersListComponent);

var _a;
//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
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