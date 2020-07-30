(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */


var routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div [@routeAnimation]=\"getAnimationState(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.transitions */ "./src/app/app.transitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */

/* App imports */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getAnimationState = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_app_transitions__WEBPACK_IMPORTED_MODULE_1__["AppComponentTransitions"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _components_quiz_runner_quiz_runner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz-runner/quiz-runner.module */ "./src/app/components/quiz-runner/quiz-runner.module.ts");
/* harmony import */ var _components_quiz_creator_quiz_creator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quiz-creator/quiz-creator.module */ "./src/app/components/quiz-creator/quiz-creator.module.ts");
/* harmony import */ var _components_quiz_list_quiz_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quiz-list/quiz-list.module */ "./src/app/components/quiz-list/quiz-list.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */



/* App imports */





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                _components_quiz_runner_quiz_runner_module__WEBPACK_IMPORTED_MODULE_4__["QuizRunnerModule"],
                _components_quiz_creator_quiz_creator_module__WEBPACK_IMPORTED_MODULE_5__["QuizCreatorModule"],
                _components_quiz_list_quiz_list_module__WEBPACK_IMPORTED_MODULE_6__["QuizListModule"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.transitions.ts":
/*!************************************!*\
  !*** ./src/app/app.transitions.ts ***!
  \************************************/
/*! exports provided: AppComponentTransitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentTransitions", function() { return AppComponentTransitions; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* Vendor imports */

var AppComponentTransitions = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    // Transition for the navigation from left to right
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('quizCreator => quizList, quizList => quizRunner, quizCreator => quizRunner', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '-2em', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))),
    ]),
    // Transition for the navigation from right to left
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('quizRunner => quizList, quizList => quizCreator, quizRunner => quizCreator', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '-2em', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' })))
    ])
]);
// Mind to set explicity padding and margin properties for each side 
// because Firefox doesn't recognize 'padding' and 'margin' as shorthand properties for the method `getComputedStyle`.
// Since Angular animations use this method, when it is used in Firefox, it'll return an empty string instead of a value
// that could be cause problems or errors in the template rendering. 
// To test this: `window.getComputedStyle(document.body).padding === ''` or `window.getComputedStyle(document.body).margin === ''`


/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav>\n        <div>\n            <h1 routerLink=\"/\">{{title}}</h1>\n        </div>\n        \n        <div>\n            <ul>\n                <li routerLinkActive=\"active\">\n                    <mat-icon>details</mat-icon>\n                    <a routerLink='create'>{{languageMap['quizCreate']}}</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <mat-icon>details</mat-icon>\n                    <a routerLink='list'>{{languageMap['quizList']}}</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <mat-icon>details</mat-icon>\n                    <a routerLink='launch'>{{languageMap['quizLoad']}}</a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"links\">\n            <a href=\"https://github.com/lgcolella/quizzer\" tabindex=\"0\" target=\"_blank\">\n                <span>\n                    <img src=\"assets/images/github-circle-white-transparent.svg\">\n                </span>\n            </a>\n            <button mat-button [matMenuTriggerFor]=\"menu\">{{languageMap['language']}}...</button>\n            <mat-menu #menu=\"matMenu\">\n                <button *ngFor=\"let lang of availableLangs\" (click)=\"changeLanguage(lang.value)\" mat-menu-item>\n                    <span>\n                        <img [src]=\"'assets/images/flag-' + lang.value + '.png'\">\n                        {{lang.name}}\n                    </span>\n                </button>\n            </mat-menu>\n        </div>\n    </nav>\n\n    <nav class=\"links\">\n        <ul>\n            <li routerLinkActive=\"active\"><a routerLink='create'>{{languageMap['quizCreate']}}</a></li>\n            <li routerLinkActive=\"active\"><a routerLink='list'>{{languageMap['quizList']}}</a></li>\n            <li routerLinkActive=\"active\"><a routerLink='launch'>{{languageMap['quizLoad']}}</a></li>\n        </ul>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\n.container {\n  font-family: inherit;\n  border: 1px solid #0E3475;\n  border-radius: 0px;\n  background-color: #0E3475;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  width: 100%;\n  margin-top: 0px;\n  border-width: 0px;\n  border-bottom: 3px solid #dfe3ee;\n  color: #dfe3ee;\n  background-image: url(\"data:image/png;base64,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\"); }\n.container nav {\n    width: 80%;\n    padding: 0.5em 0em;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.container nav h1 {\n      margin: 0px; }\n.container nav h1:hover {\n        cursor: pointer; }\n.container nav h1:focus {\n        outline: none; }\n.container nav ul {\n      display: none;\n      list-style: none;\n      margin: 0em;\n      flex-direction: row;\n      padding: 0em 1em; }\n@media only screen and (min-width: 768px) and (orientation: landscape) {\n        .container nav ul {\n          display: flex; } }\n.container nav ul li {\n        padding-right: 1em;\n        display: flex;\n        align-self: center;\n        align-items: center;\n        justify-content: center; }\n.container nav ul li mat-icon {\n          visibility: hidden;\n          margin: 0em 0.25em;\n          -webkit-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n.container nav ul li a {\n          height: 100%;\n          width: 100%;\n          padding: 0.5em 0em;\n          color: inherit;\n          text-decoration: none;\n          text-align: center;\n          white-space: nowrap; }\n.container nav ul li:hover mat-icon, .container nav ul li.active mat-icon {\n          display: inline-block;\n          visibility: visible; }\n.container nav .links {\n      display: flex;\n      align-items: center; }\n.container nav .links a {\n        padding: 0.25em;\n        transition: 0.25s; }\n.container nav .links a:hover {\n          border-radius: 2px;\n          background: rgba(0, 0, 0, 0.12); }\n.container nav.links {\n    width: 100%;\n    justify-content: center;\n    padding: 0em; }\n@media only screen and (min-width: 768px) and (orientation: landscape) {\n      .container nav.links {\n        display: none; } }\n.container nav.links ul {\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      padding: 0em; }\n.container nav.links ul li {\n        width: 100%;\n        margin: 0em;\n        border-radius: 0px;\n        transition: background 0.5s; }\n.container nav.links ul li:hover, .container nav.links ul li.active {\n          background-color: #6A77F2;\n          background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXBAMAAACG4mBhAAAALVBMVEVAQEA5OTk+Pj4/Pz84ODg8PDw5OTk4ODg7Ozs7OztDQ0M5OTk3NzdFRUVISEi5S1dSAAAAD3RSTlMwWjo1YEBVZUpFKlBqJSCof7U2AAACDklEQVR4Xh2RwWvaYBiHXxI+aPSyOmMa5iGuznWOwTczSqp4kKVVcYfvm9IWdjLTpZRdUiS02EM6W4SdFIOHnqy9uJSCGkfGjjvIYJfBTmOX/Sn71vvz8jz8XnDCMnfWRHFDiB6r3XJo78gzDWEVYKHnJ0tMbXze0Qq9hytr+zuKewzhypuP4TKPiganns25d7ivG4Lege6969iipxHXzk5a3s3pdGIrbikL/Zej7gkfGEiao4JHhxX8WtCdEWxVqlonF9tRqL3uflnzAh/cEj8AfF4CPHNqBopHhNO3XjDd0h2tDb6g+0jK31hk11aGZCO2zvBuASrYbavB/NoUR9TIMAuL0UpPwPSFqJ+LVVNW6OpkRP/HhPZe/oJEG2+UMguZDwbJJpIMoeXgze0QoOjXn0WSs0juwV1T/0C94BtzIHRbtQgfyKpkMPyTBZPW5eYSIih2LqIBm0ZjeHrlx21tJnNxsKq0QGjJe17GDOe5xsWB2iAJkET0GZn1Z3++A4sZ9p4W73vSdAyp5TpQcaNJxbsYmZ9dolUlC5wkZruH46itMLx/UO894mYG1wSSsgc04rkiihpCAR6Lo9QynbRAzDBDvSOQ3TJ2y7cvRM6MjFdnEE2nLIW2MXpPfusOqvcSVjp5NIZXl2OTKf2xlL1iQ8pcY84VD//Cmqqwgxp7yoeFo7V6qW/5pK3s/wPxo6keqhNsswAAAABJRU5ErkJggg==\"); }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/appLocalization.service */ "./src/app/services/appLocalization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */

