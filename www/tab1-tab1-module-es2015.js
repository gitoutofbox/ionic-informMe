(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"submissionInProgress\"></ion-progress-bar>\n\n  <ion-toolbar>\n    <ion-title color=\"primary\" *ngIf=\"!informForm.controls.report_type.value\">\n      Report suspected person       \n      <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n    </ion-title>\n    <ion-title color=\"danger\" *ngIf=\"informForm.controls.report_type.value\">\n      Report domestic violance      \n      <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" color=\"primary\" *ngIf=\"!informForm.controls.report_type.value\">\n        <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n        Report suspected person \n        \n      </ion-title>\n      <ion-title size=\"large\" color=\"danger\" *ngIf=\"informForm.controls.report_type.value\">\n        <ion-icon name=\"megaphone-outline\" size=\"large\" class=\"ion-float-end\"></ion-icon>\n        Report domestic violance         \n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"informForm\" novalidate autocomplete=\"off\">\n  <ion-list>\n    <ion-item *ngIf=\"errorMessage !== ''\"><ion-text color=\"danger\">{{errorMessage}}</ion-text></ion-item>\n    <ion-item *ngIf=\"successMessage !== ''\"><ion-text color=\"success\">{{successMessage}}</ion-text></ion-item>\n\n    <ion-item>\n      <ion-icon name=\"bug-outline\"></ion-icon> &nbsp;&nbsp;\n      <ion-label *ngIf=\"informForm.controls.report_type.value\">Toggle to report suspected person </ion-label>\n      <ion-label *ngIf=\"!informForm.controls.report_type.value\">Toggle to report  domestic violance</ion-label>\n      <ion-toggle color=\"danger\" formControlName=\"report_type\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"skull-outline\"></ion-icon> &nbsp;&nbsp;\n      <ion-label>Person Name <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input type=\"text\"  formControlName=\"person_name\"></ion-input>      \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.person_name.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.person_name.hasError('required')\">Person name is required</ion-text>        \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"home-outline\"></ion-icon>  &nbsp;&nbsp;\n      <ion-label floating>Person Address <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"text\" formControlName=\"person_address\"></ion-input>     \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.person_address.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.person_address.hasError('required')\">Person address is required</ion-text>        \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"person-outline\"></ion-icon>  &nbsp;&nbsp;\n      <ion-label floating>Your name <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"text\" formControlName=\"reporter_name\"></ion-input>      \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.reporter_name.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.reporter_name.hasError('required')\">Your name is required</ion-text>        \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"call-outline\"></ion-icon>  &nbsp;&nbsp;\n      <ion-label floating>Your phone number <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"text\" formControlName=\"reporter_phone\"></ion-input>      \n    </ion-item>\n    <ion-item *ngIf=\"submitted && informForm.controls.reporter_phone.invalid\">\n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.reporter_phone.hasError('required')\">Your phone number is required</ion-text>        \n      <ion-text color=\"danger\" *ngIf=\"informForm.controls.reporter_phone.hasError('pattern')\">Provide your 10 or 11 digit mobile or landline number</ion-text>        \n    </ion-item>\n  </ion-list>\n\n\n  <ion-row>\n    <ion-col width-100 style=\"text-align: center\">\n      <ion-button shape=\"round\" color=\"{{!informForm.controls.report_type.value? 'primary' : 'danger'}}\" [disabled]=\"submissionInProgress\" (click)=\"inform()\">\n        <ng-container *ngIf=\"!submissionInProgress\">Submit</ng-container>\n        <ng-container *ngIf=\"submissionInProgress\">Submitting</ng-container>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/inform.service.ts":
/*!****************************************!*\
  !*** ./src/app/tab1/inform.service.ts ***!
  \****************************************/
/*! exports provided: InformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformService", function() { return InformService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let InformService = class InformService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    submitInformation(postData) {
        return this.apiService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['apiBase']}/report`, postData);
    }
    getMyReportedList() {
    }
};
InformService.ctorParameters = () => [
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
InformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], InformService);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9zb3VyYXYvRGV2ZWxvcG1lbnQvaW9uaWMvaW5mb3JtTWUxL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4vLyBpb24tdGl0bGUge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGlvbi1pY29uIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgIH1cbi8vIH0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inform.service */ "./src/app/tab1/inform.service.ts");




let Tab1Page = class Tab1Page {
    // public reportTypes: Array<any> = ["report_suspect", "report_domestic_violance"]
    constructor(fb, informService) {
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
    inform() {
        this.submitted = true;
        this.errorMessage = '';
        this.successMessage = '';
        console.log(this.informForm);
        if (this.informForm.valid) {
            this.submissionInProgress = true;
            const postData = {
                report_type: this.informForm.controls.report_type.value,
                person_name: this.informForm.controls.person_name.value,
                person_address: this.informForm.controls.person_address.value,
                reporter_name: this.informForm.controls.reporter_name.value,
                reporter_phone: this.informForm.controls.reporter_phone.value
            };
            this.informService.submitInformation(postData).subscribe(data => {
                if (data['status'] === 'error') {
                    this.errorMessage = data['statusMessage'];
                    this.submissionInProgress = false;
                    return false;
                }
                this.successMessage = 'Thank you for contributing to save the world';
                this.submissionInProgress = false;
                this.submitted = false;
                this.informForm.reset();
                this.informForm.patchValue({ 'report_type': false });
            }, error => {
                this.errorMessage = 'Some error occured. Please try again later';
                this.submissionInProgress = false;
            });
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _inform_service__WEBPACK_IMPORTED_MODULE_3__["InformService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _inform_service__WEBPACK_IMPORTED_MODULE_3__["InformService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map