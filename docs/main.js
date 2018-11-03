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

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_quiz_runner_quiz_runner_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quiz-runner/quiz-runner.module */ "./src/app/components/quiz-runner/quiz-runner.module.ts");
/* harmony import */ var _components_quiz_creator_quiz_creator_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz-creator/quiz-creator.module */ "./src/app/components/quiz-creator/quiz-creator.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeader"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _components_quiz_runner_quiz_runner_module__WEBPACK_IMPORTED_MODULE_3__["QuizRunnerModule"],
                _components_quiz_creator_quiz_creator_module__WEBPACK_IMPORTED_MODULE_4__["QuizCreatorModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <nav>\r\n        <div>\r\n            <h1 routerLink=\"/\">{{title}}</h1>\r\n        </div>\r\n        \r\n        <div>\r\n            <ul>\r\n                <li routerLinkActive=\"active\"><a routerLink='create'>Crea quiz</a></li>\r\n                <li routerLinkActive=\"active\"><a routerLink='launch'>Carica quiz</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\n.container {\n  width: 80%;\n  margin: auto;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACyCAMAAADPnVXpAAAAdVBMVEXDw8PBwcG/v7+/v7+qqqqfn5+qqqqzs7Ozs7MzMzOLi4uLi4szMzO3t7e8vLy6urrExMTAwMCfn5+3t7e6urq8vLyLoqKLubmfv7+fv7+fr6+zxsbB7e3G8vK829ufr6+q29uzvb284eHA4uKfz8/BwcHDw8M41T80AAAAJ3RSTlNAOjAAFRAAGwAFCwAAIColRTUAAAAACwsQABAbOlAqABUbKjUQAACPaocFAAAf4UlEQVR4AYyYj3riyBHEJbaH2WlpJLB9zuXyb5Pc5f0fMVNdKjICyZv+jAwyLv0oanoahqhxxE+7Xb59+2aotCuz69XSa+Xv37/bwR/a08tB+TRNx+qWs+U48IZqIi8yHj/zZRiHvkY8tivKIW5JZYTvz/G0lRnF0w8ie8DPZdbRcWE+/VA9oBt+5a9cM8RRPkECOjiy5gWw/AE4DqtbLrOZl4CxDobwMspAbs3HAnX8C57G44vzs64bNCfqneOy3XHR7FNIuLRwF/BbMS/j7e74//RmFhcwo/CGey26lOjf3qBGsWImHhM87aLj25VzfT9R34PnXErK7RI+3Ov7+xYWFeFHsgf9YAn/VQEPvQKePsRlH1SgexAxzE4c+Smz40jLZqvL+nGiLuhs1iB84tt4dSzDtrAKi6KEJ37AV6sZVX2yRBffkh0uWKiKWda2YpZZcl5Pw72U1wXwx+rWpcaKEvgG+OG+NKtolOBXBgbH28WzKmLD5ZgKjgeZ98mdUO5THD06idkz/MN2r3Ul/LE64c1gX+HLQ4TTLcy9r1hfUcr8uK3Te8pc6yg4n0yURZcSvJnBBu/AVFC1zdhuwfqETK1Lq3b45UTdttxU86SyiA0tvqx8J2fFhvRjVZuS891/J17AYKXpLeiWoNREz+xY96wZ70gFu+AP1SOyudaSrO+gaVuSEX0ZRfg4z65K4+W8CtLF7bFgLYHWFfY9PHMUXULwgZ5qBTbrlxN1C/rCk4JvsQnnR2bnYsKfL/F+LEPfoUyZVwNmO3/Aq+HyqAz6tg9N2wM673yRqbm+9vDH6tifUtnvvtEqaTHqPsbKJTweW+3gu8x3GtGXEXRrdPsSvLL4WFB0Hi8H7ZG1xJ2PE/VUDehaVtu9q98iM6rhvuJS85yH0VLNz/Ds87sy+IOS4Z+ff/rcL9j9Az67vd5cV6GjAH+q3idGVcL5gNcocKmxUTt2pWd4e4E3Li2h96XMzx4/3QzCmaeSnfAowh+qy+/93uXsKijtSZcF02CNFvMM/+uflcl+GGguvv326yG8eFWuCazUgOatslfW9zN1vOnbDsuXBLoy31u2W9ixXvlzv18uaNbpL3/929+f4X/7x5k3nz+OIj/HRnXgvAGbJeu/dp5bl0LPGcQZmn12MLfX/M9//fvF+S8zz8Dv4fetJ4rOZ2L/v5m348yPe24c63ub1UyZ/2m3mbYqxMftd76Iw24zs0oF7k+7jdT9sNvcL4Rn7lutmvPtoNsc9HmhA8gV7B+/Bz3hd31+9trMyWs7sV7g+dd9/n/lX/d5/L74lMemHkmrP91h+zU5o7TDyvmuPGzPzWaflgWzbAL4Dv5YvVD9fIeN492u6d4e/OF8x4apfDnbwBDOjK4O/sVsA/QFbnsJ1oZvsP5ktpE6l3yIn842422sxSNEgI/1PGDHPZ0qHzuTKBlod/EKXn9LazACnjFPb6XylOAP1cMPh97xVDnebutHWQb2/T/YYW0IkXI0z6P9uvDmbk2K3nVJPAwX62WDT4BHLYh+RXI4zx+qa+VQ5XWexxBW5vpoOf9xyjT4xPTvP0mFOLD0MVRtnPQHn6TmUhWQyPzGvmJDT7izAP5EnZdADqG+/ySFHap5eg9uVMTGjPC04ekzrPim6Qm+jz7P8UQmOuHlPI5cuYucP1TfXKGk8CM2sDt/T/dbYJMfzoN6YGfNjL6+PeBK8qls+XBeRewufEA4N1RhswjP5g5sfIuBex8n6u0obeLr24NGX9/Lok+suNF5xiYiSPf1vQ3B+sFd8Cq1TX5vo1hssK2c8Io6V25u3edEfa/toYvBerwtpazBrW0qnBc82YmvkqxaeTjfBYf35q287gaYzXk90ptRQR11oC5J2S/xEutU8IyNnBe86Ld/kZySvnf+cW6jqTCW8JphNvhV+Lxfy6m62OfnKcOiV2qbAvseXmXqApB7fR+PPndAvh+/iEp4sqOUHrTN6UxdpR7kQV9B/UgN2QVvfebx08Hv9eQ8zOrsaafXl9mRselL/qdj9dfMy5rlpqiggpx9nq3ycPSVIU/ePNz3vuNX9RTl/gl+lfPVT9V3b6nYUWvDFb6aJWebDp7DwqOOPnUoLa71qvL1AjbBq9s8wa/pC/Wd787QsMpyG9UjWeNr5iPuGYP+bnwR9z6Vj27WLmuYxgjZwU8C12TQ+l489Uhdc42M55QAM9G70wWhATwPT/D8SuxqGTtsN33tYyO/1QqKxdTKoTyvKsHvAt9MaTDpVD1uvICMCaZGBPyxub/fYRNqiOTj8ilzh/VuEJNFTmZa7hs6BHxikyqzZ1r8kvkLw95YgHOorqArk5wtA94s1/a7Mjd0nvDIPGYDTOv8ahzhoQEaWHfNzF39PaUHvKYjrxcF/UJ4TjYIezJ9AXusvs+jmz3gt4nrbe02WXYb40iMobLa9gFc7x797ZxXcW6ynfOohshtatU8H77jZeEphD9Wl/MKOwuON3QDmU+PaV6tEn2+qRiixQK8PGZn6+Fnup6NISA8Hyj6hE8FDYifpVx7OOEP1Yu7EiNfYvisWcWVe3vA46LD9Yqwg94Ev5Uz3LvxAA9po2JDcBoboylCrszXhsVnbjjXE/VYSxrlVQ2eH/FYzYcc7HK+DB5piRvhu+1P3dZBzQeFGDwKXkX8qqmyMjHdX8/UNVgzXw/9Bs/Mb/xYBNHnC3vMUHme+Cbnu66u0ZfDO8VNPHv4LTtpbZ2xru1S+qOI7HqqLmMkt8XGas2qGp18GdePD0MU6oC066XtY0M/GE4W803pQ+cVHtbmo+i1YE/VkzrXVjC6sZPNNn49v1hu8PqTCb7fPVC6gINc8P/l4wyQG4d1JCqnoPibs0zsP5Mj7P2vuEHjwR1WzGWlbI9GhlpQAwQB0LxjsIaowghZ6OjTGAK/k65TLcuuEuwxmx86X4aamm/mBOAJHe3acY/IfKn5MEKK4xwBfjCP76Q7ybeAT1RCbKcyZ3o1jSMKe5B3UtKuxzrpLVo057nmSlYIzAhrfic9Fr48oy04wSj+55oG8AJukzXn18imfOSi4pXzaybMc03EQputdJPSZ6fmn5qdUKRMqmgTPA5hx1VaPA6NUVQwCV6BB7rhr5zfSsdILB3aAL5YoziHEU/NBydY8wOttDOryXVEgfYSAPAoraAnosrEcdDdIBvpQ2boydqcZ8APnfqNUS4tjlt5UkKIicEuyxmC7TEc1thg+ZdeQzLra7RPDHtXGexGeveRSE4Y/Ax0225y1POrYtChbA1GHYC3G8ih5gKyxA3/hZ8PQ+9GBB0wFjj/QrocJU5qAU9wIMbr5kpDNBwdUo/NucG3dCfPfcwhwgpe5OqoJaLhc3pIZxvpHf/Us3JsA3jstHVE0BFH6KIn8+x8LkYQ7omko/mbJ6ACD6N9vljWZLc6RZuN9Joe4F3pQ8BEiaimLZIzgJfme41g2gyWe2Svnausi7bX13iGxAS4LgmaWoLftNlI/+Eiy3JpbCNWT9YKdod3Z69h+4ZxlRIqKB6AB//oGTflSBvyvYJl8GsmDkN/30g3+L7ZsJ9v6oVj02jw0hyrWIFnlaMw2wTVn9F9D1G6XYwdOE1ZBmM2bKULC5YE/AI/Z9GC0KfQvjvp1E464eccgHA/XOclePeCLXXS9F0T+AFuLFV4Evdr6evMSt0kF5Z1156pAe/KiKeQHsPVhDEMfh2eG0FuU4TzftBYbo0X0uGzoNe7A2vj+w3et9zfSIEOuG2wxt+KLugeEGuljbWq819KfxHz4QNiEfObNh4RqXZb0iaP2/kn+2oftcH+HnvpNm7UCPMHbPdo8Oeq+fZ47cJ461SNATqvTqnAN+Ds8XpJZxRfSzczzPxYVhGxBW/hGq1FcAHetK7hXOh4kfpeoeNDNFbpBg9AT95ev+05zzFRBmsr0atjBx8as70O4YHHtmUjCfviVMxL6QaP2XJqjriui4Iw+P5OBQlz5AqLOtkTCJr3oKSTr9c3JYDHMKDyNguYa7q9+Tn/bqT/gBcwJtR+EcM1/YU2Am/THhW6xZzVuj5Wt/gr4VJ5ovlJuWaM5XSJBb/mSGXQvjbSgQe60qPyw4JGs6xzWw0+IHumEjTDXnmH+gbvSm+X9AT+42NWHtisBzxDeqTL799GujVfTqbL8aUC3A7SYtF8iorZy0A+6AKjLcu0KR9jkF2zV1kiz2zwhICkMN9oFtpIF3jxS5HBjLhGfIuMH8HR95fGGdBG70eQac2hSnivGSfkXMs67jww+KpUfiYb7IdCcAQ9dEaB30gvptc8ExM02fCCuvUfRXgHZnHUPRF65rX0se6mUhhLeLBCBzyJeMEf5NjdNf2tdbcmbqRrkoHsrKmV47C3Kmrb2+Q43oc6kCdrFnkbMg3edAJ4hwMugk8XMF1oFXigfx/l6ST4jfSeIYegK4ckzRPzaKi5s8HLkg7a1lEHtNHBeJJTqoQxIqpDATTftW8st7o8c6MFXP+kkP+1kc6dCgJQ0DwTgMMLFUBqIviZq4xo8Jbh1ObSNmDmTIHyUMMpzZXBHbnF8msnvVz1kugQ+JcBRs2McT10GrrXMtBfZsxo+GsPZRssyExsQuvzs4+6h+JrLz1E3U61o/mfevcil5RZgV/Sff5ycS+CPFUDXk1gFiUATuk18RRT9MdxaX4j/WwQgSIBb+xL5DCU+j76TISieYuX2X+yOwedr67S0N08/O/fbBuuwQ3820i/zVagoTT4tbWjApliGODnVOGBGRbBiFA56HuAfhloHpB6b6cDZB20q9xJj6mP07cQAh9WuMC35gGPKCR5kvKxp8kavLMg84eCgQrno6rKfQefgN9Iv50T7E0ca/5V2B7WvF4r6vC/eddDzZZ1K38x2FY8hddr8qrGNaFjBmh+J718/GJ+L8BHMNWonZKaFMIUC5HYtPD/zuxJi/vxUOxrc9XLLFygl5/XLF+z8qxyrFvQN9JHdHunZymVXlfsgzj8rIzI8T+415jhSYrEsRxBPI7Lcb9d78dxf3PsuwRmPSh30wSgAqh9UX742kh/rp8102PLs8GH27DqquzNObRKQPcGn4zTumE8smwr8GqX+khAPxO9n0++a34SdHZlUrCBNDXDbqRjk1qDrJMUvhLoSD3r/4+UQVSJn/9Z1vy406sg8HmlrIL+GwZvzQM91u11gm/Nb6TLkbCw+M359P6kkwBfvvGICu+es8b7TLWEam61Z7bBP3fOpGsbCHqCTx10rtfgWaZfmztfG+nP4kRFZ1NYDD46vcZF5ZlqkpqToEiVEXEyj1zpY0zQxfnulXo7/QTLHyYYuAn4dTYY863Ab6RXvlxQK2s67SprIUh2yuA1w8L1pD5+Xunw81FQuUaCv7jPC8tNzrMOcdqwVvP2qTqN5vSvjfR1iV0PUf3wbad2zimNCOhQcMpccepmy5IubsOU+HCrkV4/WLVe34rsThYUeK96O9kZn2/z70b6M6Ppbc6RM2+Es+eOxAH/1DwLs6G9Iex6BK3+RJsLR/NVlpujSkWRg5ywNa/hekJ6k9fSnX4/R+dZn7uW7JztbZo2bmhh/ppHK0Wiy6QiOY+6Hmq0uz+u/9Fgrb12yngedj5nL91PDfW7nOuv81JrRVfAwV8Vt0s6sAc462OCd0fs0WQ9Pr6+vkaEr7mA9xWd7tlIBzZD4O1iFsZgsAFtHN2IZvNeMJGbr9lcFK12vTDuJCV9aYNv+HwkabKRbgmwJ8iCdEe9NSDwwhqleaBP3ezbUUIf7kBG82D3U0/a3/DQfemV8x7sGHgt3YQ5GZiqiygIMecdVcaP9eSZk7bEW/6tNW/F3z9ubhpYVsqAt+5R+1a6DdbQEW7+8XGs4M33kQ47Z5AyyaZ3ir9K5+g93986Dr9RGbS3E234c2lWbasb6e7/4yVPd1LZq7jV21SQpOznqJBYn2lc54UZFrXrkJIEWpDN6Oze5odKRiWVxYSN9HVXI81GCckbs7ausuqFtZKacyaBbp+HpQu8NXVcMjM5aurp2jrZRnsbD1ed319Ld2DWhho5kLJm9Ds8wGBFdkLRSvfNnAdvb22aHVVCGe2MHMhhKapE7qL5Jclw64X/Rrpvu4uXoU9DprNofwAeV5kn0Y7rZeDMZNtD4tVEesW1HwQGaMLdsAlfEA3efaTXOr6V7sYQWiciQlJAbJe/GKzIzooe8Br0YBLL3Dswq4iyRS6LB7fXiK1/3E0ebpDbSKfSHN1Rs5DPgp5+fkoFRwZVXsQ60aqh7mmp/HYVOR+LTqX56egor3YyOWY0KX+01q430vMUoOu832aP5Tbnlaw5ZKdEaQLfrUOB/xwfB+CxUxizBngFatKthM5ohA+T4n0jvVuNqN0smkcWwRG0kaYcVfYykA/TseZ4y97j4yI79XwNbfp8UY/uErFVk0A0dGizkx4npLPiF9rQLU3ddyjDGYf7EonqIXA4c1wLAOJZRLm7w7RBqc4qr2VhaX4nXdAbtH3Wvt8hqWPN6x3Oe9RV3mucBdqKZ5Iyjett+aGqBf77VvoN6BrP7QR2tyv88jfHkpxdwDudGDO1uSI3beaac/ekFdI2YCjI7KR7ObPUEtaZ1fCjXWUifwW+bWuCZljSCh4mGHxN2ABfy7876YK+9JxK873idnRWxNdFCrzGK/C8TUenHth/GEjM7qZeG9BX2mykd1zGWMF74H//6KaPjMrWjFnBcRp33Qta4vwADUQDDmsM+w20Ge976Ul642eeLlteNlszbpHgKb0hsvxBGFKmNeLy8VVDCl8cTj6/EO+8DtbOHTYkrUz470a6AmumKtPNmqevM6HPnG2q/HZkfoe4pp74tOggBrkcx/gzPMd5FG0A5CZCJS1C8E1k0WYjnYZQzjZtrKyBc8s18P9+g57VjhvQhr5KsVd4hOXUuu1ABQnfyjfnnbEeJFrjdK+S/d9OurfRRyN3hOQtfZlTVhxXisp9Ujd8VpfvIWNiqbj7eADeEcZYNT+BfgPoM8tY6fr2JVvp0GuY+qV5ByL5X28HPx0QRJV1zVZdlPjA383Ojx1YDdyx50Lzc1ZNLwy+udJsqNaCjfTWdcFfwWtoa+xdehdtdPtHEj5USnQ8P8vw4nE/Wr63aQuy2yyDUMUr2QLPBzeElp/fSA+7paIalTNvupvHwcoX2pDiJlEJ+EkOJOnY6QLAr0uDP9AGzy5tgb85735W3P5Oug3Dz6pSfjjkb7I/gC/wVAOJTukuyprUnN/B0idyyeN2HMYtVJdWg3efuUMqRzZu5Y5430j3N7vbrQLrWifLrPUNvRZtnDGbVYfWjzaIjmSXGJc7lFnXBhI8RQsPwK8theQyxp+N9HUypsGDZGuF/ACvLaWnZieX75mmNYLHw1eenB/Gvm5VeZHu+5V8/H+lx+rgmSQ0PgoxCSPAXwv8EmlUlPFwQhjtAN5pR7KGDT1iq3mHBxXov5a+TsRlPJI+IYuGaVM9FkfFlC5JvUc6AaQ7v+d5el2O9P4Kp11i1TxH5T/20tfOSRvK54Jb2NF875PyEHjLzmFvs2Sa3Ua/ZPoaLuDXCDf20sHuQW1twiuU3rvvT6EmY8YafEKbPo80eoE3cCc8NQzevl3gjYjPe+kOPy1JBnJtxIdptngbaONY9nrJuczMBLyjGs+1DT+2nAe7074vpAPeow02y41YK3leaX5AG9he0KuL609x7TDZGry5Tv6xf4XBSu5gdj2gZMhUify3dMDH6mtGInrop3l0Dl9pzc8rBpufmN57Y//QDOiK3Sg1dMpN/1QkVad3sigiVs17M8+pTqfX0q15yaAYOP+OvLnvt0c7VbvKSrRGkG2hi+gbD9Paz8qrqgXEZgWdfSbecgpy+3l8ZEN/S/Ab6XyzfRJx7t9TCfCLfo6qoBOYTbdp9RbEiAJPv7CK1DZYxvJjaXXY2wYN/spHuitp1PraSHcl6nTGetYPD1bRd6J4wDfn804hG6ocrc4p4eXnOQhM78gaPA1v4DXnewfWswvq67V0wLsLusD9Z9xL4crWffAxOQ9twq2zDb6HOsWenLeGh/lRLBggAn4keMnDTlPrgN9Ix92K7FPIBf682z/O28BycZVRWWK03jxYWxDzhgFP6tTYl3vFcolqnxRwy2g2Qm+kt2e/scqix2xoPkb7/bODl4ptchk4jNzbE5fgMct3h3Bhp6/ADyIfHsz7O/6OJiEazVT6fCW9W/6vk27dKYMd+BjhV7fJ9XK/p+ZV/ztOgzEa92uIKNfHd+qjqzPxW/PP5hs5Eqc+Bp19YE/wG+m3gg7blYuZU+CbNjkh/19fZ8AbN64DYTfQNmte/LpAm///V6/LIT+ROusZxQKbuuyEHlGURI5fLuH3Dv3qMD0WTVpCeSMDapglcxpw3tYenrg+0+eVNlvrMQjLdpSHygCPWOivP3E9xmhNXuvRNZjWrL153rixb8ghJ1drzHbWzyZJ8kYu2pCRJfzX4eUarUPt/gwSTETxnmktKtHQX2QQ3nZ9b6yfUTTXjioAr88oWTje6FNNazR5EDzf0nYN1ep1oviSa3JS/3Caw5uoUPzeWR9eeRboqeI4p0RrmWHZyjomEsCvanFztQfw+1DZUmXFd7Drz/fWulFIHDvu4+35FzpUYP8fRxdq5m0LgOYTayPwLPc28F9rU73sU1FJte733npUvY1RShMtk+eDaFk1XI7e9Tj6KUoYd0S1s38ySLv2UF1Y0D57oMEW6L+/N9aN8455VJHRBvU+r3g4fS7z0HqkZARNdjfiOVJj1zwS2v7QpoJRcq+5yqxUVP7C8zvrkV2MqfjitGG4UvGgKWKMT+0SV/jjv+lBhvFoiJdcUAXfdqKQAJbClFO/gt9YLwWYcULmu1MWdM+Khyw6Mi0SjsfMh+fpL7aKT4djpq6B37VTwGgVF6ujIBTwG+tlqNu42L1HSJyKB91lwnI8qFUgny+LJZvqeq13bzaL0VJHXTtwwCPqe9vFzno8BlH/ikj/TDnrlyoemNVoow4uaxXjoZLtMPzotKGbfvAgtCMHdIwDvtRCKzHbWL87qfTcRgs/tS+FCrI8L/CoPUYXIm6MEqW0WCYERq57Hgq0Q4cum5nCin921inBjKFT0gNPZ5yEgO/quIqD7tRckoaUBXwmnrJG9oS9sncBD5rUXP4Q+BvrVTXYQqZOtPGzvF7wUMBzkbILC+bCPNjLxgolbGuu2A/eiCS2tb6kd47lr3Upo1pxCLTB862bBCzIZCdteq/z53kn2tA8X6Y8I/e9s34jGIrx/hed86OqDfysrWg0rFsMWNL5CK26vfkYx9H0PnEKz611+NY9wKhehEWzH7Yl6UWZACPQprOGhn22Xjv49dQ9h+LGullDHg3msK+Yt8p5gEMcxl2RNJSmSm8xHFMJmP/jFjy3bK3j+ZU4ZoSlPXi/MmMzHOI2iDYFfNUS4c7l6fYMkvxxsd4HLIsxhoiD777p4AU9rKMi2WkYo4IiCAQkGo93nhcHwLNal28bk3KMOKX03PahErEJi0+2MwAfwIEuNlVd8y34kL167qx3ddyYZaeC0rzZbsAbkkzWazDjZ009TreLCJTpg3KlDYWhb/A76zVe5hx1vcmTIkoYrOCRk+pkBQ6voEl6Vak1tJowgOeXb7n7uLPOs4jFfnRlGiMXqvVJqlbZN9kj8j5CZX/pAOBb9xtmFJGp5Wrgu3V9FH5d\"); }\n.buttons {\n  margin: 0.5em 0em;\n  display: flex; }\n.buttons label, .buttons button {\n    border: 1px solid #0E3475;\n    border-radius: 0px;\n    background-color: #dfe3ee;\n    color: #333;\n    font-family: inherit;\n    transition: 0.5s;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    margin-right: 5px; }\n.buttons label[disabled], .buttons label:hover[disabled], .buttons button[disabled], .buttons button:hover[disabled] {\n      border-color: #7e8d98;\n      background-color: #7e8d98 !important; }\n.buttons label[disabled]:hover, .buttons label:hover[disabled]:hover, .buttons button[disabled]:hover, .buttons button:hover[disabled]:hover {\n        cursor: not-allowed; }\n.buttons label.red, .buttons button.red {\n      border: 1px solid #fc4a1a;\n      border-radius: 0px;\n      background-color: #dfe3ee;\n      color: #333;\n      font-family: inherit;\n      transition: 0.5s;\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.buttons label.red[disabled], .buttons label.red:hover[disabled], .buttons button.red[disabled], .buttons button.red:hover[disabled] {\n        border-color: #7e8d98;\n        background-color: #7e8d98 !important; }\n.buttons label.red[disabled]:hover, .buttons label.red:hover[disabled]:hover, .buttons button.red[disabled]:hover, .buttons button.red:hover[disabled]:hover {\n          cursor: not-allowed; }\n.buttons label.red:hover, .buttons button.red:hover {\n        border: 1px solid #fc4a1a;\n        border-radius: 0px;\n        background-color: #fc4a1a;\n        color: #fafafb;\n        font-family: inherit;\n        transition: 0.5s;\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.buttons label.red:hover[disabled], .buttons label.red:hover:hover[disabled], .buttons button.red:hover[disabled], .buttons button.red:hover:hover[disabled] {\n          border-color: #7e8d98;\n          background-color: #7e8d98 !important; }\n.buttons label.red:hover[disabled]:hover, .buttons label.red:hover:hover[disabled]:hover, .buttons button.red:hover[disabled]:hover, .buttons button.red:hover:hover[disabled]:hover {\n            cursor: not-allowed; }\n.buttons label input[type=\"file\"] {\n    display: none; }\n.buttons label:hover {\n    background-color: rgba(0, 0, 0, 0.12); }\nbody {\n  margin: 0px;\n  background-color: #6A77F2;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXBAMAAACG4mBhAAAALVBMVEVAQEA5OTk+Pj4/Pz84ODg8PDw5OTk4ODg7Ozs7OztDQ0M5OTk3NzdFRUVISEi5S1dSAAAAD3RSTlMwWjo1YEBVZUpFKlBqJSCof7U2AAACDklEQVR4Xh2RwWvaYBiHXxI+aPSyOmMa5iGuznWOwTczSqp4kKVVcYfvm9IWdjLTpZRdUiS02EM6W4SdFIOHnqy9uJSCGkfGjjvIYJfBTmOX/Sn71vvz8jz8XnDCMnfWRHFDiB6r3XJo78gzDWEVYKHnJ0tMbXze0Qq9hytr+zuKewzhypuP4TKPiganns25d7ivG4Lege6969iipxHXzk5a3s3pdGIrbikL/Zej7gkfGEiao4JHhxX8WtCdEWxVqlonF9tRqL3uflnzAh/cEj8AfF4CPHNqBopHhNO3XjDd0h2tDb6g+0jK31hk11aGZCO2zvBuASrYbavB/NoUR9TIMAuL0UpPwPSFqJ+LVVNW6OpkRP/HhPZe/oJEG2+UMguZDwbJJpIMoeXgze0QoOjXn0WSs0juwV1T/0C94BtzIHRbtQgfyKpkMPyTBZPW5eYSIih2LqIBm0ZjeHrlx21tJnNxsKq0QGjJe17GDOe5xsWB2iAJkET0GZn1Z3++A4sZ9p4W73vSdAyp5TpQcaNJxbsYmZ9dolUlC5wkZruH46itMLx/UO894mYG1wSSsgc04rkiihpCAR6Lo9QynbRAzDBDvSOQ3TJ2y7cvRM6MjFdnEE2nLIW2MXpPfusOqvcSVjp5NIZXl2OTKf2xlL1iQ8pcY84VD//Cmqqwgxp7yoeFo7V6qW/5pK3s/wPxo6keqhNsswAAAABJRU5ErkJggg==\"); }\nh1, h2, h3, h4, h5, h6 {\n  color: #dfe3ee; }\nh1 {\n  font-size: 2em; }\nhr {\n  border: 0.5px solid rgba(0, 0, 0, 0.12); }\nmat-vertical-stepper {\n  font-family: inherit; }\nmat-vertical-stepper .mat-step-header .mat-step-label.mat-step-label-active {\n    color: #6A77F2; }\nmat-vertical-stepper .mat-step-header .mat-step-label.mat-step-label-active.mat-step-label-selected {\n      font-size: 1em;\n      font-weight: bold; }\nmat-vertical-stepper .mat-step-header .mat-step-icon {\n    background-color: #6A77F2; }\nmat-dialog-container.mat-dialog-container {\n  font-family: inherit;\n  border: 1px solid #0E3475;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  background-image: url(\"data:image/png;base64,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\"); }\nmat-radio-button {\n  font-family: inherit; }\nmat-radio-button.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #6A77F2; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1) !important; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-outer-circle {\n    border-color: #6A77F2; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #6A77F2; }\nmat-radio-button .mat-radio-label {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1em;\n    transition: background-color 0.5s; }\nmat-radio-button .mat-radio-label:hover {\n      background-color: rgba(0, 0, 0, 0.12); }\n.container {\n  font-family: inherit;\n  border: 1px solid #0E3475;\n  border-radius: 0px;\n  background-color: #0E3475;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  color: #dfe3ee;\n  margin-top: 0px;\n  width: 100%;\n  border-width: 0px;\n  border-bottom: 3px solid #dfe3ee; }\n.container nav {\n    width: 80%;\n    padding: 0em 1em;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.container nav h1 {\n      margin: 0px; }\n.container nav h1:hover {\n        cursor: pointer; }\n.container nav h1:focus {\n        outline: none; }\n.container nav ul {\n      list-style: none;\n      margin: 0px;\n      height: 60px;\n      display: flex;\n      flex-direction: row; }\n.container nav ul li {\n        transition: 0.5s;\n        padding: 0em 1em; }\n.container nav ul li:hover, .container nav ul li.active {\n          background-color: #6A77F2;\n          background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXBAMAAACG4mBhAAAALVBMVEVAQEA5OTk+Pj4/Pz84ODg8PDw5OTk4ODg7Ozs7OztDQ0M5OTk3NzdFRUVISEi5S1dSAAAAD3RSTlMwWjo1YEBVZUpFKlBqJSCof7U2AAACDklEQVR4Xh2RwWvaYBiHXxI+aPSyOmMa5iGuznWOwTczSqp4kKVVcYfvm9IWdjLTpZRdUiS02EM6W4SdFIOHnqy9uJSCGkfGjjvIYJfBTmOX/Sn71vvz8jz8XnDCMnfWRHFDiB6r3XJo78gzDWEVYKHnJ0tMbXze0Qq9hytr+zuKewzhypuP4TKPiganns25d7ivG4Lege6969iipxHXzk5a3s3pdGIrbikL/Zej7gkfGEiao4JHhxX8WtCdEWxVqlonF9tRqL3uflnzAh/cEj8AfF4CPHNqBopHhNO3XjDd0h2tDb6g+0jK31hk11aGZCO2zvBuASrYbavB/NoUR9TIMAuL0UpPwPSFqJ+LVVNW6OpkRP/HhPZe/oJEG2+UMguZDwbJJpIMoeXgze0QoOjXn0WSs0juwV1T/0C94BtzIHRbtQgfyKpkMPyTBZPW5eYSIih2LqIBm0ZjeHrlx21tJnNxsKq0QGjJe17GDOe5xsWB2iAJkET0GZn1Z3++A4sZ9p4W73vSdAyp5TpQcaNJxbsYmZ9dolUlC5wkZruH46itMLx/UO894mYG1wSSsgc04rkiihpCAR6Lo9QynbRAzDBDvSOQ3TJ2y7cvRM6MjFdnEE2nLIW2MXpPfusOqvcSVjp5NIZXl2OTKf2xlL1iQ8pcY84VD//Cmqqwgxp7yoeFo7V6qW/5pK3s/wPxo6keqhNsswAAAABJRU5ErkJggg==\"); }\n.container nav ul li a {\n          color: inherit;\n          text-decoration: none;\n          height: 100%;\n          display: flex;\n          align-items: center; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Vendor imports */

/* App imports */

var AppHeader = /** @class */ (function () {
    function AppHeader() {
        this.title = _constants__WEBPACK_IMPORTED_MODULE_1__["APP_TITLE"];
    }
    AppHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/quiz-creator/dialog-form/dialog-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"dialog-form\">\r\n\r\n    <div mat-dialog-content [formGroup]=\"inputControl.parent\">\r\n        <mat-form-field>\r\n            <mat-label>Valore</mat-label>\r\n            <input matInput [formControl]=\"inputControl\" matTooltip=\"Inserisci il valore della risposta\" [errorStateMatcher]=\"errorMatcher\">\r\n            <mat-error *ngIf=\"inputControl.invalid\">{{inputControl.errors.validAnswerValue && inputControl.errors.validAnswerValue.text}}</mat-error>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"buttons\">\r\n        <button mat-button (click)=\"onClose()\">Ok</button>\r\n    </div>\r\n\r\n</div>"

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
        this.errorMatcher = this.data.errorMatcher;
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
    { path: 'create', component: _quiz_creator_component__WEBPACK_IMPORTED_MODULE_2__["QuizCreatorComponent"] }
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

/***/ "./src/app/components/quiz-creator/quiz-creator.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <form [formGroup]=\"quiz\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <mat-vertical-stepper linear>\r\n      <mat-step>\r\n        <!-- Stepper label -->\r\n        <ng-template matStepLabel>Impostazioni</ng-template>\r\n        <!-- /Stepper label -->\r\n        <!-- Quiz settings -->\r\n        <div [formGroup]=\"quiz.get('settings')\" class=\"settingsBox\">\r\n          <mat-form-field>\r\n            <mat-label>Titolo</mat-label>\r\n            <input matInput formControlName=\"title\" [errorStateMatcher]=\"errorMatcher\" required matTooltip=\"Inserisci il titolo che avrà il tuo quiz\">\r\n            <mat-error *ngIf=\"quiz.get('settings').get('title').invalid\">{{quiz.get('settings').get('title').errors.validText.text}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-label>Tipologia</mat-label>\r\n            <mat-select formControlName=\"type\" (selectionChange)=\"onChangeQuizType()\" [errorStateMatcher]=\"errorMatcher\" required matTooltip=\"Scegli il tipo di quiz che vuoi creare\">\r\n              <mat-option [value]=\"quizTypes.personalityQuiz\">Quiz della personalità</mat-option>\r\n              <mat-option [value]=\"quizTypes.trueorfalseQuiz\">Vero o Falso</mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"quiz.get('settings').get('type').invalid\">{{quiz.get('settings').get('type').errors.validQuizType.text}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-label>Descrizione</mat-label>\r\n            <textarea matInput formControlName=\"description\" [errorStateMatcher]=\"errorMatcher\" required matTooltip=\"Inserisci una descrizione introduttiva per il tuo quiz\"></textarea>\r\n            <mat-error *ngIf=\"quiz.get('settings').get('description').invalid\">{{quiz.get('settings').get('description').errors.validText.text}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <!-- /Quiz settings -->\r\n        <!-- Stepper info -->\r\n        <div class=\"alert-box\">\r\n          <i *ngIf=\"quiz.get('settings').invalid\">Inserisci le informazioni necessarie per il quiz prima di continuare.</i>\r\n        </div>\r\n        <!-- /Stepper info -->\r\n        <!-- Stepper buttons -->\r\n        <div class=\"buttons\">\r\n          <button mat-button matStepperNext type=\"button\" [disabled]=\"false && quiz.get('settings').invalid\">\r\n            <mat-icon>navigate_next</mat-icon>Avanti</button>\r\n        </div>\r\n        <!-- /Stepper buttons -->\r\n      </mat-step>\r\n      <mat-step>\r\n        <!-- Stepper label -->\r\n        <ng-template matStepLabel>Domande</ng-template>\r\n        <!-- /Stepper label -->\r\n        <div formArrayName=\"questions\">\r\n          <!-- Questions main buttons -->\r\n          <div class=\"buttons\">\r\n            <button mat-button (click)=\"handleQuestions.addNew()\" type=\"button\">\r\n              <mat-icon>add</mat-icon>Aggiungi domanda\r\n            </button>\r\n            <button mat-button (click)=\"questionAccordion.openAll()\" *ngIf=\"quiz.get('questions').length > 0\" type=\"button\">\r\n              <mat-icon>expand_more</mat-icon>Espandi tutto\r\n            </button>\r\n            <button mat-button (click)=\"questionAccordion.closeAll()\" *ngIf=\"quiz.get('questions').length > 0\" type=\"button\" class=\"red\">\r\n              <mat-icon>expand_less</mat-icon>Chiudi tutto\r\n            </button>\r\n          </div>\r\n          <!-- /Questions main buttons -->\r\n\r\n          <!-- Quiz questions -->\r\n          <mat-accordion #questionAccordion=\"matAccordion\" [multi]=\"true\">\r\n            <ng-container *ngFor=\"let question of quiz.get('questions').controls; let questionIndex = index\">\r\n              <mat-expansion-panel [hideToggle]=\"true\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    <label>{{questionIndex + 1}}/{{quiz.get('questions').length}}</label>\r\n                    <mat-icon *ngIf=\"question.valid\">check</mat-icon>\r\n                  </mat-panel-title>\r\n                  <mat-panel-description>\r\n                    <div class=\"truncate-label\">\r\n                      <span class=\"panel-label\">{{question.get('text').value}}</span>\r\n                    </div>\r\n                    <!-- Button to remove this question -->\r\n                    <button mat-icon-button (click)=\"handleQuestions.remove(questionIndex)\" matTooltip=\"Elimina questa domanda\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                    <!-- /Button to remove this question -->\r\n                    <!-- Button to add a new answer -->\r\n                    <button mat-icon-button (click)=\"$event.stopPropagation(); handleQuestions.addNewAnswer(questionIndex)\" matTooltip=\"Aggiungi una risposta\">\r\n                      <mat-icon>add</mat-icon>\r\n                    </button>\r\n                    <!-- /Button to add a new answer -->\r\n                  </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <!-- Expansion panel body -->\r\n                <div [formGroup]=\"question\">\r\n                  <!-- Question text -->\r\n                  <mat-form-field>\r\n                    <mat-label>Domanda</mat-label>\r\n                    <input matInput formControlName=\"text\" matTooltip=\"Inserisci il testo della tua domanda\" [errorStateMatcher]=\"errorMatcher\"\r\n                      required>\r\n                    <mat-error *ngIf=\"question.get('text').invalid\">{{question.get('text').errors.validText.text}}</mat-error>\r\n                  </mat-form-field>\r\n                  <!-- /Question text -->\r\n                  <!-- Question answers -->\r\n                  <ng-container *ngFor=\"let answer of question.get('answers').controls; let answerIndex = index\">\r\n                    <div [formGroup]=\"answer\" class=\"question-answer-box\">\r\n\r\n                      <!-- Answer text -->\r\n                      <mat-form-field>\r\n                        <mat-label>Risposta</mat-label>\r\n                        <input matInput formControlName=\"text\" matTooltip=\"Inserisci una possibile risposta\" [errorStateMatcher]=\"errorMatcher\" required>\r\n                        <mat-error *ngIf=\"answer.get('text').invalid\">{{answer.get('text').errors.validText.text}}</mat-error>\r\n                      </mat-form-field>\r\n                      <!-- /Answer text -->\r\n\r\n                      <!-- Answer value -->\r\n                      <ng-container [ngSwitch]=\"quiz.get('settings').get('type').value\">\r\n\r\n                        <mat-form-field *ngSwitchCase=\"quizTypes.personalityQuiz\">\r\n                          <mat-label>Valore</mat-label>\r\n                          <mat-select [formControl]=\"answer.get('value')\" [errorStateMatcher]=\"errorMatcher\" matTooltip=\"Scegli il tipo di quiz che vuoi creare\">\r\n                            <ng-container *ngFor=\"let option of handleAnswersValue.getSuggestedValues()\">\r\n                              <mat-option [value]=\"option\">{{option}}</mat-option>\r\n                            </ng-container>\r\n                            <mat-option (click)=\"handleAnswersValue.addSuggestedValue(answer.get('value'))\" style=\"color:inherit; cursor: pointer;\" disabled>Nuovo...</mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"answer.get('value').invalid\">{{answer.get('value').errors.validAnswerValue && answer.get('value').errors.validAnswerValue.text}}</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <mat-radio-group *ngSwitchCase=\"quizTypes.trueorfalseQuiz\" matInput [formControl]=\"answer.get('value')\" matTooltip=\"Indica se la risposta è vera o falsa\">\r\n                          <mat-radio-button [value]=\"true\">VERO</mat-radio-button>\r\n                          <mat-radio-button [value]=\"false\">FALSO</mat-radio-button>\r\n                        </mat-radio-group>\r\n\r\n                        <div *ngSwitchDefault class=\"alert-box notype-warning\">\r\n                          <i>Seleziona un tipo di quiz prima.</i>\r\n                        </div>\r\n\r\n                      </ng-container>\r\n                      <!-- /Answer value -->\r\n\r\n                      <!-- Button to remove this question -->\r\n                      <button mat-icon-button (click)=\"handleQuestions.removeAnswer(answerIndex, questionIndex)\" matTooltip=\"Elimina questa risposta\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                      <!-- /Button to remove this question -->\r\n                    </div>\r\n                  </ng-container>\r\n                  <!-- /Question answers -->\r\n                </div>\r\n                <!-- /Expansion panel body -->\r\n              </mat-expansion-panel>\r\n            </ng-container>\r\n          </mat-accordion>\r\n          <!-- /Quiz questions -->\r\n          <!-- Stepper info -->\r\n          <div class=\"alert-box\">\r\n            <i *ngIf=\"quiz.get('questions').invalid && quiz.get('questions').length === 0\">Aggiungi delle domande al quiz prima di continuare.</i>\r\n            <i *ngIf=\"quiz.get('questions').invalid && quiz.get('questions').length > 0\">Hai ancora {{getInvalidFormControlsNumber(quiz.get('questions'))}} su {{quiz.get('questions').length}} domande\r\n              da completare prima di continuare.</i>\r\n          </div>\r\n          <!-- /Stepper info -->\r\n          <!-- Stepper buttons -->\r\n          <div class=\"buttons\">\r\n            <button mat-button matStepperPrevious type=\"button\">\r\n              <mat-icon>navigate_before</mat-icon>Indietro</button>\r\n            <button mat-button matStepperNext type=\"button\">\r\n              <mat-icon>navigate_next</mat-icon>Avanti</button>\r\n          </div>\r\n          <!-- /Stepper buttons -->\r\n        </div>\r\n      </mat-step>\r\n\r\n      <mat-step>\r\n        <!-- Stepper label -->\r\n        <ng-template matStepLabel>Risultati</ng-template>\r\n        <!-- /Stepper label -->\r\n        <!-- Quiz results -->\r\n        <div formArrayName=\"answers\" class=\"answerBox\">\r\n          <div class=\"buttons\">\r\n            <button mat-button (click)=\"handleAnswers.addNew()\" type=\"button\">\r\n              <mat-icon>add</mat-icon>Aggiungi risultato</button>\r\n            <button *ngIf=\"quiz.get('answers').length > 0\" mat-button (click)=\"resultsAccordion.openAll()\" type=\"button\">\r\n              <mat-icon>expand_more</mat-icon>Espandi tutto</button>\r\n            <button *ngIf=\"quiz.get('answers').length > 0\" mat-button (click)=\"resultsAccordion.closeAll()\" type=\"button\" class=\"red\">\r\n              <mat-icon>expand_less</mat-icon>Chiudi tutto</button>\r\n          </div>\r\n          <mat-accordion [multi]=\"true\" #resultsAccordion=\"matAccordion\">\r\n            <ng-container *ngFor=\"let answer of quiz.get('answers').controls; let i = index\">\r\n              <mat-expansion-panel [expanded]=\"true\" [hideToggle]=\"true\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    <label>{{i+1}}/{{quiz.get('answers').controls.length}}</label>\r\n                    <mat-icon *ngIf=\"answer.valid\">check</mat-icon>\r\n                  </mat-panel-title>\r\n                  <mat-panel-description>\r\n                    <div class=\"truncate-label\">\r\n                      <span>{{answer.get('title').value}}</span>\r\n                    </div>\r\n                    <button mat-icon-button (click)=\"handleAnswers.remove(i)\" type=\"button\" matTooltip=\"Elimina questo risultato\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <div [formGroup]=\"answer\">\r\n\r\n                  <!-- Result title -->\r\n                  <mat-form-field>\r\n                    <mat-label>Titolo</mat-label>\r\n                    <input type=\"text\" formControlName=\"title\" matInput [errorStateMatcher]=\"errorMatcher\" required matTooltip=\"Dai un titolo a questo risultato\">\r\n                    <mat-error *ngIf=\"!answer.get('title').valid\">{{answer.get('title').errors.validText.text}}</mat-error>\r\n                  </mat-form-field>\r\n                  <!-- /Result title -->\r\n\r\n                  <!-- Result value -->\r\n                  <ng-container [ngSwitch]=\"quiz.get('settings').get('type').value\">\r\n\r\n                    <mat-form-field *ngSwitchCase=\"quizTypes.personalityQuiz\">\r\n                      <mat-label>Valore</mat-label>\r\n                      <mat-select [formControl]=\"answer.get('value')\" [errorStateMatcher]=\"errorMatcher\" required matTooltip=\"Scegli il tipo di quiz che vuoi creare\">\r\n                        <ng-container *ngFor=\"let option of handleAnswersValue.getSuggestedValues()\">\r\n                          <mat-option [value]=\"option\">{{option}}</mat-option>\r\n                        </ng-container>\r\n                        <mat-option (click)=\"handleAnswersValue.addSuggestedValue(answer.get('value'))\" style=\"color:inherit; cursor: pointer;\" disabled>Nuovo...</mat-option>\r\n                      </mat-select>\r\n                      <mat-error *ngIf=\"answer.get('value').invalid\">{{answer.get('value').errors.validText && answer.get('value').errors.validText.text}}</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field *ngSwitchCase=\"quizTypes.trueorfalseQuiz\">\r\n                      <mat-label>Valore</mat-label>\r\n                      <input type=\"text\" formControlName=\"value\" matInput (keyup)=\"handleAnswersValue.updateSuggestedValues(answer.get('value').value)\"\r\n                        [errorStateMatcher]=\"errorMatcher\" required matTooltip=\"Inserisci il valore corrispondente a questo risultato\">\r\n                      <mat-error *ngIf=\"answer.get('value').invalid\">{{answer.get('value').errors.validText.text}}</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <div *ngSwitchDefault class=\"alert-box notype-warning\">\r\n                      <i>Seleziona un tipo di quiz prima.</i>\r\n                    </div>\r\n\r\n                  </ng-container>\r\n                  <!-- /Result value -->\r\n\r\n                  <!-- Result description -->\r\n                  <mat-form-field>\r\n                    <mat-label>Descrizione</mat-label>\r\n                    <textarea formControlName=\"description\" matInput [errorStateMatcher]=\"errorMatcher\" matTooltip=\"Fornisci una descrizione del risultato\"></textarea>\r\n                    <mat-error *ngIf=\"!answer.get('description').valid\">{{answer.get('description').errors.validText.text}}</mat-error>\r\n                  </mat-form-field>\r\n                  <!-- /Result description -->\r\n\r\n                </div>\r\n              </mat-expansion-panel>\r\n            </ng-container>\r\n          </mat-accordion>\r\n        </div>\r\n        <!-- /Quiz results -->\r\n        <!-- Stepper info -->\r\n        <div class=\"alert-box\">\r\n          <i *ngIf=\"quiz.get('answers').invalid && quiz.get('answers').length === 0\">Aggiungi dei risultati al quiz prima di continuare.</i>\r\n          <i *ngIf=\"quiz.get('answers').invalid && quiz.get('answers').length > 0\">Hai ancora {{getInvalidFormControlsNumber(quiz.get('answers'))}} su {{quiz.get('answers').length}} risultati da\r\n            completare prima di continuare.</i>\r\n        </div>\r\n        <!-- /Stepper info -->\r\n        <!-- Stepper buttons -->\r\n        <div class=\"buttons\">\r\n          <button mat-button matStepperPrevious type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>Indietro</button>\r\n        </div>\r\n        <!-- Stepper buttons -->\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </form>\r\n\r\n  <!-- Form actions -->\r\n  <div class=\"form-actions\">\r\n    <div class=\"buttons\">\r\n      <button mat-button (click)=\"onSubmit()\" color=\"primary\" [disabled]=\"quiz.invalid\">\r\n        <mat-icon>get_app</mat-icon>Salva\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <!-- /Form actions -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/quiz-creator/quiz-creator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/quiz-creator/quiz-creator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\n.container {\n  width: 80%;\n  margin: auto;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  background-image: url(\"data:image/png;base64,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\"); }\n.buttons {\n  margin: 0.5em 0em;\n  display: flex; }\n.buttons label, .buttons button {\n    border: 1px solid #0E3475;\n    border-radius: 0px;\n    background-color: #dfe3ee;\n    color: #333;\n    font-family: inherit;\n    transition: 0.5s;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    margin-right: 5px; }\n.buttons label[disabled], .buttons label:hover[disabled], .buttons button[disabled], .buttons button:hover[disabled] {\n      border-color: #7e8d98;\n      background-color: #7e8d98 !important; }\n.buttons label[disabled]:hover, .buttons label:hover[disabled]:hover, .buttons button[disabled]:hover, .buttons button:hover[disabled]:hover {\n        cursor: not-allowed; }\n.buttons label.red, .buttons button.red {\n      border: 1px solid #fc4a1a;\n      border-radius: 0px;\n      background-color: #dfe3ee;\n      color: #333;\n      font-family: inherit;\n      transition: 0.5s;\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.buttons label.red[disabled], .buttons label.red:hover[disabled], .buttons button.red[disabled], .buttons button.red:hover[disabled] {\n        border-color: #7e8d98;\n        background-color: #7e8d98 !important; }\n.buttons label.red[disabled]:hover, .buttons label.red:hover[disabled]:hover, .buttons button.red[disabled]:hover, .buttons button.red:hover[disabled]:hover {\n          cursor: not-allowed; }\n.buttons label.red:hover, .buttons button.red:hover {\n        border: 1px solid #fc4a1a;\n        border-radius: 0px;\n        background-color: #fc4a1a;\n        color: #fafafb;\n        font-family: inherit;\n        transition: 0.5s;\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.buttons label.red:hover[disabled], .buttons label.red:hover:hover[disabled], .buttons button.red:hover[disabled], .buttons button.red:hover:hover[disabled] {\n          border-color: #7e8d98;\n          background-color: #7e8d98 !important; }\n.buttons label.red:hover[disabled]:hover, .buttons label.red:hover:hover[disabled]:hover, .buttons button.red:hover[disabled]:hover, .buttons button.red:hover:hover[disabled]:hover {\n            cursor: not-allowed; }\n.buttons label input[type=\"file\"] {\n    display: none; }\n.buttons label:hover {\n    background-color: rgba(0, 0, 0, 0.12); }\nbody {\n  margin: 0px;\n  background-color: #6A77F2;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXBAMAAACG4mBhAAAALVBMVEVAQEA5OTk+Pj4/Pz84ODg8PDw5OTk4ODg7Ozs7OztDQ0M5OTk3NzdFRUVISEi5S1dSAAAAD3RSTlMwWjo1YEBVZUpFKlBqJSCof7U2AAACDklEQVR4Xh2RwWvaYBiHXxI+aPSyOmMa5iGuznWOwTczSqp4kKVVcYfvm9IWdjLTpZRdUiS02EM6W4SdFIOHnqy9uJSCGkfGjjvIYJfBTmOX/Sn71vvz8jz8XnDCMnfWRHFDiB6r3XJo78gzDWEVYKHnJ0tMbXze0Qq9hytr+zuKewzhypuP4TKPiganns25d7ivG4Lege6969iipxHXzk5a3s3pdGIrbikL/Zej7gkfGEiao4JHhxX8WtCdEWxVqlonF9tRqL3uflnzAh/cEj8AfF4CPHNqBopHhNO3XjDd0h2tDb6g+0jK31hk11aGZCO2zvBuASrYbavB/NoUR9TIMAuL0UpPwPSFqJ+LVVNW6OpkRP/HhPZe/oJEG2+UMguZDwbJJpIMoeXgze0QoOjXn0WSs0juwV1T/0C94BtzIHRbtQgfyKpkMPyTBZPW5eYSIih2LqIBm0ZjeHrlx21tJnNxsKq0QGjJe17GDOe5xsWB2iAJkET0GZn1Z3++A4sZ9p4W73vSdAyp5TpQcaNJxbsYmZ9dolUlC5wkZruH46itMLx/UO894mYG1wSSsgc04rkiihpCAR6Lo9QynbRAzDBDvSOQ3TJ2y7cvRM6MjFdnEE2nLIW2MXpPfusOqvcSVjp5NIZXl2OTKf2xlL1iQ8pcY84VD//Cmqqwgxp7yoeFo7V6qW/5pK3s/wPxo6keqhNsswAAAABJRU5ErkJggg==\"); }\nh1, h2, h3, h4, h5, h6 {\n  color: #dfe3ee; }\nh1 {\n  font-size: 2em; }\nhr {\n  border: 0.5px solid rgba(0, 0, 0, 0.12); }\nmat-vertical-stepper {\n  font-family: inherit; }\nmat-vertical-stepper .mat-step-header .mat-step-label.mat-step-label-active {\n    color: #6A77F2; }\nmat-vertical-stepper .mat-step-header .mat-step-label.mat-step-label-active.mat-step-label-selected {\n      font-size: 1em;\n      font-weight: bold; }\nmat-vertical-stepper .mat-step-header .mat-step-icon {\n    background-color: #6A77F2; }\nmat-dialog-container.mat-dialog-container {\n  font-family: inherit;\n  border: 1px solid #0E3475;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  background-image: url(\"data:image/png;base64,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\"); }\nmat-radio-button {\n  font-family: inherit; }\nmat-radio-button.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #6A77F2; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1) !important; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-outer-circle {\n    border-color: #6A77F2; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #6A77F2; }\nmat-radio-button .mat-radio-label {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1em;\n    transition: background-color 0.5s; }\nmat-radio-button .mat-radio-label:hover {\n      background-color: rgba(0, 0, 0, 0.12); }\n.container {\n  font-family: inherit;\n  border: 1px solid #6A77F2;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 0px 20px 20px 0px; }\n.container mat-vertical-stepper {\n    background-color: transparent; }\n.container mat-expansion-panel {\n    font-family: inherit;\n    border: 1px solid #0E3475;\n    border-radius: 0px;\n    background-color: transparent;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    margin: 1em 0em;\n    padding: 0em; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-title {\n      align-items: center;\n      white-space: nowrap; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-title mat-icon {\n        margin-left: 0.5em; }\n.container mat-expansion-panel mat-expansion-panel-header mat-panel-description {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center; }\n.container .mat-form-field {\n    width: 100%; }\n.container .mat-radio-group {\n    display: flex;\n    justify-content: space-around; }\n.container .question-answer-box {\n    display: flex;\n    align-items: baseline; }\n.container .question-answer-box mat-form-field, .container .question-answer-box mat-radio-group {\n      margin-left: 0.5em; }\n.container .question-answer-box mat-form-field mat-radio-button, .container .question-answer-box mat-radio-group mat-radio-button {\n        margin-left: 0.5em; }\n.container .truncate-label {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    white-space: nowrap; }\n.container .truncate-label > * {\n      display: table-cell;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: right; }\n.container .alert-box {\n    margin: 1em 0em;\n    font-size: 0.8em; }\n.container .notype-warning {\n    width: 100%;\n    text-align: center;\n    white-space: nowrap;\n    margin-left: 1em; }\n.container .form-actions {\n    box-shadow: none;\n    border-width: 0px;\n    margin: 2em;\n    margin-top: 1em; }\n.container .form-actions .buttons {\n      display: flex;\n      justify-content: flex-end; }\n"

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



//Quiz errors matcher
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
var QuizCreatorComponent = /** @class */ (function () {
    function QuizCreatorComponent(ngFormBuilder, ngDialog, quizHandler) {
        var _this = this;
        this.ngFormBuilder = ngFormBuilder;
        this.ngDialog = ngDialog;
        this.quizHandler = quizHandler;
        //Object of quiz types for template;
        this.quizTypes = {
            'trueorfalseQuiz': _constants__WEBPACK_IMPORTED_MODULE_5__["TRUEORFALSE_QUIZ"],
            'personalityQuiz': _constants__WEBPACK_IMPORTED_MODULE_5__["PERSONALITY_QUIZ"]
        };
        //Validators for input
        this.quizValidators = {
            validText: function () {
                return function (control) {
                    var errorMsg;
                    var inputValue = control.value;
                    if (inputValue === '')
                        errorMsg = 'campo mancante';
                    else if (typeof inputValue === 'string' && inputValue.trim() === '')
                        errorMsg = 'testo non valido';
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
                    var valid = control.value === _constants__WEBPACK_IMPORTED_MODULE_5__["PERSONALITY_QUIZ"] || control.value === _constants__WEBPACK_IMPORTED_MODULE_5__["TRUEORFALSE_QUIZ"];
                    return !valid ? { 'validQuizType': { text: 'tipo di quiz non riconosciuto' } } : null;
                };
            },
            validAnswerValue: function () {
                return function (control) {
                    if (typeof _this.quiz === 'undefined')
                        return null; //To prevent errors during bootstrapp
                    var quizType = _this.quiz.get('settings').get('type').value;
                    var inputValue = control.value;
                    if (quizType === _constants__WEBPACK_IMPORTED_MODULE_5__["PERSONALITY_QUIZ"]) {
                        return !inputValue ? { 'validAnswerValue': { text: 'testo vuoto' } } : null;
                    }
                    else if (quizType === _constants__WEBPACK_IMPORTED_MODULE_5__["TRUEORFALSE_QUIZ"]) {
                        return typeof inputValue !== 'boolean' ? { 'validAnswerValue': { text: 'formato vero o falso non corretto' } } : null;
                    }
                    else {
                        return { 'validAnswerValue': { text: 'tipo di quiz non valido' } };
                    }
                };
            }
        };
        //Builders for reactive form
        this.quizBuilders = {
            emptyAnswer: function () {
                return _this.ngFormBuilder.group({
                    text: ['', _this.quizValidators.validText()],
                    value: ['', _this.quizValidators.validAnswerValue()]
                });
            },
            emptyQuestion: function () {
                return _this.ngFormBuilder.group({
                    text: ['', _this.quizValidators.validText()],
                    answers: _this.ngFormBuilder.array([_this.quizBuilders.emptyAnswer()], _this.quizValidators.validItems())
                });
            },
            emptyResult: function () {
                return _this.ngFormBuilder.group({
                    value: ['', _this.quizValidators.validText()],
                    title: ['', _this.quizValidators.validText()],
                    description: ['', _this.quizValidators.validText()]
                });
            }
        };
        //Reactive form to create a new quiz
        this.quiz = this.ngFormBuilder.group({
            settings: this.ngFormBuilder.group({
                title: ['', this.quizValidators.validText()],
                description: ['', this.quizValidators.validText()],
                type: ['', this.quizValidators.validQuizType()],
            }),
            questions: this.ngFormBuilder.array([], this.quizValidators.validItems()),
            answers: this.ngFormBuilder.array([], this.quizValidators.validItems())
        });
        // Errors state matcher
        this.errorMatcher = new QuizCreatorErrorStateMatcher();
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
            addSuggestedValue: function (inputControl) {
                if (!_this.dialogFormRef) {
                    _this.dialogFormRef = _this.ngDialog.open(_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_3__["DialogFormComponent"], {
                        data: {
                            inputControl: inputControl,
                            errorMatcher: _this.errorMatcher
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
            _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_4__["QuizHandler"]])
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _quiz_creator_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-creator-routing.module */ "./src/app/components/quiz-creator/quiz-creator-routing.module.ts");
/* harmony import */ var _quiz_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-creator.component */ "./src/app/components/quiz-creator/quiz-creator.component.ts");
/* harmony import */ var _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-form/dialog-form.component */ "./src/app/components/quiz-creator/dialog-form/dialog-form.component.ts");
/* harmony import */ var _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/quizHandler.service */ "./src/app/services/quizHandler.service.ts");
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
                _quiz_creator_component__WEBPACK_IMPORTED_MODULE_5__["QuizCreatorComponent"],
                _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_6__["DialogFormComponent"]
            ],
            imports: [
                _quiz_creator_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuizCreatorRouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            providers: [
                _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_7__["QuizHandler"]
            ],
            entryComponents: [
                _dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_6__["DialogFormComponent"]
            ]
        })
    ], QuizCreatorModule);
    return QuizCreatorModule;
}());

