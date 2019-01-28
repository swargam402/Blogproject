webpackJsonp([0,3],{

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/account/password/password-strength-bar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strengthBar {\n    display:inline;\n    list-style:none;\n    margin:0;\n    margin-left:15px;\n    padding:0;\n    vertical-align:2px;\n}\n\n.point:last {\n    margin:0 !important;\n}\n.point {\n    background:#DDD;\n    border-radius:2px;\n    display:inline-block;\n    height:5px;\n    margin-right:1px;\n    width:20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nMain page styles\n========================================================================== */\n\n.hipster {\n    display: inline-block;\n    width: 347px;\n    height: 497px;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n    background-size: contain;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media\nonly screen and (-webkit-min-device-pixel-ratio: 2),\nonly screen and (   min--moz-device-pixel-ratio: 2),\nonly screen and (     -o-min-device-pixel-ratio: 2/1),\nonly screen and (        min-device-pixel-ratio: 2),\nonly screen and (                min-resolution: 192dpi),\nonly screen and (                min-resolution: 2dppx) {\n    .hipster {\n        background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n        background-size: contain;\n    }\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nNavbar\n========================================================================== */\n.navbar-version {\n    font-size: 10px;\n    color: #ccc\n}\n\n.jh-navbar {\n    background-color: #353d47;\n    padding: .2em 1em;\n}\n\n.jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n}\n\n.jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47;\n}\n\n.jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em;\n}\n\n.jh-navbar ul.navbar-nav {\n    padding: 0.5em;\n}\n\n.jh-navbar .navbar-nav .nav-item {\n    margin-left: 1.5rem;\n}\n\n.jh-navbar a.nav-link {\n    font-weight: 400;\n}\n\n.jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px;\n}\n\n.jh-navbar .jh-navbar-toggler:hover {\n    color: #fff;\n}\n\n\n\n@media screen and (max-width: 992px) {\n    .jh-logo-container {\n        width: 100%;\n    }\n}\n\n.navbar-title {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n.navbar-brand.logo {\n    padding: 5px 15px;\n}\n\n.logo .logo-img {\n    height: 45px;\n    display: inline-block;\n    vertical-align: middle;\n    width: 70px;\n}\n\n.logo-img {\n    height: 100%;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/profiles/page-ribbon.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n    background-color: rgba(170, 0, 0, 0.5);\n    left: -3.5em;\n    moz-transform: rotate(-45deg);\n    ms-transform: rotate(-45deg);\n    o-transform: rotate(-45deg);\n    webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    overflow: hidden;\n    position: absolute;\n    top: 40px;\n    white-space: nowrap;\n    width: 15em;\n    z-index: 9999;\n    pointer-events: none;\n    opacity: 0.75;\n}\n\n.ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var BlogAccountModule = (function () {
    function BlogAccountModule() {
    }
    return BlogAccountModule;
}());
BlogAccountModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.BlogSharedModule,
            router_1.RouterModule.forRoot(_1.accountState, { useHash: true })
        ],
        declarations: [
            _1.ActivateComponent,
            _1.RegisterComponent,
            _1.PasswordComponent,
            _1.PasswordStrengthBarComponent,
            _1.PasswordResetInitComponent,
            _1.PasswordResetFinishComponent,
            _1.SettingsComponent
        ],
        providers: [
            _1.Register,
            _1.Activate,
            _1.Password,
            _1.PasswordResetInit,
            _1.PasswordResetFinish
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], BlogAccountModule);
exports.BlogAccountModule = BlogAccountModule;


/***/ }),

/***/ "./src/main/webapp/app/account/account.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.settingsRoute
];
exports.accountState = [{
        path: '',
        children: ACCOUNT_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1>Activation</h1> <div class=\"alert alert-success\" *ngIf=\"success\"> <span> <strong>Your user has been activated.</strong> Please <a class=\"alert-link\" (click)=\"login()\">sign in</a>. </span> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <strong>Your user could not be activated.</strong> Please use the registration form to sign up. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var activate_service_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ActivateComponent = (function () {
    function ActivateComponent(activate, loginModalService, route) {
        this.activate = activate;
        this.loginModalService = loginModalService;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activate.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    core_1.Component({
        selector: 'jhi-activate',
        template: __webpack_require__("./src/main/webapp/app/account/activate/activate.component.html")
    }),
    __metadata("design:paramtypes", [activate_service_1.Activate,
        shared_1.LoginModalService,
        router_1.ActivatedRoute])
], ActivateComponent);
exports.ActivateComponent = ActivateComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var activate_component_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts");
exports.activateRoute = {
    path: 'activate',
    component: activate_component_1.ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'Activation'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Activate = (function () {
    function Activate(http) {
        this.http = http;
    }
    Activate.prototype.get = function (key) {
        var params = new http_1.URLSearchParams();
        params.set('key', key);
        return this.http.get('api/activate', {
            search: params
        }).map(function (res) { return res; });
    };
    return Activate;
}());
Activate = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Activate);
exports.Activate = Activate;


/***/ }),

/***/ "./src/main/webapp/app/account/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/account.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4 col-md-offset-4\"> <h1>Reset password</h1> <div class=\"alert alert-danger\" *ngIf=\"keyMissing\"> <strong>The password reset key is missing.</strong> </div> <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\"> <p>Choose a new password</p> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <p>Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p> </div> <p class=\"alert alert-success\" *ngIf=\"success\"> <span><strong>Your password has been reset.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\">sign in</a>. </p> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\"> The password and its confirmation do not match! </div> <div *ngIf=\"!keyMissing\"> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"New password\" [(ngModel)]=\"resetAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"Confirm the new password\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\"> Your password confirmation is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\"> Your password confirmation is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\"> Your password confirmation cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\">Reset Password</button> </form> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var password_reset_finish_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(passwordResetFinish, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinish = passwordResetFinish;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinish.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return PasswordResetFinishComponent;
}());
PasswordResetFinishComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinish,
        shared_1.LoginModalService,
        router_1.ActivatedRoute,
        core_1.ElementRef, core_1.Renderer])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_finish_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var PasswordResetFinish = (function () {
    function PasswordResetFinish(http) {
        this.http = http;
    }
    PasswordResetFinish.prototype.save = function (keyAndPassword) {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    };
    return PasswordResetFinish;
}());
PasswordResetFinish = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetFinish);
exports.PasswordResetFinish = PasswordResetFinish;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1>Reset your password</h1> <div class=\"alert alert-danger\" *ngIf=\"errorEmailNotExists\"> <strong>Email address isn't registered!</strong> Please check and try again. </div> <div class=\"alert alert-warning\" *ngIf=\"!success\"> <p>Enter the email address you used to register.</p> </div> <div class=\"alert alert-success\" *ngIf=\"success == 'OK'\"> <p>Check your emails for details on how to reset your password.</p> </div> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"requestReset()\" #resetRequestForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Your email\" [(ngModel)]=\"resetAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"resetRequestForm.form.invalid\" class=\"btn btn-primary\">Reset</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var password_reset_init_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts");
var PasswordResetInitComponent = (function () {
    function PasswordResetInitComponent(passwordResetInit, elementRef, renderer) {
        this.passwordResetInit = passwordResetInit;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInit.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.data === 'email address not registered') {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    return PasswordResetInitComponent;
}());
PasswordResetInitComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInit,
        core_1.ElementRef,
        core_1.Renderer])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_init_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var PasswordResetInit = (function () {
    function PasswordResetInit(http) {
        this.http = http;
    }
    PasswordResetInit.prototype.save = function (mail) {
        return this.http.post('api/account/reset_password/init', mail);
    };
    return PasswordResetInit;
}());
PasswordResetInit = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetInit);
exports.PasswordResetInit = PasswordResetInit;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBarComponent.prototype.measureStrength = function (p) {
        var force = 0;
        var regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var lowerLetters = /[a-z]+/.test(p);
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regex.test(p);
        var flags = [lowerLetters, upperLetters, numbers, symbols];
        var passedMatches = flags.filter(function (isMatchedFlag) {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // penality (short password)
        force = (p.length <= 6) ? Math.min(force, 10) : force;
        // penality (poor variety of characters)
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 40) : force;
        return force;
    };
    ;
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: this.colors[idx] };
    };
    ;
    Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
        set: function (password) {
            if (password) {
                var c = this.getColor(this.measureStrength(password));
                var element = this.elementRef.nativeElement;
                if (element.className) {
                    this.renderer.setElementClass(element, element.className, false);
                }
                var lis = element.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    if (i < c.idx) {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', c.col);
                    }
                    else {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', '#DDD');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PasswordStrengthBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: "\n        <div id=\"strength\">\n            <small>Password strength:</small>\n            <ul id=\"strengthBar\">\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n            </ul>\n        </div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.css")
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/account/password/password-strength-bar.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 *ngIf=\"account\">Password for [<b>{{account.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\"> <strong>Password changed!</strong> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <strong>An error has occurred!</strong> The password could not be changed. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\"> The password and its confirmation do not match! </div> <form name=\"form\" role=\"form\" (ngSubmit)=\"changePassword()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"New password\" [(ngModel)]=\"password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"Confirm the new password\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_service_1 = __webpack_require__("./src/main/webapp/app/account/password/password.service.ts");
var PasswordComponent = (function () {
    function PasswordComponent(passwordService, principal) {
        this.passwordService = passwordService;
        this.principal = principal;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: __webpack_require__("./src/main/webapp/app/account/password/password.component.html")
    }),
    __metadata("design:paramtypes", [password_service_1.Password,
        shared_1.Principal])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_component_1 = __webpack_require__("./src/main/webapp/app/account/password/password.component.ts");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Password = (function () {
    function Password(http) {
        this.http = http;
    }
    Password.prototype.save = function (newPassword) {
        return this.http.post('api/account/change_password', newPassword);
    };
    return Password;
}());
Password = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Password);
exports.Password = Password;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1>Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <strong>Registration failed!</strong> Please try again later. </div> <div class=\"alert alert-danger\" *ngIf=\"errorUserExists\"> <strong>Login name already registered!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"errorEmailExists\"> <strong>Email is already in use!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\"> The password and its confirmation do not match! </div> </div> <div class=\"col-md-8 offset-md-2\"> <form name=\"form\" role=\"form\" (ngSubmit)=\"register()\" #registerForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"login\">Username</label> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" placeholder=\"Your username\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"login.dirty && login.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"login.errors.required\"> Your username is required. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.minlength\"> Your username is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.maxlength\"> Your username cannot be longer than 50 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.pattern\"> Your username can only contain lower-case letters and digits. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"Your email\" [(ngModel)]=\"registerAccount.email\" minlength=\"5\" maxlength=\"100\" required> <div *ngIf=\"email.dirty && email.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"email.errors.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"New password\" [(ngModel)]=\"registerAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"password.dirty && password.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"password.errors.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"registerAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"Confirm the new password\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" class=\"btn btn-primary\">Register</button> </form> <p></p> <div class=\"alert alert-warning\"> <span>If you want to </span> <a class=\"alert-link\" (click)=\"openLogin()\">sign in</a><span>, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var register_service_1 = __webpack_require__("./src/main/webapp/app/account/register/register.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var RegisterComponent = (function () {
    function RegisterComponent(loginModalService, registerService, elementRef, renderer) {
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.registerAccount.langKey = 'en';
            this.registerService.save(this.registerAccount).subscribe(function () {
                _this.success = true;
            }, function (response) { return _this.processError(response); });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response._body === 'email address already in use') {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/register/register.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.LoginModalService,
        register_service_1.Register,
        core_1.ElementRef,
        core_1.Renderer])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var register_component_1 = __webpack_require__("./src/main/webapp/app/account/register/register.component.ts");
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'Registration'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Register = (function () {
    function Register(http) {
        this.http = http;
    }
    Register.prototype.save = function (account) {
        return this.http.post('api/register', account);
    };
    return Register;
}());
Register = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Register);
exports.Register = Register;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 *ngIf=\"settingsAccount\">User settings for [<b>{{settingsAccount.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\"> <strong>Settings saved!</strong> </div> <jhi-alert-error></jhi-alert-error> <form name=\"form\" role=\"form\" (ngSubmit)=\"save()\" #settingsForm=\"ngForm\" *ngIf=\"settingsAccount\" novalidate> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"firstName\">First Name</label> <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"Your first name\" [(ngModel)]=\"settingsAccount.firstName\" minlength=\"1\" maxlength=\"50\" #firstNameInput=\"ngModel\" required> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.required\"> Your first name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.minlength\"> Your first name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\"> Your first name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"lastName\">Last Name</label> <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Your last name\" [(ngModel)]=\"settingsAccount.lastName\" minlength=\"1\" maxlength=\"50\" #lastNameInput=\"ngModel\" required> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.required\"> Your last name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.minlength\"> Your last name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\"> Your last name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Your email\" [(ngModel)]=\"settingsAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"settingsForm.form.invalid\" class=\"btn btn-primary\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SettingsComponent = (function () {
    function SettingsComponent(account, principal) {
        this.account = account;
        this.principal = principal;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: __webpack_require__("./src/main/webapp/app/account/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.AccountService,
        shared_1.Principal])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var settings_component_1 = __webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var BlogAdminModule = (function () {
    function BlogAdminModule() {
    }
    return BlogAdminModule;
}());
BlogAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.BlogSharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true })
        ],
        declarations: [
            _1.AuditsComponent,
            _1.UserMgmtComponent,
            _1.UserDialogComponent,
            _1.UserDeleteDialogComponent,
            _1.UserMgmtDetailComponent,
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiDocsComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent
        ],
        entryComponents: [
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.AuditsService,
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.UserResolvePagingParams,
            _1.UserResolve,
            _1.UserModalService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], BlogAdminModule);
