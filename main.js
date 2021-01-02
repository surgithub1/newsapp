(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\s4hana\check\surguja\nxGNewsApp\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-twitter-timeline */ "MkFp");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../video/video.component */ "o9RM");
















function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_div_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openBottomSheet(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", post_r2.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return { sourceType: "url", url: a1 }; };
function HomeComponent_div_15_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-twitter-timeline", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tweets.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, post_r2.urlToImage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", post_r2.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_15_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "blockquote", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tweet\uD83E\uDDA6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "pic.twitter.com/fihF1WAkWi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2014 ", post_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", " ", post_r2.urlToImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", post_r2.urlToImage);
} }
const _c1 = function (a0) { return { "height": a0 }; };
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_15_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const post_r2 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openBottomSheet(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_15_div_7_Template, 4, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_15_div_8_Template, 9, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_15_div_9_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const post_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.openBottomSheet(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "news");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, post_r2.type == "news" ? "300px" : "440px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "tweet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "youtube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.description);
} }
class HomeComponent {
    constructor(httpClient, dialog, _sanitizer, _bottomSheet, platformId) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this._sanitizer = _sanitizer;
        this._bottomSheet = _bottomSheet;
        this.platformId = platformId;
        this.news = [];
        this.availableColors = [
            { id: "10000", name: 'सरगुजा', color: 'primary', state: false },
            { id: "10001", name: 'भारत', color: 'warn', state: false },
            { id: "10002", name: 'विदेश', color: 'primary', state: false },
            { id: "10003", name: 'मनोरंजन', color: 'warn', state: false },
            { id: "10004", name: 'गरम वीडियो', color: 'primary', state: false },
            { id: "10005", name: 'सरकारी नौकरी', color: 'warn', state: false },
            { id: "10006", name: 'tweets', color: 'primary', state: false }
        ];
    }
    ngOnInit() {
        this.httpClient.get("assets/newsfeed.json").subscribe(data => {
            this.news = data;
        });
    }
    changeSelected(value) {
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
            this.httpClient.get("assets/newsfeed.json").subscribe(data => {
                this.news = data;
            });
            //  this.newsService.getTopHeadLines()
            // .subscribe(
            //   response => this.news = response.json());
        }
        else if (this.category == "10002") {
            this.httpClient.get("assets/newsfeed_world.json").subscribe(data => {
                this.news = data;
            });
        }
        else if (this.category == "10001") {
            this.httpClient.get("assets/newsfeed_india.json").subscribe(data => {
                this.news = data;
            });
        }
        else if (this.category == "10003") {
            this.httpClient.get("assets/newsfeed_entertainment.json").subscribe(data => {
                this.news = data;
            });
        }
        else if (this.category == "10006") {
            this.httpClient.get("assets/newsfeed_tweets.json").subscribe(data => {
                this.news = data;
            });
        }
        //else {
        //     this.httpClient.get("assets/newsfeed.json").subscribe(data =>{    
        //     this.news =  data;
        //   })
        //   }
        //this.selected = e.value;
    }
    openBottomSheet(post) {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
            data: {
                title: post.title,
                topImage: post.urlToImage,
                content: post.content
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 2, consts: [["fxLayout", "wrap row", "fxLayout.xs", "column", "fxLayoutGap", "1%", "fxLayoutAlign", "center", 1, "container"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["class", "loader", 4, "ngIf"], ["fxLayout", "wrap row", "fxLayout.xs", "column", "fxLayoutGap", "1%", "fxLayoutAlign", "left", 1, "container"], ["fxFlex", "25%", 4, "ngFor", "ngForOf"], [1, "loader"], ["fxFlex", "25%"], [1, "singleNews"], [4, "ngIf"], [1, "cardbody", 3, "ngStyle", "click"], [1, "news-section-header"], [1, "news-section-p"], ["align", "end"], ["mat-card-image", "", "onError", "this.src='/assets/blank.png';", 3, "src", "click"], [3, "data"], ["data-lang", "hi", "data-theme", "dark", 1, "twitter-timeline", 3, "href"], ["data-lang", "hi", "data-theme", "light", 1, "twitter-tweet", 2, "width", "20%"], ["lang", "tl", "dir", "ltr"], ["href", "https://t.co/fihF1WAkWi"], [3, "href"], [3, "videoId"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() { return ctx.changeSelected("10000"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0938\u0930\u0917\u0941\u091C\u093E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() { return ctx.changeSelected("10001"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u092D\u093E\u0930\u0924");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.changeSelected("10002"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0935\u093F\u0926\u0947\u0936");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { return ctx.changeSelected("10003"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u092E\u0928\u094B\u0930\u0902\u091C\u0928/\u0935\u0940\u0921\u093F\u092F\u094B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { return ctx.changeSelected("10005"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0938\u0930\u0915\u093E\u0930\u0940 \u0928\u094C\u0915\u0930\u0940");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 15, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((ctx.news.articles == null ? null : ctx.news.articles.length) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news.articles);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultStyleDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_11__["NgxTwitterTimelineComponent"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Dir"], _video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"]], styles: [".singleNews[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.singleNews[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.singleNews[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n.singleNews[_ngcontent-%COMP%]   .cardbody[_ngcontent-%COMP%] {\n  height: 350px;\n  overflow-y: auto;\n  margin: 0 -15px;\n  padding: 10px;\n}\n.homebtn[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGVOZXdzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmNhcmRib2R5IHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIC0xNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuLmhvbWVidG57XHJcbiAgbWFyZ2luOjQwcHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();
class BottomSheetOverviewExampleSheet {
    // constructor(, public data: NewsData) {}
    constructor(_bottomSheetRef, data) {
        this._bottomSheetRef = _bottomSheetRef;
        this.data = data;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])); };
BottomSheetOverviewExampleSheet.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 24, vars: 18, consts: [[1, "news-section-header"], ["mat-card-image", "", "onError", "this.src='/assets/blank.png';", 3, "src"], [1, "cardbody"], [1, "news-section-header1"], [1, "news-section-p"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.topImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.content.boldSection, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.content.section1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.data == null ? null : ctx.data.content.section2, " ", ctx.data == null ? null : ctx.data.content.section3, " ", ctx.data == null ? null : ctx.data.content.section3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.content.imgURL1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.data == null ? null : ctx.data.content.section3, " ", ctx.data == null ? null : ctx.data.content.section3, " ", ctx.data == null ? null : ctx.data.content.section3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.data == null ? null : ctx.data.content.section4, " ", ctx.data == null ? null : ctx.data.content.section3, " ", ctx.data == null ? null : ctx.data.content.section3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.content.imgURL1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.data == null ? null : ctx.data.content.section5, " ", ctx.data == null ? null : ctx.data.content.section3, " ", ctx.data == null ? null : ctx.data.content.section3, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetOverviewExampleSheet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html'
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }]; }, null); })();


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
    production: false
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

/***/ "JEYT":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../video/video.component */ "o9RM");












function PostsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tweets.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", post_r2.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostsComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "blockquote", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tweet\uD83E\uDDA6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "pic.twitter.com/fihF1WAkWi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2014 ", post_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", " ", post_r2.urlToImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostsComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", post_r2.urlToImage);
} }
const _c0 = function (a0) { return { "height": a0 }; };
function PostsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostsComponent_div_3_div_8_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostsComponent_div_3_div_9_Template, 9, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostsComponent_div_3_div_10_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0907\u0902\u0938\u094D\u091F\u093E\u0917\u094D\u0930\u093E\u092E \u092A\u0930 \u0938\u0941\u092A\u0930 \u090F\u0915\u094D\u091F\u093F\u0935 \u0930\u0939\u0928\u0947 \u0935\u093E\u0932\u0940 \u090F\u0915\u094D\u091F\u094D\u0930\u0947\u0938 \u0926\u093F\u0936\u093E \u092A\u093E\u091F\u0928\u0940 \u0907\u0938 \u0938\u094B\u0936\u0932 \u092A\u094D\u0932\u0947\u091F\u092B\u0949\u0930\u094D\u092E \u0915\u0947 \u091C\u0930\u093F\u090F \u0915\u0908 \u092C\u094D\u0930\u093E\u0902\u0921\u094D\u0938 \u0915\u094B \u092D\u0940 \u092A\u094D\u0930\u092E\u094B\u091F \u0915\u0930\u0924\u0940 \u0939\u0948\u0902\u0964 \u0907\u0928\u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 \u0932\u0949\u0928\u094D\u091C\u0930\u0940 \u092C\u094D\u0930\u093E\u0902\u0921 \u092D\u0940 \u0939\u0948\u0964 \u0926\u093F\u0936\u093E \u0905\u0915\u094D\u0938\u0930 \u0907\u0938 \u092C\u094D\u0930\u093E\u0902\u0921 \u0915\u0940 \u0932\u0949\u0928\u094D\u091C\u0930\u0940 \u092A\u0939\u0928\u0915\u0930 \u0905\u092A\u0928\u0940 \u0924\u0938\u094D\u0935\u0940\u0930\u0947\u0902 \u092A\u094B\u0938\u094D\u091F \u0915\u0930\u0924\u0940 \u0939\u0948\u0902\u0964 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", post_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, post_r2.type == "timeline" || post_r2.type == "tweet" ? "400px" : "350px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "tweet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.type == "youtube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", post_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PostsComponent {
    constructor(httpClient, _router, platformId) {
        this.httpClient = httpClient;
        this._router = _router;
        this.platformId = platformId;
        this.news = [];
        this.newsSources = { sources: [] };
        this.filterSource = 'google-news';
        this.availableColors = [
            { name: 'भारत', color: 'warn' },
            { name: 'विदेश', color: 'accent' },
            { name: 'मनोरंजन', color: 'warn' },
            { name: 'गरम वीडियो', color: 'accent' },
            { name: 'सरकारी नौकरी', color: 'warn' }
        ];
        // this.initTwitterWidget();
    }
    ngAfterViewInit() {
        // if (isPlatformBrowser(this.platformId)) {
        //   setTimeout(function() {
        //     (<any>window).twttr = (function(d, s, id) {
        //       let js, fjs = d.getElementsByTagName(s)[0], t = (<any>window).twttr || {};
        //       if (d.getElementById(id)) return t;
        //       js = d.createElement(s);
        //       js.id = id;
        //       js.src = 'https://platform.twitter.com/widgets.js';
        //       if (fjs.parentNode != null ) {
        //         fjs.parentNode.insertBefore(js, fjs);
        //       }
        //       t._e = [];
        //       t.ready = function(f: any) {
        //         t._e.push(f);
        //       };
        //       return t;
        //     }(document, 'script', 'twitter-wjs'));
        //     if ((<any>window).twttr.ready()) {
        //       (<any>window).twttr.widgets.load();
        //     }
        //   }, 100);
        // }
    }
    // openBottomSheet(): void {
    //   this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    // }
    // initTwitterWidget() {
    //   alert("testing");
    //   this.twitter = this._router.events.subscribe(val => {
    //     if (val instanceof NavigationEnd) {
    //       alert("testing");
    //       (<any>window).twttr = (function (d, s, id) {
    //         let js: any, fjs = d.getElementsByTagName(s)[0],
    //             t = (<any>window).twttr || {};
    //         if (d.getElementById(id)) return t;
    //         js = d.createElement(s);
    //         js.id = id;
    //         js.src = "https://platform.twitter.com/widgets.js";
    //         fjs.parentNode.insertBefore(js, fjs);
    //         t._e = [];
    //         t.ready = function (f: any) {
    //             t._e.push(f);
    //         };
    //         return t;
    //       }(document, "script", "twitter-wjs"));
    //       (<any>window).twttr.widgets.load();
    //       if ((<any>window).twttr.ready())
    //       alert("testing1");
    //     }
    //   });
    // }
    // ngOnDestroy() {
    //   this.twitter.unsubscribe();
    // }
    ngOnInit() {
        //(<any>window).twttr.widgets.load();
        this.httpClient.get("assets/newsfeed_tweets.json").subscribe(data => {
            this.news = data;
        });
        //   translate('Ik spreek Engels', {to: 'en'}).then(res => {
        //     console.log(res.text);
        //     //=> I speak English
        //     console.log(res.from.language.iso);
        //     //=> nl
        // }).catch(err => {
        //     console.error(err);
        // });
        // this.newsService.getTopHeadLines()
        // 	.subscribe(
        // 		response => this.news = response.json()
        // );
        // this.getnewsSources();
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 4, vars: 2, consts: [["class", "loader", 4, "ngIf"], ["fxLayout", "wrap row", "fxLayout.xs", "column", "fxLayoutGap", "1%", "fxLayoutAlign", "left", 1, "container"], ["fxFlex", "25%", 4, "ngFor", "ngForOf"], [1, "loader"], ["fxFlex", "25%"], [1, "singleNews"], [1, "cardbody", 3, "ngStyle"], [4, "ngIf"], ["align", "end"], ["target", "_balnk", "mat-raised-button", "", "color", "accent", 3, "href"], ["data-lang", "hi", "data-theme", "dark", 1, "twitter-timeline", 3, "href"], ["data-lang", "hi", "data-theme", "light", 1, "twitter-tweet", 2, "width", "20%"], ["lang", "tl", "dir", "ltr"], ["href", "https://t.co/fihF1WAkWi"], [3, "href"], [3, "videoId"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostsComponent_div_3_Template, 16, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((ctx.news.articles == null ? null : ctx.news.articles.length) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Dir"], _video_video_component__WEBPACK_IMPORTED_MODULE_10__["VideoComponent"]], styles: [".singleNews[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.singleNews[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.singleNews[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n.singleNews[_ngcontent-%COMP%]   .cardbody[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  margin: 0 -15px;\n  padding: 10px;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 50px;\n}\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 250px;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlTmV3cyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jYXJkYm9keSB7XHJcblxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1hcmdpbjogMCAtMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5maWx0ZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-posts",
                templateUrl: "./posts.component.html",
                styleUrls: ["./posts.component.scss"]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Q4H4":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.component */ "o9RM");




class VideoModule {
}
VideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoModule });
VideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoModule_Factory(t) { return new (t || VideoModule)(); }, imports: [[
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoModule, { declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]], imports: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayerModule"]], exports: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayerModule"],
                ],
                declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]],
                exports: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function () { return { "dark-theme": true }; };
class AppComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
        this.isThemeDark = this.themeService.isThemeDark;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[3, "ngClass"], [1, "mat-app-background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"]
            }]
    }], function () { return [{ type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ThemeService {
    constructor() {
        this._themeDark = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isThemeDark = this._themeDark.asObservable();
    }
    setDarkTheme(isThemeDark) {
        this._themeDark.next(isThemeDark);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/posts.component */ "JEYT");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _video_video_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./video/video.module */ "Q4H4");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-twitter-timeline */ "MkFp");








//import {MatBottomSheetModule} from '@angular/material/bottom-sheet';










































// import { MyComponentModule } from './posts/my-component.module';
// import { NewsService } from './services/news.service';


//import { VideoModule } from './posts/video.module';



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_14__["ThemeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__["OverlayModule"],
            _video_video_module__WEBPACK_IMPORTED_MODULE_50__["VideoModule"],
            ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_51__["NgxTwitterTimelineModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__["OverlayModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["BottomSheetOverviewExampleSheet"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__["OverlayModule"],
        _video_video_module__WEBPACK_IMPORTED_MODULE_50__["VideoModule"],
        ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_51__["NgxTwitterTimelineModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__["OverlayModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__["OverlayModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["BottomSheetOverviewExampleSheet"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_49__["OverlayModule"],
                    _video_video_module__WEBPACK_IMPORTED_MODULE_50__["VideoModule"],
                    ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_51__["NgxTwitterTimelineModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })
                ],
                providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_14__["ThemeService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/theme.service */ "WPWp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class NavbarComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.availableColors = [
            { name: 'भारत', color: 'warn' },
            { name: 'विदेश', color: 'primary' },
            { name: 'मनोरंजन', color: 'warn' },
            { name: 'गरम वीडियो', color: 'primary' },
            { name: 'सरकारी नौकरी', color: 'warn' }
        ];
    }
    ngOnInit() {
        this.isThemeDark = this.themeService.isThemeDark;
        this.themeService.setDarkTheme(true);
    }
    toggleDarkTheme(checked) {
        this.themeService.setDarkTheme(checked);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 0, consts: [["color", "primary"], [1, "wrapper"], [2, "color", "crimson"], [1, "example-spacer"], ["routerLink", "/", "mat-button", "", 1, "example-link"], ["routerLink", "/", "mat-button", "", "color", "warn", 1, "example-link"], ["routerLink", "/posts", "mat-button", "", "color", "warn", 1, "example-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u092E\u094B\u0930\u0938\u0930\u0917\u0941\u091C\u093E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".example-link[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n\n\n.sentence[_ngcontent-%COMP%] {\n  color: #222;\n  font-size: 30px;\n  text-align: left;\n}\n\n\n\n.wrapper[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n  margin: 0px 20px 30px 0px;\n  position: relative;\n}\n\n\n\n.slidingVertical[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.slidingVertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: topToBottom 12.5s linear infinite 0s;\n  -ms-animation: topToBottom 12.5s linear infinite 0s;\n  -webkit-animation: topToBottom 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.slidingVertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.slidingVertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.slidingVertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.slidingVertical[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.slidingHorizontal[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.slidingHorizontal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: leftToRight 12.5s linear infinite 0s;\n  -ms-animation: leftToRight 12.5s linear infinite 0s;\n  -webkit-animation: leftToRight 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.slidingHorizontal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.slidingHorizontal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.slidingHorizontal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.slidingHorizontal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.fadeIn[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.fadeIn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: fadeEffect 12.5s linear infinite 0s;\n  -ms-animation: fadeEffect 12.5s linear infinite 0s;\n  -webkit-animation: fadeEffect 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.fadeIn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.fadeIn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.fadeIn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.fadeIn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.verticalFlip[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.verticalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: vertical 12.5s linear infinite 0s;\n  -ms-animation: vertical 12.5s linear infinite 0s;\n  -webkit-animation: vertical 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.verticalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.verticalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.verticalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.verticalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.horizontalFlip[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.horizontalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: horizontal 12.5s linear infinite 0s;\n  -ms-animation: horizontal 12.5s linear infinite 0s;\n  -webkit-animation: horizontal 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.horizontalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.horizontalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.horizontalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.horizontalFlip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.antiClock[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.antiClock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: anti 12.5s linear infinite 0s;\n  -ms-animation: anti 12.5s linear infinite 0s;\n  -webkit-animation: anti 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.antiClock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.antiClock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.antiClock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.antiClock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.clockWise[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.clockWise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: clock 12.5s linear infinite 0s;\n  -ms-animation: clock 12.5s linear infinite 0s;\n  -webkit-animation: clock 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.clockWise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.clockWise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.clockWise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.clockWise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.popEffect[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.popEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: pop 12.5s linear infinite 0s;\n  -ms-animation: pop 12.5s linear infinite 0s;\n  -webkit-animation: pop 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.popEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.popEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.popEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.popEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\n.pushEffect[_ngcontent-%COMP%] {\n  display: inline;\n  text-indent: 8px;\n}\n\n.pushEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: push 12.5s linear infinite 0s;\n  -ms-animation: push 12.5s linear infinite 0s;\n  -webkit-animation: push 12.5s linear infinite 0s;\n  color: #00abe9;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.pushEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 2.5s;\n  -ms-animation-delay: 2.5s;\n  -webkit-animation-delay: 2.5s;\n}\n\n.pushEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 5s;\n  -ms-animation-delay: 5s;\n  -webkit-animation-delay: 5s;\n}\n\n.pushEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 7.5s;\n  -ms-animation-delay: 7.5s;\n  -webkit-animation-delay: 7.5s;\n}\n\n.pushEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 10s;\n  -ms-animation-delay: 10s;\n  -webkit-animation-delay: 10s;\n}\n\n\n\n\n\nh3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 30px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.news-section[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.625rem;\n  font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  color: #3F3F42;\n  margin: 0;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFHQSxXQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBLFVBQUE7O0FBQ0E7RUFFQyxrQ0FBQTtFQUNDLHlCQUFBO0VBRUQsa0JBQUE7QUFERDs7QUFLQSxtQkFBQTs7QUFDQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZBOztBQUlBO0VBQ0EsK0NBQUE7RUFDQSxtREFBQTtFQUNBLHVEQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREE7O0FBR0E7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFBQTs7QUFFQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUNBOztBQUNBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBRUE7O0FBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFHQTs7QUFBQSx3QkFBQTs7QUE2QkEscUJBQUE7O0FBQ0E7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF3REE7O0FBdERBO0VBQ0EsK0NBQUE7RUFDQSxtREFBQTtFQUNBLHVEQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBeURBOztBQXZEQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQTBEQTs7QUF4REE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUEyREE7O0FBekRBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBNERBOztBQTFEQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQTZEQTs7QUExREEsd0JBQUE7O0FBNkJBLFNBQUE7O0FBQ0E7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFrSEE7O0FBaEhBO0VBQ0EsOENBQUE7RUFDQSxrREFBQTtFQUNBLHNEQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbUhBOztBQWpIQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQW9IQTs7QUFsSEE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFxSEE7O0FBbkhBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBc0hBOztBQXBIQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQXVIQTs7QUFwSEEsbUJBQUE7O0FBNkJBLGdCQUFBOztBQUNBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBNEtBOztBQTFLQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvREFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTZLQTs7QUEzS0E7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUE4S0E7O0FBNUtBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBK0tBOztBQTdLQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQWdMQTs7QUE5S0E7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFpTEE7O0FBOUtBLDBCQUFBOztBQTZCQSxrQkFBQTs7QUFDQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNPQTs7QUFwT0E7RUFDQSw4Q0FBQTtFQUNBLGtEQUFBO0VBQ0Esc0RBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF1T0E7O0FBck9BO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBd09BOztBQXRPQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQXlPQTs7QUF2T0E7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUEwT0E7O0FBeE9BO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBMk9BOztBQXhPQSw0QkFBQTs7QUE2QkEsdUJBQUE7O0FBQ0E7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFnU0E7O0FBOVJBO0VBQ0Esd0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBaVNBOztBQS9SQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQWtTQTs7QUFoU0E7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFtU0E7O0FBalNBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBb1NBOztBQWxTQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQXFTQTs7QUFsU0EsaUNBQUE7O0FBNkJBLG1CQUFBOztBQUNBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBMFZBOztBQXhWQTtFQUNBLHlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTJWQTs7QUF6VkE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUE0VkE7O0FBMVZBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBNlZBOztBQTNWQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQThWQTs7QUE1VkE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUErVkE7O0FBNVZBLDZCQUFBOztBQTZCQSxhQUFBOztBQUNBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBb1pBOztBQWxaQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXFaQTs7QUFuWkE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFzWkE7O0FBcFpBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBdVpBOztBQXJaQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQXdaQTs7QUF0WkE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUF5WkE7O0FBdFpBLHVCQUFBOztBQTZCQSxjQUFBOztBQUNBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBOGNBOztBQTVjQTtFQUNBLHdDQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStjQTs7QUE3Y0E7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFnZEE7O0FBOWNBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBaWRBOztBQS9jQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQWtkQTs7QUFoZEE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFtZEE7O0FBaGRBLHdCQUFBOztBQTRCQSxTQUFBOztBQUNBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBeWdCQTs7QUFyZ0JBO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMERBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQXdnQkQiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGluayB7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLypTZW50ZW5jZSovXHJcbi5zZW50ZW5jZXtcclxuICBjb2xvcjogIzIyMjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4vKldyYXBwZXIqL1xyXG4ud3JhcHBlcntcclxuXHJcbiBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMzBweCAwcHg7XHJcblxyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLypWZXJ0aWNhbCBTbGlkaW5nKi9cclxuLnNsaWRpbmdWZXJ0aWNhbHtcclxuZGlzcGxheTogaW5saW5lO1xyXG50ZXh0LWluZGVudDogOHB4O1xyXG59XHJcbi5zbGlkaW5nVmVydGljYWwgc3BhbntcclxuYW5pbWF0aW9uOiB0b3BUb0JvdHRvbSAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi1tcy1hbmltYXRpb246IHRvcFRvQm90dG9tIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLXdlYmtpdC1hbmltYXRpb246IHRvcFRvQm90dG9tIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuY29sb3I6ICMwMGFiZTk7XHJcbm9wYWNpdHk6IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uc2xpZGluZ1ZlcnRpY2FsIHNwYW46bnRoLWNoaWxkKDIpe1xyXG5hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG59XHJcbi5zbGlkaW5nVmVydGljYWwgc3BhbjpudGgtY2hpbGQoMyl7XHJcbmFuaW1hdGlvbi1kZWxheTogNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7XHJcbn1cclxuLnNsaWRpbmdWZXJ0aWNhbCBzcGFuOm50aC1jaGlsZCg0KXtcclxuYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNy41cztcclxufVxyXG4uc2xpZGluZ1ZlcnRpY2FsIHNwYW46bnRoLWNoaWxkKDUpe1xyXG5hbmltYXRpb24tZGVsYXk6IDEwcztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG59XHJcblxyXG4vKnRvcFRvQm90dG9tIEFuaW1hdGlvbiovXHJcbkAtbW96LWtleWZyYW1lcyB0b3BUb0JvdHRvbXtcclxuMCUgeyBvcGFjaXR5OiAwOyB9XHJcbjUlIHsgb3BhY2l0eTogMDsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRvcFRvQm90dG9te1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyB0b3BUb0JvdHRvbXtcclxuMCUgeyBvcGFjaXR5OiAwOyB9XHJcbjUlIHsgb3BhY2l0eTogMDsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5cclxuLypIb3Jpem9udGFsIFNsaWRpbmcqL1xyXG4uc2xpZGluZ0hvcml6b250YWx7XHJcbmRpc3BsYXk6IGlubGluZTtcclxudGV4dC1pbmRlbnQ6IDhweDtcclxufVxyXG4uc2xpZGluZ0hvcml6b250YWwgc3BhbntcclxuYW5pbWF0aW9uOiBsZWZ0VG9SaWdodCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi1tcy1hbmltYXRpb246IGxlZnRUb1JpZ2h0IDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLXdlYmtpdC1hbmltYXRpb246IGxlZnRUb1JpZ2h0IDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuY29sb3I6ICMwMGFiZTk7XHJcbm9wYWNpdHk6IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uc2xpZGluZ0hvcml6b250YWwgc3BhbjpudGgtY2hpbGQoMil7XHJcbmFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbn1cclxuLnNsaWRpbmdIb3Jpem9udGFsIHNwYW46bnRoLWNoaWxkKDMpe1xyXG5hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG59XHJcbi5zbGlkaW5nSG9yaXpvbnRhbCBzcGFuOm50aC1jaGlsZCg0KXtcclxuYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNy41cztcclxufVxyXG4uc2xpZGluZ0hvcml6b250YWwgc3BhbjpudGgtY2hpbGQoNSl7XHJcbmFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbn1cclxuXHJcbi8qbGVmdFRvUmlnaHQgQW5pbWF0aW9uKi9cclxuQC1tb3ota2V5ZnJhbWVzIGxlZnRUb1JpZ2h0e1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdFRvUmlnaHR7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGxlZnRUb1JpZ2h0e1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG4vKkZhZGVJbiovXHJcbi5mYWRlSW57XHJcbmRpc3BsYXk6IGlubGluZTtcclxudGV4dC1pbmRlbnQ6IDhweDtcclxufVxyXG4uZmFkZUluIHNwYW57XHJcbmFuaW1hdGlvbjogZmFkZUVmZmVjdCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi1tcy1hbmltYXRpb246IGZhZGVFZmZlY3QgMTIuNXMgbGluZWFyIGluZmluaXRlIDBzO1xyXG4td2Via2l0LWFuaW1hdGlvbjogZmFkZUVmZmVjdCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbmNvbG9yOiAjMDBhYmU5O1xyXG5vcGFjaXR5OiAwO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZhZGVJbiBzcGFuOm50aC1jaGlsZCgyKXtcclxuYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi41cztcclxufVxyXG4uZmFkZUluIHNwYW46bnRoLWNoaWxkKDMpe1xyXG5hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG59XHJcbi5mYWRlSW4gc3BhbjpudGgtY2hpbGQoNCl7XHJcbmFuaW1hdGlvbi1kZWxheTogNy41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogNy41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcuNXM7XHJcbn1cclxuLmZhZGVJbiBzcGFuOm50aC1jaGlsZCg1KXtcclxuYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDEwcztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEwcztcclxufVxyXG5cclxuLypGYWRlSW4gQW5pbWF0aW9uKi9cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVFZmZlY3R7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlRWZmZWN0e1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBmYWRlRWZmZWN0e1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG4vKlZlcnRpY2FsIEZsaXAqL1xyXG4udmVydGljYWxGbGlwe1xyXG5kaXNwbGF5OiBpbmxpbmU7XHJcbnRleHQtaW5kZW50OiA4cHg7XHJcbn1cclxuLnZlcnRpY2FsRmxpcCBzcGFue1xyXG5hbmltYXRpb246IHZlcnRpY2FsIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLW1zLWFuaW1hdGlvbjogdmVydGljYWwgMTIuNXMgbGluZWFyIGluZmluaXRlIDBzO1xyXG4td2Via2l0LWFuaW1hdGlvbjogdmVydGljYWwgMTIuNXMgbGluZWFyIGluZmluaXRlIDBzO1xyXG5jb2xvcjogIzAwYWJlOTtcclxub3BhY2l0eTogMDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi52ZXJ0aWNhbEZsaXAgc3BhbjpudGgtY2hpbGQoMil7XHJcbmFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbn1cclxuLnZlcnRpY2FsRmxpcCBzcGFuOm50aC1jaGlsZCgzKXtcclxuYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogNXM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1cztcclxufVxyXG4udmVydGljYWxGbGlwIHNwYW46bnRoLWNoaWxkKDQpe1xyXG5hbmltYXRpb24tZGVsYXk6IDcuNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDcuNXM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG59XHJcbi52ZXJ0aWNhbEZsaXAgc3BhbjpudGgtY2hpbGQoNSl7XHJcbmFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbn1cclxuXHJcbi8qVmVydGljYWwgRmxpcCBBbmltYXRpb24qL1xyXG5ALW1vei1rZXlmcmFtZXMgdmVydGljYWx7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDt9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHZlcnRpY2Fse1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyB2ZXJ0aWNhbHtcclxuMCUgeyBvcGFjaXR5OiAwOyB9XHJcbjUlIHsgb3BhY2l0eTogMDsgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5cclxuLypIb3Jpem9udGFsIEZsaXAqL1xyXG4uaG9yaXpvbnRhbEZsaXB7XHJcbmRpc3BsYXk6IGlubGluZTtcclxudGV4dC1pbmRlbnQ6IDhweDtcclxufVxyXG4uaG9yaXpvbnRhbEZsaXAgc3BhbntcclxuYW5pbWF0aW9uOiBob3Jpem9udGFsIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLW1zLWFuaW1hdGlvbjogaG9yaXpvbnRhbCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBob3Jpem9udGFsIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuY29sb3I6ICMwMGFiZTk7XHJcbm9wYWNpdHk6IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaG9yaXpvbnRhbEZsaXAgc3BhbjpudGgtY2hpbGQoMil7XHJcbmFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbn1cclxuLmhvcml6b250YWxGbGlwIHNwYW46bnRoLWNoaWxkKDMpe1xyXG5hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG59XHJcbi5ob3Jpem9udGFsRmxpcCBzcGFuOm50aC1jaGlsZCg0KXtcclxuYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNy41cztcclxufVxyXG4uaG9yaXpvbnRhbEZsaXAgc3BhbjpudGgtY2hpbGQoNSl7XHJcbmFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbn1cclxuXHJcbi8qSG9yaXpvbnRhbCBGbGlwIEFuaW1hdGlvbiovXHJcbkAtbW96LWtleWZyYW1lcyBob3Jpem9udGFse1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7fVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBob3Jpem9udGFse1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBob3Jpem9udGFse1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG4vKkFudGlDbG9ja1dpc2UgRWZmZWN0Ki9cclxuLmFudGlDbG9ja3tcclxuZGlzcGxheTogaW5saW5lO1xyXG50ZXh0LWluZGVudDogOHB4O1xyXG59XHJcbi5hbnRpQ2xvY2sgc3BhbntcclxuYW5pbWF0aW9uOiBhbnRpIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLW1zLWFuaW1hdGlvbjogYW50aSAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBhbnRpIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuY29sb3I6ICMwMGFiZTk7XHJcbm9wYWNpdHk6IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYW50aUNsb2NrIHNwYW46bnRoLWNoaWxkKDIpe1xyXG5hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG59XHJcbi5hbnRpQ2xvY2sgc3BhbjpudGgtY2hpbGQoMyl7XHJcbmFuaW1hdGlvbi1kZWxheTogNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7XHJcbn1cclxuLmFudGlDbG9jayBzcGFuOm50aC1jaGlsZCg0KXtcclxuYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNy41cztcclxufVxyXG4uYW50aUNsb2NrIHNwYW46bnRoLWNoaWxkKDUpe1xyXG5hbmltYXRpb24tZGVsYXk6IDEwcztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG59XHJcblxyXG4vKkFudGlDbG9ja1dpc2UgRWZmZWN0IEFuaW1hdGlvbiovXHJcbkAtbW96LWtleWZyYW1lcyBhbnRpe1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7fVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbnRpe1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cclxuMTAlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGFudGl7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5cclxuLypDbG9ja1dpc2UgRWZmZWN0Ki9cclxuLmNsb2NrV2lzZXtcclxuZGlzcGxheTogaW5saW5lO1xyXG50ZXh0LWluZGVudDogOHB4O1xyXG59XHJcbi5jbG9ja1dpc2Ugc3BhbntcclxuYW5pbWF0aW9uOiBjbG9jayAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi1tcy1hbmltYXRpb246IGNsb2NrIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLXdlYmtpdC1hbmltYXRpb246IGNsb2NrIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuY29sb3I6ICMwMGFiZTk7XHJcbm9wYWNpdHk6IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uY2xvY2tXaXNlIHNwYW46bnRoLWNoaWxkKDIpe1xyXG5hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG59XHJcbi5jbG9ja1dpc2Ugc3BhbjpudGgtY2hpbGQoMyl7XHJcbmFuaW1hdGlvbi1kZWxheTogNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7XHJcbn1cclxuLmNsb2NrV2lzZSBzcGFuOm50aC1jaGlsZCg0KXtcclxuYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA3LjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNy41cztcclxufVxyXG4uY2xvY2tXaXNlIHNwYW46bnRoLWNoaWxkKDUpe1xyXG5hbmltYXRpb24tZGVsYXk6IDEwcztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG59XHJcblxyXG4vKkNsb2NrV2lzZSBFZmZlY3QgQW5pbWF0aW9uKi9cclxuQC1tb3ota2V5ZnJhbWVzIGNsb2Nre1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4zMCUgeyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7fVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBjbG9ja3tcclxuMCUgeyBvcGFjaXR5OiAwOyB9XHJcbjUlIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgY2xvY2t7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuXHJcbi8qUG9wIEVmZmVjdCovXHJcbi5wb3BFZmZlY3R7XHJcbmRpc3BsYXk6IGlubGluZTtcclxudGV4dC1pbmRlbnQ6IDhweDtcclxufVxyXG4ucG9wRWZmZWN0IHNwYW57XHJcbmFuaW1hdGlvbjogcG9wIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLW1zLWFuaW1hdGlvbjogcG9wIDEyLjVzIGxpbmVhciBpbmZpbml0ZSAwcztcclxuLXdlYmtpdC1hbmltYXRpb246IHBvcCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbmNvbG9yOiAjMDBhYmU5O1xyXG5vcGFjaXR5OiAwO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnBvcEVmZmVjdCBzcGFuOm50aC1jaGlsZCgyKXtcclxuYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi41cztcclxufVxyXG4ucG9wRWZmZWN0IHNwYW46bnRoLWNoaWxkKDMpe1xyXG5hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG59XHJcbi5wb3BFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNCl7XHJcbmFuaW1hdGlvbi1kZWxheTogNy41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogNy41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcuNXM7XHJcbn1cclxuLnBvcEVmZmVjdCBzcGFuOm50aC1jaGlsZCg1KXtcclxuYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDEwcztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEwcztcclxufVxyXG5cclxuLypQb3AgRWZmZWN0IEFuaW1hdGlvbiovXHJcbkAtbW96LWtleWZyYW1lcyBwb3B7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4xMCkgc2tldygwZGVnKSB0cmFuc2xhdGUoMHB4KTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9we1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMTApIHNrZXcoMGRlZykgdHJhbnNsYXRlKDBweCk7fVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgcG9we1xyXG4wJSB7IG9wYWNpdHk6IDA7IH1cclxuNSUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4xMCkgc2tldygwZGVnKSB0cmFuc2xhdGUoMHB4KTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuMjUlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuXHJcbi8qUHVzaCBFZmZlY3QqL1xyXG4ucHVzaEVmZmVjdHtcclxuZGlzcGxheTogaW5saW5lO1xyXG50ZXh0LWluZGVudDogOHB4O1xyXG59XHJcbi5wdXNoRWZmZWN0IHNwYW57XHJcbmFuaW1hdGlvbjogcHVzaCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbi1tcy1hbmltYXRpb246IHB1c2ggMTIuNXMgbGluZWFyIGluZmluaXRlIDBzO1xyXG4td2Via2l0LWFuaW1hdGlvbjogcHVzaCAxMi41cyBsaW5lYXIgaW5maW5pdGUgMHM7XHJcbmNvbG9yOiAjMDBhYmU5O1xyXG5vcGFjaXR5OiAwO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnB1c2hFZmZlY3Qgc3BhbjpudGgtY2hpbGQoMil7XHJcbmFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogMi41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbn1cclxuLnB1c2hFZmZlY3Qgc3BhbjpudGgtY2hpbGQoMyl7XHJcbmFuaW1hdGlvbi1kZWxheTogNXM7XHJcbi1tcy1hbmltYXRpb24tZGVsYXk6IDVzO1xyXG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7XHJcbn1cclxuLnB1c2hFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNCl7XHJcbmFuaW1hdGlvbi1kZWxheTogNy41cztcclxuLW1zLWFuaW1hdGlvbi1kZWxheTogNy41cztcclxuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcuNXM7XHJcbn1cclxuLnB1c2hFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNSl7XHJcbmFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMHM7XHJcbn1cclxuXHJcbi8qUHVzaCBFZmZlY3QgQW5pbWF0aW9uKi9cclxuQC1tb3ota2V5ZnJhbWVzIHB1c2h7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMikgc2tldygwZGVnKSB0cmFuc2xhdGUoMHB4KTsgfVxyXG4xMCUgeyBvcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjI1JSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG44MCUgeyBvcGFjaXR5OiAwOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAwO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVzaHtcclxuMCUgeyBvcGFjaXR5OiAwOyB9XHJcbjUlIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpIHNjYWxlKDIpIHNrZXcoMGRlZykgdHJhbnNsYXRlKDBweCk7fVxyXG4gMTAlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjMwJSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuODAlIHsgb3BhY2l0eTogMDsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIHB1c2h7XHJcbjAlIHsgb3BhY2l0eTogMDsgfVxyXG41JSB7IG9wYWNpdHk6IDA7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgyKSBza2V3KDBkZWcpIHRyYW5zbGF0ZSgwcHgpOyB9XHJcbjEwJSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTsgfVxyXG4yNSUgeyBvcGFjaXR5OiAxOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7IH1cclxuMzAlIHsgb3BhY2l0eTogMDsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XHJcbjgwJSB7IG9wYWNpdHk6IDA7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG4vKkZvb3RlciovXHJcbmgze1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAzMHB4O1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubmV3cy1zZWN0aW9uIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNjI1cmVtO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCxWZXJkYW5hLEdlbmV2YSxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRjb2xvcjogIzNGM0Y0MjtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "o9RM":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");



class VideoComponent {
    constructor() {
        //videoId1: string = "lj_SexG2IOI";
        this.videoId = "";
    }
    ngOnInit() {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { videoId: "videoId" }, decls: 1, vars: 3, consts: [[3, "videoId", "height", "width"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.videoId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 200)("width", 280);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayer"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: '<youtube-player videoId="{{videoId}}" [height]="200" [width]="280"></youtube-player>',
                selector: "app-video"
            }]
    }], null, { videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/posts.component */ "JEYT");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");






const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "posts",
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




// import {BottomSheetOverviewExample, BottomSheetOverviewExampleSheet} from './app/bottom-sheet-overview-example';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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