;


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
    { path: 'launch', component: _quiz_runner_component__WEBPACK_IMPORTED_MODULE_2__["QuizRunnerComponent"] },
    { path: 'launch/:id', component: _quiz_runner_component__WEBPACK_IMPORTED_MODULE_2__["QuizRunnerComponent"] }
];
var QuizRunnerRoutingModule = /** @class */ (function () {
    function QuizRunnerRoutingModule() {
    }
    QuizRunnerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = "\r\n<div class=\"container\">\r\n\r\n    <div class=\"sub-container\">\r\n        <h1>{{curQuiz.settings.title}}</h1>\r\n    </div>\r\n\r\n    <i *ngIf=\"quizState === quizAvailableStates.STARTED\">Domanda {{curQuestionIndex + 1}} / {{curQuiz.questions.length}}</i>        \r\n    <hr>\r\n    \r\n    <ng-container [ngSwitch]='quizState'>\r\n        <div class=\"sub-container\">\r\n            <!-- Intro Quiz -->\r\n            <div *ngSwitchCase='\"ready\"' class=\"intro\">\r\n                <p>{{curQuiz.settings.description}}</p>\r\n            </div>\r\n    \r\n            <!-- Quiz Question Box -->\r\n            <div *ngSwitchCase='quizAvailableStates.STARTED'>\r\n                <p>{{curQuiz.questions[curQuestionIndex].text}}</p>\r\n                <mat-radio-group [value]=\"givenUserAnswers[curQuestionIndex]\">\r\n                    <ng-container *ngFor='let obj of curQuiz.questions[curQuestionIndex].answers'>\r\n                        <mat-radio-button [name]='curQuiz.title' (click)='selectAnswer(obj.value)' selected=\"false\">\r\n                            {{obj.text}}\r\n                        </mat-radio-button>\r\n                    </ng-container>\r\n                </mat-radio-group>\r\n            </div>\r\n        \r\n            <!-- Quiz result -->\r\n            <div *ngSwitchCase='quizAvailableStates.FINISHED' id='resultQuiz' class=\"result\">\r\n                <h2>{{curQuizResult.title}}</h2>\r\n                <p>{{curQuizResult.description}}</p>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <hr>\r\n\r\n    <ng-container [ngSwitch]='quizState'>\r\n        <div class=\"sub-container\">\r\n            <div class=\"buttons\">\r\n                <label class=\"mat-button\">\r\n                    <span class=\"mat-button-wrapper\">\r\n                        <mat-icon>cloud_upload</mat-icon> Carica nuovo\r\n                        <input type='file' (change)='uploadQuiz($event)'>\r\n                    </span>\r\n                </label>\r\n                <button mat-button *ngSwitchCase='quizAvailableStates.READY' [disabled]='submitButtonIsDisabled' (click)='onSubmit()'><mat-icon>play_arrow</mat-icon>Inizia il test</button>\r\n                <button mat-button *ngSwitchCase='quizAvailableStates.STARTED' [disabled]='submitButtonIsDisabled' (click)='onSubmit()'><mat-icon>check</mat-icon>Ok</button>\r\n                <button mat-button *ngSwitchCase='quizAvailableStates.FINISHED' [disabled]='submitButtonIsDisabled' (click)='onSubmit()'><mat-icon>refresh</mat-icon>Ricomincia</button>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/quiz-runner/quiz-runner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-runner/quiz-runner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Neutral colors */\n/* Colors */\n/* Color palette */\n/* Font */\n/* Margin */\n/* Padding */\n/* Border */\n/* Box shadow */\n/* Transition */\n/* Texture */\n.container {\n  width: 80%;\n  margin: auto;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  background-image: url(\"data:image/png;base64,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\"); }\n.buttons {\n  margin: 0.5em 0em;\n  display: flex; }\n.buttons label, .buttons button {\n    border: 1px solid #0E3475;\n    border-radius: 0px;\n    background-color: #dfe3ee;\n    color: #333;\n    font-family: inherit;\n    transition: 0.5s;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    margin-right: 5px; }\n.buttons label[disabled], .buttons label:hover[disabled], .buttons button[disabled], .buttons button:hover[disabled] {\n      border-color: #7e8d98;\n      background-color: #7e8d98 !important; }\n.buttons label[disabled]:hover, .buttons label:hover[disabled]:hover, .buttons button[disabled]:hover, .buttons button:hover[disabled]:hover {\n        cursor: not-allowed; }\n.buttons label.red, .buttons button.red {\n      border: 1px solid #fc4a1a;\n      border-radius: 0px;\n      background-color: #dfe3ee;\n      color: #333;\n      font-family: inherit;\n      transition: 0.5s;\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.buttons label.red[disabled], .buttons label.red:hover[disabled], .buttons button.red[disabled], .buttons button.red:hover[disabled] {\n        border-color: #7e8d98;\n        background-color: #7e8d98 !important; }\n.buttons label.red[disabled]:hover, .buttons label.red:hover[disabled]:hover, .buttons button.red[disabled]:hover, .buttons button.red:hover[disabled]:hover {\n          cursor: not-allowed; }\n.buttons label.red:hover, .buttons button.red:hover {\n        border: 1px solid #fc4a1a;\n        border-radius: 0px;\n        background-color: #fc4a1a;\n        color: #fafafb;\n        font-family: inherit;\n        transition: 0.5s;\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.buttons label.red:hover[disabled], .buttons label.red:hover:hover[disabled], .buttons button.red:hover[disabled], .buttons button.red:hover:hover[disabled] {\n          border-color: #7e8d98;\n          background-color: #7e8d98 !important; }\n.buttons label.red:hover[disabled]:hover, .buttons label.red:hover:hover[disabled]:hover, .buttons button.red:hover[disabled]:hover, .buttons button.red:hover:hover[disabled]:hover {\n            cursor: not-allowed; }\n.buttons label input[type=\"file\"] {\n    display: none; }\n.buttons label:hover {\n    background-color: rgba(0, 0, 0, 0.12); }\nbody {\n  margin: 0px;\n  background-color: #6A77F2;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXBAMAAACG4mBhAAAALVBMVEVAQEA5OTk+Pj4/Pz84ODg8PDw5OTk4ODg7Ozs7OztDQ0M5OTk3NzdFRUVISEi5S1dSAAAAD3RSTlMwWjo1YEBVZUpFKlBqJSCof7U2AAACDklEQVR4Xh2RwWvaYBiHXxI+aPSyOmMa5iGuznWOwTczSqp4kKVVcYfvm9IWdjLTpZRdUiS02EM6W4SdFIOHnqy9uJSCGkfGjjvIYJfBTmOX/Sn71vvz8jz8XnDCMnfWRHFDiB6r3XJo78gzDWEVYKHnJ0tMbXze0Qq9hytr+zuKewzhypuP4TKPiganns25d7ivG4Lege6969iipxHXzk5a3s3pdGIrbikL/Zej7gkfGEiao4JHhxX8WtCdEWxVqlonF9tRqL3uflnzAh/cEj8AfF4CPHNqBopHhNO3XjDd0h2tDb6g+0jK31hk11aGZCO2zvBuASrYbavB/NoUR9TIMAuL0UpPwPSFqJ+LVVNW6OpkRP/HhPZe/oJEG2+UMguZDwbJJpIMoeXgze0QoOjXn0WSs0juwV1T/0C94BtzIHRbtQgfyKpkMPyTBZPW5eYSIih2LqIBm0ZjeHrlx21tJnNxsKq0QGjJe17GDOe5xsWB2iAJkET0GZn1Z3++A4sZ9p4W73vSdAyp5TpQcaNJxbsYmZ9dolUlC5wkZruH46itMLx/UO894mYG1wSSsgc04rkiihpCAR6Lo9QynbRAzDBDvSOQ3TJ2y7cvRM6MjFdnEE2nLIW2MXpPfusOqvcSVjp5NIZXl2OTKf2xlL1iQ8pcY84VD//Cmqqwgxp7yoeFo7V6qW/5pK3s/wPxo6keqhNsswAAAABJRU5ErkJggg==\"); }\nh1, h2, h3, h4, h5, h6 {\n  color: #dfe3ee; }\nh1 {\n  font-size: 2em; }\nhr {\n  border: 0.5px solid rgba(0, 0, 0, 0.12); }\nmat-vertical-stepper {\n  font-family: inherit; }\nmat-vertical-stepper .mat-step-header .mat-step-label.mat-step-label-active {\n    color: #6A77F2; }\nmat-vertical-stepper .mat-step-header .mat-step-label.mat-step-label-active.mat-step-label-selected {\n      font-size: 1em;\n      font-weight: bold; }\nmat-vertical-stepper .mat-step-header .mat-step-icon {\n    background-color: #6A77F2; }\nmat-dialog-container.mat-dialog-container {\n  font-family: inherit;\n  border: 1px solid #0E3475;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  background-image: url(\"data:image/png;base64,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\"); }\nmat-radio-button {\n  font-family: inherit; }\nmat-radio-button.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #6A77F2; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1) !important; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-outer-circle {\n    border-color: #6A77F2; }\nmat-radio-button.mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #6A77F2; }\nmat-radio-button .mat-radio-label {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1em;\n    transition: background-color 0.5s; }\nmat-radio-button .mat-radio-label:hover {\n      background-color: rgba(0, 0, 0, 0.12); }\n.container {\n  font-family: inherit;\n  border: 1px solid #6A77F2;\n  border-radius: 0px;\n  background-color: #dfe3ee;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  padding: 0em 1em;\n  border-radius: 0px 20px 20px 0px; }\n.container h1, .container h2, .container h3, .container h4, .container h5, .container h6 {\n    color: #333;\n    margin: 1em;\n    text-align: center; }\n.container .sub-container {\n    padding: 0em; }\n.container .sub-container p {\n      text-align: center; }\n.container .sub-container i {\n      text-align: center;\n      display: block;\n      margin-top: 0.5em; }\n.container .sub-container mat-radio-group {\n      display: flex;\n      flex-flow: wrap; }\n.container .sub-container mat-radio-group mat-radio-button {\n        flex: 100%; }\n.container .intro {\n    padding: 1em; }\n.container .result {\n    padding: 0.5em; }\n.container .buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2em 0; }\n"

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
/* harmony import */ var _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quizHandler.service */ "./src/app/services/quizHandler.service.ts");
/* harmony import */ var _mocks_quiz_music__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mocks/quiz.music */ "./src/app/mocks/quiz.music.ts");
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