exports.BlogAdminModule = BlogAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.auditsRoute,
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logsRoute
].concat(_1.userMgmtRoute, [
    _1.metricsRoute
]);
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }].concat(_1.userDialogRoute);


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuditData = (function () {
    function AuditData(remoteAddress, sessionId) {
        this.remoteAddress = remoteAddress;
        this.sessionId = sessionId;
    }
    return AuditData;
}());
exports.AuditData = AuditData;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audit = (function () {
    function Audit(data, principal, timestamp, type) {
        this.data = data;
        this.principal = principal;
        this.timestamp = timestamp;
        this.type = type;
    }
    return Audit;
}());
exports.Audit = Audit;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audits\"> <h2>Audits</h2> <div class=\"row\"> <div class=\"col-md-5\"> <h4>Filter by date</h4> <p class=\"d-flex\"> <span class=\"input-group-addon\">from</span> <input type=\"date\" class=\"form-control\" name=\"start\" [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeDate($event)\" required/> <span class=\"input-group-addon\">to</span> <input type=\"date\" class=\"form-control\" name=\"end\" [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeDate($event)\" required/> </p> </div> </div> <div class=\"table-responsive\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr> <th (click)=\"orderProp = 'timestamp'; reverse=!reverse\"><span>Date</span></th> <th (click)=\"orderProp = 'principal'; reverse=!reverse\"><span>User</span></th> <th (click)=\"orderProp = 'type'; reverse=!reverse\"><span>State</span></th> <th (click)=\"orderProp = 'data.message'; reverse=!reverse\"><span>Extra data</span></th> </tr> </thead> <tr *ngFor=\"let audit of getAudits()\"> <td><span>{{audit.timestamp| date:'medium'}}</span></td> <td><small>{{audit.principal}}</small></td> <td>{{audit.type}}</td> <td> <span *ngIf=\"audit.data\" ng-show=\"audit.data.message\">{{audit.data.message}}</span> <span *ngIf=\"audit.data\" ng-show=\"audit.data.remoteAddress\"><span>Remote Address</span> {{audit.data.remoteAddress}}</span> </td> </tr> </table> </div> <div *ngIf=\"audits\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(12);
var ng_jhipster_1 = __webpack_require__(5);
var audits_service_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var AuditsComponent = (function () {
    function AuditsComponent(auditsService, parseLinks, paginationConfig, datePipe) {
        this.auditsService = auditsService;
        this.parseLinks = parseLinks;
        this.paginationConfig = paginationConfig;
        this.datePipe = datePipe;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
    }
    AuditsComponent.prototype.getAudits = function () {
        return this.sortAudits(this.audits);
    };
    AuditsComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.onChangeDate();
    };
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    };
    AuditsComponent.prototype.onChangeDate = function () {
        var _this = this;
        this.auditsService.query({ page: this.page - 1, size: this.itemsPerPage,
            fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
            _this.audits = res.json();
            _this.links = _this.parseLinks.parse(res.headers.get('link'));
            _this.totalItems = +res.headers.get('X-Total-Count');
        });
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        today.setDate(today.getDate() + 1);
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.sortAudits = function (audits) {
        var _this = this;
        audits = audits.slice(0).sort(function (a, b) {
            if (a[_this.orderProp] < b[_this.orderProp]) {
                return -1;
            }
            else if (true) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.reverse ? audits.reverse() : audits;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.html")
    }),
    __metadata("design:paramtypes", [audits_service_1.AuditsService,
        ng_jhipster_1.ParseLinks,
        uib_pagination_config_1.PaginationConfig,
        common_1.DatePipe])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var audits_component_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    data: {
        pageTitle: 'Audits'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var AuditsService = (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);
        var options = {
            search: params
        };
        return this.http.get('management/audits', options);
    };
    return AuditsService;
}());
AuditsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuditsService);
exports.AuditsService = AuditsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allConfiguration && configuration\"> <h2>Configuration</h2> <span>Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <label>Spring configuration</label> <table class=\"table table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span>Prefix</span></th> <th class=\"w-60\" (click)=\"orderProp = 'properties'; reverse=!reverse\"><span>Properties</span></th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\"> <td><span>{{entry.prefix}}</span></td> <td> <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\"> <div class=\"col-md-4\">{{key}}</div> <div class=\"col-md-8\"> <span class=\"float-right badge badge-default break\">{{entry.properties[key]}}</span> </div> </div> </td> </tr> </tbody> </table> <div *ngFor=\"let key of keys(allConfiguration)\"> <label><span>{{key}}</span></label> <table class=\"table table-sm table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\">Property</th> <th class=\"w-60\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let item of allConfiguration[key]\"> <td class=\"break\">{{item.key}}</td> <td class=\"break\"> <span class=\"float-right badge badge-default break\">{{item.val}}</span> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService) {
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'Configuration'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        return this.http.get('management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get('management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\" seamless target=\"_top\" title=\"Swagger UI\" class=\"border-0\"></iframe> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var JhiDocsComponent = (function () {
    function JhiDocsComponent() {
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'API'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"showHealthLabel\"><span class=\"text-capitalize\">{{ baseName(currentHealth.name) }}</span> {{subSystemName(currentHealth.name)}} </h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body pad\"> <div *ngIf=\"currentHealth.details\"> <h5>Properties</h5> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th class=\"text-left\">Name</th> <th class=\"text-left\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of currentHealth.details | keys\"> <td class=\"text-left\">{{entry.key}}</td> <td class=\"text-left\">{{readableValue(entry.value)}}</td> </tr> </tbody> </table> </div> </div> <div *ngIf=\"currentHealth.error\"> <h4>Error</h4> <pre>{{currentHealth.error}}</pre> </div> </div> <div class=\"modal-footer\"> <button data-dismiss=\"modal\" class=\"btn btn-secondary float-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span>Health Checks</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span>Refresh</span> </button> </h2> <div class=\"table-responsive\"> <table id=\"healthCheck\" class=\"table table-striped\"> <thead> <tr> <th>Service Name</th> <th class=\"text-center\">Status</th> <th class=\"text-center\">Details</th> </tr> </thead> <tbody> <tr *ngFor=\"let health of healthData\"> <td><span class=\"text-capitalize\">{{ baseName(health.name) }}</span> {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge\" [ngClass]=\"getBadgeClass(health.status)\"> {{health.status}} </span> </td> <td class=\"text-center\"> <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\"> <i class=\"fa fa-eye\"></i> </a> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        }, function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService.transformHealthData(error.json());
                _this.updatingHealth = false;
            }
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html"),
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var status;
        var error;
        var healthData = {
            'name': name,
            'error': error,
            'status': status
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit-data.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\"> <h2>Logs</h2> <p>There are {{ loggers.length }} loggers.</p> <span>Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr title=\"click to order\"> <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span>Name</span></th> <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span>Level</span></th> </tr> </thead> <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\"> <td><small>{{logger.name | slice:0:140}}</small></td> <td> <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button> <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button> <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button> <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button> <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button> </td> </tr> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html"),
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'logs',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'Logs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal-header\"> <h4 class=\"modal-title\">Threads dump</h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span></span>&nbsp; <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span></span>&nbsp; <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp; <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span></span>&nbsp; <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp; <div class=\"mt-2\">&nbsp;</div> Filter <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\"> <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\"> <h6> <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}}) <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\"> <span [hidden]=\"entry.show\">Show StackTrace</span> <span [hidden]=\"!entry.show\">Hide StackTrace</span> </a> </h6> <div class=\"card\" [hidden]=\"!entry.show\"> <div class=\"card-block\"> <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\"> <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp> <span class=\"mt-1\"></span> </div> </div> </div> <table class=\"table table-sm table-responsive\"> <thead> <tr> <th class=\"text-right\">Blocked Time</th> <th class=\"text-right\">Blocked Count</th> <th class=\"text-right\">Waited Time</th> <th class=\"text-right\">Waited Count</th> <th>Lock Name</th> </tr> </thead> <tbody> <tr> <td>{{entry.value.blockedTime}}</td> <td>{{entry.value.blockedCount}}</td> <td>{{entry.value.waitedTime}}</td> <td>{{entry.value.waitedCount}}</td> <td><code>{{entry.value.lockName}}</code></td> </tr> </tbody> </table> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span>Application Metrics</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span>Refresh</span> </button> </h2> <h3>JVM Metrics</h3> <div class=\"row\" *ngIf=\"!updatingMetrics\"> <div class=\"col-md-4\"> <b>Memory</b> <p><span>Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\"> <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b>Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a> <p><span>Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span>Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b>Garbage collections</b> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.count']\"> <div class=\"col-md-9\">Mark Sweep count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.time']\"> <div class=\"col-md-9\">Mark Sweep time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.count']\"> <div class=\"col-md-9\">Scavenge count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.time']\"> <div class=\"col-md-9\">Scavenge time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div> </div> </div> </div> <div class=\"well well-lg\" *ngIf=\"updatingMetrics\">Updating...</div> <h3>HTTP requests (events per second)</h3> <p *ngIf=\"metrics.counters\"> <span>Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span>Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b> </p> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th>Code</th> <th>Count</th> <th class=\"text-right\">Mean</th> <th class=\"text-right\"><span>Average</span> (1 min)</th> <th class=\"text-right\"><span>Average</span> (5 min)</th> <th class=\"text-right\"><span>Average</span> (15 min)</th> </tr> </thead> <tbody> <tr> <td>OK</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate | number:'1.0-2'}} </td> <td class=\"text-right\">{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate | number:'1.0-2'}} </td> <td class=\"text-right\">{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate | number:'1.0-2'}} </td> </tr> <tr> <td>Not Found</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate | number:'1.0-2'}} </td> </tr> <tr> <td>Server error</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate | number:'1.0-2'}} </td> </tr> </tbody> </table> </div> <h3>Services statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th>Service name</th> <th class=\"text-right\">Count</th> <th class=\"text-right\">Mean</th> <th class=\"text-right\">Min</th> <th class=\"text-right\">p50</th> <th class=\"text-right\">p75</th> <th class=\"text-right\">p95</th> <th class=\"text-right\">p99</th> <th class=\"text-right\">Max</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of servicesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{entry.value.count}}</td> <td class=\"text-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td> </tr> </tbody> </table> </div> <h3>Cache statistics</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th>Cache name</th> <th class=\"text-right\">Cache Hits</th> <th class=\"text-right\">Cache Misses</th> <th class=\"text-right\">Cache Gets</th> <th class=\"text-right\">Cache Puts</th> <th class=\"text-right\">Cache Removals</th> <th class=\"text-right\">Cache Evictions</th> <th class=\"text-right\">Cache Hit %</th> <th class=\"text-right\">Cache Miss %</th> <th class=\"text-right\">Average get time (µs)</th> <th class=\"text-right\">Average put time (µs)</th> <th class=\"text-right\">Average remove time (µs)</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of cachesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hits'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-misses'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-gets'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-puts'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-removals'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-evictions'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hit-percentage'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-miss-percentage'].value }}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.average-get-time'].value | number : '1.2-2' }}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.average-put-time'].value | number : '1.2-2'}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.average-remove-time'].value | number : '1.2-2' }}</td> </tr> </tbody> </table> </div> <h3 *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\"> <table class=\"table table-striped\"> <thead> <tr> <th><span>Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th> <th class=\"text-right\">Count</th> <th class=\"text-right\">Mean</th> <th class=\"text-right\">Min</th> <th class=\"text-right\">p50</th> <th class=\"text-right\">p75</th> <th class=\"text-right\">p95</th> <th class=\"text-right\">p99</th> <th class=\"text-right\">Max</th> </tr> </thead> <tbody> <tr> <td> <div class=\"progress progress-striped\"> <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> </td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].mean | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].min | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p50 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p75 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p95 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p99 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].max | number:'1.0-2'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.indexOf('jcache.statistics') !== -1) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        'name': _this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html"),
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'Application Metrics'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\"> <div class=\"modal-header\"> <h4 class=\"modal-title\">Confirm delete operation</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <p>Are you sure you want to delete this User?</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span> </button> <button type=\"submit\" class=\"btn btn-danger\"> <span class=\"fa fa-remove\"></span>&nbsp;<span>Delete</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var UserMgmtDeleteDialogComponent = (function () {
    function UserMgmtDeleteDialogComponent(userService, activeModal, eventManager) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user' });
            _this.activeModal.dismiss(true);
        });
    };
    return UserMgmtDeleteDialogComponent;
}());
UserMgmtDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-delete-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager])
], UserMgmtDeleteDialogComponent);
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
var UserDeleteDialogComponent = (function () {
    function UserDeleteDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    };
    UserDeleteDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDeleteDialogComponent;
}());
UserDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-delete-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDeleteDialogComponent);
exports.UserDeleteDialogComponent = UserDeleteDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> <h2> <span>User</span> [<b>{{user.login}}</b>] </h2> <dl class=\"row-md jh-entity-details\"> <dt><span>Login</span></dt> <dd> <span>{{user.login}}</span> <span class=\"badge badge-danger\" *ngIf=\"!user.activated\">Deactivated</span> <span class=\"badge badge-success\" *ngIf=\"user.activated\">Activated</span> </dd> <dt><span>First Name</span></dt> <dd>{{user.firstName}}</dd> <dt><span>Last Name</span></dt> <dd>{{user.lastName}}</dd> <dt><span>Email</span></dt> <dd>{{user.email}}</dd> <dt><span>Created By</span></dt> <dd>{{user.createdBy}}</dd> <dt><span>Created Date</span></dt> <dd>{{user.createdDate | date:'dd/MM/yy HH:mm' }}</dd> <dt><span>Last Modified By</span></dt> <dd>{{user.lastModifiedBy}}</dd> <dt><span>Last Modified Date</span></dt> <dd>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</dd> <dt><span>Profiles</span></dt> <dd> <ul class=\"list-unstyled\"> <li *ngFor=\"let authority of user.authorities\"> <span class=\"badge badge-info\">{{authority}}</span> </li> </ul> </dd> </dl> <button type=\"submit\" routerLink=\"/user-management\" class=\"btn btn-info\"> <span class=\"fa fa-arrow-left\"></span>&nbsp;<span> Back</span> </button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserMgmtDetailComponent;
}());
UserMgmtDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        router_1.ActivatedRoute])
], UserMgmtDetailComponent);
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"myUserLabel\"> Create or edit a User</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <div class=\"form-group\"> <label>ID</label> <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"user.id\" readonly=\"readonly\"> </div> <div class=\"form-group\"> <label class=\"form-control-label\">Login</label> <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"loginInput.dirty && loginInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.maxlength\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\">First Name</label> <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\" maxlength=\"50\"> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label>Last Name</label> <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\"> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\">Email</label> <input type=\"email\" class=\"form-control\" name=\"email\" #emailInput=\"ngModel\" [(ngModel)]=\"user.email\" required maxlength=\"100\"> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\"> This field cannot be longer than 100 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\"> Your email is invalid. </small> </div> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"activated\"> <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\"> <span>Activated</span> </label> </div> <div class=\"form-group\"> <label>Profiles</label> <select class=\"form-control\" multiple=\"multiple\" name=\"authority\" [(ngModel)]=\"user.authorities\"> <option *ngFor=\"let authority of authorities\" [value]=\"authority\">{{authority}}</option> </select> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span> </button> <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-primary\"> <span class=\"fa fa-floppy-o\"></span>&nbsp;<span>Save</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, userService, eventManager) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.eventManager = eventManager;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
        else {
            this.user.langKey = 'en';
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    return UserMgmtDialogComponent;
}());
UserMgmtDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        shared_1.UserService,
        ng_jhipster_1.EventManager])
], UserMgmtDialogComponent);
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span>Users</span> <button class=\"btn btn-primary float-right\" [routerLink]=\"['/', { outlets: { popup: ['user-management-new'] } }]\"> <span class=\"fa fa-plus\"></span> <span>Create a new User</span> </button> </h2> <jhi-alert></jhi-alert> <div class=\"table-responsive\" *ngIf=\"users\"> <table class=\"table table-striped\"> <thead> <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\"> <th jhiSortBy=\"id\"><span>ID</span><span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"login\"><span>Login</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"email\"><span>Email</span> <span class=\"fa fa-sort\"></span></th> <th></th> <th><span>Profiles</span></th> <th jhiSortBy=\"createdDate\"><span>Created Date</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedBy\"><span>Last Modified By</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedDate\"><span>Last Modified Date</span> <span class=\"fa fa-sort\"></span></th> <th></th> </tr> </thead> <tbody *ngIf=\"users\"> <tr *ngFor=\"let user of users; trackBy: trackIdentity\"> <td><a [routerLink]=\"['../user-management', user.login]\">{{user.id}}</a></td> <td>{{user.login}}</td> <td>{{user.email}}</td> <td> <span class=\"badge badge-danger hand\" (click)=\"setActive(user, true)\" *ngIf=\"!user.activated\">Deactivated</span> <span class=\"badge badge-success hand\" (click)=\"setActive(user, false)\" *ngIf=\"user.activated\">Activated</span> </td> <td> <div *ngFor=\"let authority of user.authorities\"> <span class=\"tag tag-info\">{{ authority }}</span> </div> </td> <td>{{user.createdDate | date:'dd/MM/yy HH:mm'}}</td> <td>{{user.lastModifiedBy}}</td> <td>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</td> <td class=\"text-right\"> <div class=\"btn-group flex-btn-group-container\"> <button type=\"submit\" [routerLink]=\"['../user-management', user.login]\" class=\"btn btn-info btn-sm\"> <span class=\"fa fa-eye\"></span> <span class=\"hidden-md-down\">View</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/edit'} }]\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\"> <span class=\"fa fa-pencil\"></span> <span class=\"hidden-md-down\">Edit</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/delete'} }]\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\" [disabled]=\"currentAccount.login==user.login\"> <span class=\"fa fa-remove\"></span> <span class=\"hidden-md-down\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\"users\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var UserMgmtComponent = (function () {
    function UserMgmtComponent(userService, parseLinks, alertService, principal, eventManager, paginationUtil, paginationConfig, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/user-management'], { queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    return UserMgmtComponent;
}());
UserMgmtComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig,
        router_1.ActivatedRoute,
        router_1.Router])
], UserMgmtComponent);
exports.UserMgmtComponent = UserMgmtComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var user_management_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts");
var user_management_detail_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts");
var user_management_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts");
var user_management_delete_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserResolve = (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_1.Principal])
], UserResolve);
exports.UserResolve = UserResolve;
var UserResolvePagingParams = (function () {
    function UserResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    UserResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return UserResolvePagingParams;
}());
UserResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], UserResolvePagingParams);
exports.UserResolvePagingParams = UserResolvePagingParams;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            'pagingParams': UserResolvePagingParams
        },
        data: {
            pageTitle: 'Users'
        }
    },
    {
        path: 'user-management/:login',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        data: {
            pageTitle: 'Users'
        }
    }
];
exports.userDialogRoute = [
    {
        path: 'user-management-new',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/delete',
        component: user_management_delete_dialog_component_1.UserDeleteDialogComponent,
        outlet: 'popup'
    }
];


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_bootstrap_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserModalService = (function () {
    function UserModalService(modalService, router, userService) {
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.isOpen = false;
    }
    UserModalService.prototype.open = function (component, login) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (login) {
            this.userService.find(login).subscribe(function (user) { return _this.userModalRef(component, user); });
        }
        else {
            return this.userModalRef(component, new shared_1.User());
        }
    };
    UserModalService.prototype.userModalRef = function (component, user) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        });
        return modalRef;
    };
    return UserModalService;
}());
UserModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        router_1.Router,
        shared_1.UserService])
], UserModalService);
exports.UserModalService = UserModalService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
var _VERSION = '0.0.0'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = "0.0.0";
_DEBUG_INFO_ENABLED = true;
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(14);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (true) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.BlogAppModule);


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(17);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(11);
var ng2_webstorage_1 = __webpack_require__(9);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var home_module_1 = __webpack_require__("./src/main/webapp/app/home/home.module.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var account_module_1 = __webpack_require__("./src/main/webapp/app/account/account.module.ts");
var entity_module_1 = __webpack_require__("./src/main/webapp/app/entities/entity.module.ts");
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var layouts_2 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var BlogAppModule = (function () {
    function BlogAppModule() {
    }
    return BlogAppModule;
}());
BlogAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.BlogSharedModule,
            home_module_1.BlogHomeModule,
            admin_module_1.BlogAdminModule,
            account_module_1.BlogAccountModule,
            entity_module_1.BlogEntityModule
        ],
        declarations: [
            layouts_2.JhiMainComponent,
            layouts_2.NavbarComponent,
            layouts_2.ErrorComponent,
            layouts_2.PageRibbonComponent,
            layouts_2.FooterComponent
        ],
        providers: [
            layouts_2.ProfileService,
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_2.JhiMainComponent]
    })
], BlogAppModule);
exports.BlogAppModule = BlogAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(10);
var auth_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth.service.ts");
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var self = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var principal = self.injector.get(principal_service_1.Principal);
                if (principal.isAuthenticated()) {
                    var auth = self.injector.get(auth_service_1.AuthService);
                    auth.authorize(true);
                }
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(10);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'blogApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var ng_jhipster_1 = __webpack_require__(5);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(9);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.InterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.EventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(10);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // AlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/entities/entity.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var BlogEntityModule = (function () {
    function BlogEntityModule() {
    }
    return BlogEntityModule;
}());
BlogEntityModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], BlogEntityModule);
exports.BlogEntityModule = BlogEntityModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <div class=\"col-md-3\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-9\"> <h1 class=\"display-4\">Welcome, Java Hipster!</h1> <p class=\"lead\">This is your homepage</p> <div [ngSwitch]=\"isAuthenticated()\"> <div class=\"alert alert-success\" *ngSwitchCase=\"true\"> <span *ngIf=\"account\"> You are logged in as user \"{{account.login}}\". </span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span>If you want to </span> <a class=\"alert-link\" (click)=\"login()\">sign in</a><span>, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span>You don't have an account yet?</span> <a class=\"alert-link\" routerLink=\"register\">Register a new account</a> </div> </div> <p> If you have any question on JHipster: </p> <ul> <li><a href=\"http://jhipster.github.io/\" target=\"_blank\">JHipster homepage</a></li> <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\">JHipster on Stack Overflow</a></li> <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\">JHipster bug tracker</a></li> <li><a href=\"https://gitter.im/jhipster/generator-jhipster\" target=\"_blank\">JHipster public chat room</a></li> <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\">follow @java_hipster on Twitter</a></li> </ul> <p> <span>If you like JHipster, don't forget to give us a star on</span> <a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\">Github</a>! </p> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.css")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/home/home.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var BlogHomeModule = (function () {
    function BlogHomeModule() {
    }
    return BlogHomeModule;
}());
BlogHomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.BlogSharedModule,
            router_1.RouterModule.forRoot([_1.HOME_ROUTE], { useHash: true })
        ],
        declarations: [
            _1.HomeComponent,
        ],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], BlogHomeModule);
exports.BlogHomeModule = BlogHomeModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-8\"> <h1>Error Page!</h1> <div [hidden]=\"!errorMessage\"> <div class=\"alert alert-danger\">{{errorMessage}} </div> </div> <div [hidden]=\"!error403\" class=\"alert alert-danger\">You are not authorized to access the page. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <p>This is your footer</p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon> <div> <router-outlet name=\"navbar\"></router-outlet> </div> <div class=\"container-fluid\"> <div class=\"card jh-card\"> <router-outlet></router-outlet> <router-outlet name=\"popup\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(11);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(titleService, router, $storageService) {
        this.titleService = titleService;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'blogApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.titleService.setTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-toggleable-md jh-navbar\"> <div class=\"jh-logo-container float-left\"> <a class=\"jh-navbar-toggler hidden-lg-up float-right\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\"> <i class=\"fa fa-bars\"></i> </a> <a class=\"navbar-brand logo float-left\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <span class=\"logo-img\"></span> <span class=\"navbar-title\">Blog</span> <span class=\"navbar-version\">{{version}}</span> </a> </div> <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\"> <ul class=\"navbar-nav ml-auto\"> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span>Home</span> </a> </li> <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" routerLinkActive=\"active\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"entity-menu\"> <span> <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> <span> Entities </span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\"> <span> <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> <span>Administration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-user\" aria-hidden=\"true\"></i> <span>User management</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i> <span>Metrics</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i> <span>Health</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i> <span>Configuration</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"audits\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-bell\" aria-hidden=\"true\"></i> <span>Audits</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i> <span>Logs</span> </a> </li> <li *ngIf=\"swaggerEnabled\"> <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i> <span>API</span> </a> </li> <li *ngIf=\"!inProduction\"> <a class=\"dropdown-item\" href=\"/h2-console\" target=\"_tab\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-hdd-o\" aria-hidden=\"true\"></i> <span>Database</span> </a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"account-menu\"> <span *ngIf=\"!getImageUrl()\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> <span> Account </span> <b class=\"caret\"></b> </span> <span *ngIf=\"getImageUrl()\"> <img [src]=\"getImageUrl()\" class=\"profile-image img-circle\" alt=\"Avatar\"> </span> </a> <ul class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"settings\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-wrench\" aria-hidden=\"true\"></i> <span>Settings</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"password\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i> <span>Password</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" (click)=\"logout()\" id=\"logout\"> <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i> <span>Sign out</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" (click)=\"login()\" id=\"login\"> <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i> <span>Sign in</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-registered\" aria-hidden=\"true\"></i> <span>Register</span> </a> </li> </ul> </li> </ul> </div> </nav> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"); // FIXME barrel doesn't work here
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.DEBUG_INFO_ENABLED ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.css")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/navbar/navbar.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.css")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/profiles/page-ribbon.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('blogApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = null;
                    var entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        var entityName = entityKey;
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = convertedField.charAt(0).toUpperCase() +
                                convertedField.slice(1);
                            _this.addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json().params);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(JSON.stringify(httpResponse)); // Fixme find a way to parse httpResponse
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: message,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert type=\"{{alert.type}}\" close=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService, ng_jhipster_1.EventManager])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert [type]=\"alert.type\" (close)=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-jwt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Rx_1 = __webpack_require__(21);
var ng2_webstorage_1 = __webpack_require__(9);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.LocalStorageService,
        ng2_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var AuthService = (function () {
    function AuthService(principal, stateStorageService, loginModalService, router) {
        this.principal = principal;
        this.stateStorageService = stateStorageService;
        this.loginModalService = loginModalService;
        this.router = router;
    }
    AuthService.prototype.authorize = function (force) {
        var authReturn = this.principal.identity(force).then(authThen.bind(this));
        return authReturn;
        function authThen() {
            var _this = this;
            var isAuthenticated = this.principal.isAuthenticated();
            var toStateInfo = this.stateStorageService.getDestinationState().destination;
            // an authenticated user can't access to login and register pages
            if (isAuthenticated && (toStateInfo.name === 'register' || toStateInfo.name === 'social-auth')) {
                this.router.navigate(['']);
                return false;
            }
            // recover and clear previousState after external login redirect (e.g. oauth2)
            var fromStateInfo = this.stateStorageService.getDestinationState().from;
            var previousState = this.stateStorageService.getPreviousState();
            if (isAuthenticated && !fromStateInfo.name && previousState) {
                this.stateStorageService.resetPreviousState();
                this.router.navigate([previousState.name], { queryParams: previousState.params });
                return false;
            }
            if (toStateInfo.data.authorities && toStateInfo.data.authorities.length > 0) {
                return this.principal.hasAnyAuthority(toStateInfo.data.authorities).then(function (hasAnyAuthority) {
                    if (!hasAnyAuthority) {
                        if (isAuthenticated) {
                            // user is signed in but not authorized for desired state
                            _this.router.navigate(['accessdenied']);
                        }
                        else {
                            // user is not authenticated. Show the state they wanted before you
                            // send them to the login service, so you can return them when you're done
                            var toStateParamsInfo = _this.stateStorageService.getDestinationState().params;
                            _this.stateStorageService.storePreviousState(toStateInfo.name, toStateParamsInfo);
                            // now, send them to the signin state so they can log in
                            _this.router.navigate(['accessdenied']).then(function () {
                                _this.loginModalService.open();
                            });
                        }
                    }
                    return hasAnyAuthority;
                });
            }
            return true;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        state_storage_service_1.StateStorageService,
        login_modal_service_1.LoginModalService,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(15);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.TemplateRef, core_1.ViewContainerRef])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(19);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var Principal = (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return Promise.resolve(false);
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(false);
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(9);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        return this.checkLogin(route.data['authorities'], state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        return Promise.resolve(this.principal.hasAnyAuthority(authorities).then(function (isOk) {
            if (isOk) {
                return true;
            }
            else {
                _this.stateStorageService.storeUrl(url);
                _this.router.navigate(['accessdenied']).then(function () {
                    _this.loginModalService.open();
                });
                return false;
            }
        }));
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        login_modal_service_1.LoginModalService,
        _1.Principal,
        state_storage_service_1.StateStorageService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent);
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\">Sign in</h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span> </button> </div> <div class=\"modal-body\"> <div class=\"row\"> <div class=\"col-md-4 offset-md-4\"> <h1>Sign in</h1> </div> <div class=\"col-md-8 offset-md-2\"> <div class=\"alert alert-danger\" *ngIf=\"authenticationError\"> <strong>Failed to sign in!</strong> Please check your credentials and try again. </div> </div> <div class=\"col-md-8 offset-md-2\"> <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\"> <div class=\"form-group\"> <label for=\"username\">Login</label> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Your username\" [(ngModel)]=\"username\"> </div> <div class=\"form-group\"> <label for=\"password\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Your password\" [(ngModel)]=\"password\"> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"rememberMe\"> <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked=\"checked\"> <span>Remember me</span> </label> </div> <button type=\"submit\" class=\"btn btn-primary\">Sign in</button> </form> <p></p> <div class=\"alert alert-warning\"> <a class=\"alert-link\" (click)=\"requestResetPassword()\">Did you forget your password?</a> </div> <div class=\"alert alert-warning\"> <span>You don't have an account yet?</span> <a class=\"alert-link\" (click)=\"register()\">Register a new account</a> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var router_1 = __webpack_require__(4);
var ng_jhipster_1 = __webpack_require__(5);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, loginService, stateStorageService, elementRef, renderer, router, activeModal) {
        this.eventManager = eventManager;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.activeModal = activeModal;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngOnInit = function () {
    };
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || (/activate/.test(_this.router.url)) ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.EventManager,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        router_1.Router,
        ng_bootstrap_1.NgbActiveModal])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var LoginService = (function () {
    function LoginService(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(11);
var ng_jhipster_1 = __webpack_require__(5);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
function alertServiceProvider(sanitizer) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast);
}
exports.alertServiceProvider = alertServiceProvider;
var BlogSharedCommonModule = (function () {
    function BlogSharedCommonModule() {
    }
    return BlogSharedCommonModule;
}());
BlogSharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.BlogSharedLibsModule
        ],
        declarations: [
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ],
        providers: [
            {
                provide: ng_jhipster_1.AlertService,
                useFactory: alertServiceProvider,
                deps: [core_1.Sanitizer]
            },
            platform_browser_1.Title
        ],
        exports: [
            _1.BlogSharedLibsModule,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ]
    })
], BlogSharedCommonModule);
exports.BlogSharedCommonModule = BlogSharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(13);
var http_1 = __webpack_require__(6);
var common_1 = __webpack_require__(12);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var angular2_infinite_scroll_1 = __webpack_require__(16);
var BlogSharedLibsModule = (function () {
    function BlogSharedLibsModule() {
    }
    return BlogSharedLibsModule;
}());
BlogSharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({}),
            angular2_infinite_scroll_1.InfiniteScrollModule
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            angular2_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], BlogSharedLibsModule);
exports.BlogSharedLibsModule = BlogSharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(12);
var cookies_service_1 = __webpack_require__(18);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var BlogSharedModule = (function () {
    function BlogSharedModule() {
    }
    return BlogSharedModule;
}());
BlogSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.BlogSharedLibsModule,
            _1.BlogSharedCommonModule
        ],
        declarations: [
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            cookies_service_1.CookieService,
            _1.LoginService,
            _1.LoginModalService,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.AuthServerProvider,
            _1.AuthService,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.BlogSharedCommonModule,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], BlogSharedModule);
