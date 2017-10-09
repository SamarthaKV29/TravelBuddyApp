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
exports.push([module.i, ".backgroundImage {\r\n    background-image: url(\"/assets/imgs/header.jpg\");\r\n    background-repeat:no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.center, router-outlet{\r\n    text-align: center;\r\n    font-size:45px;\r\n    font-weight: bold;\r\n\tmargin-top: 80px;\r\n\theight: 60%;\r\n}\r\n\r\n.welcomeColor {\r\n    color: white;\r\n}\r\n\r\n\r\n.colorChangeAnimation {\r\n      \r\n    font-family: futura;\r\n    font-style: italic;\r\n      \r\n    width:100%;\r\n      \r\n    margin: 0 auto;\r\n     \r\n    color:#313131;\r\n     \r\n    -webkit-animation:colorchange 20s infinite alternate;\r\n      \r\n      \r\n}\r\n\r\n@-webkit-keyframes colorchange {\r\n\t0% {\r\n\t\tcolor: #464a4e;\r\n\t}\r\n\r\n\t10% {\r\n    \tcolor: #856404;\r\n\t}\r\n\r\n\t20% {\r\n    \tcolor: #721c24;\r\n\t}\r\n\r\n\t30% {\r\n    \tcolor: #dc3545;\r\n\t}\r\n\r\n\t40% {\r\n    \tcolor: #0b3114;\r\n\t}\r\n\r\n\t50% {\r\n    \tcolor: #34495e;\r\n\t}\r\n\r\n\t60% {\r\n    \tcolor: #818182;\r\n\t}\r\n\r\n\t70% {\r\n    \tcolor: #0b5561;\r\n\t}\r\n\r\n\t80% {\r\n    \tcolor: #9e810b;\r\n\t}\r\n\r\n\t90% {\r\n    \tcolor: #094416;\r\n\t}\r\n\r\n\t100% {\r\n    \tcolor: #055818;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container backgroundImage\">\r\n    <div class=\"center\">\r\n      <p class=\"welcomeColor\">Welcome to <span class=\"colorChangeAnimation\">Travel Buddies</span></p>\r\n      <button class=\"btn btn-outline-danger\" routerLink='/signup'>Sign Up</button>\r\n      <button class=\"btn btn-outline-dark\" routerLink='/login'>Log In</button>\r\n    </div>\r\n</div>\r\n<user-list></user-list>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_signup_signup_component__ = __webpack_require__("../../../../../src/app/users/signup/signup.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_10__users_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_signup_signup_component__["a" /* SignupComponent */]
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
exports.push([module.i, ".login{\r\n    margin: 0;\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h2>Login here</h2>\r\n    <form class=\"signup-form col-md-5\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input class=\"form-control\" name=\"username\" [(ngModel)]=\"username\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pass\">Password</label>\r\n        <input class=\"form-control\" name=\"pass\" type=\"password\" [(ngModel)]=\"password\"/>\r\n      </div>\r\n      <button (click)=\"checkLogin()\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

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

/***/ "../../../../../src/app/users/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>New User Signup</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <form class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"user-id\">ID</label>\r\n        <input class=\"form-control\" name=\"user-id\" [(ngModel)]=\"user._id\" disabled/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"user-name\">Name</label>\r\n        <input class=\"form-control\" name=\"user-name\" [(ngModel)]=\"user.name\" placeholder=\"Name\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"user-uname\">Username</label>\r\n          <input class=\"form-control\" name=\"user-uname\" [(ngModel)]=\"user.username\" placeholder=\"Username\"/>\r\n        </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"user-email\">Email</label>\r\n        <input class=\"form-control\" name=\"user-email\" [(ngModel)]=\"user.email\" placeholder=\"support@mlab.com\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"user-pass\">Password</label>\r\n          <input class=\"form-control\" name=\"user-pass\" [(ngModel)]=\"user.password\" placeholder=\"T*****\" type=\"password\"/>\r\n        </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"user-phone-mobile\">Phone</label>\r\n        <input class=\"form-control\" name=\"user-phone-mobile\" [(ngModel)]=\"user.phone\" placeholder=\"1234567890\"/>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"createUser(user)\">Register</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/users/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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



var SignupComponent = (function () {
    function SignupComponent(UserService) {
        this.UserService = UserService;
    }
    SignupComponent.prototype.ngOnInit = function () {
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
    SignupComponent.prototype.createUser = function (user) {
        var _this = this;
        user._id = this.userslen.toString();
        this.UserService.createUser(user).then(function (newUser) {
            _this.createHandler(newUser);
        });
    };
    SignupComponent.prototype.lookupUser = function (user) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var u = _a[_i];
            if (user.username.toLowerCase() == u.username.toLowerCase()) {
                return true;
            }
            else
                return false;
        }
    };
    return SignupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]) === "function" && _a || Object)
], SignupComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "createHandler", void 0);
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/users/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/signup/signup.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h2>New user</h2>\r\n  </div>\r\n</div>\r\n<div  class=\"row\">\r\n  <form class=\"col-md-12\">\r\n    <div class=\"form-group\">\r\n      <label for=\"user-name\">Name</label>\r\n      <input class=\"form-control\" name=\"user-name\" [(ngModel)]=\"user.name\" placeholder=\"Name\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"user-uname\">Username</label>\r\n        <input class=\"form-control\" name=\"user-uname\" [(ngModel)]=\"user.username\" placeholder=\"Username\"/>\r\n      </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"user-email\">Email</label>\r\n      <input class=\"form-control\" name=\"user-email\" [(ngModel)]=\"user.email\" placeholder=\"support@mlab.com\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"user-pass\">Password</label>\r\n        <input class=\"form-control\" name=\"user-pass\" [(ngModel)]=\"user.password\" placeholder=\"T*****\" type=\"password\"/>\r\n      </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"user-phone-mobile\">Phone</label>\r\n      <input class=\"form-control\" name=\"user-phone-mobile\" [(ngModel)]=\"user.phone\" placeholder=\"1234567890\"/>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"createUser(user)\">Create</button>\r\n  </form>\r\n</div>\r\n"

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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h2>Users</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\"\r\n        *ngFor=\"let user of users\"\r\n        (click)=\"selectUser(user)\"\r\n        [class.active]=\"user === selectedUser\">\r\n        {{user.name}}\r\n      </li>\r\n    </ul>\r\n    <button class=\"btn btn-warning\" (click)=\"createNewUser()\">New</button>\r\n  </div>\r\n</div>\r\n"

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