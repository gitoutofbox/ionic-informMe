function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"submissionInProgress\"></ion-progress-bar>\n\n  <ion-toolbar>\n    <ion-title color=\"primary\" *ngIf=\"!informForm.controls.report_type.value\">\n      Report suspected person       \n      <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n    </ion-title>\n    <ion-title color=\"danger\" *ngIf=\"informForm.controls.report_type.value\">\n      Report domestic violance      \n      <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" color=\"primary\" *ngIf=\"!informForm.controls.report_type.value\">\n        <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n        Report suspected person \n        \n      </ion-title>\n      <ion-title size=\"large\" color=\"danger\" *ngIf=\"informForm.controls.report_type.value\">\n        <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n        Report domestic violance         \n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"informForm\" novalidate autocomplete=\"off\">\n  <ion-list>\n    <ion-item *ngIf=\"errorMessage !== ''\"><ion-text color=\"danger\">{{errorMessage}}</ion-text></ion-item>\n    <ion-item *ngIf=\"successMessage !== ''\"><ion-text color=\"success\">{{successMessage}}</ion-text></ion-item>\n\n    <ion-item>\n      <ion-icon name=\"bug-outline\"></ion-icon> &nbsp;&nbsp;\n      <ion-label *ngIf=\"informForm.controls.report_type.value\">Toggle to report suspected person </ion-label>\n      <ion-label *ngIf=\"!informForm.controls.report_type.value\">Toggle to report  domestic violance</ion-label>\n      <ion-toggle color=\"danger\" formControlName=\"report_type\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"skull-outline\"></ion-icon> &nbsp;&nbsp;\n      <ion-label>Person Name <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input type=\"text\"  formControlName=\"person_name\"></ion-input>      \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.person_name.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.person_name.hasError('required')\">Person name is required</ion-text>        \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"home-outline\"></ion-icon>  &nbsp;&nbsp;\n      <ion-label floating>Person Address <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"text\" formControlName=\"person_address\"></ion-input>     \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.person_address.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.person_address.hasError('required')\">Person address is required</ion-text>        \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"person-outline\"></ion-icon>  &nbsp;&nbsp;\n      <ion-label floating>Your name <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"text\" formControlName=\"reporter_name\"></ion-input>      \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.reporter_name.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.reporter_name.hasError('required')\">Your name is required</ion-text>        \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"call-outline\"></ion-icon>  &nbsp;&nbsp;\n      <ion-label floating>Your phone number <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"text\" formControlName=\"reporter_phone\"></ion-input>      \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.reporter_phone.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.reporter_phone.hasError('required')\">Your phone number is required</ion-text>        \n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.reporter_phone.hasError('pattern')\">Provide your 10 or 11 digit mobile or landline number</ion-text>        \n    </ion-item>\n  </ion-list>\n\n\n  <ion-row>\n    <ion-col width-100 style=\"text-align: center\">\n      <ion-button shape=\"round\" color=\"{{!informForm.controls.report_type.value? 'primary' : 'danger'}}\" [disabled]=\"submissionInProgress\" (click)=\"inform()\">\n        <ng-container *ngIf=\"!submissionInProgress\">Submit</ng-container>\n        <ng-container *ngIf=\"submissionInProgress\">Submitting</ng-container>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab1/inform.service.ts":
  /*!****************************************!*\
    !*** ./src/app/tab1/inform.service.ts ***!
    \****************************************/

  /*! exports provided: InformService */

  /***/
  function srcAppTab1InformServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformService", function () {
      return InformService;
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
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var InformService = /*#__PURE__*/function () {
      function InformService(apiService) {
        _classCallCheck(this, InformService);

        this.apiService = apiService;
      }

      _createClass(InformService, [{
        key: "submitInformation",
        value: function submitInformation(postData) {
          return this.apiService.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['apiBase'], "/report"), postData);
        }
      }, {
        key: "getMyReportedList",
        value: function getMyReportedList() {}
      }]);

      return InformService;
    }();

    InformService.ctorParameters = function () {
      return [{
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    InformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], InformService);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9zb3VyYXYvRGV2ZWxvcG1lbnQvaW9uaWMvaW5mb3JtTWUxL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4vLyBpb24tdGl0bGUge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGlvbi1pY29uIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgIH1cbi8vIH0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _inform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inform.service */
    "./src/app/tab1/inform.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      // public reportTypes: Array<any> = ["report_suspect", "report_domestic_violance"]
      function Tab1Page(fb, informService) {
        _classCallCheck(this, Tab1Page);

        this.fb = fb;
        this.informService = informService;
        this.submitted = false;
        this.submissionInProgress = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.informForm = this.fb.group({
          report_type: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          person_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          person_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          reporter_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          reporter_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9_-]{10,12}")]]
        });
      }

      _createClass(Tab1Page, [{
        key: "inform",
        value: function inform() {
          var _this = this;

          this.submitted = true;
          this.errorMessage = '';
          this.successMessage = '';
          console.log(this.informForm);

          if (this.informForm.valid) {
            this.submissionInProgress = true;
            var postData = {
              report_type: this.informForm.controls.report_type.value,
              person_name: this.informForm.controls.person_name.value,
              person_address: this.informForm.controls.person_address.value,
              reporter_name: this.informForm.controls.reporter_name.value,
              reporter_phone: this.informForm.controls.reporter_phone.value
            };
            this.informService.submitInformation(postData).subscribe(function (data) {
              if (data['status'] === 'error') {
                _this.errorMessage = data['statusMessage'];
                _this.submissionInProgress = false;
                return false;
              }

              _this.successMessage = 'Thank you for contributing to save the world';
              _this.submissionInProgress = false;
              _this.submitted = false;

              _this.informForm.reset();

              _this.informForm.patchValue({
                'report_type': false
              });
            }, function (error) {
              _this.errorMessage = 'Some error occured. Please try again later';
              _this.submissionInProgress = false;
            });
          }
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _inform_service__WEBPACK_IMPORTED_MODULE_3__["InformService"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _inform_service__WEBPACK_IMPORTED_MODULE_3__["InformService"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map