/* App imports */


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(localization) {
        this.localization = localization;
        this.title = _constants__WEBPACK_IMPORTED_MODULE_1__["APP_TITLE"];
        this.availableLangs = [
            { name: 'English', value: _constants__WEBPACK_IMPORTED_MODULE_1__["APP_LANG_EN"] },
            { name: 'Italiano', value: _constants__WEBPACK_IMPORTED_MODULE_1__["APP_LANG_IT"] },
            { name: 'Español', value: _constants__WEBPACK_IMPORTED_MODULE_1__["APP_LANG_ES"] },
            { name: 'Français', value: _constants__WEBPACK_IMPORTED_MODULE_1__["APP_LANG_FR"] }
        ];
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageMap = {};
        this.languageChangeSubscription = this.localization.getLanguageMap().subscribe({
            next: function (langMap) { return _this.languageMap = langMap; }
        });
    };
    AppHeaderComponent.prototype.ngOnDestroy = function () {
        this.languageChangeSubscription.unsubscribe();
    };
    /**
     * Change the app language
     * @param {string} language language to set
     */
    AppHeaderComponent.prototype.changeLanguage = function (language) {
        this.localization.setLanguage(language);
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_appLocalization_service__WEBPACK_IMPORTED_MODULE_2__["AppLocalization"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */

/* App imports */



var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/quiz-creator/dialog-form/dialog-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dialog-form\">\n\n    <div mat-dialog-content [formGroup]=\"inputControl.parent\">\n        <mat-form-field>\n            <mat-label>{{languageMap['inputQuestionAnswerValueLabel']}}</mat-label>\n            <input matInput [formControl]=\"inputControl\" [matTooltip]=\"tooltipText\" [errorStateMatcher]=\"errorMatcher\">\n            <mat-error *ngIf=\"inputControl.invalid\">{{inputControl.errors.validAnswerValue && languageMap[inputControl.errors.validAnswerValue.text]}}</mat-error>\n        </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions class=\"buttons\">\n        <button mat-button (click)=\"onClose()\">{{languageMap['ok']}}</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/quiz-creator/dialog-form/dialog-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  font-family: inherit;\n  width: 300px; }\n\n.buttons {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/quiz-creator/dialog-form/dialog-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: DialogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFormComponent", function() { return DialogFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogFormComponent = /** @class */ (function () {
    function DialogFormComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.onKeyboardEnterEvent = function (ev) {
            if (ev.key === 'Enter')
                _this.onClose();
        };
    }
    DialogFormComponent.prototype.ngOnInit = function () {
        this.inputControl = this.data.inputControl;
        this.tooltipText = this.data.tooltipText;
        this.errorMatcher = this.data.errorMatcher;
        this.languageMap = this.data.languageMap;
        document.addEventListener('keydown', this.onKeyboardEnterEvent);
    };
    DialogFormComponent.prototype.ngOnDestroy = function () {
        document.removeEventListener('keydown', this.onKeyboardEnterEvent);
    };
    DialogFormComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    DialogFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-form',
            template: __webpack_require__(/*! ./dialog-form.component.html */ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.html"),
            styles: [__webpack_require__(/*! ./dialog-form.component.scss */ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogFormComponent);
    return DialogFormComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: QuizCreatorRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCreatorRouterModule", function() { return QuizCreatorRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_creator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-creator.component */ "./src/app/components/quiz-creator/quiz-creator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */


/* App imports */

var routes = [
    { path: 'create', component: _quiz_creator_component__WEBPACK_IMPORTED_MODULE_2__["QuizCreatorComponent"], data: { animation: 'quizCreator' } }
];
var QuizCreatorRouterModule = /** @class */ (function () {
    function QuizCreatorRouterModule() {
    }
    QuizCreatorRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], QuizCreatorRouterModule);
    return QuizCreatorRouterModule;
}());

;


/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator-validators.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator-validators.ts ***!
  \********************************************************************/
/*! exports provided: validators, QuizCreatorErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCreatorErrorStateMatcher", function() { return QuizCreatorErrorStateMatcher; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* Vendor imports */

/* App imports */

var validators = {
    validText: function () {
        return function (control) {
            var errorMsg;
            var inputValue = control.value;
            if (inputValue === '')
                errorMsg = 'errorMissingInput';
            else if (typeof inputValue === 'string' && inputValue.trim() === '')
                errorMsg = 'errorInvalidInput';
            else
                return null;
            return { 'validText': { text: errorMsg } };
        };
    },
    validItems: function () {
        return function (control) {
            var valid = control.valid && control.length > 0;
            return !valid ? { 'validItems': true } : null;
        };
    },
    validQuizType: function () {
        return function (control) {
            var valid = control.value === _constants__WEBPACK_IMPORTED_MODULE_1__["PERSONALITY_QUIZ"] || control.value === _constants__WEBPACK_IMPORTED_MODULE_1__["TRUEORFALSE_QUIZ"];
            return !valid ? { 'validQuizType': { text: 'errorInvalidQuizType' } } : null;
        };
    },
    validAnswerValue: function (quizForm) {
        return function (control) {
            var quizType = quizForm.get('settings').get('type').value;
            var error;
            if (quizType === _constants__WEBPACK_IMPORTED_MODULE_1__["PERSONALITY_QUIZ"]) {
                error = !control.value ? { 'validAnswerValue': { text: 'errorMissingInput' } } : null;
            }
            else if (quizType === _constants__WEBPACK_IMPORTED_MODULE_1__["TRUEORFALSE_QUIZ"]) {
                error = typeof control.value !== 'boolean' ? { 'validAnswerValue': { text: 'errorInvalidTrueOrFalseValue' } } : null;
            }
            else {
                error = { 'validAnswerValue': { text: 'errorInvalidQuizType' } };
            }
            return error;
        };
    },
    validImageUrl: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/.*.(jpg|jpeg|gif|png)((\?.*)$|$)/mg)
};
var QuizCreatorErrorStateMatcher = /** @class */ (function () {
    function QuizCreatorErrorStateMatcher() {
    }
    QuizCreatorErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isFormSubmitted = form && form.submitted;
        var isControlUsed = control.dirty || control.touched || isFormSubmitted;
        return !!(control && isControlUsed && control.invalid);
    };
    return QuizCreatorErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form [formGroup]=\"quiz\" (ngSubmit)=\"onSubmit()\">\n\n    <mat-vertical-stepper linear>\n      <mat-step>\n        <!-- Stepper label -->\n        <ng-template matStepLabel>{{languageMap['settings']}}</ng-template>\n        <!-- /Stepper label -->\n        <!-- Quiz settings -->\n        <div [formGroup]=\"quiz.get('settings')\" class=\"settingsBox\">\n          <mat-form-field>\n            <mat-label>{{languageMap['inputTitleLabel']}}</mat-label>\n            <input matInput formControlName=\"title\" [errorStateMatcher]=\"errorMatcher\" required [matTooltip]=\"languageMap['inputTitleTooltip']\">\n            <mat-error *ngIf=\"quiz.get('settings').get('title').invalid\">{{languageMap[quiz.get('settings').get('title').errors.validText.text]}}.</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>{{languageMap['inputTypeLabel']}}</mat-label>\n            <mat-select formControlName=\"type\" (selectionChange)=\"onChangeQuizType()\" [errorStateMatcher]=\"errorMatcher\" required [matTooltip]=\"languageMap['inputTypeTooltip']\">\n              <mat-option [value]=\"quizTypes.personalityQuiz\">{{languageMap[quizTypes.personalityQuiz]}}</mat-option>\n              <mat-option [value]=\"quizTypes.trueorfalseQuiz\">{{languageMap[quizTypes.trueorfalseQuiz]}}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"quiz.get('settings').get('type').invalid\">{{languageMap[quiz.get('settings').get('type').errors.validQuizType.text]}}.</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>{{languageMap['inputDescriptionLabel']}}</mat-label>\n            <textarea matInput formControlName=\"description\" [errorStateMatcher]=\"errorMatcher\" required [matTooltip]=\"languageMap['inputDescriptionTooltip']\"></textarea>\n            <mat-error *ngIf=\"quiz.get('settings').get('description').invalid\">{{languageMap[quiz.get('settings').get('description').errors.validText.text]}}.</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>{{languageMap['inputCoverUrlLabel']}}</mat-label>\n            <input matInput formControlName=\"imageUrl\" [errorStateMatcher]=\"errorMatcher\" [matTooltip]=\"languageMap['inputCoverUrlTooltip']\">\n            <mat-error *ngIf=\"quiz.get('settings').get('imageUrl').invalid\">{{languageMap['errorImageUrl']}}.</mat-error>\n          </mat-form-field>\n\n        </div>\n        <!-- /Quiz settings -->\n        <!-- Stepper info -->\n        <div class=\"alert-box\">\n          <i *ngIf=\"quiz.get('settings').invalid\">{{languageMap['errorInvalidQuizType']}}.</i>\n        </div>\n        <!-- /Stepper info -->\n        <!-- Stepper buttons -->\n        <div class=\"buttons\">\n          <button mat-button matStepperNext type=\"button\" [disabled]=\"false && quiz.get('settings').invalid\">\n            <mat-icon>navigate_next</mat-icon>{{languageMap['nextButton']}}</button>\n        </div>\n        <!-- /Stepper buttons -->\n      </mat-step>\n      <mat-step>\n        <!-- Stepper label -->\n        <ng-template matStepLabel>{{languageMap['questions']}}</ng-template>\n        <!-- /Stepper label -->\n        <div formArrayName=\"questions\">\n          <!-- Questions main buttons -->\n          <div class=\"buttons\">\n            <button mat-button (click)=\"handleQuestions.addNew()\" type=\"button\">\n              <mat-icon>add</mat-icon>{{languageMap['addQuestion']}}\n            </button>\n            <button mat-button (click)=\"questionAccordion.openAll()\" *ngIf=\"quiz.get('questions').length > 0\" type=\"button\">\n              <mat-icon>expand_more</mat-icon>{{languageMap['expandButton']}}\n            </button>\n            <button mat-button (click)=\"questionAccordion.closeAll()\" *ngIf=\"quiz.get('questions').length > 0\" type=\"button\" class=\"red\">\n              <mat-icon>expand_less</mat-icon>{{languageMap['collapseButton']}}\n            </button>\n          </div>\n          <!-- /Questions main buttons -->\n\n          <!-- Quiz questions -->\n          <mat-accordion #questionAccordion=\"matAccordion\" [multi]=\"true\">\n            <ng-container *ngFor=\"let question of quiz.get('questions').controls; let questionIndex = index\">\n              <mat-expansion-panel [hideToggle]=\"true\" #questionPanel=\"matExpansionPanel\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    <label>{{questionIndex + 1}}/{{quiz.get('questions').length}}</label>\n                    <mat-icon *ngIf=\"question.valid\">check</mat-icon>\n                  </mat-panel-title>\n                  <mat-panel-description>\n                    <div *ngIf=\"!questionPanel.expanded\" class=\"truncate-label\">\n                      <span class=\"panel-label\">{{question.get('text').value}}</span>\n                    </div>\n                    <div class=\"panel-description-buttons\">\n                      <!-- Button to remove this question -->\n                      <button mat-icon-button (click)=\"handleQuestions.remove(questionIndex)\" [matTooltip]=\"languageMap['deleteQuestion']\">\n                        <mat-icon>delete</mat-icon>\n                      </button>\n                      <!-- /Button to remove this question -->\n                      <!-- Button to add a new answer -->\n                      <button mat-icon-button (click)=\"$event.stopPropagation(); handleQuestions.addNewAnswer(questionIndex)\" [matTooltip]=\"languageMap['addAnswerForQuestion']\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                      <!-- /Button to add a new answer -->\n                    </div>\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!-- Expansion panel body -->\n                <div [formGroup]=\"question\">\n                  <!-- Question text -->\n                  <mat-form-field>\n                    <mat-label>{{languageMap['inputQuestionTextLabel']}}</mat-label>\n                    <input matInput formControlName=\"text\" [matTooltip]=\"languageMap['inputQuestionTextTooltip']\" [errorStateMatcher]=\"errorMatcher\"\n                      required>\n                    <mat-error *ngIf=\"question.get('text').invalid\">{{languageMap[question.get('text').errors.validText.text]}}.</mat-error>\n                  </mat-form-field>\n                  <!-- /Question text -->\n                  <!-- Question answers -->\n                  <ng-container *ngFor=\"let answer of question.get('answers').controls; let answerIndex = index\">\n                    <div [formGroup]=\"answer\" class=\"question-answer-box\">\n\n                      <!-- Answer text -->\n                      <mat-form-field>\n                        <mat-label>{{languageMap['inputQuestionAnswerTextLabel']}}</mat-label>\n                        <input matInput formControlName=\"text\" [matTooltip]=\"languageMap['inputQuestionAnswerTextTooltip']\" [errorStateMatcher]=\"errorMatcher\" required>\n                        <mat-error *ngIf=\"answer.get('text').invalid\">{{languageMap[answer.get('text').errors.validText.text]}}.</mat-error>\n                      </mat-form-field>\n                      <!-- /Answer text -->\n\n                      <!-- Answer value -->\n                      <ng-container [ngSwitch]=\"quiz.get('settings').get('type').value\">\n\n                        <mat-form-field *ngSwitchCase=\"quizTypes.personalityQuiz\">\n                          <mat-label>{{languageMap['inputQuestionAnswerValueLabel']}}</mat-label>\n                          <mat-select [formControl]=\"answer.get('value')\" [errorStateMatcher]=\"errorMatcher\" [matTooltip]=\"languageMap['inputQuestionAnswerValueTooltip']\">\n                            <ng-container *ngFor=\"let option of handleAnswersValue.getSuggestedValues()\">\n                              <mat-option [value]=\"option\">{{option}}</mat-option>\n                            </ng-container>\n                            <mat-option (click)=\"handleAnswersValue.addSuggestedValue(answer.get('value'), languageMap['inputQuestionAnswerValueTooltip'])\" style=\"color:inherit; cursor: pointer;\" disabled>{{languageMap['inputQuestionAnswerValueNew']}}</mat-option>\n                          </mat-select>\n                          <mat-error *ngIf=\"answer.get('value').invalid\">{{answer.get('value').errors.validAnswerValue && languageMap[answer.get('value').errors.validAnswerValue.text]}}.</mat-error>\n                        </mat-form-field>\n\n                        <mat-radio-group *ngSwitchCase=\"quizTypes.trueorfalseQuiz\" matInput [formControl]=\"answer.get('value')\" [matTooltip]=\"languageMap['inputQuestionAnswerValueTrueOrFalseTooltip']\">\n                          <mat-radio-button [value]=\"true\">{{languageMap['true'] | uppercase}}</mat-radio-button>\n                          <mat-radio-button [value]=\"false\">{{languageMap['false'] | uppercase}}</mat-radio-button>\n                        </mat-radio-group>\n\n                        <div *ngSwitchDefault class=\"alert-box notype-warning\">\n                          <i>{{languageMap['selectQuizTypeBeforeAlert']}}.</i>\n                        </div>\n\n                      </ng-container>\n                      <!-- /Answer value -->\n\n                      <!-- Button to remove this question -->\n                      <button mat-icon-button (click)=\"handleQuestions.removeAnswer(answerIndex, questionIndex)\" [matTooltip]=\"languageMap['removeAnswerForQuestion']\">\n                        <mat-icon>delete</mat-icon>\n                      </button>\n                      <!-- /Button to remove this question -->\n                    </div>\n                  </ng-container>\n                  <!-- /Question answers -->\n                </div>\n                <!-- /Expansion panel body -->\n              </mat-expansion-panel>\n            </ng-container>\n          </mat-accordion>\n          <!-- /Quiz questions -->\n          <!-- Stepper info -->\n          <div class=\"alert-box\">\n            <i *ngIf=\"quiz.get('questions').invalid && quiz.get('questions').length === 0\">{{languageMap['noQuestionsAlert']}}.</i>\n            <i *ngIf=\"quiz.get('questions').invalid && quiz.get('questions').length > 0\">{{languageMap['youHave']}} {{getInvalidFormControlsNumber(quiz.get('questions'))}} {{languageMap['prepositionOn']}} {{quiz.get('questions').length}} {{languageMap['questionsToComplete']}}.</i>\n          </div>\n          <!-- /Stepper info -->\n          <!-- Stepper buttons -->\n          <div class=\"buttons\">\n            <button mat-button matStepperPrevious type=\"button\">\n              <mat-icon>navigate_before</mat-icon>{{languageMap['previousButton']}}</button>\n            <button mat-button matStepperNext type=\"button\">\n              <mat-icon>navigate_next</mat-icon>{{languageMap['nextButton']}}</button>\n          </div>\n          <!-- /Stepper buttons -->\n        </div>\n      </mat-step>\n\n      <mat-step>\n        <!-- Stepper label -->\n        <ng-template matStepLabel>{{languageMap['results']}}</ng-template>\n        <!-- /Stepper label -->\n        <!-- Quiz results -->\n        <div formArrayName=\"answers\" class=\"answerBox\">\n          <div class=\"buttons\">\n            <button mat-button (click)=\"handleAnswers.addNew()\" type=\"button\">\n              <mat-icon>add</mat-icon>{{languageMap['addResult']}}</button>\n            <button *ngIf=\"quiz.get('answers').length > 0\" mat-button (click)=\"resultsAccordion.openAll()\" type=\"button\">\n              <mat-icon>expand_more</mat-icon>{{languageMap['expandButton']}}</button>\n            <button *ngIf=\"quiz.get('answers').length > 0\" mat-button (click)=\"resultsAccordion.closeAll()\" type=\"button\" class=\"red\">\n              <mat-icon>expand_less</mat-icon>{{languageMap['collapseButton']}}</button>\n          </div>\n          <mat-accordion [multi]=\"true\" #resultsAccordion=\"matAccordion\">\n            <ng-container *ngFor=\"let answer of quiz.get('answers').controls; let i = index\">\n              <mat-expansion-panel [expanded]=\"true\" [hideToggle]=\"true\" #resultPanel=\"matExpansionPanel\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    <label>{{i+1}}/{{quiz.get('answers').controls.length}}</label>\n                    <mat-icon *ngIf=\"answer.valid\">check</mat-icon>\n                  </mat-panel-title>\n                  <mat-panel-description>\n                    <div *ngIf=\"!resultPanel.expanded\" class=\"truncate-label\">\n                      <span>{{answer.get('title').value}}</span>\n                    </div>\n                    <button mat-icon-button (click)=\"handleAnswers.remove(i)\" type=\"button\" [matTooltip]=\"languageMap['removeResult']\">\n                      <mat-icon>delete</mat-icon>\n                    </button>\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <div [formGroup]=\"answer\">\n\n                  <!-- Result title -->\n                  <mat-form-field>\n                    <mat-label>{{languageMap['inputResultTitleLabel']}}</mat-label>\n                    <input type=\"text\" formControlName=\"title\" matInput [errorStateMatcher]=\"errorMatcher\" required [matTooltip]=\"languageMap['inputResultTitleTooltip']\">\n                    <mat-error *ngIf=\"!answer.get('title').valid\">{{languageMap[answer.get('title').errors.validText.text]}}.</mat-error>\n                  </mat-form-field>\n                  <!-- /Result title -->\n\n                  <!-- Result value -->\n                  <ng-container [ngSwitch]=\"quiz.get('settings').get('type').value\">\n\n                    <mat-form-field *ngSwitchCase=\"quizTypes.personalityQuiz\">\n                      <mat-label>{{languageMap['inputResultValueLabel']}}</mat-label>\n                      <mat-select [formControl]=\"answer.get('value')\" [errorStateMatcher]=\"errorMatcher\" required [matTooltip]=\"languageMap['inputResultValueTooltip']\">\n                        <ng-container *ngFor=\"let option of handleAnswersValue.getSuggestedValues()\">\n                          <mat-option [value]=\"option\">{{option}}</mat-option>\n                        </ng-container>\n                        <mat-option (click)=\"handleAnswersValue.addSuggestedValue(answer.get('value'), languageMap['inputResultValueTooltip'])\" style=\"color:inherit; cursor: pointer;\" disabled>{{languageMap['inputResultValueNew']}}</mat-option>\n                      </mat-select>\n                      <mat-error *ngIf=\"answer.get('value').invalid\">{{answer.get('value').errors.validText && languageMap[answer.get('value').errors.validText.text]}}.</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field *ngSwitchCase=\"quizTypes.trueorfalseQuiz\">\n                      <mat-label>{{languageMap['inputResultValueLabel']}}</mat-label>\n                      <input type=\"text\" formControlName=\"value\" matInput [errorStateMatcher]=\"errorMatcher\" required [matTooltip]=\"languageMap['inputResultValueTrueOrFalseTooltip']\">\n                      <mat-error *ngIf=\"answer.get('value').invalid\">{{languageMap[answer.get('value').errors.validText.text]}}.</mat-error>\n                    </mat-form-field>\n\n                    <div *ngSwitchDefault class=\"alert-box notype-warning\">\n                      <i>{{languageMap['selectQuizTypeBeforeAlert']}}.</i>\n                    </div>\n\n                  </ng-container>\n                  <!-- /Result value -->\n\n                  <!-- Result description -->\n                  <mat-form-field>\n                    <mat-label>{{languageMap['inputResultDescriptionLabel']}}</mat-label>\n                    <textarea formControlName=\"description\" matInput [errorStateMatcher]=\"errorMatcher\" [matTooltip]=\"languageMap['inputResultDescriptionTooltip']\"></textarea>\n                    <mat-error *ngIf=\"answer.get('description').invalid\">{{languageMap[answer.get('description').errors.validText.text]}}.</mat-error>\n                  </mat-form-field>\n                  <!-- /Result description -->\n\n                  <!-- Result image -->\n                  <mat-form-field>\n                    <mat-label>{{languageMap['inputResultImageUrlLabel']}}</mat-label>\n                    <input formControlName=\"imageUrl\" matInput [errorStateMatcher]=\"errorMatcher\" [matTooltip]=\"languageMap['inputResultImageUrlTooltip']\">\n                    <mat-error *ngIf=\"answer.get('imageUrl').invalid\">{{languageMap['errorImageUrl']}}.</mat-error>\n                  </mat-form-field>\n                  <!-- /Result image -->\n\n                </div>\n              </mat-expansion-panel>\n            </ng-container>\n          </mat-accordion>\n        </div>\n        <!-- /Quiz results -->\n        <!-- Stepper info -->\n        <div class=\"alert-box\">\n          <i *ngIf=\"quiz.get('answers').invalid && quiz.get('answers').length === 0\">{{languageMap['noResultsAlert']}}.</i>\n          <i *ngIf=\"quiz.get('answers').invalid && quiz.get('answers').length > 0\">{{languageMap['youHave']}} {{getInvalidFormControlsNumber(quiz.get('answers'))}} {{languageMap['prepositionOn']}} {{quiz.get('answers').length}} {{languageMap['resultsToComplete']}}.</i>\n        </div>\n        <!-- /Stepper info -->\n        <!-- Stepper buttons -->\n        <div class=\"buttons\">\n          <button mat-button matStepperPrevious type=\"button\">\n            <mat-icon>navigate_before</mat-icon>{{languageMap['previousButton']}}</button>\n        </div>\n        <!-- Stepper buttons -->\n      </mat-step>\n    </mat-vertical-stepper>\n  </form>\n\n  <!-- Form actions -->\n  <div class=\"form-actions\">\n    <div class=\"buttons\">\n      <button mat-button (click)=\"onSubmit()\" color=\"primary\" [disabled]=\"quiz.invalid\">\n        <mat-icon>get_app</mat-icon>{{languageMap['saveButton']}}\n      </button>\n    </div>\n  </div>\n  <!-- /Form actions -->\n\n</div>"

/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\n.container {\n  font-family: inherit;\n  border: 1px solid #6A77F2;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 0px 20px 20px 0px; }\n.container mat-vertical-stepper {\n    background-color: transparent; }\n.container mat-expansion-panel {\n    font-family: inherit;\n    border: 1px solid #0E3475;\n    border-radius: 0px;\n    background-color: transparent;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    margin: 1em 0em;\n    padding: 0em; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-title {\n      align-items: center;\n      white-space: nowrap; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-title mat-icon {\n        margin-left: 0.5em; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-description {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      overflow: inherit; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-description .truncate-label {\n        display: flex;\n        text-overflow: ellipsis;\n        justify-content: flex-end; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-description .panel-description-buttons {\n        display: flex; }\n.container .mat-form-field {\n    width: 100%; }\n.container .mat-radio-group {\n    display: flex;\n    justify-content: space-around; }\n.container .question-answer-box {\n    display: flex;\n    align-items: baseline; }\n.container .question-answer-box mat-form-field, .container .question-answer-box mat-radio-group {\n      margin-left: 0.5em; }\n.container .truncate-label {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    white-space: nowrap; }\n.container .truncate-label > * {\n      display: table-cell;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: right; }\n.container .alert-box {\n    margin: 1em 0em;\n    font-size: 0.8em; }\n.container .notype-warning {\n    width: 100%;\n    text-align: center;\n    white-space: nowrap;\n    margin-left: 1em; }\n.container .form-actions {\n    box-shadow: none;\n    border-width: 0px;\n    margin: 2em;\n    margin-top: 1em; }\n.container .form-actions .buttons {\n      display: flex;\n      justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuizCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCreatorComponent", function() { return QuizCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-form/dialog-form.component */ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.ts");
/* harmony import */ var _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/quizHandler.service */ "./src/app/services/quizHandler.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-creator-validators */ "./src/app/components/quiz-creator/quiz-creator-validators.ts");
/* harmony import */ var _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/appLocalization.service */ "./src/app/services/appLocalization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */



/* App imports */





var QuizCreatorComponent = /** @class */ (function () {
    function QuizCreatorComponent(ngFormBuilder, ngDialog, quizHandler, localization) {
        var _this = this;
        this.ngFormBuilder = ngFormBuilder;
        this.ngDialog = ngDialog;
        this.quizHandler = quizHandler;
        this.localization = localization;
        //Object of quiz types for template;
        this.quizTypes = {
            'trueorfalseQuiz': _constants__WEBPACK_IMPORTED_MODULE_5__["TRUEORFALSE_QUIZ"],
            'personalityQuiz': _constants__WEBPACK_IMPORTED_MODULE_5__["PERSONALITY_QUIZ"]
        };
        //Builders for reactive form
        this.quizBuilders = {
            emptyAnswer: function () {
                return _this.ngFormBuilder.group({
                    text: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                    value: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validAnswerValue(_this.quiz)]
                });
            },
            emptyQuestion: function () {
                return _this.ngFormBuilder.group({
                    text: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                    answers: _this.ngFormBuilder.array([_this.quizBuilders.emptyAnswer()], _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validItems())
                });
            },
            emptyResult: function () {
                return _this.ngFormBuilder.group({
                    value: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                    title: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                    description: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                    imageUrl: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validImageUrl]
                });
            }
        };
        //Reactive form to create a new quiz
        this.quiz = this.ngFormBuilder.group({
            settings: this.ngFormBuilder.group({
                title: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                description: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validText()],
                type: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validQuizType()],
                imageUrl: ['', _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validImageUrl]
            }),
            questions: this.ngFormBuilder.array([ /*this.quizBuilders.emptyQuestion()*/], _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validItems()),
            answers: this.ngFormBuilder.array([ /*this.quizBuilders.emptyResult()*/], _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["validators"].validItems())
        });
        // Errors state matcher
        this.errorMatcher = new _quiz_creator_validators__WEBPACK_IMPORTED_MODULE_6__["QuizCreatorErrorStateMatcher"]();
        //Event handlers for questions
        this.handleQuestions = {
            addNew: function () {
                _this.quiz.get('questions').push(_this.quizBuilders.emptyQuestion());
            },
            remove: function (questionIndex) {
                _this.quiz.get('questions').removeAt(questionIndex);
            },
            addNewAnswer: function (questionIndex) {
                //Get questions FormArray
                var question = _this.quiz.get('questions').at(questionIndex);
                question.get('answers').push(_this.quizBuilders.emptyAnswer());
            },
            removeAnswer: function (answerIndex, questionIndex) {
                var question = _this.quiz.get('questions').at(questionIndex);
                var answers = question.get('answers');
                answers.removeAt(answerIndex);
            }
        };
        //Event handlers for answers
        this.handleAnswers = {
            addNew: function () {
                _this.quiz.get('answers').push(_this.quizBuilders.emptyResult());
            },
            remove: function (index) {
                _this.quiz.get('answers').removeAt(index);
            }
        };
        //Handler for suggested answers values
        this.handleAnswersValue = {
            addSuggestedValue: function (inputControl, tooltipText) {
                if (!_this.dialogFormRef) {
                    _this.dialogFormRef = _this.ngDialog.open(_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_3__["DialogFormComponent"], {
                        data: {
                            inputControl: inputControl,
                            tooltipText: tooltipText,
                            errorMatcher: _this.errorMatcher,
                            languageMap: _this.languageMap,
                        }
                    });
                    var subscription_1 = _this.dialogFormRef.afterClosed().subscribe(function () {
                        _this.dialogFormRef = null;
                        subscription_1.unsubscribe();
                    });
                }
            },
            // Get suggested values based on answers' values
            getSuggestedValues: function () {
                var suggestedValues = [];
                // Get all answer's value from every question
                var questions = _this.quiz.get('questions').value;
                questions.forEach(function (question) {
                    question.answers.forEach(function (answer) {
                        if (!!answer.value && suggestedValues.indexOf(answer.value) === -1) {
                            suggestedValues.push(answer.value);
                        }
                    });
                });
                // Get all value from every result
                var answers = _this.quiz.get('answers').value;
                answers.forEach(function (answer) {
                    if (!!answer.value && suggestedValues.indexOf(answer.value) === -1) {
                        suggestedValues.push(answer.value);
                    }
                });
                return suggestedValues;
            }
        };
        //Template util functions
        this.getInvalidFormControlsNumber = function (form) {
            return form.controls.reduce(function (sum, currForm) {
                return (currForm.invalid ? sum + 1 : sum);
            }, 0);
        };
        this.onChangeQuizType = function () {
            var quizType = _this.quiz.get('settings').get('type').value;
            var questions = _this.quiz.get('questions');
            var questionsControls = questions.controls;
            questionsControls.forEach(function (form) {
                var answers = form.controls.answers;
                var answersControls = answers.controls;
                answersControls.forEach(function (form) {
                    var valueControl = form.get('value');
                    if ((quizType === _constants__WEBPACK_IMPORTED_MODULE_5__["PERSONALITY_QUIZ"] && typeof valueControl.value === 'boolean') ||
                        (quizType === _constants__WEBPACK_IMPORTED_MODULE_5__["TRUEORFALSE_QUIZ"] && valueControl.value.trim && valueControl.value.trim() !== ''))
                        valueControl.setValue('');
                });
            });
        };
    }
    QuizCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageMap = {};
        this.languageMapSubscription = this.localization.getLanguageMap().subscribe({
            next: function (langMap) { return _this.languageMap = langMap; }
        });
    };
    QuizCreatorComponent.prototype.ngOnDestroy = function () {
        this.languageMapSubscription.unsubscribe();
    };
    QuizCreatorComponent.prototype.onSubmit = function () {
        if (this.quiz.invalid)
            return;
        // Create JSON to download
        var encodedJSON = this.quizHandler.encode(this.quiz.value);
        // Create anchor element and attach the JSON to it
        var aEl = document.createElement('a');
        aEl.setAttribute('href', encodedJSON);
        aEl.setAttribute('download', 'my-quiz.json');
        document.body.appendChild(aEl);
        // Trigger anchor element's click and remove it
        aEl.click();
        aEl.remove();
    };
    QuizCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-creator',
            template: __webpack_require__(/*! ./quiz-creator.component.html */ "./src/app/components/quiz-creator/quiz-creator.component.html"),
            styles: [__webpack_require__(/*! ./quiz-creator.component.scss */ "./src/app/components/quiz-creator/quiz-creator.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_4__["QuizHandler"],
            _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_7__["AppLocalization"]])
    ], QuizCreatorComponent);
    return QuizCreatorComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator.module.ts ***!
  \****************************************************************/
