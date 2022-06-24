(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codeblooded47/Desktop/Angular/pdf-server/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'https://frozen-ravine-64852.herokuapp.com',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}`;
    }
    getOffer() {
        return this.http.get(this.url);
    }
    getOfferById(data) {
        return this.http.get(`${this.url}/offers/get-offer/${data}`);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'pdf-server';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"] }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: 'pdf/:id', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MainComponent_div_17_div_1_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r28 = ctx.$implicit;
    const e_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r29 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hotel_r28.HotelName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r28.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r28.NightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r28.RoomType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r28.RegisterDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r28.foods);
} }
function MainComponent_div_17_div_1_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps1, " ");
} }
function MainComponent_div_17_div_1_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps1, " ");
} }
function MainComponent_div_17_div_1_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps2, " ");
} }
function MainComponent_div_17_div_1_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", offer_r4.Hotels[0].teps2, " ");
} }
function MainComponent_div_17_div_1_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps3, " ");
} }
function MainComponent_div_17_div_1_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", offer_r4.Hotels[0].teps3, " ");
} }
function MainComponent_div_17_div_1_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps4, " ");
} }
function MainComponent_div_17_div_1_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps4, " ");
} }
function MainComponent_div_17_div_1_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps5, " ");
} }
function MainComponent_div_17_div_1_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", offer_r4.Hotels[0].teps5, " ");
} }
function MainComponent_div_17_div_1_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps6, " ");
} }
function MainComponent_div_17_div_1_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps6, " ");
} }
function MainComponent_div_17_div_1_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps7, " ");
} }
function MainComponent_div_17_div_1_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps7, " ");
} }
function MainComponent_div_17_div_1_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps8, " ");
} }
function MainComponent_div_17_div_1_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps8, " ");
} }
function MainComponent_div_17_div_1_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps9, " ");
} }
function MainComponent_div_17_div_1_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps9, " ");
} }
function MainComponent_div_17_div_1_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps10, " ");
} }
function MainComponent_div_17_div_1_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4.Hotels[0].teps10, " ");
} }
function MainComponent_div_17_div_1_section_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgg_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0635\u0648\u0631 \u0645\u0646\u0648\u0639\u0629 \u0644\u0644\u0645\u0646\u062A\u062C\u0639 ( ", imgg_r50.HotelName, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r52.sanitizeUrl(imgg_r50.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MainComponent_div_17_div_1_section_58_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgg_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0635\u0648\u0631 \u0645\u0646\u0648\u0639\u0629 \u0644\u0644\u0645\u0646\u062A\u062C\u0639 ( ", imgg_r50.HotelName, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imgg_r50.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MainComponent_div_17_div_1_section_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_17_div_1_section_58_div_1_Template, 4, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_17_div_1_section_58_div_2_Template, 4, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgg_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", imgg_r50.image1.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", imgg_r50.image1.length > 30);
} }
function MainComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "caption", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0627\u0644\u0644\u064A\u0627\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0627\u0644\u063A\u0631\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u062A.\u0627\u0644\u062F\u062E\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0627\u0644\u0648\u062C\u0628\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MainComponent_div_17_div_1_tr_25_Template, 15, 7, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u064A\u0634\u0645\u0644 \u0627\u0644\u0639\u0631\u0636 \u0639\u0644\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MainComponent_div_17_div_1_th_31_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainComponent_div_17_div_1_th_32_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainComponent_div_17_div_1_th_33_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainComponent_div_17_div_1_th_34_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainComponent_div_17_div_1_th_36_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MainComponent_div_17_div_1_th_37_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MainComponent_div_17_div_1_th_38_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MainComponent_div_17_div_1_th_39_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MainComponent_div_17_div_1_th_41_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MainComponent_div_17_div_1_th_42_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MainComponent_div_17_div_1_th_43_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MainComponent_div_17_div_1_th_44_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MainComponent_div_17_div_1_th_46_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MainComponent_div_17_div_1_th_47_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MainComponent_div_17_div_1_th_48_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MainComponent_div_17_div_1_th_49_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MainComponent_div_17_div_1_th_51_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MainComponent_div_17_div_1_th_52_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, MainComponent_div_17_div_1_th_53_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MainComponent_div_17_div_1_th_54_Template, 4, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MainComponent_div_17_div_1_section_58_Template, 3, 2, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", offer_r4["Offer"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", offer_r4.Hotels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps1 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps1 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps2 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps2 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps3 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps3 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps4 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps4 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps5 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps5 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps6 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps6 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps7 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps7 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps8 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps8 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps9 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps9 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps10 === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", offer_r4.Hotels[0].teps10 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0627\u0644\u0633\u0639\u0631 : ", offer_r4.Hotels[0].price, " \u0631\u064A\u0627\u0644 \u0641\u0642\u0637 . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", offer_r4.Hotels);
} }
function MainComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_17_div_1_Template, 59, 24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1);
} }
class MainComponent {
    constructor(api, _DomSanitizationService, route) {
        this.api = api;
        this._DomSanitizationService = _DomSanitizationService;
        this.route = route;
        this.title = 'pdf-server';
        this.d = [];
        this.showDownload = true;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.id = params['id'];
            this.getOfferById(params['id']);
        });
    }
    sanitizeUrl(url) {
        return this._DomSanitizationService.bypassSecurityTrustUrl(url);
    }
    getOfferById(id) {
        this.api.getOfferById(id).subscribe((data) => {
            console.log('offer by id', data);
            let count = 0;
            data.Offers.forEach((ele) => {
                count++;
                ele.Hotels.forEach((val) => {
                    count++;
                });
            });
            count++;
            this.totalprintpagecount = count;
            // console.log(this.totalprintpagecount);
            this.d.push(data.Offers);
            this.companyName = data.name;
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 18, vars: 1, consts: [["id", "pdf", 1, "container"], ["size", "A4"], [1, "pageOne"], ["src", "../assets/img/newlogo2.png", 2, "object-fit", "contain", "height", "25%", "width", "70%", "margin-top", "17%", "margin-bottom", "0px"], [1, "intro"], [1, "points"], [4, "ngFor", "ngForOf"], ["size", "A44"], [1, "pageThree"], [1, "container1"], ["id", "customers", 1, "table", "table-bordered", 2, "width", "98%", "float", "right", "margin-right", "1%"], ["id", "name", 2, "caption-side", "up"], ["id", "nam"], ["scope", "col"], [2, "font-size", "25px"], [1, "tipsTable"], ["style", "text-align: right", 4, "ngIf"], [2, "display", "block", "position", "relative"], ["id", "nam", 2, "direction", "rtl", "color", "#488fa2"], ["size", "A4", 4, "ngFor", "ngForOf"], ["scope", "row"], [2, "width", "30%", "word-break", "break-word"], [2, "width", "13%"], [2, "width", "25%"], [2, "width", "14%"], [2, "width", "15%"], [2, "text-align", "right"], [2, "margin-left", "10px"], ["class", "sss pageThree", 4, "ngIf"], [1, "sss", "pageThree"], [2, "padding-top", "10%", "padding-bottom", "10%", "direction", "rtl"], ["id", "immg", 3, "src"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0646\u0631\u062D\u0628 \u0628\u0643 \u0641\u064A \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0639\u0637\u0644\u0627\u062A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0627\u0626\u062F \u0641\u064A \u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u062C\u0632\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0646\u062A\u0637\u0644\u0639 \u062F\u0627\u0626\u0645\u0627 \u0644\u062A\u0642\u062F\u064A\u0645 \u0623\u0631\u0642\u0649 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0644\u0643\u0640\u0645 \u0644\u0631\u062D\u0644\u0629 \u0644\u0627 \u062A\u0646\u0633\u0649");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0641\u0631\u064A\u0642 \u0639\u0645\u0644 \u0633\u0639\u0648\u062F\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0623\u0631\u0642\u0649 \u062E\u062F\u0645\u0629 \u0628\u0633\u0639\u0631 \u0645\u0646\u0627\u0641\u0633");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062F\u0639\u0645 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629 \u0644\u0639\u0645\u0644\u0627\u0626\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainComponent_div_17_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Cairo&display=swap\");\n\nsection[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  margin-bottom: 0.5cm;\r\n  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);\r\n}\nsection[size=\"A4\"][_ngcontent-%COMP%] {\r\n  width: 21cm;\r\n  height: 29.7cm;\r\n}\nsection[size=\"A44\"][_ngcontent-%COMP%] {\r\n  width: 21cm;\r\n  height: 29.7cm;\r\n  background-repeat: repeat;\r\n}\nsection[size=\"A444\"][_ngcontent-%COMP%] {\r\n  width: 21cm;\r\n  height: 29.7cm;\r\n  background-repeat: repeat;\r\n}\ndiv.pageThree[_ngcontent-%COMP%] {\r\n  background-image: url('2.png');\r\n  background-repeat: repeat;\r\n  background-size: 21cm 29.7cm;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n\r\n  text-align: right;\r\n}\n.pageThree[_ngcontent-%COMP%] {\r\n  background-image: url('2.png');\r\n  background-repeat: repeat;\r\n  background-size: 21cm 29.7cm;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  text-align: right;\r\n}\ndiv.pageOne[_ngcontent-%COMP%] {\r\n  background-image: url('1.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 21cm 29.7cm;\r\n  width: 100%;\r\n  height: 29.7cm;\r\n}\n@media print {\r\n  *[_ngcontent-%COMP%] {\r\n    -webkit-print-color-adjust: exact !important; \r\n    color-adjust: exact !important; \r\n  }\r\n  section[size=\"A4\"][_ngcontent-%COMP%] {\r\n    width: 108%;\r\n    \r\n    height: 29.7cm;\r\n    padding: 0;\r\n    margin-top: -32px;\r\n    box-shadow: none;\r\n    margin-left: -47px;\r\n  }\r\n  section[size=\"A44\"][_ngcontent-%COMP%] {\r\n    width: 108%;\r\n    height: 29.7cm;\r\n    padding: 0;\r\n    \r\n    margin-left: -43.2px;\r\n    box-shadow: none;\r\n  }\r\n  table.tipsTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n  #customers[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n  }\r\n  #customers[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n  div.points[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-top: 55%;\r\n  }\r\n  \r\n\r\n  div.pageOne[_ngcontent-%COMP%] {\r\n    width: 105%;\r\n    \r\n    height: 30cm;\r\n    \r\n    \r\n    \r\n  }\r\n  div.pageThree[_ngcontent-%COMP%] {\r\n    width: 104.7%;\r\n    height: 29.7cm;\r\n    \r\n  }\r\n\r\n  div.sss[_ngcontent-%COMP%]   img#immg[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-left: 1.5%;\r\n  }\r\n  table[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n\r\n    margin: 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n  }\r\n  div.container[_ngcontent-%COMP%]   p#tit[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    word-wrap: break-word;\r\n  }\r\n  div.container[_ngcontent-%COMP%]   p#nam[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    word-wrap: break-word;\r\n  }\r\n  div.points[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n  }\r\n}\nimg#immg[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  margin: 2% 4% 3% 3%;\r\n  border-radius: 20px;\r\n  border: 5px solid;\r\n  width: 90%;\r\n\r\n  float: rigth;\r\n}\ndiv.pageOne[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-top: 20%;\r\n  margin-left: 3%;\r\n  margin-bottom: 80px;\r\n}\ndiv.intro[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  font-size: 22px;\r\n  color: #488fa2;\r\n  \r\n  font-family: \"Cairo\", sans-serif;\r\n}\np[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 25px;\r\n  color: #488fa2;\r\n  font-family: \"Cairo\", sans-serif;\r\n  \r\n}\ndiv.points[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 10px;\r\n}\ndiv.points[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 23px;\r\n  color: #446f6d;\r\n  margin-top: 30%;\r\n}\ntable[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  direction: rtl;\r\n  margin-top: 10%;\r\n  \r\n  font-family: \"Cairo\", sans-serif;\r\n  \r\n  margin-bottom: 10%;\r\n}\n#customers[_ngcontent-%COMP%] {\r\n  \r\n  font-family: \"Cairo\", sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid rgb(2, 0, 0);\r\n  padding: 8px;\r\n}\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: hsla(193, 45%, 71%, 0.308);\r\n}\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #93c8d673;\r\n  \r\n}\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: center;\r\n  background-color: #488fa2;\r\n  \r\n  color: white;\r\n}\ncaption#name[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n}\n.container[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  padding: 1%;\r\n  margin: auto;\r\n  margin-top: 3%;\r\n  text-align: center;\r\n}\n.container1[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  padding: 1%;\r\n  margin: auto;\r\n  margin-top: 3%;\r\n  text-align: center;\r\n}\ncaption[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-weight: 500;\r\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 200px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\ncanvas[_ngcontent-%COMP%] {\r\n  height: 29.7cm;\r\n  width: 21cm;\r\n}\ntable.tipsTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border: 1px solid;\r\n}\ntable.tipsTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  word-break: break-all;\r\n  width: 100%;\r\n  text-align: center;\r\n}\ntable.tipsTable[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: 1px solid #488fa2;\r\n  margin: auto;\r\n  margin-bottom: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEVBQTBFO0FBRDFFLHdGQUF3RjtBQUd4RjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsOEJBQStDO0VBQy9DLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjOztFQUVkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsOEJBQStDO0VBQy9DLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7O0VBRVosaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw4QkFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSw0Q0FBNEMsRUFBRSxrQkFBa0I7SUFDaEUsOEJBQThCLEVBQUUsVUFBVTtFQUM1QztFQUNBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBOzs7S0FHRzs7RUFFSDtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekI7d0JBQ29CO0VBQ3RCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7O0lBRWYsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTs7RUFFVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQywrQ0FBK0M7RUFDL0Msa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzREFBc0Q7QUFDeEQ7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCBcImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4zL2Nzcy9ib290c3RyYXAubWluLmNzc1wiOyAqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2Fpcm8mZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41Y207XHJcbiAgYm94LXNoYWRvdzogMCAwIDAuNWNtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuc2VjdGlvbltzaXplPVwiQTRcIl0ge1xyXG4gIHdpZHRoOiAyMWNtO1xyXG4gIGhlaWdodDogMjkuN2NtO1xyXG59XHJcblxyXG5zZWN0aW9uW3NpemU9XCJBNDRcIl0ge1xyXG4gIHdpZHRoOiAyMWNtO1xyXG4gIGhlaWdodDogMjkuN2NtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbn1cclxuc2VjdGlvbltzaXplPVwiQTQ0NFwiXSB7XHJcbiAgd2lkdGg6IDIxY207XHJcbiAgaGVpZ2h0OiAyOS43Y207XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxufVxyXG5kaXYucGFnZVRocmVlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nLzIucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMWNtIDI5LjdjbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5wYWdlVGhyZWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvMi5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIxY20gMjkuN2NtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuZGl2LnBhZ2VPbmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvMS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIxY20gMjkuN2NtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjkuN2NtO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICoge1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7IC8qQ2hyb21lLCBTYWZhcmkgKi9cclxuICAgIGNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDsgLypGaXJlZm94Ki9cclxuICB9XHJcbiAgc2VjdGlvbltzaXplPVwiQTRcIl0ge1xyXG4gICAgd2lkdGg6IDEwOCU7XHJcbiAgICAvKiB3aWR0aDogMjRjbTsgKi9cclxuICAgIGhlaWdodDogMjkuN2NtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDdweDtcclxuICB9XHJcbiAgc2VjdGlvbltzaXplPVwiQTQ0XCJdIHtcclxuICAgIHdpZHRoOiAxMDglO1xyXG4gICAgaGVpZ2h0OiAyOS43Y207XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogbWFyZ2luLXRvcDogOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00My4ycHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICB0YWJsZS50aXBzVGFibGUgdHIgdGgge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB0aGVhZCB0ciB0aCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAjY3VzdG9tZXJzIHRib2R5IHRyIHRkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgZGl2LnBvaW50cyB1bCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NSU7XHJcbiAgfVxyXG4gIC8qIHNlY3Rpb257XHJcblxyXG4gICAgaGVpZ2h0OiAyNi44Y207XHJcbiAgfSAqL1xyXG5cclxuICBkaXYucGFnZU9uZSB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxuICAgIC8qIHdpZHRoOiAyNGNtOyAqL1xyXG4gICAgaGVpZ2h0OiAzMGNtO1xyXG4gICAgLyogYm9yZGVyOiAycHggc29saWQ7ICovXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOjEwcHggOyAqL1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IC01MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7ICovXHJcbiAgfVxyXG4gIGRpdi5wYWdlVGhyZWUge1xyXG4gICAgd2lkdGg6IDEwNC43JTtcclxuICAgIGhlaWdodDogMjkuN2NtO1xyXG4gICAgLyogYm9yZGVyOiAycHggc29saWQ7ICovXHJcbiAgfVxyXG5cclxuICBkaXYuc3NzIGltZyNpbW1nIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41JTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgZGl2LmNvbnRhaW5lciBwI3RpdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIGRpdi5jb250YWluZXIgcCNuYW0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICBkaXYucG9pbnRzIHVsIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbmltZyNpbW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luOiAyJSA0JSAzJSAzJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xyXG4gIHdpZHRoOiA5MCU7XHJcblxyXG4gIGZsb2F0OiByaWd0aDtcclxufVxyXG5kaXYucGFnZU9uZSBpbWcge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcbmRpdi5pbnRybyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjNDg4ZmEyO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiByZXZlcnQ7ICovXHJcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjNDg4ZmEyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgLyogZm9udC1mYW1pbHk6IHJldmVydDsgKi9cclxufVxyXG5kaXYucG9pbnRzIHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnBvaW50cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGNvbG9yOiAjNDQ2ZjZkO1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXHJcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcclxuICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0ZCxcclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIsIDAsIDApO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTkzLCA0NSUsIDcxJSwgMC4zMDgpO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjOGQ2NzM7XHJcbiAgLyogI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzRjYWY0ZjUwOyAqL1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4OGZhMjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjRmZTE7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmNhcHRpb24jbmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8qIGJvcmRlcjogMnB4IGJsYWNrIGRvdHRlZDsgKi9cclxuICAvKiB3aWR0aDogMTIwMHB4OyAqL1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lcjEge1xyXG4gIC8qIGJvcmRlcjogMnB4IGJsYWNrIGRvdHRlZDsgKi9cclxuICAvKiB3aWR0aDogMTIwMHB4OyAqL1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG50Ym9keSB0ciB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG50aGVhZCB0ciB0aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuY2FudmFzIHtcclxuICBoZWlnaHQ6IDI5LjdjbTtcclxuICB3aWR0aDogMjFjbTtcclxufVxyXG5cclxudGFibGUudGlwc1RhYmxlIHRib2R5IHRyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG50YWJsZS50aXBzVGFibGUgdGQge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGFibGUudGlwc1RhYmxlIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ODhmYTI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map