/* Quiz sample imports */

var QuizRunnerComponent = /** @class */ (function () {
    function QuizRunnerComponent(quizHandler) {
        this.quizHandler = quizHandler;
        this.quizAvailableStates = {
            READY: 'ready',
            STARTED: 'started',
            FINISHED: 'finished'
        };
        this.submitButtonIsDisabled = false;
    }
    QuizRunnerComponent.prototype.ngOnInit = function () {
        this.loadQuiz(this.quizHandler.load(_mocks_quiz_music__WEBPACK_IMPORTED_MODULE_2__["quizMusic"]).getQuizObject());
    };
    QuizRunnerComponent.prototype.uploadQuiz = function (event) {
        var _this = this;
        var uploadedFiles = event.target.files;
        if (uploadedFiles.length === 1) {
            var file = uploadedFiles[0];
            var reader = new FileReader();
            // Reader's events
            reader.onerror = function (event) { throw 'Error in file upload: ' + event.message; };
            reader.onload = function (event) {
                var quiz = _this.quizHandler.decode(event.target.result);
                _this.loadQuiz(quiz);
            };
            // Start reader
            reader.readAsDataURL(file);
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
    QuizRunnerComponent.prototype.onSubmit = function () {
        switch (this.quizState) {
            case this.quizAvailableStates.READY:
                this.quizState = this.quizAvailableStates.STARTED;
                this.curQuestionIndex = 0;
                this.submitButtonIsDisabled = true;
                break;
            case this.quizAvailableStates.STARTED:
                if (this.curQuestionIndex + 1 === this.curQuiz.questions.length) {
                    this.curQuizResult = this.quizHandler.getResult(this.givenUserAnswers);
                    this.quizState = this.quizAvailableStates.FINISHED;
                }
                else {
                    this.curQuestionIndex += 1;
                    this.submitButtonIsDisabled = true;
                }
                break;
            case this.quizAvailableStates.FINISHED:
                this.resetQuiz();
                break;
        }
    };
    QuizRunnerComponent.prototype.selectAnswer = function (answer) {
        this.submitButtonIsDisabled = false;
        this.givenUserAnswers[this.curQuestionIndex] = answer;
    };
    QuizRunnerComponent.prototype.resetQuiz = function () {
        this.quizState = this.quizAvailableStates.READY;
        this.curQuestionIndex = 0;
        this.givenUserAnswers = [];
    };
    QuizRunnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-runner',
            template: __webpack_require__(/*! ./quiz-runner.component.html */ "./src/app/components/quiz-runner/quiz-runner.component.html"),
            styles: [__webpack_require__(/*! ./quiz-runner.component.scss */ "./src/app/components/quiz-runner/quiz-runner.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_quizHandler_service__WEBPACK_IMPORTED_MODULE_1__["QuizHandler"]])
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _quiz_runner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-runner.component */ "./src/app/components/quiz-runner/quiz-runner.component.ts");
/* harmony import */ var _quiz_runner_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-runner-routing.module */ "./src/app/components/quiz-runner/quiz-runner-routing.module.ts");
/* harmony import */ var _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/quizHandler.service */ "./src/app/services/quizHandler.service.ts");
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
                _quiz_runner_component__WEBPACK_IMPORTED_MODULE_3__["QuizRunnerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _quiz_runner_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuizRunnerRoutingModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]
            ],
            providers: [
                _services_quizHandler_service__WEBPACK_IMPORTED_MODULE_5__["QuizHandler"]
            ]
        })
    ], QuizRunnerModule);
    return QuizRunnerModule;
}());