/*! exports provided: QuizCreatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCreatorModule", function() { return QuizCreatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quiz_creator_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-creator-routing.module */ "./src/app/components/quiz-creator/quiz-creator-routing.module.ts");
/* harmony import */ var _quiz_creator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-creator.component */ "./src/app/components/quiz-creator/quiz-creator.component.ts");
/* harmony import */ var _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-form/dialog-form.component */ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.ts");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/shared.module */ "./src/app/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */


/* App imports */




var QuizCreatorModule = /** @class */ (function () {
    function QuizCreatorModule() {
    }
    QuizCreatorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _quiz_creator_component__WEBPACK_IMPORTED_MODULE_3__["QuizCreatorComponent"],
                _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_4__["DialogFormComponent"]
            ],
            imports: [
                _quiz_creator_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizCreatorRouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            entryComponents: [
                _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_4__["DialogFormComponent"]
            ]
        })
    ], QuizCreatorModule);
    return QuizCreatorModule;
}());

;


/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: QuizListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListRoutingModule", function() { return QuizListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-list.component */ "./src/app/components/quiz-list/quiz-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */


/* App imports */

var routes = [
    { path: 'list', component: _quiz_list_component__WEBPACK_IMPORTED_MODULE_2__["QuizListComponent"], data: { animation: 'quizList' } }
];
var QuizListRoutingModule = /** @class */ (function () {
    function QuizListRoutingModule() {
    }
    QuizListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuizListRoutingModule);
    return QuizListRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <div class=\"quiz-list\">\n        <div *ngFor=\"let quiz of quizzes; let i = index\" class=\"quiz-item\">\n            <!-- Quiz card -->\n            <mat-card routerLink=\"/launch/{{i}}\">\n                <mat-card-header>\n                    <mat-card-title>{{quiz.settings.title}}</mat-card-title>\n                    <mat-card-subtitle>{{languageMap[quiz.settings.type]}}</mat-card-subtitle>\n                </mat-card-header>\n                <div *ngIf=\"quiz.settings.imageUrl\">\n                    <img mat-card-image [src]=\"quiz.settings.imageUrl\">\n                </div>\n                <mat-card-content>\n                    <p>{{quiz.settings.description}}</p>\n                </mat-card-content>\n            </mat-card>\n            <!-- /Quiz card -->\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\nh1 {\n  text-align: center; }\n.container {\n  box-shadow: none;\n  width: 90%;\n  padding: 0.5em 1em; }\n.quiz-list {\n  display: flex;\n  flex-wrap: wrap; }\n.quiz-list .quiz-item {\n    display: flex;\n    width: 50%;\n    box-sizing: border-box;\n    padding: 1em; }\n@media only screen and (min-width: 768px) and (orientation: landscape) {\n      .quiz-list .quiz-item {\n        width: 33%;\n        padding: 1em; } }\n.quiz-list .quiz-item mat-card {\n      text-align: center;\n      border: 4px solid #dfe3ee;\n      color: #dfe3ee;\n      background-color: #0E3475;\n      box-shadow: 10px 10px 0 0 #333;\n      transition: 0.5s; }\n.quiz-list .quiz-item mat-card:hover {\n        cursor: pointer;\n        box-shadow: none;\n        -webkit-transform: rotate(5deg);\n                transform: rotate(5deg); }\n.quiz-list .quiz-item mat-card mat-card-header {\n        margin-bottom: 1em; }\n.quiz-list .quiz-item mat-card mat-card-header mat-card-subtitle {\n          color: #dfe3ee; }\n"

/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.component.ts ***!
  \*************************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quizDatabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quizDatabase.service */ "./src/app/services/quizDatabase.service.ts");