exports.BlogSharedModule = BlogSharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.resourceUrl, user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.resourceUrl, user);
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
        }
        var options = {
            search: params
        };
        return this.http.get(this.resourceUrl, options);
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(1);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(23);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(7);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(13);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(203);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(206);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(207);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(211);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(215);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(5);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(87);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:9060");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main/webapp/app/app.main.ts");


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(204);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(209);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(32);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(205);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(210);

/***/ })

},[22]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcz83NzBkIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2cubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzP2Q3OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3Iucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbGF5b3V0LXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNzcz82NTcwIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNzcz83YjNhIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wcm9maWxlLWluZm8ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2NzcmYuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4tbW9kYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtY29tbW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtbGlicy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL2FjY291bnQubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmciLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyL2NvcmUuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9AYW5ndWxhci9jb21tb24uZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1jb29raWUvY29yZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsL2FuZ3VsYXIyLWluZmluaXRlLXNjcm9sbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3ZlbmRvci50cyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1J4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvQGFuZ3VsYXIvcm91dGVyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvQGFuZ3VsYXIvaHR0cC5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZzItd2Vic3RvcmFnZS9kaXN0L2FwcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSwwT0FBMk8scUJBQXFCLHNCQUFzQixlQUFlLHVCQUF1QixnQkFBZ0IseUJBQXlCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLFVBQVUsc0JBQXNCLHdCQUF3QiwyQkFBMkIsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRzs7QUFFcmlCOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EscU5BQXNOLDRCQUE0QixtQkFBbUIsb0JBQW9CLHdIQUFnRywrQkFBK0IsR0FBRyx1YkFBdWIsZ0JBQWdCLDhIQUFzRyxtQ0FBbUMsT0FBTyxHQUFHOztBQUVyL0I7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxnTkFBaU4sc0JBQXNCLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsR0FBRyxzSEFBc0gsZ0NBQWdDLEdBQUcsd0NBQXdDLDBCQUEwQixHQUFHLDhCQUE4QixxQkFBcUIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsMkJBQTJCLHVCQUF1QixHQUFH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QUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFJLEtBQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFyQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLFdBQVcsQ0FxQ3ZCO0FBckNZLGtDQUFXOzs7Ozs7OztBQ1B4QixnRjs7Ozs7OztBQ0FBLGdGOzs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDZDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLDZDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuc3RhcnQgUGFzc3dvcmQgc3RyZW5ndGggYmFyIHN0eWxlXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG51bCNzdHJlbmd0aEJhciB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICBsaXN0LXN0eWxlOm5vbmU7XFxuICAgIG1hcmdpbjowO1xcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIHZlcnRpY2FsLWFsaWduOjJweDtcXG59XFxuXFxuLnBvaW50Omxhc3Qge1xcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xcbn1cXG4ucG9pbnQge1xcbiAgICBiYWNrZ3JvdW5kOiNEREQ7XFxuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjFweDtcXG4gICAgd2lkdGg6MjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTWFpbiBwYWdlIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmhpcHN0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzNDdweDtcXG4gICAgaGVpZ2h0OiA0OTdweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi8qIHdhaXQgYXV0b3ByZWZpeGVyIHVwZGF0ZSB0byBhbGxvdyBzaW1wbGUgZ2VuZXJhdGlvbiBvZiBoaWdoIHBpeGVsIGRlbnNpdHkgbWVkaWEgcXVlcnkgKi9cXG5AbWVkaWFcXG5vbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXFxub25seSBzY3JlZW4gYW5kICggICBtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxcbm9ubHkgc2NyZWVuIGFuZCAoICAgICAtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxcbm9ubHkgc2NyZWVuIGFuZCAoICAgICAgICBtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcXG5vbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgICAgICAgICBtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcXG5vbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgICAgICAgICBtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcXG4gICAgLmhpcHN0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcIikgKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5OYXZiYXJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItdmVyc2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgY29sb3I6ICNjY2NcXG59XFxuXFxuLmpoLW5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7XFxuICAgIHBhZGRpbmc6IC4yZW0gMWVtO1xcbn1cXG5cXG4uamgtbmF2YmFyIC5wcm9maWxlLWltYWdlIHtcXG4gICAgbWFyZ2luOiAtMTBweCAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmZvY3VzLCAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7XFxufVxcblxcbi5qaC1uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMC4xNWVtO1xcbn1cXG5cXG4uamgtbmF2YmFyIHVsLm5hdmJhci1uYXYge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmpoLW5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cXG4uamgtbmF2YmFyIGEubmF2LWxpbmsge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uamgtbmF2YmFyIC5qaC1uYXZiYXItdG9nZ2xlciB7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uamgtbmF2YmFyIC5qaC1uYXZiYXItdG9nZ2xlcjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAuamgtbG9nby1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLm5hdmJhci10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5Mb2dvIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm5hdmJhci1icmFuZC5sb2dvIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi5sb2dvIC5sb2dvLWltZyB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcIikgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuRGV2ZWxvcGVtZW50IFJpYmJvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnJpYmJvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcwLCAwLCAwLCAwLjUpO1xcbiAgICBsZWZ0OiAtMy41ZW07XFxuICAgIG1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBtcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBvLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4ucmliYm9uIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMXB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICM0NDQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBCbG9nU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuaW1wb3J0IHtcbiAgICBSZWdpc3RlcixcbiAgICBBY3RpdmF0ZSxcbiAgICBQYXNzd29yZCxcbiAgICBQYXNzd29yZFJlc2V0SW5pdCxcbiAgICBQYXNzd29yZFJlc2V0RmluaXNoLFxuICAgIFBhc3N3b3JkU3RyZW5ndGhCYXJDb21wb25lbnQsXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgQWN0aXZhdGVDb21wb25lbnQsXG4gICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQsXG4gICAgUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCxcbiAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICBhY2NvdW50U3RhdGVcbn0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQmxvZ1NoYXJlZE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYWNjb3VudFN0YXRlLCB7IHVzZUhhc2g6IHRydWUgfSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBY3RpdmF0ZUNvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCxcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZWdpc3RlcixcbiAgICAgICAgQWN0aXZhdGUsXG4gICAgICAgIFBhc3N3b3JkLFxuICAgICAgICBQYXNzd29yZFJlc2V0SW5pdCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEZpbmlzaFxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dBY2NvdW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICAgIGFjdGl2YXRlUm91dGUsXG4gICAgcGFzc3dvcmRSb3V0ZSxcbiAgICBwYXNzd29yZFJlc2V0RmluaXNoUm91dGUsXG4gICAgcGFzc3dvcmRSZXNldEluaXRSb3V0ZSxcbiAgICByZWdpc3RlclJvdXRlLFxuICAgIHNldHRpbmdzUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5sZXQgQUNDT1VOVF9ST1VURVMgPSBbXG4gICBhY3RpdmF0ZVJvdXRlLFxuICAgcGFzc3dvcmRSb3V0ZSxcbiAgIHBhc3N3b3JkUmVzZXRGaW5pc2hSb3V0ZSxcbiAgIHBhc3N3b3JkUmVzZXRJbml0Um91dGUsXG4gICByZWdpc3RlclJvdXRlLFxuICAgc2V0dGluZ3NSb3V0ZVxuXTtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRTdGF0ZTogUm91dGVzID0gW3tcbiAgICBwYXRoOiAnJyxcbiAgICBjaGlsZHJlbjogQUNDT1VOVF9ST1VURVNcbn1dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjY291bnQucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDE+QWN0aXZhdGlvbjwvaDE+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+IDxzdHJvbmc+WW91ciB1c2VyIGhhcyBiZWVuIGFjdGl2YXRlZC48L3N0cm9uZz4gUGxlYXNlIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIj5zaWduIGluPC9hPi4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiPiA8c3Ryb25nPllvdXIgdXNlciBjb3VsZCBub3QgYmUgYWN0aXZhdGVkLjwvc3Ryb25nPiBQbGVhc2UgdXNlIHRoZSByZWdpc3RyYXRpb24gZm9ybSB0byBzaWduIHVwLiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQWN0aXZhdGUgfSBmcm9tICcuL2FjdGl2YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hY3RpdmF0ZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjdGl2YXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGU6IEFjdGl2YXRlLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZS5nZXQocGFyYW1zWydrZXknXSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IEFjdGl2YXRlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmF0ZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgYWN0aXZhdGVSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdhY3RpdmF0ZScsXG4gIGNvbXBvbmVudDogQWN0aXZhdGVDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBhdXRob3JpdGllczogW10sXG4gICAgcGFnZVRpdGxlOiAnQWN0aXZhdGlvbidcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2tleScsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9hY3RpdmF0ZScsIHtcbiAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zXG4gICAgICAgIH0pLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZS50cyIsImV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGl2YXRlL2FjdGl2YXRlLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vYWNjb3VudC5yb3V0ZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLW1kLW9mZnNldC00XFxcIj4gPGgxPlJlc2V0IHBhc3N3b3JkPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwia2V5TWlzc2luZ1xcXCI+IDxzdHJvbmc+VGhlIHBhc3N3b3JkIHJlc2V0IGtleSBpcyBtaXNzaW5nLjwvc3Ryb25nPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nSWY9XFxcIiFzdWNjZXNzICYmICFrZXlNaXNzaW5nXFxcIj4gPHA+Q2hvb3NlIGEgbmV3IHBhc3N3b3JkPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiPiA8cD5Zb3VyIHBhc3N3b3JkIGNvdWxkbid0IGJlIHJlc2V0LiBSZW1lbWJlciBhIHBhc3N3b3JkIHJlcXVlc3QgaXMgb25seSB2YWxpZCBmb3IgMjQgaG91cnMuPC9wPiA8L2Rpdj4gPHAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+PHN0cm9uZz5Zb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0Ljwvc3Ryb25nPiBQbGVhc2UgPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCI+c2lnbiBpbjwvYT4uIDwvcD4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZG9Ob3RNYXRjaFxcXCI+IFRoZSBwYXNzd29yZCBhbmQgaXRzIGNvbmZpcm1hdGlvbiBkbyBub3QgbWF0Y2ghIDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCIha2V5TWlzc2luZ1xcXCI+IDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZmluaXNoUmVzZXQoKVxcXCIgI3Bhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmV3IHBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVzZXRBY2NvdW50LnBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmRpcnR5ICYmIHBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8amhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhciBbcGFzc3dvcmRUb0NoZWNrXT1cXFwicmVzZXRBY2NvdW50LnBhc3N3b3JkXFxcIj48L2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiICNjb25maXJtUGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvbmZpcm0gdGhlIG5ldyBwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZGlydHkgJiYgY29uZmlybVBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj4gWW91ciBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjb25maXJtYXRpb24gY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInBhc3N3b3JkRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlJlc2V0IFBhc3N3b3JkPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1yZXNldC1maW5pc2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIGRvTm90TWF0Y2g6IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGtleU1pc3Npbmc6IGJvb2xlYW47XG4gICAgcmVzZXRBY2NvdW50OiBhbnk7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhc3N3b3JkUmVzZXRGaW5pc2g6IFBhc3N3b3JkUmVzZXRGaW5pc2gsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gcGFyYW1zWydrZXknXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzZXRBY2NvdW50ID0ge307XG4gICAgICAgIHRoaXMua2V5TWlzc2luZyA9ICF0aGlzLmtleTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpLCAnZm9jdXMnLCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2hSZXNldCgpIHtcbiAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnJlc2V0QWNjb3VudC5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVzZXRGaW5pc2guc2F2ZSh7a2V5OiB0aGlzLmtleSwgbmV3UGFzc3dvcmQ6IHRoaXMucmVzZXRBY2NvdW50LnBhc3N3b3JkfSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldEZpbmlzaFJvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ3Jlc2V0L2ZpbmlzaCcsXG4gIGNvbXBvbmVudDogUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICBwYWdlVGl0bGU6ICdQYXNzd29yZCdcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXNldEZpbmlzaCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShrZXlBbmRQYXNzd29yZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudC9yZXNldF9wYXNzd29yZC9maW5pc2gnLCBrZXlBbmRQYXNzd29yZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMT5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JFbWFpbE5vdEV4aXN0c1xcXCI+IDxzdHJvbmc+RW1haWwgYWRkcmVzcyBpc24ndCByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgYW5kIHRyeSBhZ2Fpbi4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCI+IDxwPkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyLjwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzID09ICdPSydcXFwiPiA8cD5DaGVjayB5b3VyIGVtYWlscyBmb3IgZGV0YWlscyBvbiBob3cgdG8gcmVzZXQgeW91ciBwYXNzd29yZC48L3A+IDwvZGl2PiA8Zm9ybSAqbmdJZj1cXFwiIXN1Y2Nlc3NcXFwiIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlcXVlc3RSZXNldCgpXFxcIiAjcmVzZXRSZXF1ZXN0Rm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIllvdXIgZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiICNlbWFpbElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZW1haWxJbnB1dC5kaXJ0eSAmJiBlbWFpbElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwicmVzZXRSZXF1ZXN0Rm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlJlc2V0PC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRJbml0IH0gZnJvbSAnLi9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1yZXNldC1pbml0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgZXJyb3JFbWFpbE5vdEV4aXN0czogc3RyaW5nO1xuICAgIHJlc2V0QWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhc3N3b3JkUmVzZXRJbml0OiBQYXNzd29yZFJlc2V0SW5pdCxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEFjY291bnQgPSB7fTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKSwgJ2ZvY3VzJywgW10pO1xuICAgIH1cblxuICAgIHJlcXVlc3RSZXNldCAoKSB7XG5cbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5wYXNzd29yZFJlc2V0SW5pdC5zYXZlKHRoaXMucmVzZXRBY2NvdW50LmVtYWlsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIHJlc3BvbnNlLmRhdGEgPT09ICdlbWFpbCBhZGRyZXNzIG5vdCByZWdpc3RlcmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9ICdFUlJPUic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldEluaXRSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdyZXNldC9yZXF1ZXN0JyxcbiAgY29tcG9uZW50OiBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICBwYWdlVGl0bGU6ICdQYXNzd29yZCdcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlc2V0SW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50L3Jlc2V0X3Bhc3N3b3JkL2luaXQnLCBtYWlsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJzdHJlbmd0aFwiPlxuICAgICAgICAgICAgPHNtYWxsPlBhc3N3b3JkIHN0cmVuZ3RoOjwvc21hbGw+XG4gICAgICAgICAgICA8dWwgaWQ9XCJzdHJlbmd0aEJhclwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAncGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcydcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkU3RyZW5ndGhCYXJDb21wb25lbnQge1xuXG4gICAgY29sb3JzID0gWycjRjAwJywgJyNGOTAnLCAnI0ZGMCcsICcjOUYwJywgJyMwRjAnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbWVhc3VyZVN0cmVuZ3RoKHA6IHN0cmluZyk6IG51bWJlciB7XG5cbiAgICAgICAgbGV0IGZvcmNlID0gMDtcbiAgICAgICAgbGV0IHJlZ2V4ID0gL1skLS86LT97LX4hXCJeX2BcXFtcXF1dL2c7IC8vIFwiXG5cbiAgICAgICAgbGV0IGxvd2VyTGV0dGVycyA9IC9bYS16XSsvLnRlc3QocCk7XG4gICAgICAgIGxldCB1cHBlckxldHRlcnMgPSAvW0EtWl0rLy50ZXN0KHApO1xuICAgICAgICBsZXQgbnVtYmVycyA9IC9bMC05XSsvLnRlc3QocCk7XG4gICAgICAgIGxldCBzeW1ib2xzID0gcmVnZXgudGVzdChwKTtcblxuICAgICAgICBsZXQgZmxhZ3MgPSBbbG93ZXJMZXR0ZXJzLCB1cHBlckxldHRlcnMsIG51bWJlcnMsIHN5bWJvbHNdO1xuICAgICAgICBsZXQgcGFzc2VkTWF0Y2hlcyA9IGZsYWdzLmZpbHRlciggKGlzTWF0Y2hlZEZsYWc6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpc01hdGNoZWRGbGFnID09PSB0cnVlO1xuICAgICAgICB9KS5sZW5ndGg7XG5cbiAgICAgICAgZm9yY2UgKz0gMiAqIHAubGVuZ3RoICsgKChwLmxlbmd0aCA+PSAxMCkgPyAxIDogMCk7XG4gICAgICAgIGZvcmNlICs9IHBhc3NlZE1hdGNoZXMgKiAxMDtcblxuICAgICAgICAvLyBwZW5hbGl0eSAoc2hvcnQgcGFzc3dvcmQpXG4gICAgICAgIGZvcmNlID0gKHAubGVuZ3RoIDw9IDYpID8gTWF0aC5taW4oZm9yY2UsIDEwKSA6IGZvcmNlO1xuXG4gICAgICAgIC8vIHBlbmFsaXR5IChwb29yIHZhcmlldHkgb2YgY2hhcmFjdGVycylcbiAgICAgICAgZm9yY2UgPSAocGFzc2VkTWF0Y2hlcyA9PT0gMSkgPyBNYXRoLm1pbihmb3JjZSwgMTApIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gKHBhc3NlZE1hdGNoZXMgPT09IDIpID8gTWF0aC5taW4oZm9yY2UsIDIwKSA6IGZvcmNlO1xuICAgICAgICBmb3JjZSA9IChwYXNzZWRNYXRjaGVzID09PSAzKSA/IE1hdGgubWluKGZvcmNlLCA0MCkgOiBmb3JjZTtcblxuICAgICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcblxuICAgIGdldENvbG9yKHM6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGxldCBpZHggPSAwO1xuICAgICAgICBpZiAocyA8PSAxMCkge1xuICAgICAgICAgICAgaWR4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChzIDw9IDIwKSB7XG4gICAgICAgICAgICBpZHggPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPD0gMzApIHtcbiAgICAgICAgICAgIGlkeCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAocyA8PSA0MCkge1xuICAgICAgICAgICAgaWR4ID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkeCA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtpZHg6IGlkeCArIDEsIGNvbDogdGhpcy5jb2xvcnNbaWR4XX07XG4gICAgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHBhc3N3b3JkVG9DaGVjayhwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmdldENvbG9yKHRoaXMubWVhc3VyZVN0cmVuZ3RoKHBhc3N3b3JkKSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTmFtZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50LCBlbGVtZW50LmNsYXNzTmFtZSAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBsaXMgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGMuaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGxpc1tpXSwgJ2JhY2tncm91bmRDb2xvcicsIGMuY29sKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShsaXNbaV0sICdiYWNrZ3JvdW5kQ29sb3InLCAnI0RERCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgyICpuZ0lmPVxcXCJhY2NvdW50XFxcIj5QYXNzd29yZCBmb3IgWzxiPnt7YWNjb3VudC5sb2dpbn19PC9iPl08L2gyPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+IDxzdHJvbmc+UGFzc3dvcmQgY2hhbmdlZCE8L3N0cm9uZz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIj4gPHN0cm9uZz5BbiBlcnJvciBoYXMgb2NjdXJyZWQhPC9zdHJvbmc+IFRoZSBwYXNzd29yZCBjb3VsZCBub3QgYmUgY2hhbmdlZC4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImRvTm90TWF0Y2hcXFwiPiBUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoISA8L2Rpdj4gPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiY2hhbmdlUGFzc3dvcmQoKVxcXCIgI3Bhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmV3IHBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZGlydHkgJiYgcGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJwYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb25maXJtIHRoZSBuZXcgcGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJwYXNzd29yZEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TYXZlPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJy4vcGFzc3dvcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb05vdE1hdGNoOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG4gICAgYWNjb3VudDogYW55O1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsXG4gICAgKSB7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzd29yZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5zYXZlKHRoaXMucGFzc3dvcmQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdwYXNzd29yZCcsXG4gIGNvbXBvbmVudDogUGFzc3dvcmRDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICBwYWdlVGl0bGU6ICdQYXNzd29yZCdcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50L2NoYW5nZV9wYXNzd29yZCcsIG5ld1Bhc3N3b3JkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMT5SZWdpc3RyYXRpb248L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+IDxzdHJvbmc+UmVnaXN0cmF0aW9uIHNhdmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgY29uZmlybWF0aW9uLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiPiA8c3Ryb25nPlJlZ2lzdHJhdGlvbiBmYWlsZWQhPC9zdHJvbmc+IFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclVzZXJFeGlzdHNcXFwiPiA8c3Ryb25nPkxvZ2luIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JFbWFpbEV4aXN0c1xcXCI+IDxzdHJvbmc+RW1haWwgaXMgYWxyZWFkeSBpbiB1c2UhPC9zdHJvbmc+IFBsZWFzZSBjaG9vc2UgYW5vdGhlciBvbmUuIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIj4gVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCEgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlZ2lzdGVyKClcXFwiICNyZWdpc3RlckZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsb2dpblxcXCI+VXNlcm5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyQWNjb3VudC5sb2dpblxcXCIgaWQ9XFxcImxvZ2luXFxcIiBuYW1lPVxcXCJsb2dpblxcXCIgI2xvZ2luPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciB1c2VybmFtZVxcXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiBwYXR0ZXJuPVxcXCJeW18nLkBBLVphLXowLTktXSokXFxcIj4gPGRpdiAqbmdJZj1cXFwibG9naW4uZGlydHkgJiYgbG9naW4uaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLnJlcXVpcmVkXFxcIj4gWW91ciB1c2VybmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMubWlubGVuZ3RoXFxcIj4gWW91ciB1c2VybmFtZSBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCAxIGNoYXJhY3Rlci4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMubWF4bGVuZ3RoXFxcIj4gWW91ciB1c2VybmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMucGF0dGVyblxcXCI+IFlvdXIgdXNlcm5hbWUgY2FuIG9ubHkgY29udGFpbiBsb3dlci1jYXNlIGxldHRlcnMgYW5kIGRpZ2l0cy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPkVtYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIGVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVnaXN0ZXJBY2NvdW50LmVtYWlsXFxcIiBtaW5sZW5ndGg9XFxcIjVcXFwiIG1heGxlbmd0aD1cXFwiMTAwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZW1haWwuZGlydHkgJiYgZW1haWwuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWwuZXJyb3JzLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWlubGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWwuZXJyb3JzLm1heGxlbmd0aFxcXCI+IFlvdXIgZW1haWwgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJOZXcgcGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkLmRpcnR5ICYmIHBhc3N3b3JkLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5yZXF1aXJlZFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5tYXhsZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPGpoaS1wYXNzd29yZC1zdHJlbmd0aC1iYXIgW3Bhc3N3b3JkVG9DaGVja109XFxcInJlZ2lzdGVyQWNjb3VudC5wYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb25maXJtIHRoZSBuZXcgcGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJyZWdpc3RlckZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5SZWdpc3RlcjwvYnV0dG9uPiA8L2Zvcm0+IDxwPjwvcD4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+IDxzcGFuPklmIHlvdSB3YW50IHRvIDwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcIm9wZW5Mb2dpbigpXFxcIj5zaWduIGluPC9hPjxzcGFuPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgZXJyb3JFbWFpbEV4aXN0czogc3RyaW5nO1xuICAgIGVycm9yVXNlckV4aXN0czogc3RyaW5nO1xuICAgIHJlZ2lzdGVyQWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlZ2lzdGVyU2VydmljZTogUmVnaXN0ZXIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWNjb3VudCA9IHt9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbicpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyQWNjb3VudC5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yVXNlckV4aXN0cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yRW1haWxFeGlzdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFjY291bnQubGFuZ0tleSA9ICdlbic7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5zYXZlKHRoaXMucmVnaXN0ZXJBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICB9LCAocmVzcG9uc2UpID0+IHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NFcnJvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuX2JvZHkgPT09ICdsb2dpbiBhbHJlYWR5IGluIHVzZScpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJiByZXNwb25zZS5fYm9keSA9PT0gJ2VtYWlsIGFkZHJlc3MgYWxyZWFkeSBpbiB1c2UnKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yRW1haWxFeGlzdHMgPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdyZWdpc3RlcicsXG4gIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBhdXRob3JpdGllczogW10sXG4gICAgcGFnZVRpdGxlOiAnUmVnaXN0cmF0aW9uJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNhdmUoYWNjb3VudDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvcmVnaXN0ZXInLCBhY2NvdW50KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMiAqbmdJZj1cXFwic2V0dGluZ3NBY2NvdW50XFxcIj5Vc2VyIHNldHRpbmdzIGZvciBbPGI+e3tzZXR0aW5nc0FjY291bnQubG9naW59fTwvYj5dPC9oMj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiPiA8c3Ryb25nPlNldHRpbmdzIHNhdmVkITwvc3Ryb25nPiA8L2Rpdj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiICpuZ0lmPVxcXCJzZXR0aW5nc0FjY291bnRcXFwiIG5vdmFsaWRhdGU+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBmaXJzdCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmZpcnN0TmFtZVxcXCIgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiAjZmlyc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5kaXJ0eSAmJiBmaXJzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPiBZb3VyIGZpcnN0IG5hbWUgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+IFlvdXIgZmlyc3QgbmFtZSBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCAxIGNoYXJhY3Rlci4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIj4gWW91ciBmaXJzdCBuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIGxhc3QgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5sYXN0TmFtZVxcXCIgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiAjbGFzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZGlydHkgJiYgbGFzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+IFlvdXIgbGFzdCBuYW1lIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+IFlvdXIgbGFzdCBuYW1lIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+IFlvdXIgbGFzdCBuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIGVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmVtYWlsXFxcIiBtaW5sZW5ndGg9XFxcIjVcXFwiIG1heGxlbmd0aD1cXFwiMTAwXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImVtYWlsSW5wdXQuZGlydHkgJiYgZW1haWxJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMuZW1haWxcXFwiPiBZb3VyIGVtYWlsIGlzIGludmFsaWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInNldHRpbmdzRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNhdmU8L2J1dHRvbj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsLCBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNldHRpbmdzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBzZXR0aW5nc0FjY291bnQ6IGFueTtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWxcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NBY2NvdW50ID0gdGhpcy5jb3B5QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudC5zYXZlKHRoaXMuc2V0dGluZ3NBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkodHJ1ZSkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NBY2NvdW50ID0gdGhpcy5jb3B5QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvcHlBY2NvdW50IChhY2NvdW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0ZWQ6IGFjY291bnQuYWN0aXZhdGVkLFxuICAgICAgICAgICAgZW1haWw6IGFjY291bnQuZW1haWwsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGFjY291bnQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFuZ0tleTogYWNjb3VudC5sYW5nS2V5LFxuICAgICAgICAgICAgbGFzdE5hbWU6IGFjY291bnQubGFzdE5hbWUsXG4gICAgICAgICAgICBsb2dpbjogYWNjb3VudC5sb2dpbixcbiAgICAgICAgICAgIGltYWdlVXJsOiBhY2NvdW50LmltYWdlVXJsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnc2V0dGluZ3MnLFxuICBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9VU0VSJ10sXG4gICAgcGFnZVRpdGxlOiAnU2V0dGluZ3MnXG4gIH0sXG4gIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQmxvZ1NoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7XG4gICAgYWRtaW5TdGF0ZSxcbiAgICBBdWRpdHNDb21wb25lbnQsXG4gICAgVXNlck1nbXRDb21wb25lbnQsXG4gICAgVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIExvZ3NDb21wb25lbnQsXG4gICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcbiAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIEpoaURvY3NDb21wb25lbnQsXG4gICAgQXVkaXRzU2VydmljZSxcbiAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBKaGlIZWFsdGhTZXJ2aWNlLFxuICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxuICAgIExvZ3NTZXJ2aWNlLFxuICAgIFVzZXJSZXNvbHZlUGFnaW5nUGFyYW1zLFxuICAgIFVzZXJSZXNvbHZlLFxuICAgIFVzZXJNb2RhbFNlcnZpY2Vcbn0gZnJvbSAnLi8nO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCbG9nU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhZG1pblN0YXRlLCB7IHVzZUhhc2g6IHRydWUgfSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBdWRpdHNDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210Q29tcG9uZW50LFxuICAgICAgICBVc2VyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBMb2dzQ29tcG9uZW50LFxuICAgICAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgICAgICBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICAgICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEpoaURvY3NDb21wb25lbnQsXG4gICAgICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nQ29tcG9uZW50LFxuICAgICAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgVXNlck1nbXREaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdWRpdHNTZXJ2aWNlLFxuICAgICAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICAgICAgSmhpSGVhbHRoU2VydmljZSxcbiAgICAgICAgSmhpTWV0cmljc1NlcnZpY2UsXG4gICAgICAgIExvZ3NTZXJ2aWNlLFxuICAgICAgICBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtcyxcbiAgICAgICAgVXNlclJlc29sdmUsXG4gICAgICAgIFVzZXJNb2RhbFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9nQWRtaW5Nb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICBtZXRyaWNzUm91dGUsXG4gICAgdXNlck1nbXRSb3V0ZSxcbiAgICB1c2VyRGlhbG9nUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxubGV0IEFETUlOX1JPVVRFUyA9IFtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICAuLi51c2VyTWdtdFJvdXRlLFxuICAgIG1ldHJpY3NSb3V0ZVxuXTtcblxuXG5leHBvcnQgY29uc3QgYWRtaW5TdGF0ZTogUm91dGVzID0gW3tcbiAgICBwYXRoOiAnJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfQURNSU4nXVxuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXSxcbiAgICBjaGlsZHJlbjogQURNSU5fUk9VVEVTXG59LFxuICAgIC4uLnVzZXJEaWFsb2dSb3V0ZVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJleHBvcnQgY2xhc3MgQXVkaXREYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlbW90ZUFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nXG4gICAgKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0LWRhdGEubW9kZWwudHMiLCJpbXBvcnQgeyBBdWRpdERhdGEgfSBmcm9tICcuL2F1ZGl0LWRhdGEubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXVkaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGF0YTogQXVkaXREYXRhLFxuICAgICAgICBwdWJsaWMgcHJpbmNpcGFsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZ1xuICAgICkge8KgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiYXVkaXRzXFxcIj4gPGgyPkF1ZGl0czwvaDI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj4gPGg0PkZpbHRlciBieSBkYXRlPC9oND4gPHAgY2xhc3M9XFxcImQtZmxleFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+ZnJvbTwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInN0YXJ0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZnJvbURhdGVcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwib25DaGFuZ2VEYXRlKCRldmVudClcXFwiIHJlcXVpcmVkLz4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj50bzwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVuZFxcXCIgWyhuZ01vZGVsKV09XFxcInRvRGF0ZVxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvbkNoYW5nZURhdGUoJGV2ZW50KVxcXCIgcmVxdWlyZWQvPiA8L3A+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICd0aW1lc3RhbXAnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5EYXRlPC9zcGFuPjwvdGg+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJpbmNpcGFsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+VXNlcjwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3R5cGUnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5TdGF0ZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2RhdGEubWVzc2FnZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuPkV4dHJhIGRhdGE8L3NwYW4+PC90aD4gPC90cj4gPC90aGVhZD4gPHRyICpuZ0Zvcj1cXFwibGV0IGF1ZGl0IG9mIGdldEF1ZGl0cygpXFxcIj4gPHRkPjxzcGFuPnt7YXVkaXQudGltZXN0YW1wfCBkYXRlOidtZWRpdW0nfX08L3NwYW4+PC90ZD4gPHRkPjxzbWFsbD57e2F1ZGl0LnByaW5jaXBhbH19PC9zbWFsbD48L3RkPiA8dGQ+e3thdWRpdC50eXBlfX08L3RkPiA8dGQ+IDxzcGFuICpuZ0lmPVxcXCJhdWRpdC5kYXRhXFxcIiBuZy1zaG93PVxcXCJhdWRpdC5kYXRhLm1lc3NhZ2VcXFwiPnt7YXVkaXQuZGF0YS5tZXNzYWdlfX08L3NwYW4+IDxzcGFuICpuZ0lmPVxcXCJhdWRpdC5kYXRhXFxcIiBuZy1zaG93PVxcXCJhdWRpdC5kYXRhLnJlbW90ZUFkZHJlc3NcXFwiPjxzcGFuPlJlbW90ZSBBZGRyZXNzPC9zcGFuPiB7e2F1ZGl0LmRhdGEucmVtb3RlQWRkcmVzc319PC9zcGFuPiA8L3RkPiA8L3RyPiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiYXVkaXRzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGFyc2VMaW5rc30gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBdWRpdCB9IGZyb20gJy4vYXVkaXQubW9kZWwnO1xuaW1wb3J0IHsgQXVkaXRzU2VydmljZSB9IGZyb20gJy4vYXVkaXRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWF1ZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1ZGl0cy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXVkaXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhdWRpdHM6IEF1ZGl0W107XG4gICAgZnJvbURhdGU6IHN0cmluZztcbiAgICBpdGVtc1BlclBhZ2U6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBvcmRlclByb3A6IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuICAgIHRvRGF0ZTogc3RyaW5nO1xuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1ZGl0c1NlcnZpY2U6IEF1ZGl0c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxuICAgICkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcmRlclByb3AgPSAndGltZXN0YW1wJztcbiAgICB9XG5cbiAgICBnZXRBdWRpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRBdWRpdHModGhpcy5hdWRpdHMpO1xuICAgIH1cblxuICAgIGxvYWRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRGF0ZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRvZGF5KCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNNb250aCgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hdWRpdHNTZXJ2aWNlLnF1ZXJ5KHtwYWdlOiB0aGlzLnBhZ2UgLSAxLCBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgIGZyb21EYXRlOiB0aGlzLmZyb21EYXRlLCB0b0RhdGU6IHRoaXMudG9EYXRlfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaXRzID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UocmVzLmhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gKyByZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb250aCgpIHtcbiAgICAgICAgbGV0IGRhdGVGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG4gICAgICAgIGxldCBmcm9tRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKGZyb21EYXRlLmdldE1vbnRoKCkgPT09IDApIHtcbiAgICAgICAgICAgIGZyb21EYXRlID0gbmV3IERhdGUoZnJvbURhdGUuZ2V0RnVsbFllYXIoKSAtIDEsIDExLCBmcm9tRGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbURhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRGdWxsWWVhcigpLCBmcm9tRGF0ZS5nZXRNb250aCgpIC0gMSwgZnJvbURhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJvbURhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShmcm9tRGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgfVxuXG4gICAgdG9kYXkoKSB7XG4gICAgICAgIGxldCBkYXRlRm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xuICAgICAgICAvLyBUb2RheSArIDEgZGF5IC0gbmVlZGVkIGlmIHRoZSBjdXJyZW50IGRheSBtdXN0IGJlIGluY2x1ZGVkXG4gICAgICAgIGxldCB0b2RheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy50b0RhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvcnRBdWRpdHMoYXVkaXRzOiBBdWRpdFtdKSB7XG4gICAgICAgIGF1ZGl0cyA9IGF1ZGl0cy5zbGljZSgwKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYVt0aGlzLm9yZGVyUHJvcF0gPCBiW3RoaXMub3JkZXJQcm9wXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW2JbdGhpcy5vcmRlclByb3BdIDwgYVt0aGlzLm9yZGVyUHJvcF1dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlID8gYXVkaXRzLnJldmVyc2UoKSA6IGF1ZGl0cztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdWRpdHNDb21wb25lbnQgfSBmcm9tICcuL2F1ZGl0cy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgYXVkaXRzUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnYXVkaXRzJyxcbiAgY29tcG9uZW50OiBBdWRpdHNDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdBdWRpdHMnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpdHNTZXJ2aWNlICB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIHF1ZXJ5KHJlcTogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2Zyb21EYXRlJywgcmVxLmZyb21EYXRlKTtcbiAgICAgICAgcGFyYW1zLnNldCgndG9EYXRlJywgcmVxLnRvRGF0ZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3BhZ2UnLCByZXEucGFnZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3NpemUnLCByZXEuc2l6ZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3NvcnQnLCByZXEuc29ydCk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2F1ZGl0cycsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImFsbENvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvblxcXCI+IDxoMj5Db25maWd1cmF0aW9uPC9oMj4gPHNwYW4+RmlsdGVyIChieSBwcmVmaXgpPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDxsYWJlbD5TcHJpbmcgY29uZmlndXJhdGlvbjwvbGFiZWw+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1yZXNwb25zaXZlIGQtdGFibGVcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ3LTQwXFxcIiAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJlZml4JzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+UHJlZml4PC9zcGFuPjwvdGg+IDx0aCBjbGFzcz1cXFwidy02MFxcXCIgKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3Byb3BlcnRpZXMnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5Qcm9wZXJ0aWVzPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIChjb25maWd1cmF0aW9uIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J3ByZWZpeCcgfCBvcmRlckJ5Om9yZGVyUHJvcDpyZXZlcnNlKVxcXCI+IDx0ZD48c3Bhbj57e2VudHJ5LnByZWZpeH19PC9zcGFuPjwvdGQ+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBrZXkgb2Yga2V5cyhlbnRyeS5wcm9wZXJ0aWVzKVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj57e2tleX19PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWRlZmF1bHQgYnJlYWtcXFwiPnt7ZW50cnkucHJvcGVydGllc1trZXldfX08L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPGRpdiAqbmdGb3I9XFxcImxldCBrZXkgb2Yga2V5cyhhbGxDb25maWd1cmF0aW9uKVxcXCI+IDxsYWJlbD48c3Bhbj57e2tleX19PC9zcGFuPjwvbGFiZWw+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1yZXNwb25zaXZlIGQtdGFibGVcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ3LTQwXFxcIj5Qcm9wZXJ0eTwvdGg+IDx0aCBjbGFzcz1cXFwidy02MFxcXCI+VmFsdWU8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGFsbENvbmZpZ3VyYXRpb25ba2V5XVxcXCI+IDx0ZCBjbGFzcz1cXFwiYnJlYWtcXFwiPnt7aXRlbS5rZXl9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwiYnJlYWtcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmxvYXQtcmlnaHQgYmFkZ2UgYmFkZ2UtZGVmYXVsdCBicmVha1xcXCI+e3tpdGVtLnZhbH19PC9zcGFuPiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSmhpQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWNvbmZpZ3VyYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhbGxDb25maWd1cmF0aW9uOiBhbnkgPSBudWxsO1xuICAgIGNvbmZpZ3VyYXRpb246IGFueSA9IG51bGw7XG4gICAgY29uZmlnS2V5czogYW55W107XG4gICAgZmlsdGVyOiBzdHJpbmc7XG4gICAgb3JkZXJQcm9wOiBzdHJpbmc7XG4gICAgcmV2ZXJzZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBKaGlDb25maWd1cmF0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbmZpZ0tleXMgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5vcmRlclByb3AgPSAncHJlZml4JztcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAga2V5cyhkaWN0KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiAoZGljdCA9PT0gdW5kZWZpbmVkKSA/IFtdIDogT2JqZWN0LmtleXMoZGljdCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuZ2V0KCkuc3Vic2NyaWJlKChjb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBjb25maWcgb2YgY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWcucHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnS2V5cy5wdXNoKE9iamVjdC5rZXlzKGNvbmZpZy5wcm9wZXJ0aWVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldEVudigpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGxDb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnamhpLWNvbmZpZ3VyYXRpb24nLFxuICBjb21wb25lbnQ6IEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdDb25maWd1cmF0aW9uJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2NvbmZpZ3Byb3BzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvcGVydGllczogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydGllc09iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLnNvcnQoKHByb3BlcnR5QSwgcHJvcGVydHlCKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcm9wZXJ0eUEucHJlZml4ID09PSBwcm9wZXJ0eUIucHJlZml4KSA/IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAocHJvcGVydHlBLnByZWZpeCA8IHByb3BlcnR5Qi5wcmVmaXgpID8gLTEgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEVudigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9lbnYnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsc09iamVjdCA9IHByb3BlcnRpZXNPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsS2V5IGluIHZhbHNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxzT2JqZWN0Lmhhc093blByb3BlcnR5KHZhbEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnB1c2goe2tleTogdmFsS2V5LCB2YWw6IHZhbHNPYmplY3RbdmFsS2V5XX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aWZyYW1lIHNyYz1cXFwic3dhZ2dlci11aS9pbmRleC5odG1sXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI5MDBcXFwiIHNlYW1sZXNzIHRhcmdldD1cXFwiX3RvcFxcXCIgdGl0bGU9XFxcIlN3YWdnZXIgVUlcXFwiIGNsYXNzPVxcXCJib3JkZXItMFxcXCI+PC9pZnJhbWU+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWRvY3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kb2NzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlEb2NzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgICkge1xuICAgICAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaURvY3NDb21wb25lbnQgfSBmcm9tICcuL2RvY3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGRvY3NSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdkb2NzJyxcbiAgY29tcG9uZW50OiBKaGlEb2NzQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgcGFnZVRpdGxlOiAnQVBJJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3Mucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNob3dIZWFsdGhMYWJlbFxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtY2FwaXRhbGl6ZVxcXCI+e3sgYmFzZU5hbWUoY3VycmVudEhlYWx0aC5uYW1lKSB9fTwvc3Bhbj4ge3tzdWJTeXN0ZW1OYW1lKGN1cnJlbnRIZWFsdGgubmFtZSl9fSA8L2g0PiA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHkgcGFkXFxcIj4gPGRpdiAqbmdJZj1cXFwiY3VycmVudEhlYWx0aC5kZXRhaWxzXFxcIj4gPGg1PlByb3BlcnRpZXM8L2g1PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj5OYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPlZhbHVlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY3VycmVudEhlYWx0aC5kZXRhaWxzIHwga2V5c1xcXCI+IDx0ZCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj57e2VudHJ5LmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPnt7cmVhZGFibGVWYWx1ZShlbnRyeS52YWx1ZSl9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiY3VycmVudEhlYWx0aC5lcnJvclxcXCI+IDxoND5FcnJvcjwvaDQ+IDxwcmU+e3tjdXJyZW50SGVhbHRoLmVycm9yfX08L3ByZT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1sZWZ0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj5Eb25lPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoU2VydmljZSB9IGZyb20gJy4vaGVhbHRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50IHtcblxuICAgIGN1cnJlbnRIZWFsdGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZSwgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICAgIGJhc2VOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHJlYWRhYmxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoLm5hbWUgIT09ICdkaXNrU3BhY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IHN0b3JhZ2Ugc3BhY2UgaW4gYW4gaHVtYW4gcmVhZGFibGUgdW5pdFxuICAgICAgICBsZXQgdmFsID0gdmFsdWUgLyAxMDczNzQxODI0O1xuICAgICAgICBpZiAodmFsID4gMSkgeyAvLyBWYWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b0ZpeGVkKDIpICsgJyBHQic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTA0ODU3NikudG9GaXhlZCgyKSArICcgTUInO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuPkhlYWx0aCBDaGVja3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaCgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4+UmVmcmVzaDwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPiA8dGFibGUgaWQ9XFxcImhlYWx0aENoZWNrXFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGg+U2VydmljZSBOYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+U3RhdHVzPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+RGV0YWlsczwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGhlYWx0aCBvZiBoZWFsdGhEYXRhXFxcIj4gPHRkPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IGJhc2VOYW1lKGhlYWx0aC5uYW1lKSB9fTwvc3Bhbj4ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCYWRnZUNsYXNzKGhlYWx0aC5zdGF0dXMpXFxcIj4ge3toZWFsdGguc3RhdHVzfX0gPC9zcGFuPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj4gPGEgY2xhc3M9XFxcImhhbmRcXFwiIChjbGljayk9XFxcInNob3dIZWFsdGgoaGVhbHRoKVxcXCIgKm5nSWY9XFxcImhlYWx0aC5kZXRhaWxzIHx8IGhlYWx0aC5lcnJvclxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvaT4gPC9hPiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaUhlYWx0aFNlcnZpY2UgfSBmcm9tICcuL2hlYWx0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFsdGgtbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktaGVhbHRoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGVhbHRoLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGhlYWx0aERhdGE6IGFueTtcbiAgICB1cGRhdGluZ0hlYWx0aDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZVxuICAgICkge1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgYmFzZU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFNlcnZpY2UuZ2V0QmFzZU5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0QmFkZ2VDbGFzcyhzdGF0dXNTdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdHVzU3RhdGUgPT09ICdVUCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2Utc3VjY2Vzcyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWRhbmdlcic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhlYWx0aFNlcnZpY2UuY2hlY2tIZWFsdGgoKS5zdWJzY3JpYmUoaGVhbHRoID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKGhlYWx0aCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKGVycm9yLmpzb24oKSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93SGVhbHRoKGhlYWx0aDogYW55KSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmICA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oSmhpSGVhbHRoTW9kYWxDb21wb25lbnQpO1xuICAgICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5jdXJyZW50SGVhbHRoID0gaGVhbHRoO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldFN1YlN5c3RlbU5hbWUobmFtZSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBoZWFsdGhSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdqaGktaGVhbHRoJyxcbiAgY29tcG9uZW50OiBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ0hlYWx0aCBDaGVja3MnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoU2VydmljZSB7XG5cbiAgICBzZXBhcmF0b3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgY2hlY2tIZWFsdGgoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvaGVhbHRoJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1IZWFsdGhEYXRhKGRhdGEpOiBhbnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgdGhpcy5mbGF0dGVuSGVhbHRoRGF0YShyZXNwb25zZSwgbnVsbCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBnZXRCYXNlTmFtZShuYW1lKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN1YlN5c3RlbU5hbWUobmFtZSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBzcGxpdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gc3BsaXQuam9pbignLicpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbmRlciA/ICcgLSAnICsgcmVtYWluZGVyIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgICBwcml2YXRlIGFkZEhlYWx0aE9iamVjdChyZXN1bHQsIGlzTGVhZiwgaGVhbHRoT2JqZWN0LCBuYW1lKTogYW55IHtcblxuICAgICAgICBsZXQgc3RhdHVzOiBhbnk7XG4gICAgICAgIGxldCBlcnJvcjogYW55O1xuICAgICAgICBsZXQgaGVhbHRoRGF0YTogYW55ID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBuYW1lLFxuICAgICAgICAgICAgJ2Vycm9yJzogZXJyb3IsXG4gICAgICAgICAgICAnc3RhdHVzJzogc3RhdHVzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRldGFpbHMgPSB7fTtcbiAgICAgICAgbGV0IGhhc0RldGFpbHMgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBoZWFsdGhPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJyB8fCBrZXkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhbHRoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGVhbHRoT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXRhaWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgZGV0YWlsc1xuICAgICAgICBpZiAoaGFzRGV0YWlscykge1xuICAgICAgICAgICAgaGVhbHRoRGF0YS5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgYWRkIG5vZGVzIGlmIHRoZXkgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgIGlmIChpc0xlYWYgfHwgaGFzRGV0YWlscyB8fCBoZWFsdGhEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChoZWFsdGhEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhbHRoRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsYXR0ZW5IZWFsdGhEYXRhIChyZXN1bHQsIHBhdGgsIGRhdGEpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3ViU3lzdGVtKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCBmYWxzZSwgdmFsdWUsIHRoaXMuZ2V0TW9kdWxlTmFtZShwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhdHRlbkhlYWx0aERhdGEocmVzdWx0LCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCB0cnVlLCB2YWx1ZSwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1vZHVsZU5hbWUgKHBhdGgsIG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocGF0aCAmJiBuYW1lKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoICsgdGhpcy5zZXBhcmF0b3IgKyBuYW1lO1xuICAgICAgICB9ICBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzU3ViU3lzdGVtIChoZWFsdGhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBoZWFsdGhPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoZWFsdGhPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGhlYWx0aE9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNIZWFsdGhPYmplY3QgKGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXR1cycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3MvZG9jcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2NzL2RvY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9nLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWRtaW4ucm91dGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGV2ZWw6IHN0cmluZ1xuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9nLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJsb2dnZXJzXFxcIj4gPGgyPkxvZ3M8L2gyPiA8cD5UaGVyZSBhcmUge3sgbG9nZ2Vycy5sZW5ndGggfX0gbG9nZ2Vycy48L3A+IDxzcGFuPkZpbHRlcjwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWx0ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXFxcIj4gPHRoZWFkPiA8dHIgdGl0bGU9XFxcImNsaWNrIHRvIG9yZGVyXFxcIj4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICduYW1lJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+TmFtZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2xldmVsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+TGV2ZWw8L3NwYW4+PC90aD4gPC90cj4gPC90aGVhZD4gPHRyICpuZ0Zvcj1cXFwibGV0IGxvZ2dlciBvZiAobG9nZ2VycyB8IHB1cmVGaWx0ZXI6ZmlsdGVyOiduYW1lJyB8IG9yZGVyQnk6b3JkZXJQcm9wOnJldmVyc2UpXFxcIj4gPHRkPjxzbWFsbD57e2xvZ2dlci5uYW1lIHwgc2xpY2U6MDoxNDB9fTwvc21hbGw+PC90ZD4gPHRkPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnVFJBQ0UnKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nVFJBQ0UnKSA/ICdidG4tZGFuZ2VyJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPlRSQUNFPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdERUJVRycpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdERUJVRycpID8gJ2J0bi13YXJuaW5nJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPkRFQlVHPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdJTkZPJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J0lORk8nKSA/ICdidG4taW5mbycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5JTkZPPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdXQVJOJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J1dBUk4nKSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5XQVJOPC9idXR0b24+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdFUlJPUicpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdFUlJPUicpID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPkVSUk9SPC9idXR0b24+IDwvdGQ+IDwvdHI+IDwvdGFibGU+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nLm1vZGVsJztcbmltcG9ydCB7IExvZ3NTZXJ2aWNlIH0gZnJvbSAnLi9sb2dzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1sb2dzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9ncy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9nZ2VyczogTG9nW107XG4gICAgZmlsdGVyOiBzdHJpbmc7XG4gICAgb3JkZXJQcm9wOiBzdHJpbmc7XG4gICAgcmV2ZXJzZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSBsb2dzU2VydmljZTogTG9nc1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5vcmRlclByb3AgPSAnbmFtZSc7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKGxvZ2dlcnMgPT4gdGhpcy5sb2dnZXJzID0gbG9nZ2Vycyk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGV2ZWwgKG5hbWU6IHN0cmluZywgbGV2ZWw6IHN0cmluZykge1xuICAgICAgICBsZXQgbG9nID0gbmV3IExvZyhuYW1lLCBsZXZlbCk7XG4gICAgICAgIHRoaXMubG9nc1NlcnZpY2UuY2hhbmdlTGV2ZWwobG9nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKGxvZ2dlcnMgPT4gdGhpcy5sb2dnZXJzID0gbG9nZ2Vycyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9nc0NvbXBvbmVudCB9IGZyb20gJy4vbG9ncy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgbG9nc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2xvZ3MnLFxuICBjb21wb25lbnQ6IExvZ3NDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdMb2dzJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGNoYW5nZUxldmVsKGxvZzogTG9nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgnbWFuYWdlbWVudC9sb2dzJywgbG9nKTtcbiAgICB9XG5cbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8TG9nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbG9ncycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Muc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+VGhyZWFkcyBkdW1wPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt9XFxcIj5BbGwmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBBbGx9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnUlVOTkFCTEUnfVxcXCI+UnVubmFibGUmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBSdW5uYWJsZX19PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWluZm9cXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdXQUlUSU5HJ31cXFwiPldhaXRpbmcmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBXYWl0aW5nfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utd2FybmluZ1xcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ1RJTUVEX1dBSVRJTkcnfVxcXCI+VGltZWQgV2FpdGluZyZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcFRpbWVkV2FpdGluZ319PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ0JMT0NLRUQnfVxcXCI+QmxvY2tlZCZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcEJsb2NrZWR9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxkaXYgY2xhc3M9XFxcIm10LTJcXFwiPiZuYnNwOzwvZGl2PiBGaWx0ZXIgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ0aHJlYWREdW1wRmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPGRpdiBjbGFzcz1cXFwicGFkXFxcIiAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiB0aHJlYWREdW1wIHwgcHVyZUZpbHRlcjp0aHJlYWREdW1wRmlsdGVyOidsb2NrTmFtZScgfCBrZXlzXFxcIj4gPGg2PiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzcyhlbnRyeS52YWx1ZS50aHJlYWRTdGF0ZSlcXFwiPnt7ZW50cnkudmFsdWUudGhyZWFkU3RhdGV9fTwvc3Bhbj4mbmJzcDt7e2VudHJ5LnZhbHVlLnRocmVhZE5hbWV9fSAoSUQge3tlbnRyeS52YWx1ZS50aHJlYWRJZH19KSA8YSAoY2xpY2spPVxcXCJlbnRyeS5zaG93ID0gIWVudHJ5LnNob3dcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiPiA8c3BhbiBbaGlkZGVuXT1cXFwiZW50cnkuc2hvd1xcXCI+U2hvdyBTdGFja1RyYWNlPC9zcGFuPiA8c3BhbiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiPkhpZGUgU3RhY2tUcmFjZTwvc3Bhbj4gPC9hPiA8L2g2PiA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj4gPGRpdiAqbmdGb3I9XFxcImxldCBzdCBvZiBlbnRyeS52YWx1ZS5zdGFja1RyYWNlIHwga2V5c1xcXCIgY2xhc3M9XFxcImJyZWFrXFxcIj4gPHNhbXA+e3tzdC52YWx1ZS5jbGFzc05hbWV9fS57e3N0LnZhbHVlLm1ldGhvZE5hbWV9fSg8Y29kZT57e3N0LnZhbHVlLmZpbGVOYW1lfX06e3tzdC52YWx1ZS5saW5lTnVtYmVyfX08L2NvZGU+KTwvc2FtcD4gPHNwYW4gY2xhc3M9XFxcIm10LTFcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+QmxvY2tlZCBUaW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5CbG9ja2VkIENvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5XYWl0ZWQgVGltZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+V2FpdGVkIENvdW50PC90aD4gPHRoPkxvY2sgTmFtZTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyPiA8dGQ+e3tlbnRyeS52YWx1ZS5ibG9ja2VkVGltZX19PC90ZD4gPHRkPnt7ZW50cnkudmFsdWUuYmxvY2tlZENvdW50fX08L3RkPiA8dGQ+e3tlbnRyeS52YWx1ZS53YWl0ZWRUaW1lfX08L3RkPiA8dGQ+e3tlbnRyeS52YWx1ZS53YWl0ZWRDb3VudH19PC90ZD4gPHRkPjxjb2RlPnt7ZW50cnkudmFsdWUubG9ja05hbWV9fTwvY29kZT48L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgcHVsbC1sZWZ0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+RG9uZTwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1ldHJpY3MtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHRocmVhZER1bXBGaWx0ZXI6IGFueTtcbiAgICB0aHJlYWREdW1wOiBhbnk7XG4gICAgdGhyZWFkRHVtcEFsbCA9IDA7XG4gICAgdGhyZWFkRHVtcEJsb2NrZWQgPSAwO1xuICAgIHRocmVhZER1bXBSdW5uYWJsZSA9IDA7XG4gICAgdGhyZWFkRHVtcFRpbWVkV2FpdGluZyA9IDA7XG4gICAgdGhyZWFkRHVtcFdhaXRpbmcgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRocmVhZER1bXAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ1JVTk5BQkxFJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFJ1bm5hYmxlICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnV0FJVElORycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZER1bXBXYWl0aW5nICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnVElNRURfV0FJVElORycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZER1bXBUaW1lZFdhaXRpbmcgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdCTE9DS0VEJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcEJsb2NrZWQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aHJlYWREdW1wQWxsID0gdGhpcy50aHJlYWREdW1wUnVubmFibGUgKyB0aGlzLnRocmVhZER1bXBXYWl0aW5nICtcbiAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFRpbWVkV2FpdGluZyArIHRoaXMudGhyZWFkRHVtcEJsb2NrZWQ7XG4gICAgfVxuXG4gICAgZ2V0QmFkZ2VDbGFzcyAodGhyZWFkU3RhdGUpIHtcbiAgICAgICAgaWYgKHRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnV0FJVElORycpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2UtaW5mbyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhyZWFkU3RhdGUgPT09ICdUSU1FRF9XQUlUSU5HJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS13YXJuaW5nJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWRhbmdlcic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGgyPiA8c3Bhbj5BcHBsaWNhdGlvbiBNZXRyaWNzPC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiIChjbGljayk9XFxcInJlZnJlc2goKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZWZyZXNoXFxcIj48L3NwYW4+IDxzcGFuPlJlZnJlc2g8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8aDM+SlZNIE1ldHJpY3M8L2gzPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8Yj5NZW1vcnk8L2I+IDxwPjxzcGFuPlRvdGFsIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgdHlwZT1cXFwic3VjY2Vzc1xcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwubWF4J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuPkhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4+Tm9uLUhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLmNvbW1pdHRlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NKTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGI+VGhyZWFkczwvYj4gKFRvdGFsOiB7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlfX0pIDxhIGNsYXNzPVxcXCJoYW5kXFxcIiAoY2xpY2spPVxcXCJyZWZyZXNoVGhyZWFkRHVtcERhdGEoKVxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI3RocmVhZER1bXBcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvaT48L2E+IDxwPjxzcGFuPlJ1bm5hYmxlPC9zcGFuPiB7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlfX08L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnJ1bm5hYmxlLmNvdW50J10udmFsdWVcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3Bhbj5UaW1lZCBXYWl0aW5nPC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMudGltZWRfd2FpdGluZy5jb3VudCddLnZhbHVlfX0pPC9wPiA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWVcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJ3YXJuaW5nXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMudGltZWRfd2FpdGluZy5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuPldhaXRpbmc8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcIndhcm5pbmdcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4+QmxvY2tlZDwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuYmxvY2tlZC5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8Yj5HYXJiYWdlIGNvbGxlY3Rpb25zPC9iPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLmNvdW50J11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+TWFyayBTd2VlcCBjb3VudDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAuY291bnQnXS52YWx1ZX19PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLnRpbWUnXVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5NYXJrIFN3ZWVwIHRpbWU8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS5jb3VudCddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPlNjYXZlbmdlIGNvdW50PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLmNvdW50J10udmFsdWV9fTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLnRpbWUnXVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5TY2F2ZW5nZSB0aW1lPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLWxnXFxcIiAqbmdJZj1cXFwidXBkYXRpbmdNZXRyaWNzXFxcIj5VcGRhdGluZy4uLjwvZGl2PiA8aDM+SFRUUCByZXF1ZXN0cyAoZXZlbnRzIHBlciBzZWNvbmQpPC9oMz4gPHAgKm5nSWY9XFxcIm1ldHJpY3MuY291bnRlcnNcXFwiPiA8c3Bhbj5BY3RpdmUgcmVxdWVzdHM8L3NwYW4+IDxiPnt7bWV0cmljcy5jb3VudGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIuYWN0aXZlUmVxdWVzdHMnXS5jb3VudCB8IG51bWJlcjonMS4wLTAnfX08L2I+IC0gPHNwYW4+VG90YWwgcmVxdWVzdHM8L3NwYW4+IDxiPnt7bWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiA8L3A+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5Db2RlPC90aD4gPHRoPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3Bhbj5BdmVyYWdlPC9zcGFuPiAoMSBtaW4pPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3Bhbj5BdmVyYWdlPC9zcGFuPiAoNSBtaW4pPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3Bhbj5BdmVyYWdlPC9zcGFuPiAoMTUgbWluKTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyPiA8dGQ+T0s8L3RkPiA8dGQ+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MudGltZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXF1ZXN0cyddLmNvdW50XFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLmNvdW50XFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10uY291bnR9fTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tZWFuX3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm0xX3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm01X3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tMTVfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQ+Tm90IEZvdW5kPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubWVhbl9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubTFfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm01X3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tMTVfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQ+U2VydmVyIGVycm9yPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubWVhbl9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubTFfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm01X3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tMTVfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMz5TZXJ2aWNlcyBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5TZXJ2aWNlIG5hbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NaW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnA1MDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+cDc1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5wOTU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnA5OTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+TWF4PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2Ygc2VydmljZXNTdGF0cyB8IGtleXNcXFwiPiA8dGQ+e3tlbnRyeS5rZXl9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5jb3VudH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1lYW4gKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5taW4gKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wNTAgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wNzUgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wOTUgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5wOTkgKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5tYXggKiAxMDAwIHwgbnVtYmVyOicxLjAtMCd9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8aDM+Q2FjaGUgc3RhdGlzdGljczwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD5DYWNoZSBuYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5DYWNoZSBIaXRzPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5DYWNoZSBNaXNzZXM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkNhY2hlIEdldHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkNhY2hlIFB1dHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkNhY2hlIFJlbW92YWxzPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5DYWNoZSBFdmljdGlvbnM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkNhY2hlIEhpdCAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5DYWNoZSBNaXNzICU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkF2ZXJhZ2UgZ2V0IHRpbWUgKMK1cyk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkF2ZXJhZ2UgcHV0IHRpbWUgKMK1cyk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkF2ZXJhZ2UgcmVtb3ZlIHRpbWUgKMK1cyk8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBjYWNoZXNTdGF0cyB8IGtleXNcXFwiPiA8dGQ+e3tlbnRyeS5rZXl9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWhpdHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtbWlzc2VzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWdldHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtcHV0cyddLnZhbHVlfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1yZW1vdmFscyddLnZhbHVlfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1ldmljdGlvbnMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtaGl0LXBlcmNlbnRhZ2UnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtbWlzcy1wZXJjZW50YWdlJ10udmFsdWUgfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5hdmVyYWdlLWdldC10aW1lJ10udmFsdWUgfCBudW1iZXIgOiAnMS4yLTInIH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuYXZlcmFnZS1wdXQtdGltZSddLnZhbHVlIHwgbnVtYmVyIDogJzEuMi0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuYXZlcmFnZS1yZW1vdmUtdGltZSddLnZhbHVlIHwgbnVtYmVyIDogJzEuMi0yJyB9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8aDMgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10gJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSA+IDBcXFwiPkRhdGFTb3VyY2Ugc3RhdGlzdGljcyAodGltZSBpbiBtaWxsaXNlY29uZCk8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljcyAmJiBtZXRyaWNzLmdhdWdlcyAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10udmFsdWUgPiAwXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aD48c3Bhbj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPk1lYW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPk1pbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+cDUwPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5wNzU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnA5NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+cDk5PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5NYXg8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkPiA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBwcm9ncmVzcy1zdHJpcGVkXFxcIj4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L2Rpdj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5jb3VudH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5tZWFuIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ubWluIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDUwIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDc1IHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk1IHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk5IHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ubWF4IHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEpoaU1ldHJpY3NTZXJ2aWNlIH0gZnJvbSAnLi9tZXRyaWNzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEpoaU1ldHJpY3NNb25pdG9yaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBtZXRyaWNzOiBhbnkgPSB7fTtcbiAgICBjYWNoZXNTdGF0czogYW55ID0ge307XG4gICAgc2VydmljZXNTdGF0czogYW55ID0ge307XG4gICAgdXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcbiAgICBKQ0FDSEVfS0VZOiBzdHJpbmcgO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBtZXRyaWNzU2VydmljZTogSmhpTWV0cmljc1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5KQ0FDSEVfS0VZID0gJ2pjYWNoZS5zdGF0aXN0aWNzJztcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2ggKCkge1xuICAgICAgICB0aGlzLnVwZGF0aW5nTWV0cmljcyA9IHRydWU7XG4gICAgICAgIHRoaXMubWV0cmljc1NlcnZpY2UuZ2V0TWV0cmljcygpLnN1YnNjcmliZSgobWV0cmljcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzID0gbWV0cmljcztcbiAgICAgICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VzU3RhdHMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldHJpY3MudGltZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBtZXRyaWNzLnRpbWVyc1trZXldO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignd2ViLnJlc3QnKSAhPT0gLTEgfHwga2V5LmluZGV4T2YoJ3NlcnZpY2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc1N0YXRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldHJpY3MuZ2F1Z2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ2pjYWNoZS5zdGF0aXN0aWNzJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG1ldHJpY3MuZ2F1Z2VzW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnZXRzIG9yIHB1dHNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0ga2V5Lmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdLZXkgPSBrZXkuc3Vic3RyKDAsIGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSBuYW1lIG9mIHRoZSBkb21haW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZXNTdGF0c1tuZXdLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiB0aGlzLkpDQUNIRV9LRVkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaFRocmVhZER1bXBEYXRhICgpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS50aHJlYWREdW1wKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsIHsgc2l6ZTogJ2xnJ30pO1xuICAgICAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudGhyZWFkRHVtcCA9IGRhdGE7XG4gICAgICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgbWV0cmljc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2poaS1tZXRyaWNzJyxcbiAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ0FwcGxpY2F0aW9uIE1ldHJpY3MnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgZ2V0TWV0cmljcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9tZXRyaWNzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0aHJlYWREdW1wKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2R1bXAnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZGVsZXRlRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiY29uZmlybURlbGV0ZSh1c2VyLmxvZ2luKVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbmZpcm0gZGVsZXRlIG9wZXJhdGlvbjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFVzZXI/PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPkRlbGV0ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFVzZXJNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VzZXItbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kZWxldGUtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50IHtcblxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgY2xlYXIgKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH1cblxuICAgIGNvbmZpcm1EZWxldGUgKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGxvZ2luKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ3VzZXJMaXN0TW9kaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnRGVsZXRlZCBhIHVzZXInfSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3ModHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHVzZXJNb2RhbFNlcnZpY2U6IFVzZXJNb2RhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LCBwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJ1c2VyXFxcIj4gPGgyPiA8c3Bhbj5Vc2VyPC9zcGFuPiBbPGI+e3t1c2VyLmxvZ2lufX08L2I+XSA8L2gyPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3Bhbj5Mb2dpbjwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7dXNlci5sb2dpbn19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiIXVzZXIuYWN0aXZhdGVkXFxcIj5EZWFjdGl2YXRlZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJ1c2VyLmFjdGl2YXRlZFxcXCI+QWN0aXZhdGVkPC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+Rmlyc3QgTmFtZTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmZpcnN0TmFtZX19PC9kZD4gPGR0PjxzcGFuPkxhc3QgTmFtZTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmxhc3ROYW1lfX08L2RkPiA8ZHQ+PHNwYW4+RW1haWw8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5lbWFpbH19PC9kZD4gPGR0PjxzcGFuPkNyZWF0ZWQgQnk8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5jcmVhdGVkQnl9fTwvZGQ+IDxkdD48c3Bhbj5DcmVhdGVkIERhdGU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5jcmVhdGVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJyB9fTwvZGQ+IDxkdD48c3Bhbj5MYXN0IE1vZGlmaWVkIEJ5PC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIubGFzdE1vZGlmaWVkQnl9fTwvZGQ+IDxkdD48c3Bhbj5MYXN0IE1vZGlmaWVkIERhdGU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYXN0TW9kaWZpZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L2RkPiA8ZHQ+PHNwYW4+UHJvZmlsZXM8L3NwYW4+PC9kdD4gPGRkPiA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiPiA8bGkgKm5nRm9yPVxcXCJsZXQgYXV0aG9yaXR5IG9mIHVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtaW5mb1xcXCI+e3thdXRob3JpdHl9fTwvc3Bhbj4gPC9saT4gPC91bD4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIHJvdXRlckxpbms9XFxcIi91c2VyLW1hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkKHBhcmFtc1snbG9naW4nXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWQgKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZmluZChsb2dpbikuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZSAobmdTdWJtaXQpPVxcXCJzYXZlKClcXFwiICNlZGl0Rm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcIm15VXNlckxhYmVsXFxcIj4gQ3JlYXRlIG9yIGVkaXQgYSBVc2VyPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImlkXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5pZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCI+TG9naW48L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibG9naW5cXFwiICNsb2dpbklucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5sb2dpblxcXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiBwYXR0ZXJuPVxcXCJeW18nLkBBLVphLXowLTktXSokXFxcIj4gPGRpdiAqbmdJZj1cXFwibG9naW5JbnB1dC5kaXJ0eSAmJiBsb2dpbklucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbklucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiICNmaXJzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZmlyc3ROYW1lXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIj4gPGRpdiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZGlydHkgJiYgZmlyc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbD5MYXN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiICNsYXN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5sYXN0TmFtZVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCI+IDxkaXYgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZGlydHkgJiYgbGFzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cXFwiMTAwXFxcIj4gPGRpdiAqbmdJZj1cXFwiZW1haWxJbnB1dC5kaXJ0eSAmJiBlbWFpbElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImFjdGl2YXRlZFxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgW2Rpc2FibGVkXT1cXFwidXNlci5pZCA9PT0gbnVsbFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJhY3RpdmF0ZWRcXFwiIG5hbWU9XFxcImFjdGl2YXRlZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYWN0aXZhdGVkXFxcIj4gPHNwYW4+QWN0aXZhdGVkPC9zcGFuPiA8L2xhYmVsPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbD5Qcm9maWxlczwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBuYW1lPVxcXCJhdXRob3JpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmF1dGhvcml0aWVzXFxcIj4gPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgYXV0aG9yaXRpZXNcXFwiIFt2YWx1ZV09XFxcImF1dGhvcml0eVxcXCI+e3thdXRob3JpdHl9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJlZGl0Rm9ybS5mb3JtLmludmFsaWQgfHwgaXNTYXZpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZmxvcHB5LW9cXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXJ9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7ICBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbJ1JPTEVfVVNFUicsICdST0xFX0FETUlOJ107XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHRoaXMudXNlcikuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXNwb25zZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXIubGFuZ0tleSA9ICdlbic7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzcG9uc2UpLCAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snIH0pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kYWxTZXJ2aWNlOiBVc2VyTW9kYWxTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlmICggcGFyYW1zWydsb2dpbiddICkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuPlVzZXJzPC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ3VzZXItbWFuYWdlbWVudC1uZXcnXSB9IH1dXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvc3Bhbj4gPHNwYW4+Q3JlYXRlIGEgbmV3IFVzZXI8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwidXNlcnNcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj4gPHRoIGpoaVNvcnRCeT1cXFwiaWRcXFwiPjxzcGFuPklEPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibG9naW5cXFwiPjxzcGFuPkxvZ2luPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImVtYWlsXFxcIj48c3Bhbj5FbWFpbDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPHRoPjxzcGFuPlByb2ZpbGVzPC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImNyZWF0ZWREYXRlXFxcIj48c3Bhbj5DcmVhdGVkIERhdGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibGFzdE1vZGlmaWVkQnlcXFwiPjxzcGFuPkxhc3QgTW9kaWZpZWQgQnk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibGFzdE1vZGlmaWVkRGF0ZVxcXCI+PHNwYW4+TGFzdCBNb2RpZmllZCBEYXRlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHkgKm5nSWY9XFxcInVzZXJzXFxcIj4gPHRyICpuZ0Zvcj1cXFwibGV0IHVzZXIgb2YgdXNlcnM7IHRyYWNrQnk6IHRyYWNrSWRlbnRpdHlcXFwiPiA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3VzZXItbWFuYWdlbWVudCcsIHVzZXIubG9naW5dXFxcIj57e3VzZXIuaWR9fTwvYT48L3RkPiA8dGQ+e3t1c2VyLmxvZ2lufX08L3RkPiA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPiA8dGQ+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1kYW5nZXIgaGFuZFxcXCIgKGNsaWNrKT1cXFwic2V0QWN0aXZlKHVzZXIsIHRydWUpXFxcIiAqbmdJZj1cXFwiIXVzZXIuYWN0aXZhdGVkXFxcIj5EZWFjdGl2YXRlZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXN1Y2Nlc3MgaGFuZFxcXCIgKGNsaWNrKT1cXFwic2V0QWN0aXZlKHVzZXIsIGZhbHNlKVxcXCIgKm5nSWY9XFxcInVzZXIuYWN0aXZhdGVkXFxcIj5BY3RpdmF0ZWQ8L3NwYW4+IDwvdGQ+IDx0ZD4gPGRpdiAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgdXNlci5hdXRob3JpdGllc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJ0YWcgdGFnLWluZm9cXFwiPnt7IGF1dGhvcml0eSB9fTwvc3Bhbj4gPC9kaXY+IDwvdGQ+IDx0ZD57e3VzZXIuY3JlYXRlZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbSd9fTwvdGQ+IDx0ZD57e3VzZXIubGFzdE1vZGlmaWVkQnl9fTwvdGQ+IDx0ZD57e3VzZXIubGFzdE1vZGlmaWVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4gPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGZsZXgtYnRuLWdyb3VwLWNvbnRhaW5lclxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLi4vdXNlci1tYW5hZ2VtZW50JywgdXNlci5sb2dpbl1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiPlZpZXc8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICd1c2VyLW1hbmFnZW1lbnQvJysgdXNlci5sb2dpbiArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIj5FZGl0PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAndXNlci1tYW5hZ2VtZW50LycrIHVzZXIubG9naW4gKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBbZGlzYWJsZWRdPVxcXCJjdXJyZW50QWNjb3VudC5sb2dpbj09dXNlci5sb2dpblxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInVzZXJzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIFBhZ2luYXRpb25VdGlsLCBQYXJzZUxpbmtzLCBBbGVydFNlcnZpY2V9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UsIFByaW5jaXBhbCwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgdXNlcnM6IFVzZXJbXTtcbiAgICBlcnJvcjogYW55O1xuICAgIHN1Y2Nlc3M6IGFueTtcbiAgICByb3V0ZURhdGE6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10uYXNjZW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wcmVkaWNhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZUluVXNlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVEYXRhLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDaGFuZ2VJblVzZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ3VzZXJMaXN0TW9kaWZpY2F0aW9uJywgcmVzcG9uc2UgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZSAodXNlciwgaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgdXNlci5hY3RpdmF0ZWQgPSBpc0FjdGl2YXRlZDtcblxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh1c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkQWxsICgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdHJhY2tJZGVudGl0eSAoaW5kZXgsIGl0ZW06IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG4gICAgc29ydCAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXTtcbiAgICAgICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxvYWRQYWdlIChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91c2VyLW1hbmFnZW1lbnQnXSwgeyBxdWVyeVBhcmFtczpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIHRoaXMudXNlcnMgPSBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5lcnJvciwgZXJyb3IubWVzc2FnZSwgbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc29sdmUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlcywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uVXRpbCB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1nbXRDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlck1nbXREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXNvbHZlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oYWNjb3VudCA9PiB0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkoWydST0xFX0FETUlOJ10pKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMgaW1wbGVtZW50cyBSZXNvbHZlPGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5hdGlvblV0aWw6IFBhZ2luYXRpb25VdGlsKSB7fVxuXG4gIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgICBsZXQgcGFnZSA9IHJvdXRlLnF1ZXJ5UGFyYW1zWydwYWdlJ10gPyByb3V0ZS5xdWVyeVBhcmFtc1sncGFnZSddIDogJzEnO1xuICAgICAgbGV0IHNvcnQgPSByb3V0ZS5xdWVyeVBhcmFtc1snc29ydCddID8gcm91dGUucXVlcnlQYXJhbXNbJ3NvcnQnXSA6ICdpZCxhc2MnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb25VdGlsLnBhcnNlUGFnZShwYWdlKSxcbiAgICAgICAgICBwcmVkaWNhdGU6IHRoaXMucGFnaW5hdGlvblV0aWwucGFyc2VQcmVkaWNhdGUoc29ydCksXG4gICAgICAgICAgYXNjZW5kaW5nOiB0aGlzLnBhZ2luYXRpb25VdGlsLnBhcnNlQXNjZW5kaW5nKHNvcnQpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlck1nbXRSb3V0ZTogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudCcsXG4gICAgY29tcG9uZW50OiBVc2VyTWdtdENvbXBvbmVudCxcbiAgICByZXNvbHZlOiB7XG4gICAgICAncGFnaW5nUGFyYW1zJzogVXNlclJlc29sdmVQYWdpbmdQYXJhbXNcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHBhZ2VUaXRsZTogJ1VzZXJzJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQvOmxvZ2luJyxcbiAgICBjb21wb25lbnQ6IFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgIHBhZ2VUaXRsZTogJ1VzZXJzJ1xuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJEaWFsb2dSb3V0ZTogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC1uZXcnLFxuICAgIGNvbXBvbmVudDogVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBvdXRsZXQ6ICdwb3B1cCdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQvOmxvZ2luL2VkaXQnLFxuICAgIGNvbXBvbmVudDogVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBvdXRsZXQ6ICdwb3B1cCdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQvOmxvZ2luL2RlbGV0ZScsXG4gICAgY29tcG9uZW50OiBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIG91dGxldDogJ3BvcHVwJ1xuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyTW9kYWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGlzT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICAgICkge31cblxuICAgIG9wZW4gKGNvbXBvbmVudDogQ29tcG9uZW50LCBsb2dpbj86IHN0cmluZyk6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChsb2dpbikge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5maW5kKGxvZ2luKS5zdWJzY3JpYmUodXNlciA9PiB0aGlzLnVzZXJNb2RhbFJlZihjb21wb25lbnQsIHVzZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJNb2RhbFJlZihjb21wb25lbnQsIG5ldyBVc2VyKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlck1vZGFsUmVmKGNvbXBvbmVudDogQ29tcG9uZW50LCB1c2VyOiBVc2VyKTogTmdiTW9kYWxSZWYge1xuICAgICAgICBsZXQgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbXBvbmVudCwgeyBzaXplOiAnbGcnLCBiYWNrZHJvcDogJ3N0YXRpYyd9KTtcbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudXNlciA9IHVzZXI7XG4gICAgICAgIG1vZGFsUmVmLnJlc3VsdC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kYWxSZWY7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlLnRzIiwiLy8gRE8gTk9UIEVESVQgVEhJUyBGSUxFLCBFRElUIFRIRSBXRUJQQUNLIENPTU1PTiBDT05GSUcgSU5TVEVBRCwgV0hJQ0ggV0lMTCBNT0RJRlkgVEhJUyBGSUxFXG5sZXQgX1ZFUlNJT04gPSAnMC4wLjAnOyAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgd2VicGFja1xubGV0IF9ERUJVR19JTkZPX0VOQUJMRUQgPSB0cnVlOyAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgd2VicGFja1xuX1ZFUlNJT04gPSBcIjAuMC4wXCI7XG5fREVCVUdfSU5GT19FTkFCTEVEID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gX1ZFUlNJT047XG5leHBvcnQgY29uc3QgREVCVUdfSU5GT19FTkFCTEVEID0gX0RFQlVHX0lORk9fRU5BQkxFRDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP2lkPXBneGJ6cHBvaXNydXFtYmF3N2tpNmJ0OSEuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgUHJvZENvbmZpZyB9IGZyb20gJy4vYmxvY2tzL2NvbmZpZy9wcm9kLmNvbmZpZyc7XG5pbXBvcnQgeyBCbG9nQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxuUHJvZENvbmZpZygpO1xuXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQmxvZ0FwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tYWluLnRzIiwiaW1wb3J0ICcuL3ZlbmRvci50cyc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZzJXZWJzdG9yYWdlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBCbG9nU2hhcmVkTW9kdWxlLCBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgQmxvZ0hvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgQmxvZ0FkbWluTW9kdWxlIH0gZnJvbSAnLi9hZG1pbi9hZG1pbi5tb2R1bGUnO1xuaW1wb3J0IHsgQmxvZ0FjY291bnRNb2R1bGUgfSBmcm9tICcuL2FjY291bnQvYWNjb3VudC5tb2R1bGUnO1xuaW1wb3J0IHsgQmxvZ0VudGl0eU1vZHVsZSB9IGZyb20gJy4vZW50aXRpZXMvZW50aXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IExheW91dFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xheW91dHMnO1xuaW1wb3J0IHsgY3VzdG9tSHR0cFByb3ZpZGVyIH0gZnJvbSAnLi9ibG9ja3MvaW50ZXJjZXB0b3IvaHR0cC5wcm92aWRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7XG4gICAgSmhpTWFpbkNvbXBvbmVudCxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgIFBhZ2VSaWJib25Db21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnRcbn0gZnJvbSAnLi9sYXlvdXRzJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICAgICAgTmcyV2Vic3RvcmFnZS5mb3JSb290KHsgcHJlZml4OiAnamhpJywgc2VwYXJhdG9yOiAnLSd9KSxcbiAgICAgICAgQmxvZ1NoYXJlZE1vZHVsZSxcbiAgICAgICAgQmxvZ0hvbWVNb2R1bGUsXG4gICAgICAgIEJsb2dBZG1pbk1vZHVsZSxcbiAgICAgICAgQmxvZ0FjY291bnRNb2R1bGUsXG4gICAgICAgIEJsb2dFbnRpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBKaGlNYWluQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIEVycm9yQ29tcG9uZW50LFxuICAgICAgICBQYWdlUmliYm9uQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQcm9maWxlU2VydmljZSxcbiAgICAgICAgY3VzdG9tSHR0cFByb3ZpZGVyKCksXG4gICAgICAgIFBhZ2luYXRpb25Db25maWcsXG4gICAgICAgIFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogWyBKaGlNYWluQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ0FwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuXG5leHBvcnQgY29uc3QgbmF2YmFyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTmF2YmFyQ29tcG9uZW50LFxuICAgIG91dGxldDogJ25hdmJhcidcbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLnJvdXRlLnRzIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERFQlVHX0lORk9fRU5BQkxFRCB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZENvbmZpZygpIHtcbiAgICAvLyBkaXNhYmxlIGRlYnVnIGRhdGEgb24gcHJvZCBwcm9maWxlIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICBpZiAoIURFQlVHX0lORk9fRU5BQkxFRCkge1xuICAgICAgICBlbmFibGVQcm9kTW9kZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy9wcm9kLmNvbmZpZy50cyIsImltcG9ydCB7IElURU1TX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlBhZ2luYXRpb25Db25maWd9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBOZ2JQYWdpbmF0aW9uQ29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5ib3VuZGFyeUxpbmtzID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLm1heFNpemUgPSA1O1xuICAgICAgICBjb25maWcucGFnZVNpemUgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgY29uZmlnLnNpemUgPSAnc20nO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC9wcmluY2lwYWwuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmVyUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC9hdXRoLWp3dC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IgZXh0ZW5kcyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSZXNwb25zZT4+IG9ic2VydmFibGUuY2F0Y2goKGVycm9yLCBzb3VyY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIGxldCBwcmluY2lwYWw6IFByaW5jaXBhbCA9IHNlbGYuaW5qZWN0b3IuZ2V0KFByaW5jaXBhbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJpbmNpcGFsLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdXRoOiBBdXRoU2VydmljZSA9IHNlbGYuaW5qZWN0b3IuZ2V0KEF1dGhTZXJ2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYXV0aC5hdXRob3JpemUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMubG9jYWxTdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJykgfHwgdGhpcy5zZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgICAgICBpZiAoISF0b2tlbikge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7IC8vIGJ5IHBhc3NcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IgZXh0ZW5kcyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmICghKGVycm9yLnN0YXR1cyA9PT0gNDAxICYmIChlcnJvci50ZXh0KCkgPT09ICcnIHx8XG4gICAgICAgICAgICAgICAgKGVycm9yLmpzb24oKS5wYXRoICYmIGVycm9yLmpzb24oKS5wYXRoLmluZGV4T2YoJy9hcGkvYWNjb3VudCcpID09PSAwICkpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCgge25hbWU6ICdibG9nQXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IGVycm9yfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2Vycm9yaGFuZGxlci5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBJbnRlcmNlcHRhYmxlSHR0cCB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0YWJsZUZhY3RvcnkoXG4gICAgYmFja2VuZDogWEhSQmFja2VuZCxcbiAgICBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMsXG4gICAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4pIHtcbiAgICByZXR1cm4gbmV3IEludGVyY2VwdGFibGVIdHRwKFxuICAgICAgICBiYWNrZW5kLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IEF1dGhJbnRlcmNlcHRvcihsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKSxcbiAgICAgICAgICAgIG5ldyBBdXRoRXhwaXJlZEludGVyY2VwdG9yKGluamVjdG9yKSxcbiAgICAgICAgICAgIC8vIE90aGVyIGludGVyY2VwdG9ycyBjYW4gYmUgYWRkZWQgaGVyZVxuICAgICAgICAgICAgbmV3IEVycm9ySGFuZGxlckludGVyY2VwdG9yKGV2ZW50TWFuYWdlciksXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IoKVxuICAgICAgICBdXG4gICAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21IdHRwUHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogSHR0cCxcbiAgICAgICAgdXNlRmFjdG9yeTogaW50ZXJjZXB0YWJsZUZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIFhIUkJhY2tlbmQsXG4gICAgICAgICAgICBSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICBJbmplY3RvcixcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlclxuICAgICAgICBdXG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9odHRwLnByb3ZpZGVyLnRzIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFJlc3BvbnNlPj4gb2JzZXJ2YWJsZS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGxldCBhcnIgPSBBcnJheS5mcm9tKGVycm9yLmhlYWRlcnMuX2hlYWRlcnMpO1xuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1hbGVydCcpIHx8IGFycltpXVswXS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaChhcnJbaV1bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlcnMuc29ydCgpO1xuICAgICAgICAgICAgbGV0IGFsZXJ0S2V5ID0gaGVhZGVycy5sZW5ndGggPj0gMSA/IGVycm9yLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMF0pIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWxlcnRLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoYWxlcnRLZXksIHsgcGFyYW06IHJlc3BvbnNlLmhlYWRlcnMoaGVhZGVyc1sxXSl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyogamhpcHN0ZXItbmVlZGxlLWFkZC1lbnRpdHktbW9kdWxlLWltcG9ydCAtIEpIaXBzdGVyIHdpbGwgYWRkIGVudGl0eSBtb2R1bGVzIGltcG9ydHMgaGVyZSAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLyogamhpcHN0ZXItbmVlZGxlLWFkZC1lbnRpdHktbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgZW50aXR5IG1vZHVsZXMgaGVyZSAqL1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dFbnRpdHlNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJoaXBzdGVyIGltZy1mbHVpZCBpbWctcm91bmRlZFxcXCI+PC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPiA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCI+V2VsY29tZSwgSmF2YSBIaXBzdGVyITwvaDE+IDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5UaGlzIGlzIHlvdXIgaG9tZXBhZ2U8L3A+IDxkaXYgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPHNwYW4gKm5nSWY9XFxcImFjY291bnRcXFwiPiBZb3UgYXJlIGxvZ2dlZCBpbiBhcyB1c2VyIFxcXCJ7e2FjY291bnQubG9naW59fVxcXCIuIDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPHNwYW4+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCI+c2lnbiBpbjwvYT48c3Bhbj4sIHlvdSBjYW4gdHJ5IHRoZSBkZWZhdWx0IGFjY291bnRzOjxici8+LSBBZG1pbmlzdHJhdG9yIChsb2dpbj1cXFwiYWRtaW5cXFwiIGFuZCBwYXNzd29yZD1cXFwiYWRtaW5cXFwiKSA8YnIvPi0gVXNlciAobG9naW49XFxcInVzZXJcXFwiIGFuZCBwYXNzd29yZD1cXFwidXNlclxcXCIpLjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPHNwYW4+WW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/PC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiPlJlZ2lzdGVyIGEgbmV3IGFjY291bnQ8L2E+IDwvZGl2PiA8L2Rpdj4gPHA+IElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbiBvbiBKSGlwc3RlcjogPC9wPiA8dWw+IDxsaT48YSBocmVmPVxcXCJodHRwOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkpIaXBzdGVyIGhvbWVwYWdlPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vdGFncy9qaGlwc3Rlci9pbmZvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+SkhpcHN0ZXIgb24gU3RhY2sgT3ZlcmZsb3c8L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXIvaXNzdWVzP3N0YXRlPW9wZW5cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5KSGlwc3RlciBidWcgdHJhY2tlcjwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXR0ZXIuaW0vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+SkhpcHN0ZXIgcHVibGljIGNoYXQgcm9vbTwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qYXZhX2hpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5mb2xsb3cgQGphdmFfaGlwc3RlciBvbiBUd2l0dGVyPC9hPjwvbGk+IDwvdWw+IDxwPiA8c3Bhbj5JZiB5b3UgbGlrZSBKSGlwc3RlciwgZG9uJ3QgZm9yZ2V0IHRvIGdpdmUgdXMgYSBzdGFyIG9uPC9zcGFuPiA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+R2l0aHViPC9hPiEgPC9wPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFjY291bnQsIExvZ2luTW9kYWxTZXJ2aWNlLCBQcmluY2lwYWwgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdob21lLmNzcydcbiAgICBdXG5cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWNjb3VudDogQWNjb3VudDtcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBCbG9nU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuaW1wb3J0IHsgSE9NRV9ST1VURSwgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQmxvZ1NoYXJlZE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoWyBIT01FX1JPVVRFIF0sIHsgdXNlSGFzaDogdHJ1ZSB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dIb21lTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vJztcblxuZXhwb3J0IGNvbnN0IEhPTUVfUk9VVEU6IFJvdXRlID0ge1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ1dlbGNvbWUsIEphdmEgSGlwc3RlciEnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0ZS50cyIsImV4cG9ydCAqIGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9ob21lLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vaG9tZS5tb2R1bGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPHNwYW4gY2xhc3M9XFxcImhpcHN0ZXIgaW1nLWZsdWlkIGltZy1yb3VuZGVkXFxcIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+IDxoMT5FcnJvciBQYWdlITwvaDE+IDxkaXYgW2hpZGRlbl09XFxcIiFlcnJvck1lc3NhZ2VcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3JNZXNzYWdlfX0gPC9kaXY+IDwvZGl2PiA8ZGl2IFtoaWRkZW5dPVxcXCIhZXJyb3I0MDNcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPllvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSBwYWdlLiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvcjQwMzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBlcnJvclJvdXRlOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnZXJyb3InLFxuICAgIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgcGFnZVRpdGxlOiAnRXJyb3IgcGFnZSEnXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhY2Nlc3NkZW5pZWQnLFxuICAgIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgcGFnZVRpdGxlOiAnRXJyb3IgcGFnZSEnXG4gICAgfSxcbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPiA8cD5UaGlzIGlzIHlvdXIgZm9vdGVyPC9wPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3IvZXJyb3Iucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xheW91dC1yb3V0aW5nLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvaW5kZXgudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbmF2YmFyUm91dGUgfSBmcm9tICcuLi9hcHAucm91dGUnO1xuaW1wb3J0IHsgZXJyb3JSb3V0ZSB9IGZyb20gJy4vJztcblxubGV0IExBWU9VVF9ST1VURVMgPSBbXG4gICAgbmF2YmFyUm91dGUsXG4gICAgLi4uZXJyb3JSb3V0ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KExBWU9VVF9ST1VURVMsIHsgdXNlSGFzaDogdHJ1ZSB9KVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Um91dGluZ01vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2xheW91dC1yb3V0aW5nLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8amhpLXBhZ2UtcmliYm9uPjwvamhpLXBhZ2UtcmliYm9uPiA8ZGl2PiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1haW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgJHN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgICkge31cblxuICAgIHByaXZhdGUgZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAocm91dGVTbmFwc2hvdC5kYXRhICYmIHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10pID8gcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSA6ICdibG9nQXBwJztcbiAgICAgICAgaWYgKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHx8IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGhpcy5nZXRQYWdlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3Qucm9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLXRvZ2dsZWFibGUtbWQgamgtbmF2YmFyXFxcIj4gPGRpdiBjbGFzcz1cXFwiamgtbG9nby1jb250YWluZXIgZmxvYXQtbGVmdFxcXCI+IDxhIGNsYXNzPVxcXCJqaC1uYXZiYXItdG9nZ2xlciBoaWRkZW4tbGctdXAgZmxvYXQtcmlnaHRcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIG5hdmlnYXRpb25cXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWJhcnNcXFwiPjwvaT4gPC9hPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIGxvZ28gZmxvYXQtbGVmdFxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJsb2dvLWltZ1xcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5CbG9nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXZlcnNpb25cXFwiPnt7dmVyc2lvbn19PC9zcGFuPiA8L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBbbmdiQ29sbGFwc2VdPVxcXCJpc05hdmJhckNvbGxhcHNlZFxcXCIgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbWwtYXV0b1xcXCI+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5Ib21lPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImVudGl0eS1tZW51XFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj4gRW50aXRpZXMgPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8L3VsPiA8L2xpPiA8bGkgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJhZG1pbi1tZW51XFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkFkbWluaXN0cmF0aW9uPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJ1c2VyLW1hbmFnZW1lbnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5Vc2VyIG1hbmFnZW1lbnQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLW1ldHJpY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS10YWNob21ldGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5NZXRyaWNzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1oZWFsdGhcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1oZWFydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+SGVhbHRoPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1jb25maWd1cmF0aW9uXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtbGlzdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+Q29uZmlndXJhdGlvbjwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhdWRpdHNcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1iZWxsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5BdWRpdHM8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwibG9nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXRhc2tzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5Mb2dzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdJZj1cXFwic3dhZ2dlckVuYWJsZWRcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiZG9jc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJvb2tcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPkFQSTwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nSWY9XFxcIiFpblByb2R1Y3Rpb25cXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgaHJlZj1cXFwiL2gyLWNvbnNvbGVcXFwiIHRhcmdldD1cXFwiX3RhYlxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1oZGQtb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+RGF0YWJhc2U8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImFjY291bnQtbWVudVxcXCI+IDxzcGFuICpuZ0lmPVxcXCIhZ2V0SW1hZ2VVcmwoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj4gQWNjb3VudCA8L3NwYW4+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPiA8L3NwYW4+IDxzcGFuICpuZ0lmPVxcXCJnZXRJbWFnZVVybCgpXFxcIj4gPGltZyBbc3JjXT1cXFwiZ2V0SW1hZ2VVcmwoKVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtaW1hZ2UgaW1nLWNpcmNsZVxcXCIgYWx0PVxcXCJBdmF0YXJcXFwiPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwic2V0dGluZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS13cmVuY2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPlNldHRpbmdzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInBhc3N3b3JkXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtY2xvY2stb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+UGFzc3dvcmQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIGlkPVxcXCJsb2dvdXRcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1vdXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuPlNpZ24gb3V0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBpZD1cXFwibG9naW5cXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1pblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4+U2lnbiBpbjwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1yZWdpc3RlcmVkXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3Bhbj5SZWdpc3Rlcjwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8L3VsPiA8L2Rpdj4gPC9uYXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlcy9wcm9maWxlLnNlcnZpY2UnOyAvLyBGSVhNRSBiYXJyZWwgZG9lc24ndCB3b3JrIGhlcmVcbmltcG9ydCB7IFByaW5jaXBhbCwgTG9naW5Nb2RhbFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IFZFUlNJT04sIERFQlVHX0lORk9fRU5BQkxFRCB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnbmF2YmFyLmNzcydcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgaXNOYXZiYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gICAgbGFuZ3VhZ2VzOiBhbnlbXTtcbiAgICBzd2FnZ2VyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gICAgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBERUJVR19JTkZPX0VOQUJMRUQgPyAndicgKyBWRVJTSU9OIDogJyc7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZUluZm8oKS5zdWJzY3JpYmUocHJvZmlsZUluZm8gPT4ge1xuICAgICAgICAgICAgdGhpcy5pblByb2R1Y3Rpb24gPSBwcm9maWxlSW5mby5pblByb2R1Y3Rpb247XG4gICAgICAgICAgICB0aGlzLnN3YWdnZXJFbmFibGVkID0gcHJvZmlsZUluZm8uc3dhZ2dlckVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgY29sbGFwc2VOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlTmF2YmFyKCk7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICB9XG5cbiAgICB0b2dnbGVOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPyB0aGlzLnByaW5jaXBhbC5nZXRJbWFnZVVybCgpIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2YmFyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYWdlLXJpYmJvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicmliYm9uXCIgKm5nSWY9XCJyaWJib25FbnZcIj48YSBocmVmPVwiXCI+e3tyaWJib25FbnZ9fTwvYT48L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAncGFnZS1yaWJib24uY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9maWxlSW5mbzogUHJvZmlsZUluZm87XG4gICAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKHByb2ZpbGVJbmZvID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZm8gPSBwcm9maWxlSW5mbztcbiAgICAgICAgICAgIHRoaXMucmliYm9uRW52ID0gcHJvZmlsZUluZm8ucmliYm9uRW52O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BhZ2UtcmliYm9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFByb2ZpbGVJbmZvIHtcbiAgICBhY3RpdmVQcm9maWxlczogc3RyaW5nW107XG4gICAgcmliYm9uRW52OiBzdHJpbmc7XG4gICAgaW5Qcm9kdWN0aW9uOiBib29sZWFuO1xuICAgIHN3YWdnZXJFbmFibGVkOiBib29sZWFuO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IFByb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBwcm9maWxlSW5mb1VybCA9ICdhcGkvcHJvZmlsZS1pbmZvJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXRQcm9maWxlSW5mbygpOiBPYnNlcnZhYmxlPFByb2ZpbGVJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucHJvZmlsZUluZm9VcmwpXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGxldCBwaSA9IG5ldyBQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgICAgIHBpLmFjdGl2ZVByb2ZpbGVzID0gZGF0YS5hY3RpdmVQcm9maWxlcztcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSBkYXRhLnJpYmJvbkVudjtcbiAgICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3Byb2QnKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcGkuc3dhZ2dlckVuYWJsZWQgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3N3YWdnZXInKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgIFtuZ0NsYXNzXT1cIntcXCdhbGVydC5wb3NpdGlvblxcJzogdHJ1ZSwgXFwndG9hc3RcXCc6IGFsZXJ0LnRvYXN0fVwiPlxuICAgICAgICAgICAgICAgIDxuZ2ItYWxlcnQgdHlwZT1cInt7YWxlcnQudHlwZX19XCIgY2xvc2U9XCJhbGVydC5jbG9zZShhbGVydHMpXCI+PHByZSBbaW5uZXJIVE1MXT1cImFsZXJ0Lm1zZ1wiPjwvcHJlPjwvbmdiLWFsZXJ0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgSmhpQWxlcnRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBhbGVydHM6IGFueVtdO1xuICAgIGNsZWFuSHR0cEVycm9yTGlzdGVuZXI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcblxuICAgICAgICB0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIgPSBldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdibG9nQXBwLmh0dHBFcnJvcicsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgaHR0cFJlc3BvbnNlID0gcmVzcG9uc2UuY29udGVudDtcbiAgICAgICAgICAgIHN3aXRjaCAoaHR0cFJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3Rpb24gcmVmdXNlZCwgc2VydmVyIG5vdCByZWFjaGFibGVcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydCgnU2VydmVyIG5vdCByZWFjaGFibGUnLCAnZXJyb3Iuc2VydmVyLm5vdC5yZWFjaGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IEFycmF5LmZyb20oaHR0cFJlc3BvbnNlLmhlYWRlcnMuX2hlYWRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtZXJyb3InKSB8fCBhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1wYXJhbXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaChhcnJbaV1bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMuc29ydCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JIZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5S2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JIZWFkZXIgPSBodHRwUmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlLZXkgPSBodHRwUmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyc1sxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5TmFtZSA9IGVudGl0eUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChlcnJvckhlYWRlciwgZXJyb3JIZWFkZXIsIHtlbnRpdHlOYW1lOiBlbnRpdHlOYW1lfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZpZWxkRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkRXJyb3IgPSBmaWVsZEVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0ICdzb21ldGhpbmdbMTRdLm90aGVyWzRdLmlkJyB0byAnc29tZXRoaW5nW10ub3RoZXJbXS5pZCcgc28gdHJhbnNsYXRpb25zIGNhbiBiZSB3cml0dGVuIHRvIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnZlcnRlZEZpZWxkID0gZmllbGRFcnJvci5maWVsZC5yZXBsYWNlKC9cXFtcXGQqXFxdL2csICdbXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZE5hbWUgPSBjb252ZXJ0ZWRGaWVsZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlZEZpZWxkLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpZWxkICcgKyBmaWVsZE5hbWUgKyAnIGNhbm5vdCBiZSBlbXB0eScsICdlcnJvci4nICsgZmllbGRFcnJvci5tZXNzYWdlLCB7ZmllbGROYW1lOiBmaWVsZE5hbWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodHRwUmVzcG9uc2UudGV4dCgpICE9PSAnJyAmJiBodHRwUmVzcG9uc2UuanNvbigpICYmIGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSwgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlLCBodHRwUmVzcG9uc2UuanNvbigpLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KCdOb3QgZm91bmQnLCAnZXJyb3IudXJsLm5vdC5mb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChodHRwUmVzcG9uc2UudGV4dCgpICE9PSAnJyAmJiBodHRwUmVzcG9uc2UuanNvbigpICYmIGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoSlNPTi5zdHJpbmdpZnkoaHR0cFJlc3BvbnNlKSk7IC8vIEZpeG1lIGZpbmQgYSB3YXkgdG8gcGFyc2UgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFcnJvckFsZXJ0IChtZXNzYWdlLCBrZXk/LCBkYXRhPykge1xuICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuYWRkQWxlcnQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbXNnOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICB0b2FzdDogdGhpcy5hbGVydFNlcnZpY2UuaXNUb2FzdCgpLFxuICAgICAgICAgICAgICAgICAgICBzY29wZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgW25nQ2xhc3NdPVwie1xcJ2FsZXJ0LnBvc2l0aW9uXFwnOiB0cnVlLCBcXCd0b2FzdFxcJzogYWxlcnQudG9hc3R9XCI+XG4gICAgICAgICAgICAgICAgPG5nYi1hbGVydCBbdHlwZV09XCJhbGVydC50eXBlXCIgKGNsb3NlKT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj48cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+PC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBhbGVydHM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0U2VydmljZS5nZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2VydmljZSAge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9hY2NvdW50JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzYXZlKGFjY291bnQ6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudCcsIGFjY291bnQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZlclByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgJHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBnZXRUb2tlbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgIH1cblxuICAgIGxvZ2luIChjcmVkZW50aWFscyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiBjcmVkZW50aWFscy5yZW1lbWJlck1lXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2F1dGhlbnRpY2F0ZScsIGRhdGEpLm1hcChhdXRoZW50aWNhdGVTdWNjZXNzLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVN1Y2Nlc3MgKHJlc3ApIHtcbiAgICAgICAgICAgIGxldCBiZWFyZXJUb2tlbiA9IHJlc3AuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKTtcbiAgICAgICAgICAgIGlmIChiZWFyZXJUb2tlbiAmJiBiZWFyZXJUb2tlbi5zbGljZSgwLCA3KSA9PT0gJ0JlYXJlciAnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGp3dCA9IGJlYXJlclRva2VuLnNsaWNlKDcsIGJlYXJlclRva2VuLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZUF1dGhlbnRpY2F0aW9uVG9rZW4oand0LCBjcmVkZW50aWFscy5yZW1lbWJlck1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gand0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIGlmIChqd3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGp3dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2F1dGgtand0LXNlcnZpY2UgUHJvbWlzZSByZWplY3QnKTsgLy8gUHV0IGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UgaGVyZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSkge1xuICAgICAgICBpZiAocmVtZW1iZXJNZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5jbGVhcignYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgICAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UuY2xlYXIoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxuICAgIGF1dGhvcml6ZSAoZm9yY2UpIHtcbiAgICAgICAgbGV0IGF1dGhSZXR1cm4gPSB0aGlzLnByaW5jaXBhbC5pZGVudGl0eShmb3JjZSkudGhlbihhdXRoVGhlbi5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gYXV0aFJldHVybjtcblxuICAgICAgICBmdW5jdGlvbiBhdXRoVGhlbiAoKSB7XG4gICAgICAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgICAgICBsZXQgdG9TdGF0ZUluZm8gPSB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2UuZ2V0RGVzdGluYXRpb25TdGF0ZSgpLmRlc3RpbmF0aW9uO1xuXG4gICAgICAgICAgICAvLyBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuJ3QgYWNjZXNzIHRvIGxvZ2luIGFuZCByZWdpc3RlciBwYWdlc1xuICAgICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCAmJiAodG9TdGF0ZUluZm8ubmFtZSA9PT0gJ3JlZ2lzdGVyJyB8fCB0b1N0YXRlSW5mby5uYW1lID09PSAnc29jaWFsLWF1dGgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVjb3ZlciBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZSBhZnRlciBleHRlcm5hbCBsb2dpbiByZWRpcmVjdCAoZS5nLiBvYXV0aDIpXG4gICAgICAgICAgICBsZXQgZnJvbVN0YXRlSW5mbyA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXREZXN0aW5hdGlvblN0YXRlKCkuZnJvbTtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFByZXZpb3VzU3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQgJiYgIWZyb21TdGF0ZUluZm8ubmFtZSAmJiBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnJlc2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwcmV2aW91c1N0YXRlLm5hbWVdLCB7IHF1ZXJ5UGFyYW1zOiAgcHJldmlvdXNTdGF0ZS5wYXJhbXMgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvU3RhdGVJbmZvLmRhdGEuYXV0aG9yaXRpZXMgJiYgdG9TdGF0ZUluZm8uZGF0YS5hdXRob3JpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eSh0b1N0YXRlSW5mby5kYXRhLmF1dGhvcml0aWVzKS50aGVuKGhhc0FueUF1dGhvcml0eSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzQW55QXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlciBpcyBzaWduZWQgaW4gYnV0IG5vdCBhdXRob3JpemVkIGZvciBkZXNpcmVkIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQuIFNob3cgdGhlIHN0YXRlIHRoZXkgd2FudGVkIGJlZm9yZSB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIHRoZW0gdG8gdGhlIGxvZ2luIHNlcnZpY2UsIHNvIHlvdSBjYW4gcmV0dXJuIHRoZW0gd2hlbiB5b3UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b1N0YXRlUGFyYW1zSW5mbyA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXREZXN0aW5hdGlvblN0YXRlKCkucGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5zdG9yZVByZXZpb3VzU3RhdGUodG9TdGF0ZUluZm8ubmFtZSwgdG9TdGF0ZVBhcmFtc0luZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdywgc2VuZCB0aGVtIHRvIHRoZSBzaWduaW4gc3RhdGUgc28gdGhleSBjYW4gbG9nIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYXNBbnlBdXRob3JpdHk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENTUkZTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge31cblxuICAgIGdldENTUkYobmFtZT86IHN0cmluZykge1xuICAgICAgICBuYW1lID0gYCR7bmFtZSA/IG5hbWUgOiAnWFNSRi1UT0tFTid9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU2VydmljZS5nZXQobmFtZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9jc3JmLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi9wcmluY2lwYWwuc2VydmljZSc7XG5cbi8qKlxuICogQHdoYXRJdERvZXMgQ29uZGl0aW9uYWxseSBpbmNsdWRlcyBhbiBIVE1MIGVsZW1lbnQgaWYgY3VycmVudCB1c2VyIGhhcyBhbnlcbiAqIG9mIHRoZSBhdXRob3JpdGllcyBwYXNzZWQgYXMgdGhlIGBleHByZXNzaW9uYC5cbiAqXG4gKiBAaG93VG9Vc2VcbiAqIGBgYFxuICogICAgIDxzb21lLWVsZW1lbnQgKmpoaUhhc0FueUF1dGhvcml0eT1cIidST0xFX0FETUlOJ1wiPi4uLjwvc29tZS1lbGVtZW50PlxuICpcbiAqICAgICA8c29tZS1lbGVtZW50ICpqaGlIYXNBbnlBdXRob3JpdHk9XCJbJ1JPTEVfQURNSU4nLCAnUk9MRV9VU0VSJ11cIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlIYXNBbnlBdXRob3JpdHldJ1xufSlcbmV4cG9ydCBjbGFzcyBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUge1xuXG4gICAgcHJpdmF0ZSBhdXRob3JpdGllczogc3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqaGlIYXNBbnlBdXRob3JpdHkodmFsdWU6IHN0cmluZ3xzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IFsgPHN0cmluZz4gdmFsdWUgXSA6IDxzdHJpbmdbXT4gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgICAgICAvLyBHZXQgbm90aWZpZWQgZWFjaCB0aW1lIGF1dGhlbnRpY2F0aW9uIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKS5zdWJzY3JpYmUoaWRlbnRpdHkgPT4gdGhpcy51cGRhdGVWaWV3KCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaGFzQW55QXV0aG9yaXR5KHRoaXMuYXV0aG9yaXRpZXMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hY2NvdW50LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIHtcbiAgICBwcml2YXRlIHVzZXJJZGVudGl0eTogYW55O1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TdGF0ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjY291bnQ6IEFjY291bnRTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgYXV0aGVudGljYXRlIChpZGVudGl0eSkge1xuICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGlkZW50aXR5O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBpZGVudGl0eSAhPT0gbnVsbDtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgIH1cblxuICAgIGhhc0FueUF1dGhvcml0eSAoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkIHx8ICF0aGlzLnVzZXJJZGVudGl0eSB8fCAhdGhpcy51c2VySWRlbnRpdHkuYXV0aG9yaXRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdXRob3JpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzLmluZGV4T2YoYXV0aG9yaXRpZXNbaV0pICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBoYXNBdXRob3JpdHkgKGF1dGhvcml0eTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpdHkoKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaWQuYXV0aG9yaXRpZXMgJiYgaWQuYXV0aG9yaXRpZXMuaW5kZXhPZihhdXRob3JpdHkpICE9PSAtMSk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGl0eSAoZm9yY2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGFuZCBzZWUgaWYgd2UgaGF2ZSByZXRyaWV2ZWQgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSwgcmV1c2UgaXQgYnkgaW1tZWRpYXRlbHkgcmVzb2x2aW5nXG4gICAgICAgIGlmICh0aGlzLnVzZXJJZGVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgdXNlcklkZW50aXR5IGRhdGEgZnJvbSB0aGUgc2VydmVyLCB1cGRhdGUgdGhlIGlkZW50aXR5IG9iamVjdCwgYW5kIHRoZW4gcmVzb2x2ZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudC5nZXQoKS50b1Byb21pc2UoKS50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGFjY291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5O1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG5cbiAgICBpc0lkZW50aXR5UmVzb2x2ZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRBdXRoZW50aWNhdGlvblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VVcmwoKTogU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJZGVudGl0eVJlc29sdmVkICgpID8gdGhpcy51c2VySWRlbnRpdHkuaW1hZ2VVcmwgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge31cblxuICAgIGdldFByZXZpb3VzU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgncHJldmlvdXNTdGF0ZScpO1xuICAgIH1cblxuICAgIHJlc2V0UHJldmlvdXNTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UuY2xlYXIoJ3ByZXZpb3VzU3RhdGUnKTtcbiAgICB9XG5cbiAgICBzdG9yZVByZXZpb3VzU3RhdGUocHJldmlvdXNTdGF0ZU5hbWUsIHByZXZpb3VzU3RhdGVQYXJhbXMpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzU3RhdGUgPSB7ICduYW1lJzogcHJldmlvdXNTdGF0ZU5hbWUsICdwYXJhbXMnOiBwcmV2aW91c1N0YXRlUGFyYW1zIH07XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdwcmV2aW91c1N0YXRlJywgcHJldmlvdXNTdGF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0RGVzdGluYXRpb25TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdkZXN0aW5hdGlvblN0YXRlJyk7XG4gICAgfVxuXG4gICAgc3RvcmVVcmwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ3ByZXZpb3VzVXJsJywgdXJsKTtcbiAgICB9XG5cbiAgICBnZXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgncHJldmlvdXNVcmwnKTtcbiAgICB9XG5cbiAgICBzdG9yZURlc3RpbmF0aW9uU3RhdGUoZGVzdGluYXRpb25TdGF0ZSwgZGVzdGluYXRpb25TdGF0ZVBhcmFtcywgZnJvbVN0YXRlKSB7XG4gICAgICAgIGxldCBkZXN0aW5hdGlvbkluZm8gPSB7XG4gICAgICAgICAgICAnZGVzdGluYXRpb24nOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiBkZXN0aW5hdGlvblN0YXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBkZXN0aW5hdGlvblN0YXRlLmRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhcmFtcyc6IGRlc3RpbmF0aW9uU3RhdGVQYXJhbXMsXG4gICAgICAgICAgICAnZnJvbSc6IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IGZyb21TdGF0ZS5uYW1lLFxuICAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ2Rlc3RpbmF0aW9uU3RhdGUnLCBkZXN0aW5hdGlvbkluZm8pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RhdGUtc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xvZ2luKHJvdXRlLmRhdGFbJ2F1dGhvcml0aWVzJ10sIHN0YXRlLnVybCk7XG4gICAgfVxuXG4gICAgY2hlY2tMb2dpbihhdXRob3JpdGllczogc3RyaW5nW10sIHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcmluY2lwYWwuaGFzQW55QXV0aG9yaXR5KGF1dGhvcml0aWVzKS50aGVuKGlzT2sgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnN0b3JlVXJsKHVybCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZS50cyIsImV4cG9ydCBjb25zdCBJVEVNU19QRVJfUEFHRSA9IDIwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2NzcmYuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9hY2NvdW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci9hY2NvdW50Lm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci91c2VyLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtbGlicy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtY29tbW9uLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaUxvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICApIHt9XG5cbiAgICBvcGVuICgpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgbGV0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlMb2dpbk1vZGFsQ29tcG9uZW50KTtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kYWxSZWY7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4tbW9kYWwuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5TaWduIGluPC9oND4gPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+eDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgb2Zmc2V0LW1kLTRcXFwiPiA8aDE+U2lnbiBpbjwvaDE+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImF1dGhlbnRpY2F0aW9uRXJyb3JcXFwiPiA8c3Ryb25nPkZhaWxlZCB0byBzaWduIGluITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBjcmVkZW50aWFscyBhbmQgdHJ5IGFnYWluLiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGZvcm0gY2xhc3M9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImxvZ2luKClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiPkxvZ2luPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIHVzZXJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlcm5hbWVcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIllvdXIgcGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcInJlbWVtYmVyTWVcXFwiPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJyZW1lbWJlck1lXFxcIiBpZD1cXFwicmVtZW1iZXJNZVxcXCIgWyhuZ01vZGVsKV09XFxcInJlbWVtYmVyTWVcXFwiIGNoZWNrZWQ9XFxcImNoZWNrZWRcXFwiPiA8c3Bhbj5SZW1lbWJlciBtZTwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TaWduIGluPC9idXR0b24+IDwvZm9ybT4gPHA+PC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlcXVlc3RSZXNldFBhc3N3b3JkKClcXFwiPkRpZCB5b3UgZm9yZ2V0IHlvdXIgcGFzc3dvcmQ/PC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+IDxzcGFuPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlZ2lzdGVyKClcXFwiPlJlZ2lzdGVyIGEgbmV3IGFjY291bnQ8L2E+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWxvZ2luLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUxvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGF1dGhlbnRpY2F0aW9uRXJyb3I6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZW1lbWJlck1lOiBib29sZWFuO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgY3JlZGVudGlhbHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWxcbiAgICApIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHt9O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgY2FuY2VsICgpIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICByZW1lbWJlck1lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH1cblxuICAgIGxvZ2luICgpIHtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZW1iZXJNZVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdsb2dpbiBzdWNjZXNzJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3JlZ2lzdGVyJyB8fCAoL2FjdGl2YXRlLy50ZXN0KHRoaXMucm91dGVyLnVybCkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsID09PSAnL2ZpbmlzaFJlc2V0JyB8fCB0aGlzLnJvdXRlci51cmwgPT09ICcvcmVxdWVzdFJlc2V0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3Qoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZW5kaW5nIEF1dGhlbnRpY2F0aW9uIFN1Y2Nlc3MnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gLy8gcHJldmlvdXNTdGF0ZSB3YXMgc2V0IGluIHRoZSBhdXRoRXhwaXJlZEludGVyY2VwdG9yIGJlZm9yZSBiZWluZyByZWRpcmVjdGVkIHRvIGxvZ2luIG1vZGFsLlxuICAgICAgICAgICAgLy8gLy8gc2luY2UgbG9naW4gaXMgc3VjY2VzZnVsLCBnbyB0byBzdG9yZWQgcHJldmlvdXNTdGF0ZSBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZVxuICAgICAgICAgICAgbGV0IHJlZGlyZWN0ID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFVybCgpO1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCd0byBzdGF0ZSByZWdpc3RlcicpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWdpc3RlciddKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0UmVzZXRQYXNzd29yZCAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygndG8gc3RhdGUgcmVxdWVzdFJlc2V0Jyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc2V0JywgJ3JlcXVlc3QnXSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2ZXJQcm92aWRlciB9IGZyb20gJy4uL2F1dGgvYXV0aC1qd3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2ZXJQcm92aWRlcjogQXV0aFNlcnZlclByb3ZpZGVyXG4gICAgKSB7fVxuXG4gICAgbG9naW4gKGNyZWRlbnRpYWxzLCBjYWxsYmFjaz8pIHtcbiAgICAgICAgbGV0IGNiID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9naW4oY3JlZGVudGlhbHMpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSh0cnVlKS50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYigpO1xuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2dpbldpdGhUb2tlbihqd3QsIHJlbWVtYmVyTWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ2luV2l0aFRva2VuKGp3dCwgcmVtZW1iZXJNZSk7XG4gICAgfVxuXG4gICAgbG9nb3V0ICgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9nb3V0KCkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmF1dGhlbnRpY2F0ZShudWxsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5cbmltcG9ydCB7XG4gICAgQmxvZ1NoYXJlZExpYnNNb2R1bGUsXG4gICAgSmhpQWxlcnRDb21wb25lbnQsXG4gICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxufSBmcm9tICcuLyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0U2VydmljZVByb3ZpZGVyKHNhbml0aXplcjogU2FuaXRpemVyKSB7XG4gICAgLy8gc2V0IGJlbG93IHRvIHRydWUgdG8gbWFrZSBhbGVydHMgbG9vayBsaWtlIHRvYXN0XG4gICAgbGV0IGlzVG9hc3QgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IEFsZXJ0U2VydmljZShzYW5pdGl6ZXIsIGlzVG9hc3QpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQmxvZ1NoYXJlZExpYnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICAgICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGFsZXJ0U2VydmljZVByb3ZpZGVyLFxuICAgICAgICAgICAgZGVwczogW1Nhbml0aXplcl1cbiAgICAgICAgfSxcbiAgICAgICAgVGl0bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQmxvZ1NoYXJlZExpYnNNb2R1bGUsXG4gICAgICAgIEpoaUFsZXJ0Q29tcG9uZW50LFxuICAgICAgICBKaGlBbGVydEVycm9yQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9nU2hhcmVkQ29tbW9uTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtY29tbW9uLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBOZ0poaXBzdGVyTW9kdWxlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1pbmZpbml0ZS1zY3JvbGwnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgfSksXG4gICAgICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZSxcbiAgICAgICAgSW5maW5pdGVTY3JvbGxNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dTaGFyZWRMaWJzTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtbGlicy5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIEJsb2dTaGFyZWRMaWJzTW9kdWxlLFxuICAgIEJsb2dTaGFyZWRDb21tb25Nb2R1bGUsXG4gICAgQ1NSRlNlcnZpY2UsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgQXV0aFNlcnZlclByb3ZpZGVyLFxuICAgIEFjY291bnRTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgTG9naW5TZXJ2aWNlLFxuICAgIExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgIFByaW5jaXBhbCxcbiAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudFxufSBmcm9tICcuLyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCbG9nU2hhcmVkTGlic01vZHVsZSxcbiAgICAgICAgQmxvZ1NoYXJlZENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEpoaUxvZ2luTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvb2tpZVNlcnZpY2UsXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIEFjY291bnRTZXJ2aWNlLFxuICAgICAgICBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBQcmluY2lwYWwsXG4gICAgICAgIENTUkZTZXJ2aWNlLFxuICAgICAgICBBdXRoU2VydmVyUHJvdmlkZXIsXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxuICAgICAgICBVc2VyU2VydmljZSxcbiAgICAgICAgRGF0ZVBpcGVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0poaUxvZ2luTW9kYWxDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQmxvZ1NoYXJlZENvbW1vbk1vZHVsZSxcbiAgICAgICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlLFxuICAgICAgICBEYXRlUGlwZVxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG5cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ1NoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsImV4cG9ydCBjbGFzcyBBY2NvdW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2YXRlZDogYm9vbGVhbixcbiAgICAgICAgcHVibGljIGF1dGhvcml0aWVzOiBzdHJpbmdbXSxcbiAgICAgICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxhbmdLZXk6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsb2dpbjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZ1xuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL2FjY291bnQubW9kZWwudHMiLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gICAgcHVibGljIGlkPzogYW55O1xuICAgIHB1YmxpYyBsb2dpbj86IHN0cmluZztcbiAgICBwdWJsaWMgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0TmFtZT86IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWw/OiBzdHJpbmc7XG4gICAgcHVibGljIGFjdGl2YXRlZD86IEJvb2xlYW47XG4gICAgcHVibGljIGxhbmdLZXk/OiBzdHJpbmc7XG4gICAgcHVibGljIGF1dGhvcml0aWVzPzogYW55W107XG4gICAgcHVibGljIGNyZWF0ZWRCeT86IHN0cmluZztcbiAgICBwdWJsaWMgY3JlYXRlZERhdGU/OiBEYXRlO1xuICAgIHB1YmxpYyBsYXN0TW9kaWZpZWRCeT86IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGU7XG4gICAgcHVibGljIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBpZD86IGFueSxcbiAgICAgICAgbG9naW4/OiBzdHJpbmcsXG4gICAgICAgIGZpcnN0TmFtZT86IHN0cmluZyxcbiAgICAgICAgbGFzdE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGVtYWlsPzogc3RyaW5nLFxuICAgICAgICBhY3RpdmF0ZWQ/OiBCb29sZWFuLFxuICAgICAgICBsYW5nS2V5Pzogc3RyaW5nLFxuICAgICAgICBhdXRob3JpdGllcz86IGFueVtdLFxuICAgICAgICBjcmVhdGVkQnk/OiBzdHJpbmcsXG4gICAgICAgIGNyZWF0ZWREYXRlPzogRGF0ZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmcsXG4gICAgICAgIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlLFxuICAgICAgICBwYXNzd29yZD86IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLmlkID0gaWQgPyBpZCA6IG51bGw7XG4gICAgICAgIHRoaXMubG9naW4gPSBsb2dpbiA/IGxvZ2luIDogbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWUgPyBmaXJzdE5hbWUgOiBudWxsO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWUgPyBsYXN0TmFtZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbCA/IGVtYWlsIDogbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBhY3RpdmF0ZWQgPyBhY3RpdmF0ZWQgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5nS2V5ID0gbGFuZ0tleSA/IGxhbmdLZXkgOiBudWxsO1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gYXV0aG9yaXRpZXMgPyBhdXRob3JpdGllcyA6IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gY3JlYXRlZEJ5ID8gY3JlYXRlZEJ5IDogbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGVkRGF0ZSA9IGNyZWF0ZWREYXRlID8gY3JlYXRlZERhdGUgOiBudWxsO1xuICAgICAgICB0aGlzLmxhc3RNb2RpZmllZEJ5ID0gbGFzdE1vZGlmaWVkQnkgPyBsYXN0TW9kaWZpZWRCeSA6IG51bGw7XG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkRGF0ZSA9IGxhc3RNb2RpZmllZERhdGUgPyBsYXN0TW9kaWZpZWREYXRlIDogbnVsbDtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkID8gcGFzc3dvcmQgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSByZXNvdXJjZVVybCA9ICdhcGkvdXNlcnMnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGNyZWF0ZSh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5yZXNvdXJjZVVybCwgdXNlcik7XG4gICAgfVxuXG4gICAgdXBkYXRlKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMucmVzb3VyY2VVcmwsIHVzZXIpO1xuICAgIH1cblxuICAgIGZpbmQobG9naW46IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIGlmIChyZXEpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3BhZ2UnLCByZXEucGFnZSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdzaXplJywgcmVxLnNpemUpO1xuICAgICAgICAgICAgaWYgKHJlcS5zb3J0KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnBhcmFtc01hcC5zZXQoJ3NvcnQnLCByZXEuc29ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5yZXNvdXJjZVVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGxvZ2luOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMucmVzb3VyY2VVcmx9LyR7bG9naW59YCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTg1NGU2ZDA3ODViYTRiOWQ3MTUwNDljMGJkYmNiMy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWNkM2ExZDc4MmU4NWJhMzc2NzdjMWEyMDk5YmMwMDIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMzBkZWIyNmI0ZWIxNTIxNDMzMDIxZTMyNmNiY2MyYy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9sb2dvLWpoaXBzdGVyLnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvQGFuZ3VsYXIvY29yZS5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDIzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSg3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL0Bhbmd1bGFyL2NvbW1vbi5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjAzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjA2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjA3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsL2FuZ3VsYXIyLWluZmluaXRlLXNjcm9sbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgyMTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL3NyYy9tYWluL3dlYmFwcC9hcHAvdmVuZG9yLnRzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDIxNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLWNvb2tpZS9zZXJ2aWNlcy9jb29raWVzLnNlcnZpY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3ViamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSg4Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvUnguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL0Bhbmd1bGFyL3JvdXRlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgyMDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZy1qaGlwc3Rlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9AYW5ndWxhci9odHRwLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDIwNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9