;


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: PERSONALITY_QUIZ, TRUEORFALSE_QUIZ, APP_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONALITY_QUIZ", function() { return PERSONALITY_QUIZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUEORFALSE_QUIZ", function() { return TRUEORFALSE_QUIZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_TITLE", function() { return APP_TITLE; });
var PERSONALITY_QUIZ = 'personalityQuiz';
var TRUEORFALSE_QUIZ = 'trueorfalseQuiz';
var APP_TITLE = 'Quizzer';


/***/ }),

/***/ "./src/app/mocks/quiz.music.ts":
/*!*************************************!*\
  !*** ./src/app/mocks/quiz.music.ts ***!
  \*************************************/
/*! exports provided: quizMusic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quizMusic", function() { return quizMusic; });
var quizMusic = {
    settings: {
        title: 'Quale musica ti piace',
        description: 'Scopri il tuo genere preferito facendo il nostro quiz!',
        type: 'personalityQuiz'
    },
    answers: [
        {
            value: 'classica',
            title: 'Classica',
            description: 'Ami il mondo classico',
        },
        {
            value: 'rock',
            title: 'Rock',
            description: 'Ami il rock',
        },
        {
            value: 'rap',
            title: 'Rap',
            description: 'Viva la musica hip hop',
        }
    ],
    questions: [
        {
            text: "Qual'\u00E8 il tuo artista preferito",
            answers: [
                { text: 'Mozart', value: 'classica' },
                { text: 'Jimi Hendrix', value: 'rock' },
                { text: 'Eminem', value: 'rap' }
            ]
        },
        {
            text: "Cosa preferisci usare per ascoltare la musica",
            answers: [
                { text: 'Giradischi', value: 'classica' },
                { text: 'Impianto stereo', value: 'rock' },
                { text: 'Auricolari', value: 'rap' }
            ]
        },
        {
            text: "Qual'\u00E8 il tuo strumento preferito",
            answers: [
                { text: 'Violino', value: 'classica' },
                { text: 'Chitarra', value: 'rock' },
                { text: 'Voce', value: 'rap' }
            ]
        },
        {
            text: "Quale scarpe indossi di solito",
            answers: [
                { text: 'Stringate classiche', value: 'classica' },
                { text: 'Converse', value: 'rock' },
                { text: 'Adidas', value: 'rap' }
            ]
        },
        {
            text: "Posto ideale per ascoltare la musica",
            answers: [
                { text: 'Teatro', value: 'classica' },
                { text: 'Locale', value: 'rock' },
                { text: 'Stadio', value: 'rap' }
            ]
        },
    ]
};


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
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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
     * Encode the quiz object to JSON format
     * @param {Object} data the quiz object
     * @return {string} the JSON string
     */
    QuizHandler.prototype.encode = function (data) {
        return this.encodingDeclaration + encodeURIComponent(JSON.stringify(data));
    };
    /**
     * Decode a JSON string to quiz object
     * @param {string} string the JSON string
     * @return {Object} the quiz object
     */
    QuizHandler.prototype.decode = function (string) {
        return JSON.parse(atob(decodeURIComponent(string.substring(this.encodingDeclaration.length))));
    };
    QuizHandler.prototype.load = function (quiz) {
        this.currentQuiz = quiz;
        return this;
    };
    QuizHandler.prototype.getQuizObject = function () {
        return Object.assign({}, this.currentQuiz);
    };
    QuizHandler.prototype.getResult = function (answers) {
        //Results matching with provided answers
        var answerObjs;
        //Get result according to quiz type
        switch (this.currentQuiz.settings.type) {
            case (_constants__WEBPACK_IMPORTED_MODULE_1__["PERSONALITY_QUIZ"]):
                //Create an object where store each answers' value with its frequency
                var answersWithFrequency = answers.reduce(function (prevResult, currValue) {
                    if (typeof currValue !== 'string')
                        throw "Valore di " + currValue + " non valido.";
                    var result = prevResult.hasOwnProperty(currValue) ? prevResult[currValue] += 1 : 1;
                    return Object.assign({}, prevResult, (_a = {},
                        _a[currValue] = result,
                        _a));
                    var _a;
                }, {});
                //Get answer with higher frequency
                var answerWithHigherFrequency_1 = Object.entries(answersWithFrequency)
                    .reduce(function (prevResult, currValue) { return (currValue[1] > prevResult[1] ? currValue : prevResult); })[0]
                    .trim().toLowerCase();
                //Return result object matching with answerWithHigherFrequency
                answerObjs = this.currentQuiz.answers.filter(function (obj) { return obj.value.trim().toLowerCase() === answerWithHigherFrequency_1; });
                break;
            case (_constants__WEBPACK_IMPORTED_MODULE_1__["TRUEORFALSE_QUIZ"]):
                //Get number of correct answers
                var correctAnswers_1 = 0;
                for (var i = 0; i < answers.length; i++) {
                    if (answers[i])
                        correctAnswers_1++;
                }
                //Filter answer objects matching with number of correct answers
                answerObjs = this.currentQuiz.answers.filter(function (answerObj) {
                    var answerValue = answerObj.value;
                    var rangeSeparator = '-'; //If answerValue is a range then it has this separator
                    //Detect if answerValue is a single number or a range
                    if (answerValue.indexOf(rangeSeparator) !== -1) {
                        //Get numerical values of the range
                        var maxValue = Math.max.apply(Math, answerValue.split(rangeSeparator).map(Number));
                        var minValue = Math.min.apply(Math, answerValue.split(rangeSeparator).map(Number));
                        //Return if correctAnswers matches with provided range
                        return minValue <= correctAnswers_1 && correctAnswers_1 <= maxValue;
                    }
                    else {
                        //Return if correctAnswers matches with answerObj value
                        return correctAnswers_1 === Number(answerValue);
                    }
                });
                break;
        }
        //Return first matching result
        return answerObjs[0];
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

module.exports = __webpack_require__(/*! C:\Users\Sara\Downloads\Luigi\Informatica\Progetti\Quizzer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map