/* harmony import */ var _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/appLocalization.service */ "./src/app/services/appLocalization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */

/* App imports */


var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(quizDatabase, localization) {
        this.quizDatabase = quizDatabase;
        this.localization = localization;
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAllQuizzes();
        this.languageMap = {};
        this.languageMapSubscription = this.localization.getLanguageMap().subscribe({
            next: function (map) { return _this.languageMap = map; }
        });
    };
    QuizListComponent.prototype.ngOnDestroy = function () {
        this.languageMapSubscription.unsubscribe();
    };
    /**
     * Fetch all available quiz and store them in the component instance
     */
    QuizListComponent.prototype.fetchAllQuizzes = function () {
        var _this = this;
        this.quizDatabase.getAll().subscribe({
            next: function (allQuizzes) { return _this.quizzes = allQuizzes; }
        });
    };
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/components/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.scss */ "./src/app/components/quiz-list/quiz-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_quizDatabase_service__WEBPACK_IMPORTED_MODULE_1__["QuizDatabase"],
            _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_2__["AppLocalization"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.module.ts ***!
  \**********************************************************/
/*! exports provided: QuizListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListModule", function() { return QuizListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-list.component */ "./src/app/components/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-list-routing.module */ "./src/app/components/quiz-list/quiz-list-routing.module.ts");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/shared.module */ "./src/app/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */

/* App imports */



var QuizListModule = /** @class */ (function () {
    function QuizListModule() {
    }
    QuizListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _quiz_list_component__WEBPACK_IMPORTED_MODULE_1__["QuizListComponent"]
            ],
            imports: [
                _quiz_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizListRoutingModule"],
                _modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], QuizListModule);
    return QuizListModule;
}());



