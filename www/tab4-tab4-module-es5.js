function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"apiInProgress\"></ion-progress-bar>\n  <ion-toolbar>\n    <ion-title color=\"primary\">\n      Chat Support by IBM Watson\n      <ion-icon name=\"people-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" color=\"primary\">\n        Chat Support by IBM Watson \n        <ion-icon name=\"people-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n \n  <!-- <iframe src=\"https://integrations.eu-gb.assistant.watson.cloud.ibm.com/web/public/da38eaa1-c16e-4b95-b735-2f503fead5c2\" height=\"100%\" width=\"100%\"></iframe> -->\n\n  <div class=\"main\">\n    <div class=\"chat-box\">\n      <div class=\"message-area\">\n        <div class=\"message\" *ngFor=\"let message of messages\" [ngClass]=\"message.type\">\n          <p>{{message.text}}</p>\n        </div>\n      </div>\n      <div class=\"emo-area\">\n        <!-- emoji-panel component comes here -->\n      </div>\n      <div class=\"input-area\">\n        <form (submit)=\"sendMessage()\" name=\"messageForm\">\n          <ion-input type=\"text\" name=\"message\" id=\"message\" [readonly]=\"apiInProgress\" [(ngModel)]=\"message\" placeholder=\"Say something nice...\"></ion-input>\n          <button>\n            <ion-icon name=\"send\" ></ion-icon>\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.module.ts ***!
    \*************************************/

  /*! exports provided: Tab4PageModule */

  /***/
  function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
      return Tab4PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab4PageModule = function Tab4PageModule() {
      _classCallCheck(this, Tab4PageModule);
    };

    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
      }])],
      declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })], Tab4PageModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-thumbnail ion-img {\n  border-radius: 50%;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.main .chat-box {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #f9fbfc;\n}\n\n.main .chat-box .message-area {\n  max-height: 90%;\n  height: 90%;\n  overflow: auto;\n}\n\n.main .chat-box .message-area .message p {\n  color: #8a898b;\n  margin: 0px;\n  max-width: 90%;\n  min-width: 55%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  padding: 10px 15px 10px 7px;\n  margin: 10px 0;\n  background: white;\n}\n\n.main .chat-box .message-area .message.query p {\n  float: left;\n}\n\n.main .chat-box .message-area .message.response p {\n  float: right;\n  background: #b9c8ff;\n  color: #fff;\n}\n\n.main .chat-box .message-area .message.incoming {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.main .chat-box .message-area .message.incoming p {\n  color: white;\n  border-radius: 0 11px 11px 11px;\n  background: #B9C0E9;\n}\n\n.main .chat-box .message-area .message.outgoing {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.main .chat-box .message-area .message.outgoing p {\n  border-radius: 11px 11px 0 11px;\n}\n\n.main .chat-box .emo-area {\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  width: 100%;\n  padding: 3px 10px;\n}\n\n/******************************************/\n\n.input-area {\n  position: absolute;\n  bottom: 1px;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background: white;\n}\n\n.input-area form {\n  display: flex;\n  height: 100%;\n}\n\n.input-area form ion-input {\n  width: 82%;\n  border: none;\n  padding: 5px 10px;\n  color: #8a898b;\n  font-size: 14px;\n  font-weight: bold;\n  background: inherit;\n}\n\n.input-area form ion-input:focus {\n  outline: none;\n}\n\n.input-area form button {\n  width: 18%;\n  border: none;\n  color: #8a898b;\n  opacity: 0.9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: inherit;\n}\n\n.input-area form button ion-icon {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9zb3VyYXYvRGV2ZWxvcG1lbnQvaW9uaWMvaW5mb3JtTWUxL3NyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0ZOOztBRE1RO0VBQ0UsY0FBQTtFQUdBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNOVjs7QURVVTtFQUNFLFdBQUE7QUNSWjs7QURhVTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNYWjs7QURpQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDZlI7O0FEaUJRO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNmVjs7QURtQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDakJSOztBRG1CUTtFQUNFLCtCQUFBO0FDakJWOztBRHNCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNwQk47O0FEeUJBLDJDQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUN2QkY7O0FEeUJFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUN2Qko7O0FEeUJJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtBQ3hCTjs7QUQwQk07RUFDRSxhQUFBO0FDeEJSOztBRDRCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzFCTjs7QUQ0Qk07RUFDRSxpQkFBQTtBQzFCUiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICBpb24taW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLmNoYXQtYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmOWZiZmM7XG5cbiAgICAubWVzc2FnZS1hcmVhIHtcbiAgICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICAgIGhlaWdodDogOTAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAvLyBwYWRkaW5nOiAxNXB4IDEwcHg7XG5cbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGhzbCgyNzAsIDElLCA1NCUpO1xuICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgICBtaW4td2lkdGg6IDU1JTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggN3B4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5xdWVyeSB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnJlc3BvbnNlIHtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiOWM4ZmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlLmluY29taW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMXB4IDExcHggMTFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjlDMEU5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlLm91dGdvaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHggMTFweCAwIDExcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZW1vLWFyZWEge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5pbnB1dC1hcmVhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgd2lkdGg6IDgyJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgY29sb3I6ICM4YTg5OGI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIC8vIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDE4JTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjOGE4OThiO1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGh1bWJuYWlsIGlvbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluIC5jaGF0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmYztcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIHtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSAubWVzc2FnZSBwIHtcbiAgY29sb3I6ICM4YTg5OGI7XG4gIG1hcmdpbjogMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiA1NSU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggN3B4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSAubWVzc2FnZS5xdWVyeSBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSAubWVzc2FnZS5yZXNwb25zZSBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjYjljOGZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIC5tZXNzYWdlLmluY29taW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIC5tZXNzYWdlLmluY29taW5nIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTFweCAxMXB4IDExcHg7XG4gIGJhY2tncm91bmQ6ICNCOUMwRTk7XG59XG4ubWFpbiAuY2hhdC1ib3ggLm1lc3NhZ2UtYXJlYSAubWVzc2FnZS5vdXRnb2luZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tYWluIC5jaGF0LWJveCAubWVzc2FnZS1hcmVhIC5tZXNzYWdlLm91dGdvaW5nIHAge1xuICBib3JkZXItcmFkaXVzOiAxMXB4IDExcHggMCAxMXB4O1xufVxuLm1haW4gLmNoYXQtYm94IC5lbW8tYXJlYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uaW5wdXQtYXJlYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmlucHV0LWFyZWEgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbnB1dC1hcmVhIGZvcm0gaW9uLWlucHV0IHtcbiAgd2lkdGg6IDgyJTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6ICM4YTg5OGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG4uaW5wdXQtYXJlYSBmb3JtIGlvbi1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaW5wdXQtYXJlYSBmb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxOCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM4YTg5OGI7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5pbnB1dC1hcmVhIGZvcm0gYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab4/tab4.page.ts ***!
    \***********************************/

  /*! exports provided: Tab4Page */

  /***/
  function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
      return Tab4Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/api.service */
    "./src/app/shared/services/api.service.ts");

    var Tab4Page = /*#__PURE__*/function () {
      function Tab4Page(apiService) {
        _classCallCheck(this, Tab4Page);

        this.apiService = apiService;
        this.messages = [];
        this.apiInProgress = false;
      }

      _createClass(Tab4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiInProgress = true;
          this.apiService.post('http://localhost:8081/chat/startSession', {}).subscribe(function (data) {
            if (data['status'] === 'success') {
              _this.apiInProgress = false;
            }
          }, function (error) {});
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this2 = this;

          if (this.apiInProgress || this.message === '') {
            return false;
          }

          console.log(this.message);
          this.apiInProgress = true;
          this.messages.push({
            "type": "query",
            "text": this.message
          });
          this.apiService.post('http://localhost:8081/chat/send', {
            "message": this.message
          }).subscribe(function (data) {
            _this2.apiInProgress = false;
            _this2.message = '';

            _this2.messages.push({
              "type": "response",
              "text": data['message']
            });
          });
        }
      }]);

      return Tab4Page;
    }();

    Tab4Page.ctorParameters = function () {
      return [{
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab4.page.scss */
      "./src/app/tab4/tab4.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], Tab4Page);
    /***/
  }
}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map