webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["b" /* HomeComponent */]
    },
    {
        path: "posts",
        component: __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__["a" /* PostsComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'dark-theme': true}\">\r\n  <div class=\"mat-app-background\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_theme_service__ = __webpack_require__("./src/app/services/theme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(themeService) {
        this.themeService = themeService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isThemeDark = this.themeService.isThemeDark;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_theme_service__["a" /* ThemeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_theme_service__ = __webpack_require__("./src/app/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import {MatBottomSheetModule} from '@angular/material/bottom-sheet';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__["a" /* MatChipsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* DialogContentExampleDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].production })
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* DialogContentExampleDialog */]],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_theme_service__["a" /* ThemeService */], __WEBPACK_IMPORTED_MODULE_17__services_news_service__["a" /* NewsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/dialog-content-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1></h1>\r\n\r\n<h2 mat-dialog-title>{{ data?.title }}</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <mat-card>\r\n    <!-- <div class=\"cardbody\">\r\n            \r\n      \r\n        <mat-card-header>\r\n            \r\n            <mat-card-title>कहानी एक 'आदमख़ोर पुलिस वाले' की जिसे अदालत ने बरी कर दिया था</mat-card-title>\r\n          \r\n        \r\n          </mat-card-header>\r\n        </div>     -->\r\n    <img mat-card-image src=\"{{ data?.topImage }}\" onError=\"this.src='/assets/blank.png';\">\r\n    <div class=\"cardbody\">\r\n      <!-- <mat-card-title>कहानी एक 'आदमख़ोर पुलिस वाले' की जिसे अदालत ने बरी कर दिया था</mat-card-title> -->\r\n      <mat-card-content>\r\n        <b>\r\n          {{ data?.content.boldSection }}\r\n        </b>\r\n        <br/>\r\n        <br/>\r\n        <p>\r\n          {{ data?.content.section1 }}\r\n        </p>\r\n\r\n        <p>\r\n          {{ data?.content.section2 }}\r\n        </p>\r\n        <img mat-card-image src=\"{{ data?.content.imgURL1}}\" onError=\"this.src='/assets/blank.png';\">\r\n\r\n       \r\n        \r\n\r\n        <p>\r\n          {{ data?.content.section3 }}\r\n        </p>\r\n\r\n        <p>\r\n          {{ data?.content.section4 }}\r\n        </p>\r\n        \r\n        <img mat-card-image src=\"{{ data?.content.imgURL1}}\" onError=\"this.src='/assets/blank.png';\">\r\n\r\n        <p>\r\n          {{ data?.content.section5 }}\r\n        </p>\r\n      </mat-card-content>\r\n    </div>\r\n\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button mat-dialog-close>Done</button>\r\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\r\n</mat-dialog-actions>\r\n\r\n\r\n<!-- Copyright 2020 Google LLC. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"homebtn\" fxLayout=\"wrap row\" fxLayout.xs=\"column\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n  <a routerLink=\"/posts\" mat-raised-button color=\"primary\">Choose News Source</a>\r\n</div> -->\r\n\r\n<!-- <div class=\"loader\" *ngIf=\"!((news.articles)?.length > 0)\">\r\n  <mat-spinner></mat-spinner>\r\n</div> -->\r\n<br/>\r\n<div class=\"container\" fxLayout=\"wrap row\" fxLayout.xs=\"column\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n  \r\n\r\n  <button mat-raised-button (click)=\"changeSelected('10000')\">सरगुजा</button>\r\n  <button mat-raised-button color=\"primary\"(click)=\"changeSelected('10001')\">भारत</button>\r\n  <button mat-raised-button color=\"accent\" (click)=\"changeSelected('10002')\">विदेश</button>\r\n  <button mat-raised-button color=\"warn\"(click)=\"changeSelected('10003')\">मनोरंजन</button>\r\n  <button mat-raised-button color=\"warn\"(click)=\"changeSelected('10004')\">गरम वीडियो</button>\r\n  <button mat-raised-button color=\"warn\"(click)=\"changeSelected('10005')\">सरकारी नौकरी</button>\r\n  <!-- <mat-chip-list>\r\n    \r\n      <mat-chip *ngFor=\"let chip of availableColors\" [id]=\"chip.id\" [color]=\"chip.color\"  (selectionChange)=\"changeSelected($event)\" (click)=\"chip.state =! chip.state\">\r\n      \r\n        {{chip.name}}\r\n       \r\n      </mat-chip>\r\n     \r\n\r\n  </mat-chip-list> -->\r\n\r\n</div>\r\n<br/>\r\n\r\n\r\n<div class=\"container\" fxLayout=\"wrap row\" fxLayout.xs=\"column\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n\r\n  <div *ngFor=\"let post of news.articles\" fxFlex=\"20%\">\r\n    <mat-card>\r\n      <img mat-card-image src=\"{{post.urlToImage}}\" onError=\"this.src='/assets/blank.png';\">\r\n      <div class=\"cardbody\">\r\n        <mat-card-title>{{post.title}}</mat-card-title>\r\n        <mat-card-content>\r\n          <p>{{post.description}}</p>\r\n        </mat-card-content>\r\n      </div>\r\n      <mat-card-actions align=\"end\">\r\n        <button mat-raised-button color=\"accent\" (click)=\"openDialog(post)\">Read More</button>\r\n        <!-- <a href=\"{{post.url}}\" target=\"_balnk\" mat-raised-button color=\"accent\">Read More</a> -->\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n\r\n    <!-- <mat-card *ngIf=\"category == '10004'\">\r\n      <img mat-card-image src=\"{{post.urlToImage}}\" onError=\"this.src='/assets/blank.png';\">\r\n      <div class=\"cardbody\">\r\n        <mat-card-title>{{post.title}}</mat-card-title>\r\n        <mat-card-content>\r\n          <iframe width=\"100%\" [src]=\"safeURL\" >\r\n          </iframe>\r\n        </mat-card-content>\r\n      </div>\r\n     \r\n    </mat-card> -->\r\n    <!-- <mat-card *ngIf=\"category === '10004'\">\r\n     \r\n      <div>       \r\n        <mat-card-title>{{post.title}}</mat-card-title>\r\n        <mat-card-content>\r\n          <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\">\r\n          </iframe>\r\n        </mat-card-content>\r\n      </div>\r\n\r\n      <mat-card-actions align=\"end\">\r\n        <button mat-raised-button color=\"accent\" (click)=\"openDialog(post)\">Read More</button>\r\n      </mat-card-actions>\r\n    </mat-card> -->\r\n\r\n  </div>\r\n\r\n  <!-- <div *ngFor=\"let post of news.articles\">\r\n    <mat-card class=\"example-card\" *ngIf=\"category === '10004'\">\r\n      <mat-card-header>\r\n      \r\n        <mat-card-title>{{post.title}}</mat-card-title>\r\n    \r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <iframe src=\"https://www.youtube.com/watch?v=Pdfvy-kSEbU&list=RDPdfvy-kSEbU&start_radio=\">\r\n        </iframe>\r\n    \r\n      </mat-card-content>\r\n    \r\n    </mat-card>\r\n  </div> -->\r\n  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".singleNews {\n  margin-bottom: 15px; }\n  .singleNews img {\n    height: 200px; }\n  .singleNews mat-card-title {\n    font-size: 16px;\n    font-weight: bold; }\n  .singleNews .cardbody {\n    height: 100px;\n    overflow-y: auto;\n    margin: 0 -15px;\n    padding: 10px; }\n  .homebtn {\n  margin: 40px 0; }\n  .example-card {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContentExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpClient, dialog, newsService, _sanitizer) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.newsService = newsService;
        this._sanitizer = _sanitizer;
        this.news = [];
        this.availableColors = [
            { id: "10000", name: 'सरगुजा', color: 'primary', state: false },
            { id: "10001", name: 'भारत', color: 'warn', state: false },
            { id: "10002", name: 'विदेश', color: 'primary', state: false },
            { id: "10003", name: 'मनोरंजन', color: 'warn', state: false },
            { id: "10004", name: 'गरम वीडियो', color: 'primary', state: false },
            { id: "10005", name: 'सरकारी नौकरी', color: 'warn', state: false }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("assets/newsfeed.json").subscribe(function (data) {
            // console.log(data);
            _this.news = data;
        });
        // this.newsService.getTopHeadLines()
        // 	.subscribe(
        // 		response => this.news = response.json()
        // );
    };
    HomeComponent.prototype.changeSelected = function (value) {
        var _this = this;
        this.news = [];
        this.category = value;
        //e.source._elementRef.nativeElement.id;
        // for(var i = 0; i < this.availableColors.length; i++) {
        //   let chip = this.availableColors[i];
        //   if (chip.id == this.category) {
        //    // alert("selected");
        //     chip.state = true;
        //   } 
        // } 
        if (this.category == "10000") {
            this.httpClient.get("assets/newsfeed.json").subscribe(function (data) {
                _this.news = data;
            });
            //  this.newsService.getTopHeadLines()
            // .subscribe(
            //   response => this.news = response.json());
        }
        else if (this.category == "10002") {
            this.httpClient.get("assets/newsfeed_world.json").subscribe(function (data) {
                _this.news = data;
            });
            //  this.newsService.getTopHeadLines()
            // .subscribe(
            //   response => this.news = response.json());
        }
        if (this.category == "10001") {
            this.httpClient.get("assets/newsfeed_india.json").subscribe(function (data) {
                _this.news = data;
            });
            // this.newsService.getTopInHeadLines()
            // .subscribe(
            //   response => this.news = response.json());
            //   this.newsService.getNewBySource("google-news-in")
            //  .subscribe(
            //    response => this.news = response.json());
        }
        if (this.category == "10003") {
            this.httpClient.get("assets/newsfeed_entertainment.json").subscribe(function (data) {
                _this.news = data;
            });
            // this.newsService.getTopEntertainmentHeadLines()
            // .subscribe(
            //   response => this.news = response.json());
            //   this.newsService.getNewBySource("google-news-in")
            //  .subscribe(
            //    response => this.news = response.json());
        }
        else if (this.category == "10004") {
            // this.httpClient.get("assets/hot_video_newsfeed.json").subscribe(data =>{    
            //   this.news =  data;
            //   this.safeURL = "https://www.youtube.com/watch?v=JFcgOboQZ08&list=RDJFcgOboQZ08&start_radio=1";
            //   //this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=Pdfvy-kSEbU&list=RDPdfvy-kSEbU&start_radio=");
            // })
        }
        //else {
        //     this.httpClient.get("assets/newsfeed.json").subscribe(data =>{    
        //     this.news =  data;
        //   })
        //   }
        //this.selected = e.value;
    };
    HomeComponent.prototype.openDialog = function (post) {
        // console.log("testingf"+JSON.stringify(post));
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            data: {
                title: post.title,
                topImage: post.urlToImage,
                content: post.content,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomeComponent);
    return HomeComponent;
}());

var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog(data) {
        this.data = data;
        // console.log("testing1"+JSON.stringify(data));
    }
    DialogContentExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__("./src/app/home/dialog-content-example-dialog.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogContentExampleDialog);
    return DialogContentExampleDialog;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n\r\n  <mat-toolbar-row>\r\n    <section class=\"wrapper\">\r\n      <h2 class=\"sentence\">\r\n        <div class=\"pushEffect\">              \r\n          <span>मोरसरगुजा</span>\r\n          <span>MorSurguja</span>    \r\n          <span>Fast News</span>\r\n        </div>\r\n      </h2>     \r\n    </section>\r\n    \r\n\r\n    <!-- <span>Morsurguja</span> -->\r\n    <span class=\"example-spacer\"></span>\r\n   \r\n\r\n    <a class=\"example-link\" routerLink=\"/\" mat-button></a>\r\n\r\n\r\n    \r\n\r\n    <!-- <mat-chip  selected [color]=\"accent\">\r\n      मनोरंजन\r\n    </mat-chip> -->\r\n  <!-- </mat-chip-list> -->\r\n  <a class=\"example-link\" routerLink=\"/\" mat-button color=\"warn\"><mat-icon>menu</mat-icon></a>\r\n    <!-- <button mat-button (click)=\"sidenav.open()\" ><mat-icon>menu</mat-icon></button> -->\r\n\r\n    <a class=\"example-link\" routerLink=\"/posts\"  mat-button color=\"warn\">Explore</a>\r\n  \r\n    <!-- <a class=\"example-link\" routerLink=\"/posts\" mat-button>Posts</a> -->\r\n    <!-- <a class=\"example-link\" href=\"https://github.com/geeksamu/angular-5-article-series\" mat-button>\r\n      <mat-icon>star</mat-icon>  \r\n      Github\r\n    </a> -->\r\n    <!-- <mat-slide-toggle [checked]=\"isThemeDark | async\" (change)=\"toggleDarkTheme($event.checked)\">Dark theme</mat-slide-toggle> -->\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-link {\n  padding: 0 14px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n/*Sentence*/\n\n.sentence {\n  color: #222;\n  font-size: 30px;\n  text-align: left; }\n\n/*Wrapper*/\n\n.wrapper {\n  font-family: 'Raleway', sans-serif;\n  margin: 0px 20px 30px 0px;\n  position: relative; }\n\n/*Vertical Sliding*/\n\n.slidingVertical {\n  display: inline;\n  text-indent: 8px; }\n\n.slidingVertical span {\n  animation: topToBottom 12.5s linear infinite 0s;\n  -ms-animation: topToBottom 12.5s linear infinite 0s;\n  -webkit-animation: topToBottom 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.slidingVertical span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.slidingVertical span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.slidingVertical span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.slidingVertical span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*topToBottom Animation*/\n\n@-webkit-keyframes topToBottom {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(50px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*Horizontal Sliding*/\n\n.slidingHorizontal {\n  display: inline;\n  text-indent: 8px; }\n\n.slidingHorizontal span {\n  animation: leftToRight 12.5s linear infinite 0s;\n  -ms-animation: leftToRight 12.5s linear infinite 0s;\n  -webkit-animation: leftToRight 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.slidingHorizontal span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.slidingHorizontal span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.slidingHorizontal span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.slidingHorizontal span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*leftToRight Animation*/\n\n@-webkit-keyframes leftToRight {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: translateX(-50px); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateX(50px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*FadeIn*/\n\n.fadeIn {\n  display: inline;\n  text-indent: 8px; }\n\n.fadeIn span {\n  animation: fadeEffect 12.5s linear infinite 0s;\n  -ms-animation: fadeEffect 12.5s linear infinite 0s;\n  -webkit-animation: fadeEffect 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.fadeIn span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.fadeIn span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.fadeIn span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.fadeIn span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*FadeIn Animation*/\n\n@-webkit-keyframes fadeEffect {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: translateY(0px); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*Vertical Flip*/\n\n.verticalFlip {\n  display: inline;\n  text-indent: 8px; }\n\n.verticalFlip span {\n  animation: vertical 12.5s linear infinite 0s;\n  -ms-animation: vertical 12.5s linear infinite 0s;\n  -webkit-animation: vertical 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.verticalFlip span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.verticalFlip span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.verticalFlip span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.verticalFlip span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*Vertical Flip Animation*/\n\n@-webkit-keyframes vertical {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: rotateX(180deg); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*Horizontal Flip*/\n\n.horizontalFlip {\n  display: inline;\n  text-indent: 8px; }\n\n.horizontalFlip span {\n  animation: horizontal 12.5s linear infinite 0s;\n  -ms-animation: horizontal 12.5s linear infinite 0s;\n  -webkit-animation: horizontal 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.horizontalFlip span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.horizontalFlip span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.horizontalFlip span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.horizontalFlip span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*Horizontal Flip Animation*/\n\n@-webkit-keyframes horizontal {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: rotateY(180deg); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateX(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*AntiClockWise Effect*/\n\n.antiClock {\n  display: inline;\n  text-indent: 8px; }\n\n.antiClock span {\n  animation: anti 12.5s linear infinite 0s;\n  -ms-animation: anti 12.5s linear infinite 0s;\n  -webkit-animation: anti 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.antiClock span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.antiClock span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.antiClock span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.antiClock span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*AntiClockWise Effect Animation*/\n\n@-webkit-keyframes anti {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: rotate(180deg); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*ClockWise Effect*/\n\n.clockWise {\n  display: inline;\n  text-indent: 8px; }\n\n.clockWise span {\n  animation: clock 12.5s linear infinite 0s;\n  -ms-animation: clock 12.5s linear infinite 0s;\n  -webkit-animation: clock 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.clockWise span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.clockWise span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.clockWise span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.clockWise span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*ClockWise Effect Animation*/\n\n@-webkit-keyframes clock {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: rotate(-180deg); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateX(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*Pop Effect*/\n\n.popEffect {\n  display: inline;\n  text-indent: 8px; }\n\n.popEffect span {\n  animation: pop 12.5s linear infinite 0s;\n  -ms-animation: pop 12.5s linear infinite 0s;\n  -webkit-animation: pop 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.popEffect span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.popEffect span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.popEffect span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.popEffect span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*Pop Effect Animation*/\n\n@-webkit-keyframes pop {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(0.1) skew(0deg) translate(0px); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*Push Effect*/\n\n.pushEffect {\n  display: inline;\n  text-indent: 8px; }\n\n.pushEffect span {\n  animation: push 12.5s linear infinite 0s;\n  -ms-animation: push 12.5s linear infinite 0s;\n  -webkit-animation: push 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute; }\n\n.pushEffect span:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s; }\n\n.pushEffect span:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s; }\n\n.pushEffect span:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s; }\n\n.pushEffect span:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s; }\n\n/*Push Effect Animation*/\n\n@-webkit-keyframes push {\n  0% {\n    opacity: 0; }\n  5% {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(2) skew(0deg) translate(0px); }\n  10% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  25% {\n    opacity: 1;\n    -webkit-transform: translateX(0px); }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateX(0px); }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n/*Footer*/\n\nh3 {\n  color: #fff;\n  font-size: 30px;\n  margin-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_theme_service__ = __webpack_require__("./src/app/services/theme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(themeService) {
        this.themeService = themeService;
        this.availableColors = [
            { name: 'भारत', color: 'warn' },
            { name: 'विदेश', color: 'primary' },
            { name: 'मनोरंजन', color: 'warn' },
            { name: 'गरम वीडियो', color: 'primary' },
            { name: 'सरकारी नौकरी', color: 'warn' }
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //this.isThemeDark = this.themeService.isThemeDark;
        this.themeService.setDarkTheme(true);
    };
    NavbarComponent.prototype.toggleDarkTheme = function (checked) {
        this.themeService.setDarkTheme(checked);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_theme_service__["a" /* ThemeService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container margin-top\" fxLayout=\"wrap row\" fxLayout.xs=\"column\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n  <mat-card class=\"filter\">\r\n    <form #filternewsForm=\"ngForm\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"News Source\" [(ngModel)]='filterSource' name=\"source\" required>\r\n          <mat-option *ngFor=\"let source of newsSources.sources\" [value]=\"source.id\">\r\n            {{source.name}} - {{ source.language }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" (click)='filterNews(filterSource)' [disabled]=\"!filternewsForm.form.valid\">Filter News to\r\n        <span style=\"text-transform: capitalize; \">{{filterSource}}</span>\r\n      </button>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"loader\" *ngIf=\"!((news.articles)?.length > 0)\">\r\n    <mat-spinner></mat-spinner>\r\n  </div>\r\n<div class=\"container\" fxLayout=\"wrap row\" fxLayout.xs=\"column\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n  <div *ngFor=\"let post of news.articles\" fxFlex=\"20%\">\r\n\r\n    <mat-card class=singleNews>\r\n      <img mat-card-image src=\"{{post.urlToImage}}\" onError=\"this.src='/assets/blank.png';\">\r\n      <div class=\"cardbody\">\r\n        <mat-card-title>{{post.title}}</mat-card-title>\r\n        <mat-card-content>\r\n          <p>{{post.description}}</p>\r\n        </mat-card-content>\r\n      </div>\r\n\r\n      <mat-card-actions align=\"end\">\r\n        <a href=\"{{post.url}}\" target=\"_balnk\" mat-raised-button color=\"accent\">Read More</a>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"container\" fxLayout=\"wrap row\" fxLayout.xs=\"column\" fxLayoutGap=\"10%\" fxLayoutAlign=\"center\">\r\n  <mat-chip-list>\r\n    <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\r\n      {{chip.name}}\r\n    </mat-chip>\r\n  </mat-chip-list>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/***/ (function(module, exports) {

module.exports = ".singleNews {\n  margin-bottom: 15px; }\n  .singleNews img {\n    height: 200px; }\n  .singleNews mat-card-title {\n    font-size: 16px;\n    font-weight: bold; }\n  .singleNews .cardbody {\n    height: 100px;\n    overflow-y: auto;\n    margin: 0 -15px;\n    padding: 10px; }\n  .filter {\n  margin-top: 100px;\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(newsService) {
        this.newsService = newsService;
        this.news = { articles: [] };
        this.newsSources = { sources: [] };
        this.filterSource = 'google-news';
        this.availableColors = [
            { name: 'भारत', color: 'warn' },
            { name: 'विदेश', color: 'accent' },
            { name: 'मनोरंजन', color: 'warn' },
            { name: 'गरम वीडियो', color: 'accent' },
            { name: 'सरकारी नौकरी', color: 'warn' }
        ];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getTopHeadLines()
            .subscribe(function (response) { return _this.news = response.json(); });
        this.getnewsSources();
    };
    PostsComponent.prototype.filterNews = function (source) {
        var _this = this;
        this.news = { articles: [] };
        this.newsService.getNewBySource(source)
            .subscribe(function (response) { return _this.news = response.json(); });
    };
    PostsComponent.prototype.getnewsSources = function () {
        var _this = this;
        this.newsService.getSources()
            .subscribe(function (response) { return _this.newsSources = response.json(); });
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-posts",
            template: __webpack_require__("./src/app/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/posts/posts.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.key = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].news_api_key;
    }
    NewsService.prototype.getTopHeadLines = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + this.key);
    };
    NewsService.prototype.getTopInHeadLines = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + this.key);
    };
    NewsService.prototype.getTopEntertainmentHeadLines = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=' + this.key);
    };
    NewsService.prototype.getNewBySource = function (source) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.key);
    };
    NewsService.prototype.getSources = function () {
        return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.key);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this._themeDark = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.isThemeDark = this._themeDark.asObservable();
    }
    ThemeService.prototype.setDarkTheme = function (isThemeDark) {
        this._themeDark.next(isThemeDark);
    };
    ThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    news_api_key: '474365a0460b4cb9beb79fe62b9c66b5'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map