/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: QuizRunnerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRunnerRoutingModule", function() { return QuizRunnerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_runner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-runner.component */ "./src/app/components/quiz-runner/quiz-runner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */


/* App imports */

var routes = [
    { path: 'launch', component: _quiz_runner_component__WEBPACK_IMPORTED_MODULE_2__["QuizRunnerComponent"], data: { animation: 'quizRunner' } },
    { path: 'launch/:id', component: _quiz_runner_component__WEBPACK_IMPORTED_MODULE_2__["QuizRunnerComponent"], data: { animation: 'quizRunner' } }
];
var QuizRunnerRoutingModule = /** @class */ (function () {
    function QuizRunnerRoutingModule() {
    }
    QuizRunnerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuizRunnerRoutingModule);
    return QuizRunnerRoutingModule;
}());

;


/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf='quizState' [@quizStateAnimation]='quizState' [@questionChangeAnimation]='curQuestionIndex'>\n    \n    <div [ngSwitch]='quizState'>\n\n            <!-- Quiz boot -->\n            <div *ngSwitchCase='quizAvailableStates.BOOT'>\n                <h1>{{languageMap['whatQuizDoYouWantPlay']}}</h1>\n                <hr>\n                <div class=\"boot buttons\">\n                    <div class=\"action\">\n                        <button mat-button routerLink='/list'><mat-icon>list</mat-icon>{{languageMap['listQuiz']}}</button>\n                        <p>{{languageMap['listQuizLabel']}}</p>\n                    </div>\n                    <div class=\"action\">\n                        <button mat-button (click)='loadRandomQuiz()'><mat-icon>shuffle</mat-icon>{{languageMap['randomQuiz']}}</button>\n                        <p>{{languageMap['randomQuizLabel']}}</p>\n                    </div>\n                    <div class=\"action\">\n                        <label class=\"mat-button\">\n                            <span class=\"mat-button-wrapper\">\n                                <mat-icon>cloud_upload</mat-icon>{{languageMap['loadQuiz']}}\n                                <input type='file' (change)='uploadQuiz($event)'>\n                            </span>\n                        </label>\n                        <p>{{languageMap['loadQuizLabel']}}</p>\n                    </div>\n                </div>\n            </div>\n            <!-- /Quiz boot -->\n\n            <!-- Quiz header -->\n            <div *ngIf='quizState !== quizAvailableStates.BOOT'>\n                <h1>{{curQuiz.settings.title}}</h1>\n                <i *ngSwitchCase='quizAvailableStates.STARTED'>{{languageMap['question']}} {{curQuestionIndex + 1}} / {{curQuiz.questions.length}}</i>        \n                <hr>\n            </div>\n            <!-- /Quiz header -->\n\n            <!-- Intro Quiz -->\n            <div *ngSwitchCase='quizAvailableStates.LOADED' class=\"intro\">\n                <p>{{curQuiz.settings.description}}</p>\n                <div *ngIf=\"curQuiz.settings.imageUrl\" class=\"thumbnail\">\n                    <img [src]=\"curQuiz.settings.imageUrl\">\n                </div>\n            </div>\n            <!-- /Intro Quiz -->\n    \n            <!-- Quiz Question Box -->\n            <div *ngSwitchCase='quizAvailableStates.STARTED' id='quiz-questions'>\n                <p>{{curQuiz.questions[curQuestionIndex].text}}</p>\n                <mat-radio-group [value]=\"givenUserAnswers[curQuestionIndex]\">\n                    <ng-container *ngFor='let obj of curQuiz.questions[curQuestionIndex].answers'>\n                        <mat-radio-button [name]='curQuiz.title' (change)='selectAnswer(obj.value)' [value]=\"obj.value\">\n                            {{obj.text}}\n                        </mat-radio-button>\n                    </ng-container>\n                </mat-radio-group>\n            </div>\n            <!-- /Quiz Question Box -->\n\n            <!-- Preload pictures of the results during the test -->\n            <ng-container *ngIf=\"quizState !== quizAvailableStates.BOOT\">\n                <div \n                    *ngFor=\"let result of curQuiz.answers\" class=\"result-thumbnail\"\n                    [class.hidden]=\"!(quizState === quizAvailableStates.FINISHED && curQuizResult.imageUrl === result.imageUrl)\"\n                >\n                    <img [src]=\"result.imageUrl\">\n                </div>\n            </ng-container>\n            <!-- /Preload pictures of the results during the test -->\n\n            <!-- Quiz result -->\n            <div *ngSwitchCase='quizAvailableStates.FINISHED' id='quiz-result'>\n                <h2>{{curQuizResult.title}}</h2>\n                <p>{{curQuizResult.description}}</p>\n            </div>\n            <!-- /Quiz result -->\n\n    </div>\n\n    <ng-container>\n        <div class=\"footer\" *ngIf='quizState !== quizAvailableStates.BOOT'>\n            <hr>\n            <div class=\"buttons\" [ngSwitch]='quizState'>\n                <button mat-button (click)='resetBoot()'><mat-icon>format_list_bulleted</mat-icon>{{languageMap['anotherQuiz']}}</button>\n                <button mat-button *ngSwitchCase='quizAvailableStates.LOADED' (click)='onSubmit()'><mat-icon>play_arrow</mat-icon>{{languageMap['startQuiz']}}</button>\n                <button mat-button *ngSwitchCase='quizAvailableStates.STARTED' [disabled]='submitButtonIsDisabled' (click)='onSubmit()'><mat-icon>check</mat-icon>{{languageMap['ok']}}</button>\n                <button mat-button *ngSwitchCase='quizAvailableStates.FINISHED' [disabled]='submitButtonIsDisabled' (click)='onSubmit()'><mat-icon>refresh</mat-icon>{{languageMap['restartQuiz']}}</button>\n            </div>\n        </div>\n    </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\n.container {\n  font-family: inherit;\n  border: 1px solid #6A77F2;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  padding: 0em 1em 1em 1em;\n  border-radius: 0px 20px 20px 0px;\n  overflow: 'hidden'; }\n.container h1, .container h2, .container h3, .container h4, .container h5, .container h6 {\n    color: #333;\n    margin: 1em;\n    text-align: center; }\n.container p {\n    text-align: center; }\n.container i {\n    text-align: left;\n    display: block;\n    margin-top: 0.5em; }\n.container .boot {\n    display: flex;\n    flex-direction: column;\n    margin: 2em 1em; }\n.container .boot .action {\n      display: flex;\n      align-items: center; }\n.container .boot .action .mat-button {\n        width: 200px;\n        margin-right: 1em; }\n.container .intro {\n    padding: 1em; }\n.container .intro p {\n      margin-top: 0em; }\n.container .thumbnail, .container .result-thumbnail {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex: 1 1 auto; }\n.container .thumbnail img, .container .result-thumbnail img {\n      max-width: 100%; }\n@media only screen and (min-width: 768px) and (orientation: landscape) {\n        .container .thumbnail img, .container .result-thumbnail img {\n          max-height: 400px; } }\n.container .result-thumbnail {\n    padding: 0.5em 0.5em 0em 0.5em; }\n.container #quiz-questions {\n    overflow: hidden; }\n.container #quiz-questions mat-radio-group {\n      display: flex;\n      flex-flow: wrap; }\n.container #quiz-questions mat-radio-group mat-radio-button {\n        flex: 100%; }\n.container #quiz-result {\n    padding: 0.5em 0.5em 0em 0.5em; }\n.container #quiz-result h2 {\n      margin: 0em; }\n.container .footer .buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 1em 0; }\n"

/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner.component.ts ***!
  \*****************************************************************/
/*! exports provided: QuizRunnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRunnerComponent", function() { return QuizRunnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quizHandler.service */ "./src/app/services/quizHandler.service.ts");
/* harmony import */ var _services_quizDatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/quizDatabase.service */ "./src/app/services/quizDatabase.service.ts");
/* harmony import */ var _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/appLocalization.service */ "./src/app/services/appLocalization.service.ts");
/* harmony import */ var _quiz_runner_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-runner.transitions */ "./src/app/components/quiz-runner/quiz-runner.transitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */






var QuizRunnerComponent = /** @class */ (function () {
    function QuizRunnerComponent(route, quizHandler, quizDatabase, localization) {
        var _this = this;
        this.route = route;
        this.quizHandler = quizHandler;
        this.quizDatabase = quizDatabase;
        this.localization = localization;
        this.quizAvailableStates = {
            BOOT: 'boot',
            LOADED: 'loaded',
            STARTED: 'started',
            FINISHED: 'finished'
        };
        this.submitButtonIsDisabled = false;
        this.onKeyboardEnterEvent = function (ev) {
            if (ev.key === 'Enter')
                _this.onSubmit();
        };
    }
    QuizRunnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get quiz to display
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.quizDatabase.get(Number(id)).subscribe({
                next: function (quiz) {
                    _this.loadQuiz(_this.quizHandler.load(quiz).getQuizObject());
                }
            });
        }
        else {
            this.quizState = this.quizAvailableStates.BOOT;
            //this.loadQuiz(this.quizHandler.load(mockQuiz).getQuizObject());
        }
        // Set language map
        this.languageMap = {};
        this.languageMapSubscription = this.localization.getLanguageMap().subscribe({
            next: function (map) { return _this.languageMap = map; }
        });
        // Init keyboard shortcut
        document.addEventListener('keydown', this.onKeyboardEnterEvent);
    };
    QuizRunnerComponent.prototype.ngOnDestroy = function () {
        this.languageMapSubscription.unsubscribe();
        document.removeEventListener('keydown', this.onKeyboardEnterEvent);
    };
    QuizRunnerComponent.prototype.uploadQuiz = function (event) {
        var _this = this;
        var uploadedFiles = event.target.files;
        if (uploadedFiles.length === 1) {
            var reader = new FileReader();
            // Reader's events
            reader.onerror = function (event) { throw 'Error in file upload: ' + event; };
            reader.onload = function (event) {
                var quiz = _this.quizHandler.decode(event.target.result);
                _this.loadQuiz(quiz);
            };
            // Start reader
            reader.readAsDataURL(uploadedFiles[0]);
        }
        else {
            throw 'Number of uploaded files not correct: ' + uploadedFiles.length;
        }
    };
    QuizRunnerComponent.prototype.loadQuiz = function (quiz) {
        this.resetQuiz();
        this.quizHandler.load(quiz);
        this.curQuiz = quiz;
    };
    QuizRunnerComponent.prototype.loadRandomQuiz = function () {
        var _this = this;
        this.quizDatabase.getRandom().subscribe({
            next: function (quiz) { return _this.loadQuiz(quiz); }
        });
    };
    QuizRunnerComponent.prototype.selectAnswer = function (answer) {
        this.submitButtonIsDisabled = false;
        this.givenUserAnswers[this.curQuestionIndex] = answer;
    };
    QuizRunnerComponent.prototype.onSubmit = function () {
        if (this.quizState === this.quizAvailableStates.LOADED) {
            this.quizState = this.quizAvailableStates.STARTED;
            this.curQuestionIndex = 0;
            this.submitButtonIsDisabled = true;
        }
        else if (this.quizState === this.quizAvailableStates.STARTED && this.givenUserAnswers[this.curQuestionIndex] !== undefined) {
            if (this.curQuestionIndex + 1 === this.curQuiz.questions.length) {
                this.curQuizResult = this.quizHandler.getResult(this.givenUserAnswers);
                this.quizState = this.quizAvailableStates.FINISHED;
            }
            else {
                this.curQuestionIndex += 1;
                this.submitButtonIsDisabled = true;
            }
        }
        else if (this.quizState === this.quizAvailableStates.FINISHED) {
            this.resetQuiz();
        }
    };
    QuizRunnerComponent.prototype.resetBoot = function () {
        this.quizState = this.quizAvailableStates.BOOT;
    };
    QuizRunnerComponent.prototype.resetQuiz = function () {
        this.quizState = this.quizAvailableStates.LOADED;
        this.curQuestionIndex = 0;
        this.givenUserAnswers = [];
    };
    QuizRunnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-runner',
            template: __webpack_require__(/*! ./quiz-runner.component.html */ "./src/app/components/quiz-runner/quiz-runner.component.html"),
            styles: [__webpack_require__(/*! ./quiz-runner.component.scss */ "./src/app/components/quiz-runner/quiz-runner.component.scss")],
            animations: [_quiz_runner_transitions__WEBPACK_IMPORTED_MODULE_5__["runnerStateTransition"], _quiz_runner_transitions__WEBPACK_IMPORTED_MODULE_5__["runnerQuestionChangeTransition"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_2__["QuizHandler"],
            _services_quizDatabase_service__WEBPACK_IMPORTED_MODULE_3__["QuizDatabase"],
            _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_4__["AppLocalization"]])
    ], QuizRunnerComponent);
    return QuizRunnerComponent;
}());

;


/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner.module.ts ***!
  \**************************************************************/
/*! exports provided: QuizRunnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRunnerModule", function() { return QuizRunnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_runner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-runner.component */ "./src/app/components/quiz-runner/quiz-runner.component.ts");
/* harmony import */ var _quiz_runner_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-runner-routing.module */ "./src/app/components/quiz-runner/quiz-runner-routing.module.ts");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/shared.module */ "./src/app/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */

/* App imports */



var QuizRunnerModule = /** @class */ (function () {
    function QuizRunnerModule() {
    }
    QuizRunnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _quiz_runner_component__WEBPACK_IMPORTED_MODULE_1__["QuizRunnerComponent"]
            ],
            imports: [
                _quiz_runner_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizRunnerRoutingModule"],
                _modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], QuizRunnerModule);
    return QuizRunnerModule;
}());

;


/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner.transitions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner.transitions.ts ***!
  \*******************************************************************/
/*! exports provided: runnerStateTransition, runnerQuestionChangeTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runnerStateTransition", function() { return runnerStateTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runnerQuestionChangeTransition", function() { return runnerQuestionChangeTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* Vendor imports */

var quizStates = {
    BOOT: 'boot',
    LOADED: 'loaded',
    STARTED: 'started',
    FINISHED: 'finished'
};
var runnerStateTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('quizStateAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(quizStates.BOOT + " => " + quizStates.LOADED, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.footer', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro, :enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', opacity: '0' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter h1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave h1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.boot .action', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' })))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', opacity: '0' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative', opacity: '1' })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter h1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }))),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(quizStates.STARTED + " => " + quizStates.BOOT + ", " + quizStates.FINISHED + " => " + quizStates.BOOT, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', position: 'absolute' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', position: 'absolute' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', position: 'relative' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => " + quizStates.STARTED, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro:leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                paddingTop: '0px', paddingRight: '0px', paddingBottom: '0px', paddingLeft: '0px'
            }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro:leave p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)',
                height: '0px',
                opacity: '0',
                marginTop: '0px', marginRight: '0px', marginBottom: '0px', marginLeft: '0px',
            }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro:leave img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(0)',
                height: '0px',
            }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions mat-radio-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)',
            }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions mat-radio-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
            ]))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => " + quizStates.FINISHED, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-result h2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-result p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.result-thumbnail img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(.6)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-result h2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-result p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.result-thumbnail img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })))
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(quizStates.FINISHED + " => " + quizStates.LOADED, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro .thumbnail img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(.6)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.intro .thumbnail img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })))
        ]),
    ])
]);
var runnerQuestionChangeTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('questionChangeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions mat-radio-button:enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)',
                height: '0px'
            }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions mat-radio-button:leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })
            ]), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('#quiz-questions mat-radio-button:enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 'auto' })
            ]))
        ])
    ])
]);
// Mind to set explicity padding and margin properties for each side 
// because Firefox doesn't recognize 'padding' and 'margin' as shorthand properties for the method `getComputedStyle`.
// Since Angular animations use this method, when it is used in Firefox, it'll return an empty string instead of a value
// that could be cause problems or errors in the template rendering. 
// To test this: `window.getComputedStyle(document.body).padding === ''` or `window.getComputedStyle(document.body).margin === ''`


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: PERSONALITY_QUIZ, TRUEORFALSE_QUIZ, APP_LANG_EN, APP_LANG_EN_TEST_VALUE, APP_LANG_IT, APP_LANG_IT_TEST_VALUE, APP_LANG_DEFAULT, APP_LANG_DEFAULT_TEST_VALUE, APP_LANG_ES, APP_LANG_ES_TEST_VALUE, APP_LANG_FR, APP_LANG_FR_TEST_VALUE, APP_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONALITY_QUIZ", function() { return PERSONALITY_QUIZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUEORFALSE_QUIZ", function() { return TRUEORFALSE_QUIZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_EN", function() { return APP_LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_EN_TEST_VALUE", function() { return APP_LANG_EN_TEST_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_IT", function() { return APP_LANG_IT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_IT_TEST_VALUE", function() { return APP_LANG_IT_TEST_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_DEFAULT", function() { return APP_LANG_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_DEFAULT_TEST_VALUE", function() { return APP_LANG_DEFAULT_TEST_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_ES", function() { return APP_LANG_ES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_ES_TEST_VALUE", function() { return APP_LANG_ES_TEST_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_FR", function() { return APP_LANG_FR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANG_FR_TEST_VALUE", function() { return APP_LANG_FR_TEST_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_TITLE", function() { return APP_TITLE; });
/* Available Quiz types */
var PERSONALITY_QUIZ = 'personalityQuiz';
var TRUEORFALSE_QUIZ = 'trueorfalseQuiz';
/* Language Maps */
var APP_LANG_EN = 'en';
var APP_LANG_EN_TEST_VALUE = 'test-value-en'; // Value used only for test purpose
var APP_LANG_IT = 'it';
var APP_LANG_IT_TEST_VALUE = 'test-value-it'; // Value used only for test purpose
var APP_LANG_DEFAULT = APP_LANG_IT;
var APP_LANG_DEFAULT_TEST_VALUE = APP_LANG_IT_TEST_VALUE; // Value used only for test purpose
var APP_LANG_ES = 'es';
var APP_LANG_ES_TEST_VALUE = 'test-value-es'; // Value used only for test purpose
var APP_LANG_FR = 'fr';
var APP_LANG_FR_TEST_VALUE = 'test-value-fr'; // Value used only for test purpose
/* App info */
var APP_TITLE = 'Quizzer';


/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Material modules












var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appLocalization.service */ "./src/app/services/appLocalization.service.ts");
/* harmony import */ var _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/quizHandler.service */ "./src/app/services/quizHandler.service.ts");
/* harmony import */ var _services_quizDatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/quizDatabase.service */ "./src/app/services/quizDatabase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */




/* App imports */



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            providers: [
                _services_appLocalization_service__WEBPACK_IMPORTED_MODULE_4__["AppLocalization"],
                _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_5__["QuizHandler"],
                _services_quizDatabase_service__WEBPACK_IMPORTED_MODULE_6__["QuizDatabase"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

;


/***/ }),

/***/ "./src/app/services/appLocalization.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/appLocalization.service.ts ***!
  \*****************************************************/
/*! exports provided: AppLocalization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLocalization", function() { return AppLocalization; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */





/* App imports */

var AppLocalization = /** @class */ (function () {
    function AppLocalization(http, location) {
        this.http = http;
        this.location = location;
        this._cachedLanguageMaps = {};
        this._selectedLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._selectedLanguage$.next(_constants__WEBPACK_IMPORTED_MODULE_5__["APP_LANG_DEFAULT"]);
    }
    /**
     * Change the selected language
     * @param {string} language language to set
     */
    AppLocalization.prototype.setLanguage = function (language) {
        this._selectedLanguage$.next(language);
    };
    /**
     * Get an observable of the map of the current app language
     * @return {Object} an observable object
     */
    AppLocalization.prototype.getLanguageMap = function () {
        var _this = this;
        return this._selectedLanguage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (language) { return _this._fetchLanguageMap(language); }));
    };
    /**
     * Get a map of values according to provided language
     * @param  {string} language language of map
     * @return {Object} an observable that emits the map object
     */
    AppLocalization.prototype._fetchLanguageMap = function (language) {
        var _this = this;
        // Check if searched map is stored in cache. If not, fetch it and save in order to reuse in future.
        if (this._cachedLanguageMaps[language]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._cachedLanguageMaps[language]);
        }
        else {
            var mapUrl = this.location.prepareExternalUrl('assets/i18n/' + language + '.json');
            return this.http.get(mapUrl)
                .pipe(
            // Store the fetched map in cache
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (map) { _this._cachedLanguageMaps[language] = map; }));
        }
    };
    AppLocalization = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppLocalization);
    return AppLocalization;
}());



/***/ }),

/***/ "./src/app/services/quizDatabase.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/quizDatabase.service.ts ***!
  \**************************************************/
/*! exports provided: QuizDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizDatabase", function() { return QuizDatabase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */




var QuizDatabase = /** @class */ (function () {
    function QuizDatabase(http, location) {
        this.http = http;
        this.location = location;
        this.data = [
            'personality-your-animal-it',
            'personality-your-animal-en',
            'personality-your-job-it',
            'personality-your-job-en',
            'trueorfalse-general-it',
            'trueorfalse-general-en',
            'trueorfalse-heritage-it',
            'trueorfalse-heritage-en',
        ];
    }
    /**
     * Get all available quiz objects
     * @return {Object} an observable that emits all quiz objects
     */
    QuizDatabase.prototype.getAll = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"].apply(void 0, Object.keys(this.data).map(function (id) { return _this.get(Number(id)); }));
    };
    /**
     * Request a quiz object
     * @param {number} id id of quiz
     * @return {Object} an observable that emits the quiz object
     */
    QuizDatabase.prototype.get = function (id) {
        if (id > this.data.length - 1)
            throw 'Provided invalid id';
        var path = 'assets/quizzes/' + this.data[id] + '.json';
        var quizUrl = this.location.prepareExternalUrl(path);
        return this.http.get(quizUrl);
    };
    /**
     * Get a random quiz object
     * @return {Object} an observable that emits a random quiz object
     */
    QuizDatabase.prototype.getRandom = function () {
        var maxId = this.data.length;
        var randomId = Math.floor(Math.random() * this.data.length);
        return this.get(randomId);
    };
    QuizDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], QuizDatabase);
    return QuizDatabase;
}());



/***/ }),

/***/ "./src/app/services/quizHandler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/quizHandler.service.ts ***!
  \*************************************************/
/*! exports provided: QuizHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizHandler", function() { return QuizHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Vendor imports */


var QuizHandler = /** @class */ (function () {
    function QuizHandler() {
        this.answers = [];
        this.encodingDeclaration = 'data:text/json;charset=utf-8,';
    }
    /**
     * Encode the quiz object to URL
     * @param {Object} data the quiz object
     * @return {string} the URL string
     */
    QuizHandler.prototype.encode = function (data) {
        return this.encodingDeclaration + encodeURIComponent(JSON.stringify(data));
    };
    /**
     * Decode a URL to quiz object
     * @param {string} string the URL string
     * @return {Object} the quiz object
     */
    QuizHandler.prototype.decode = function (string) {
        return JSON.parse(atob(decodeURIComponent(string.substring(this.encodingDeclaration.length))));
    };
    /**
     * Load quiz object into a quizHandler instance to handle it
     * @param quiz the quiz object
     * @return {Object} the current quizHandler instance
     */
    QuizHandler.prototype.load = function (quiz) {
        this.currentQuiz = quiz;
        return this;
    };
    /**
     * Get the quiz object loaded in quizHandler instance
     * @return {Object} the quiz object
     */
    QuizHandler.prototype.getQuizObject = function () {
        return Object.assign({}, this.currentQuiz);
    };
    /**
     * Process the provided answers and get result according to loaded quiz object
     * @param {Array} answers an array of answer's values
     * @returns {Object} the result object matching the provided answers
     */
    QuizHandler.prototype.getResult = function (answers) {
        var answerObjs;
        if (this.currentQuiz.settings.type === _constants__WEBPACK_IMPORTED_MODULE_1__["PERSONALITY_QUIZ"]) {
            answerObjs = this._getResultForPersonaltyType(answers);
        }
        else if (this.currentQuiz.settings.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TRUEORFALSE_QUIZ"]) {
            answerObjs = this._getResultForTrueOrFalseType(answers);
        }
        //Return first matching result
        return answerObjs[0];
    };
    /**
     * Process the provided answers basing on the quiz Personality type
     * @param {Array} answers array of given answers
     * @return {Array} array of possible results for provided answers
     */
    QuizHandler.prototype._getResultForPersonaltyType = function (answers) {
        // Sort answers values in order to group them
        var groupedAnswers = answers.sort();
        // Get answer with higher frequency comparing their offset in `groupedArray` array
        var answerWithHigherFrequency = groupedAnswers.sort(function (a, b) {
            var aFrequency = groupedAnswers.lastIndexOf(a) - groupedAnswers.indexOf(a);
            var bFrequency = groupedAnswers.lastIndexOf(b) - groupedAnswers.indexOf(b);
            return bFrequency - aFrequency;
        })[0];
        //Return object matching with answerWithHigherFrequency
        return this.currentQuiz.answers.filter(function (answer) { return answer.value === answerWithHigherFrequency; });
    };
    /**
     * Process the provided answers basing on the quiz True or False type
     * @param {Array} answers array of given answers
     * @return {Array} array of possible results for provided answers
     */
    QuizHandler.prototype._getResultForTrueOrFalseType = function (answers) {
        //Get number of correct answers
        var correctAnswers = 0;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i])
                correctAnswers++;
        }
        // Filter answer objects matching with number of correct answers
        return this.currentQuiz.answers.filter(function (answer) {
            var rangeSeparator = '-'; // If `answer.value` is a range then it has this separator
            // Return answer if is between max and min allowed values
            var maxValue = Math.max.apply(Math, answer.value.split(rangeSeparator).map(Number));
            var minValue = Math.min.apply(Math, answer.value.split(rangeSeparator).map(Number));
            return minValue <= correctAnswers && correctAnswers <= maxValue;
        });
    };
    QuizHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuizHandler);
    return QuizHandler;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* Vendor imports */


/* App imports */


if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/lgcolella/quizzer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map