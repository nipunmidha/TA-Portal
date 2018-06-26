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

/***/ "./src/app/admin-applicant-module/admin-applicant-module.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-applicant-module/admin-applicant-module.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.fa {\r\n  color: white;\r\n}\r\n\r\n.btn\r\n{\r\n  margin: 2px;\r\n}\r\n\r\n.list-group{\r\n  position: fixed;\r\n  cursor:pointer;\r\n}\r\n\r\n.list-group-item\r\n{\r\n  cursor:pointer;\r\n}\r\n\r\n#hiddenPass\r\n{\r\n  font-weight: lighter;\r\n  font-family: \"Bell MT\";\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-applicant-module/admin-applicant-module.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin-applicant-module/admin-applicant-module.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<legend style=\"font-weight: bold\">\n  All Applicants\n</legend>\n<div class=\"alert alert-danger\"  *ngIf=\"addingError\">\n  <strong>Error!</strong> There was some error while adding. Please retry\n</div>\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Email</th>\n    <th scope=\"col\">Password</th>\n    <th scope=\"col\">First Name</th>\n    <th scope=\"col\">Last Name</th>\n    <th scope=\"col\">School</th>\n  </tr>\n  <!--<div *ngIf=\"email.invalid && (email.dirty || email.touched)\"-->\n  <!--class=\"alert alert-danger\">-->\n  <!--<div *ngIf=\"email.errors.required\">-->\n  <!--Email is required.-->\n  <!--</div>-->\n  <!--<div *ngIf=\"email.errors.invalid\">-->\n  <!--Enter valid email-->\n  <!--</div>-->\n  <!--</div>-->\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.email\" type=\"email\" placeholder=\"Email\" class=\"form-control\"\n            required #password = \"ngModel\">\n  </th>\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.password\" type=\"password\" placeholder=\"Password\" class=\"form-control\"\n            required #password = \"ngModel\" *ngIf=\"!isEdit\">\n    <input  [(ngModel)]=\"instructor.password\" type=\"password\" placeholder=\"Password\" class=\"form-control\"\n            *ngIf=\"isEdit\">\n  </th>\n  <!--<th>-->\n  <!--<input [(ngModel)]=\"instructor.email\" type=\"email\" placeholder=\"Email\" class=\"form-control\"-->\n  <!--required  #email=\"ngModel\"  >-->\n  <!--</th>-->\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.firstName\" type=\"text\" placeholder=\"First Name\" class=\"form-control\"\n            #domain = \"ngModel\">\n  </th>\n  <th scope=\"col\" >\n    <input [(ngModel)]=\"instructor.lastName\" type=\"text\" placeholder=\"Last Name\" class=\"form-control\" >\n  </th>\n  <th scope=\"col\" >\n    <!--<div *ngIf=\"school.invalid && (school.dirty || school.touched)\"-->\n    <!--class=\"alert alert-danger\">-->\n    <!--<div *ngIf=\"school.errors.required\">-->\n    <!--School is required.-->\n    <!--</div>-->\n    <!--</div>-->\n    <input [(ngModel)]=\"instructor.school\" type=\"text\" placeholder=\"School\" required class=\"form-control\"\n           #school=\"ngModel\" (input)=\"schoolChange(instructor.school)\">\n    <div *ngIf=\"results.length >0\">\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\" *ngFor=\"let school of results\"\n            (click)=\"selectSchool(school)\">\n          {{school.name}}</li>\n      </ul>\n    </div>\n  </th>\n  <th scope=\"col\" >\n    <a class=\"btn btn-primary\" (click)=\"addInstructor(instructor)\" *ngIf=\"!isEdit\"><i class=\"fa fa-plus\">\n    </i></a>\n    <a class=\"btn btn-success\" *ngIf=\"isEdit\" (click)=\"updateInstructor(instructor)\" ><i class=\"fa fa-clipboard-check\">\n    </i></a>\n  </th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let instructor of instructors\">\n    <td>{{instructor.email}}</td>\n    <td id=\"hiddenPass\"> Hidden Password</td>\n    <td>{{instructor.firstName}}</td>\n    <td>{{instructor.lastName}}</td>\n    <td>{{instructor.school.name}}</td>\n    <td>\n      <div class=\"btn-group\">\n        <a class=\" btn btn-warning\" (click)=\"editInstructor(instructor)\">\n          <i class=\"fa fa-edit\"></i>\n        </a>\n        <a class=\"btn btn-danger\" (click)=\"deleteInstructor(instructor._id)\">\n          <i class=\"fa fa-trash\"></i>\n        </a>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/admin-applicant-module/admin-applicant-module.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin-applicant-module/admin-applicant-module.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminApplicantModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminApplicantModuleComponent", function() { return AdminApplicantModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_school_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/school.service.client */ "./src/app/services/school.service.client.ts");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
/* harmony import */ var _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/applicant.service.client */ "./src/app/services/applicant.service.client.ts");
/* harmony import */ var _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/applicant.model.client */ "./src/app/models/applicant.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminApplicantModuleComponent = /** @class */ (function () {
    function AdminApplicantModuleComponent(service, schoolService) {
        this.service = service;
        this.schoolService = schoolService;
        this.instructors = [];
        this.instructor = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__["Applicant"]();
        this.results = [];
        this.instructorSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_2__["School"]();
        this.isSet = false;
    }
    AdminApplicantModuleComponent.prototype.ngOnInit = function () {
        this.findAllInstructor();
    };
    AdminApplicantModuleComponent.prototype.findAllInstructor = function () {
        var _this = this;
        this.service.findAllInstructors()
            .then(function (users) { return _this.instructors = users; });
    };
    AdminApplicantModuleComponent.prototype.schoolChange = function (name) {
        var _this = this;
        if (name.length > 2) {
            this.schoolService.searchSchool(name)
                .then(function (res) {
                if (res.status === 200) {
                    res.json()
                        .then(function (schools) { return _this.results = schools; });
                }
            });
        }
        if (name.length === 2) {
            this.results = [];
        }
    };
    AdminApplicantModuleComponent.prototype.selectSchool = function (school) {
        this.instructorSchool = school;
        this.instructor.school = school.name;
        this.results = [];
        this.isSet = true;
    };
    AdminApplicantModuleComponent.prototype.addInstructor = function (instructor) {
        var _this = this;
        this.addingError = false;
        instructor.school = this.instructorSchool;
        this.service.createApplicant(instructor)
            .then(function (res) {
            if (res.status === 200) {
                _this.instructor = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__["Applicant"]();
                _this.findAllInstructor();
            }
            else {
                _this.addingError = true;
            }
        });
    };
    AdminApplicantModuleComponent.prototype.deleteInstructor = function (id) {
        var _this = this;
        this.service.deleteApplicant(id)
            .then(function () { return _this.findAllInstructor(); });
    };
    AdminApplicantModuleComponent.prototype.editInstructor = function (instructor) {
        this.instructor._id = instructor._id;
        this.instructor.email = instructor.email;
        this.instructor.firstName = instructor.firstName;
        this.instructor.lastName = instructor.lastName;
        this.instructor.school = instructor.school.name;
        this.isEdit = true;
    };
    AdminApplicantModuleComponent.prototype.updateInstructor = function (instructor) {
        var _this = this;
        if (this.isSet) {
            var ins = {
                email: instructor.email,
                password: instructor.password,
                firstName: instructor.firstName,
                lastName: instructor.lastName,
                _id: instructor._id,
                school: this.instructorSchool._id
            };
            this.service.updateApplicant(ins)
                .then(function (res) {
                if (res.status === 200) {
                    _this.instructor = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__["Applicant"]();
                    _this.isEdit = false;
                    _this.isSet = false;
                    _this.findAllInstructor();
                }
            });
        }
        else {
            var ins = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__["Applicant"]();
            ins.email = instructor.email;
            ins.password = instructor.password;
            ins.firstName = instructor.firstName;
            ins.lastName = instructor.lastName;
            ins._id = instructor._id;
            this.service.updateApplicant(ins)
                .then(function (res) {
                if (res.status === 200) {
                    _this.instructor = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__["Applicant"]();
                    _this.isEdit = false;
                    _this.isSet = false;
                    _this.findAllInstructor();
                }
            });
        }
    };
    AdminApplicantModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-applicant-module',
            template: __webpack_require__(/*! ./admin-applicant-module.component.html */ "./src/app/admin-applicant-module/admin-applicant-module.component.html"),
            styles: [__webpack_require__(/*! ./admin-applicant-module.component.css */ "./src/app/admin-applicant-module/admin-applicant-module.component.css")]
        }),
        __metadata("design:paramtypes", [_services_applicant_service_client__WEBPACK_IMPORTED_MODULE_3__["ApplicantServiceClient"],
            _services_school_service_client__WEBPACK_IMPORTED_MODULE_1__["SchoolServiceClient"]])
    ], AdminApplicantModuleComponent);
    return AdminApplicantModuleComponent;
}());



/***/ }),

/***/ "./src/app/admin-course-module/admin-course-module.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-course-module/admin-course-module.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.fa {\r\n  color: white;\r\n}\r\n\r\n.btn\r\n{\r\n  margin: 2px;\r\n}\r\n\r\n.list-group{\r\n  position: fixed;\r\n  cursor:pointer;\r\n}\r\n\r\n.list-group-item\r\n{\r\n  cursor:pointer;\r\n}\r\n\r\n#hiddenPass\r\n{\r\n  font-weight: lighter;\r\n  font-family: \"Bell MT\";\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-course-module/admin-course-module.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-course-module/admin-course-module.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<legend style=\"font-weight: bold\">\n  All Courses\n</legend>\n<div class=\"alert alert-danger\"  *ngIf=\"addingError\">\n  <strong>Error!</strong> There was some error while adding. Please retry\n</div>\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Course Number</th>\n    <th scope=\"col\">School</th>\n  </tr>\n\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.name\" type=\"string\" placeholder=\"Name\" class=\"form-control\"\n            required #password = \"ngModel\">\n  </th>\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.courseNumber\" type=\"string\" placeholder=\"Course Number\" class=\"form-control\"\n            required #password = \"ngModel\" >\n  </th>\n  <th>\n    <input [(ngModel)]=\"instructor.school\" type=\"text\" placeholder=\"School\" required class=\"form-control\"\n           #school=\"ngModel\" (input)=\"schoolChange(instructor.school)\">\n    <div *ngIf=\"results.length >0\">\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\" *ngFor=\"let school of results\"\n            (click)=\"selectSchool(school)\">\n          {{school.name}}</li>\n      </ul>\n    </div>\n  </th>\n  <th scope=\"col\" >\n    <a class=\"btn btn-primary\" (click)=\"addInstructor(instructor)\" *ngIf=\"!isEdit\"><i class=\"fa fa-plus\">\n    </i></a>\n    <a class=\"btn btn-success\" *ngIf=\"isEdit\" (click)=\"updateInstructor(instructor)\" ><i class=\"fa fa-clipboard-check\">\n    </i></a>\n  </th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let instructor of instructors\">\n    <td>{{instructor.name}}</td>\n    <td>{{instructor.courseNumber}}</td>\n    <td>{{instructor.school.name}}</td>\n    <td>\n        <a class=\" btn btn-warning\" (click)=\"editInstructor(instructor)\">\n          <i class=\"fa fa-edit\"></i>\n        </a>\n        <a class=\"btn btn-danger\" (click)=\"deleteInstructor(instructor._id)\">\n          <i class=\"fa fa-trash\"></i>\n        </a>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/admin-course-module/admin-course-module.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-course-module/admin-course-module.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminCourseModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCourseModuleComponent", function() { return AdminCourseModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_school_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/school.service.client */ "./src/app/services/school.service.client.ts");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminCourseModuleComponent = /** @class */ (function () {
    function AdminCourseModuleComponent(service, schoolService) {
        this.service = service;
        this.schoolService = schoolService;
        this.instructors = [];
        this.instructor = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.results = [];
        this.instructorSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_2__["School"]();
        this.isSet = false;
    }
    AdminCourseModuleComponent.prototype.ngOnInit = function () {
        this.findAllInstructor();
    };
    AdminCourseModuleComponent.prototype.findAllInstructor = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (users) { return _this.instructors = users; });
    };
    AdminCourseModuleComponent.prototype.schoolChange = function (name) {
        var _this = this;
        if (name.length > 2) {
            this.schoolService.searchSchool(name)
                .then(function (res) {
                if (res.status === 200) {
                    res.json()
                        .then(function (schools) { return _this.results = schools; });
                }
            });
        }
        if (name.length === 2) {
            this.results = [];
        }
    };
    AdminCourseModuleComponent.prototype.selectSchool = function (school) {
        this.instructorSchool = school;
        this.instructor.school = school.name;
        this.results = [];
        this.isSet = true;
    };
    AdminCourseModuleComponent.prototype.addInstructor = function (instructor) {
        var _this = this;
        this.addingError = false;
        instructor.school = this.instructorSchool;
        this.service.createCourse(instructor)
            .then(function (res) {
            if (res.status === 200) {
                _this.instructor = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
                _this.findAllInstructor();
            }
            else {
                _this.addingError = true;
            }
        });
    };
    AdminCourseModuleComponent.prototype.deleteInstructor = function (id) {
        var _this = this;
        this.service.deleteCourse(id)
            .then(function () { return _this.findAllInstructor(); });
    };
    AdminCourseModuleComponent.prototype.editInstructor = function (instructor) {
        this.instructor._id = instructor._id;
        this.instructor.courseNumber = instructor.courseNumber;
        this.instructor.name = instructor.name;
        this.instructor.school = instructor.school.name;
        this.isEdit = true;
    };
    AdminCourseModuleComponent.prototype.updateInstructor = function (instructor) {
        var _this = this;
        if (this.isSet) {
            var ins = {
                name: instructor.email,
                courseNumber: instructor.courseNumber,
                _id: instructor._id,
                school: this.instructorSchool._id
            };
            this.service.updateCourse(ins)
                .then(function (res) {
                if (res.status === 200) {
                    _this.instructor = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
                    _this.isEdit = false;
                    _this.isSet = false;
                    _this.findAllInstructor();
                }
            });
        }
        else {
            var ins = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
            ins.name = instructor.email;
            ins.courseNumber = instructor.courseNumber;
            ins._id = instructor._id;
            this.service.updateCourse(ins)
                .then(function (res) {
                if (res.status === 200) {
                    _this.instructor = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
                    _this.isEdit = false;
                    _this.isSet = false;
                    _this.findAllInstructor();
                }
            });
        }
    };
    AdminCourseModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-course-module',
            template: __webpack_require__(/*! ./admin-course-module.component.html */ "./src/app/admin-course-module/admin-course-module.component.html"),
            styles: [__webpack_require__(/*! ./admin-course-module.component.css */ "./src/app/admin-course-module/admin-course-module.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _services_school_service_client__WEBPACK_IMPORTED_MODULE_1__["SchoolServiceClient"]])
    ], AdminCourseModuleComponent);
    return AdminCourseModuleComponent;
}());



/***/ }),

/***/ "./src/app/admin-home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-lg-2 {\r\n  background: #67adef;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  cursor: pointer;\r\nborder: grey;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\"  *ngIf=\"!isAdmin && !wrongAccess\">\n  <strong>Session Expired!</strong> Please login.\n  <a class=\"float-md-right\" routerLink=\"/login\">Login</a>\n</div>\n<div class=\"alert alert-danger\"  *ngIf=\"wrongAccess\">\n  <strong>You are on wrong page!</strong> Move Out.\n</div>\n<div class=\"row\" *ngIf=\"isAdmin\">\n\n  <div class=\"col-lg-2\">\n      <app-admin-menu></app-admin-menu>\n  </div>\n\n  <div class=\"col-lg-10\">\n    <app-admin-pannel></app-admin-pannel>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service.client */ "./src/app/services/admin.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(service) {
        this.service = service;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) {
            if (user.type === 'ADMIN') {
                _this.isAdmin = true;
            }
            if (user.type !== 'ADMIN' && user) {
                _this.wrongAccess = true;
            }
        });
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service_client__WEBPACK_IMPORTED_MODULE_1__["AdminServiceClient"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin-instructors-pannel/admin-instructors-pannel.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-instructors-pannel/admin-instructors-pannel.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.fa {\r\n  color: white;\r\n}\r\n\r\n.btn\r\n{\r\n  margin: 2px;\r\n}\r\n\r\n.list-group{\r\n  position: fixed;\r\n  cursor:pointer;\r\n}\r\n\r\n.list-group-item\r\n{\r\n  cursor:pointer;\r\n}\r\n\r\n#hiddenPass\r\n{\r\n  font-weight: lighter;\r\n  font-family: \"Bell MT\";\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-instructors-pannel/admin-instructors-pannel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-instructors-pannel/admin-instructors-pannel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<legend style=\"font-weight: bold\">\n  All Instructors\n</legend>\n<div class=\"alert alert-danger\"  *ngIf=\"addingError\">\n  <strong>Error!</strong> There was some error while adding. Please retry\n</div>\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Email</th>\n    <th scope=\"col\">Password</th>\n    <th scope=\"col\">First Name</th>\n    <th scope=\"col\">Last Name</th>\n    <th scope=\"col\">School</th>\n  </tr>\n    <!--<div *ngIf=\"email.invalid && (email.dirty || email.touched)\"-->\n         <!--class=\"alert alert-danger\">-->\n      <!--<div *ngIf=\"email.errors.required\">-->\n        <!--Email is required.-->\n      <!--</div>-->\n      <!--<div *ngIf=\"email.errors.invalid\">-->\n       <!--Enter valid email-->\n      <!--</div>-->\n    <!--</div>-->\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.email\" type=\"email\" placeholder=\"Email\" class=\"form-control\"\n            required #password = \"ngModel\">\n  </th>\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.password\" type=\"password\" placeholder=\"Password\" class=\"form-control\"\n           required #password = \"ngModel\" *ngIf=\"!isEdit\">\n    <input  [(ngModel)]=\"instructor.password\" type=\"password\" placeholder=\"Password\" class=\"form-control\"\n            *ngIf=\"isEdit\">\n  </th>\n  <!--<th>-->\n    <!--<input [(ngModel)]=\"instructor.email\" type=\"email\" placeholder=\"Email\" class=\"form-control\"-->\n           <!--required  #email=\"ngModel\"  >-->\n  <!--</th>-->\n  <th scope=\"col\">\n    <input  [(ngModel)]=\"instructor.firstName\" type=\"text\" placeholder=\"First Name\" class=\"form-control\"\n           #domain = \"ngModel\">\n  </th>\n  <th scope=\"col\" >\n    <input [(ngModel)]=\"instructor.lastName\" type=\"text\" placeholder=\"Last Name\" class=\"form-control\" >\n  </th>\n  <th scope=\"col\" >\n    <!--<div *ngIf=\"school.invalid && (school.dirty || school.touched)\"-->\n         <!--class=\"alert alert-danger\">-->\n      <!--<div *ngIf=\"school.errors.required\">-->\n        <!--School is required.-->\n      <!--</div>-->\n    <!--</div>-->\n    <input [(ngModel)]=\"instructor.school\" type=\"text\" placeholder=\"School\" required class=\"form-control\"\n           #school=\"ngModel\" (input)=\"schoolChange(instructor.school)\">\n    <div *ngIf=\"results.length >0\">\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\" *ngFor=\"let school of results\"\n            (click)=\"selectSchool(school)\">\n          {{school.name}}</li>\n      </ul>\n    </div>\n  </th>\n  <th scope=\"col\" >\n    <a class=\"btn btn-primary\" (click)=\"addInstructor(instructor)\" *ngIf=\"!isEdit\"><i class=\"fa fa-plus\">\n    </i></a>\n    <a class=\"btn btn-success\" *ngIf=\"isEdit\" (click)=\"updateInstructor(instructor)\" ><i class=\"fa fa-clipboard-check\">\n    </i></a>\n  </th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let instructor of instructors\">\n    <td>{{instructor.email}}</td>\n    <td id=\"hiddenPass\"> Hidden Password</td>\n    <td>{{instructor.firstName}}</td>\n    <td>{{instructor.lastName}}</td>\n    <td>{{instructor.school.name}}</td>\n    <td>\n      <div class=\"btn-group\">\n        <a class=\" btn btn-warning\" (click)=\"editInstructor(instructor)\">\n           <i class=\"fa fa-edit\"></i>\n        </a>\n        <a class=\"btn btn-danger\" (click)=\"deleteInstructor(instructor._id)\">\n          <i class=\"fa fa-trash\"></i>\n        </a>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/admin-instructors-pannel/admin-instructors-pannel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin-instructors-pannel/admin-instructors-pannel.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminInstructorsPannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInstructorsPannelComponent", function() { return AdminInstructorsPannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/instrcutor.service.client */ "./src/app/services/instrcutor.service.client.ts");
/* harmony import */ var _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/instructor.model.client */ "./src/app/models/instructor.model.client.ts");
/* harmony import */ var _services_school_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/school.service.client */ "./src/app/services/school.service.client.ts");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminInstructorsPannelComponent = /** @class */ (function () {
    function AdminInstructorsPannelComponent(service, schoolService) {
        this.service = service;
        this.schoolService = schoolService;
        this.instructors = [];
        this.instructor = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_2__["Instructor"]();
        this.results = [];
        this.instructorSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_4__["School"]();
        this.isSet = false;
    }
    AdminInstructorsPannelComponent.prototype.ngOnInit = function () {
        this.findAllInstructor();
    };
    AdminInstructorsPannelComponent.prototype.findAllInstructor = function () {
        var _this = this;
        this.service.findAllInstructors()
            .then(function (users) { return _this.instructors = users; });
    };
    AdminInstructorsPannelComponent.prototype.schoolChange = function (name) {
        var _this = this;
        if (name.length > 2) {
            this.schoolService.searchSchool(name)
                .then(function (res) {
                if (res.status === 200) {
                    res.json()
                        .then(function (schools) { return _this.results = schools; });
                }
            });
        }
        if (name.length === 2) {
            this.results = [];
        }
    };
    AdminInstructorsPannelComponent.prototype.selectSchool = function (school) {
        this.instructorSchool = school;
        this.instructor.school = school.name;
        this.results = [];
        this.isSet = true;
    };
    AdminInstructorsPannelComponent.prototype.addInstructor = function (instructor) {
        var _this = this;
        this.addingError = false;
        instructor.school = this.instructorSchool;
        this.service.createInstructor(instructor)
            .then(function (res) {
            if (res.status === 200) {
                _this.instructor = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_2__["Instructor"]();
                _this.findAllInstructor();
            }
            else {
                _this.addingError = true;
            }
        });
    };
    AdminInstructorsPannelComponent.prototype.deleteInstructor = function (id) {
        var _this = this;
        this.service.deleteInstructor(id)
            .then(function () { return _this.findAllInstructor(); });
    };
    AdminInstructorsPannelComponent.prototype.editInstructor = function (instructor) {
        this.instructor._id = instructor._id;
        this.instructor.email = instructor.email;
        this.instructor.firstName = instructor.firstName;
        this.instructor.lastName = instructor.lastName;
        this.instructor.school = instructor.school.name;
        this.isEdit = true;
    };
    AdminInstructorsPannelComponent.prototype.updateInstructor = function (instructor) {
        var _this = this;
        if (this.isSet) {
            var ins = {
                email: instructor.email,
                password: instructor.password,
                firstName: instructor.firstName,
                lastName: instructor.lastName,
                _id: instructor._id,
                school: this.instructorSchool._id
            };
            this.service.updateInstructor(ins)
                .then(function (res) {
                if (res.status === 200) {
                    _this.instructor = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_2__["Instructor"]();
                    _this.isEdit = false;
                    _this.isSet = false;
                    _this.findAllInstructor();
                }
            });
        }
        else {
            var ins = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_2__["Instructor"]();
            ins.email = instructor.email;
            ins.password = instructor.password;
            ins.firstName = instructor.firstName;
            ins.lastName = instructor.lastName;
            ins._id = instructor._id;
            this.service.updateInstructor(ins)
                .then(function (res) {
                if (res.status === 200) {
                    _this.instructor = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_2__["Instructor"]();
                    _this.isEdit = false;
                    _this.isSet = false;
                    _this.findAllInstructor();
                }
            });
        }
    };
    AdminInstructorsPannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-instructors-pannel',
            template: __webpack_require__(/*! ./admin-instructors-pannel.component.html */ "./src/app/admin-instructors-pannel/admin-instructors-pannel.component.html"),
            styles: [__webpack_require__(/*! ./admin-instructors-pannel.component.css */ "./src/app/admin-instructors-pannel/admin-instructors-pannel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_1__["InstructorServiceClient"],
            _services_school_service_client__WEBPACK_IMPORTED_MODULE_3__["SchoolServiceClient"]])
    ], AdminInstructorsPannelComponent);
    return AdminInstructorsPannelComponent;
}());



/***/ }),

/***/ "./src/app/admin-menu/admin-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-menu/admin-menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webdev\r\n{\r\n  font-weight: bolder;\r\n  font-family: \"Times New Roman\";\r\n  margin: 7px;\r\n  padding-left: 10px;\r\n  background: #e8f2fc;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\na {\r\n  color: black;\r\n}\r\n.webdev.press\r\n{\r\n  font-weight: bolder;\r\n  font-family: \"Times New Roman\";\r\n  margin: 7px;\r\n  background: #4f5051;\r\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0);\r\n}\r\na.press {\r\n  color: white;\r\n}\r\n.list-group{\r\n  margin-top: 25px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-menu/admin-menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-menu/admin-menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menubar\">\n<ul class=\"list-group\">\n\n  <a routerLink=\"/admin/school\" [ngClass]=\"{'press': pressedButton === 'school'}\">\n    <li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'school'}\">\n      Schools\n    </li>\n  </a>\n  <a routerLink=\"/admin/instructor\"  [ngClass]=\"{'press': pressedButton === 'instructor'}\">\n    <li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'instructor'}\">\n    Instructors\n    </li>\n  </a>\n  <a routerLink=\"/admin/applicant\" [ngClass]=\"{'press': pressedButton === 'applicant'}\" >\n    <li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'applicant'}\">\n      Applicants\n    </li>\n  </a>\n  <a routerLink=\"/admin/course\" [ngClass]=\"{'press': pressedButton === 'course'}\">\n    <li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'course'}\">\n      Courses\n    </li>\n  </a>\n  <!--<a routerLink=\"/admin/skill\" [ngClass]=\"{'press': pressedButton === 'skill'}\">-->\n    <!--<li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'skill'}\">-->\n       <!--Applicants Skills-->\n    <!--</li>-->\n  <!--</a>-->\n  <!--<a routerLink=\"/admin/application\" [ngClass]=\"{'press': pressedButton === 'application'}\">-->\n    <!--<li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'application'}\">-->\n        <!--Applications-->\n    <!--</li>-->\n  <!--</a>-->\n  <!--<a routerLink=\"/admin/position\" [ngClass]=\"{'press': pressedButton === 'position'}\">-->\n    <!--<li class=\"list-group-item webdev\" [ngClass]=\"{'press': pressedButton === 'position'}\">-->\n      <!--Positions-->\n    <!--</li>-->\n  <!--</a>-->\n</ul>\n  <br/>\n  <br/>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-menu/admin-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-menu/admin-menu.component.ts ***!
  \****************************************************/
/*! exports provided: AdminMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMenuComponent", function() { return AdminMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminMenuComponent = /** @class */ (function () {
    function AdminMenuComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) { return _this.pressMenu(params); });
    }
    AdminMenuComponent.prototype.pressMenu = function (params) {
        this.pressedButton = params.type;
    };
    AdminMenuComponent.prototype.ngOnInit = function () {
    };
    AdminMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-menu',
            template: __webpack_require__(/*! ./admin-menu.component.html */ "./src/app/admin-menu/admin-menu.component.html"),
            styles: [__webpack_require__(/*! ./admin-menu.component.css */ "./src/app/admin-menu/admin-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AdminMenuComponent);
    return AdminMenuComponent;
}());



/***/ }),

/***/ "./src/app/admin-pannel/admin-pannel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-pannel/admin-pannel.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-pannel/admin-pannel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-pannel/admin-pannel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-instructors-pannel *ngIf=\"taskType === 'instructor'\"></app-admin-instructors-pannel>\n<app-admin-school-module *ngIf=\"taskType === 'school'\"></app-admin-school-module>\n<app-admin-applicant-module *ngIf=\"taskType === 'applicant'\"></app-admin-applicant-module>\n<app-admin-course-module *ngIf=\"taskType === 'course'\"></app-admin-course-module>\n"

/***/ }),

/***/ "./src/app/admin-pannel/admin-pannel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-pannel/admin-pannel.component.ts ***!
  \********************************************************/
/*! exports provided: AdminPannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPannelComponent", function() { return AdminPannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPannelComponent = /** @class */ (function () {
    function AdminPannelComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) { return _this.loadType(params); });
    }
    AdminPannelComponent.prototype.loadType = function (params) {
        this.taskType = params.type;
    };
    AdminPannelComponent.prototype.ngOnInit = function () {
    };
    AdminPannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-pannel',
            template: __webpack_require__(/*! ./admin-pannel.component.html */ "./src/app/admin-pannel/admin-pannel.component.html"),
            styles: [__webpack_require__(/*! ./admin-pannel.component.css */ "./src/app/admin-pannel/admin-pannel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AdminPannelComponent);
    return AdminPannelComponent;
}());



/***/ }),

/***/ "./src/app/admin-school-module/admin-school-module.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-school-module/admin-school-module.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.fa {\r\n  color: white;\r\n}\r\n\r\n.btn\r\n{\r\n  margin: 2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-school-module/admin-school-module.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-school-module/admin-school-module.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<legend style=\"font-weight: bold\">\n  All Schools\n</legend>\n<div class=\"alert alert-danger\"  *ngIf=\"addingError\">\n  <strong>Error!</strong> There was some error while adding. Please retry\n</div>\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Email Domain</th>\n    <th scope=\"col\">City</th>\n  </tr>\n    <th scope=\"col\" >\n      <!--<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"-->\n           <!--class=\"alert alert-danger\">-->\n        <!--<div *ngIf=\"name.errors.required\">-->\n          <!--Name is required.-->\n        <!--</div>-->\n      <!--</div>-->\n      <input [(ngModel)]=\"school.name\" type=\"text\" placeholder=\"School Name\" class=\"form-control\"\n             required  #name=\"ngModel\">\n    </th>\n    <th scope=\"col\">\n      <!--<div *ngIf=\"domain.invalid && (domain.dirty || domain.touched)\"-->\n           <!--class=\"alert alert-danger\">-->\n        <!--<div *ngIf=\"domain.errors.required\">-->\n          <!--Email Domain is required.-->\n        <!--</div>-->\n      <!--</div>-->\n      <input required [(ngModel)]=\"school.emailDomain\" type=\"text\" placeholder=\"Email Domain\" class=\"form-control\"\n             #domain = \"ngModel\">\n    </th>\n    <th scope=\"col\" >\n      <input [(ngModel)]=\"school.city\" type=\"text\" placeholder=\"City\" class=\"form-control\" >\n    </th>\n    <th scope=\"col\" >\n      <a class=\"btn btn-primary\" (click)=\"addSchool(school)\" *ngIf=\"!isEdit\"><i class=\"fa fa-plus\">\n      </i></a>\n      <a class=\"btn btn-success\" *ngIf=\"isEdit\" (click)=\"updateSchool(school)\" ><i class=\"fa fa-clipboard-check\">\n      </i></a>\n    </th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let school of schools\">\n    <td>{{school.name}}</td>\n    <td>{{school.emailDomain}}</td>\n    <td>{{school.city}}</td>\n    <td>\n      <a class=\" btn btn-warning\" (click)=\"editSchool(school)\">\n        <i class=\"fa fa-edit\"></i>\n      </a>\n      <a class=\"btn btn-danger\" (click)=\"deleteSchool(school._id)\">\n        <i class=\"fa fa-trash\"></i>\n      </a>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/admin-school-module/admin-school-module.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-school-module/admin-school-module.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminSchoolModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSchoolModuleComponent", function() { return AdminSchoolModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
/* harmony import */ var _services_school_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/school.service.client */ "./src/app/services/school.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSchoolModuleComponent = /** @class */ (function () {
    function AdminSchoolModuleComponent(service) {
        this.service = service;
        this.schools = [];
        this.school = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_1__["School"]();
    }
    AdminSchoolModuleComponent.prototype.ngOnInit = function () {
        this.findAllSchools();
    };
    AdminSchoolModuleComponent.prototype.findAllSchools = function () {
        var _this = this;
        this.service.findAllSchools()
            .then(function (schools) { return _this.schools = schools; });
    };
    AdminSchoolModuleComponent.prototype.addSchool = function (school) {
        var _this = this;
        this.addingError = false;
        this.service.createSchool(school)
            .then(function (res) {
            if (res.status === 200) {
                _this.school.name = null;
                _this.school.emailDomain = null;
                _this.school.city = null;
                _this.findAllSchools();
            }
            else {
                _this.addingError = true;
            }
        });
    };
    AdminSchoolModuleComponent.prototype.deleteSchool = function (id) {
        var _this = this;
        this.service.deleteSchool(id)
            .then(function () { return _this.findAllSchools(); });
    };
    AdminSchoolModuleComponent.prototype.editSchool = function (school) {
        this.school = school;
        this.isEdit = true;
    };
    AdminSchoolModuleComponent.prototype.updateSchool = function (school) {
        var _this = this;
        this.service.updateSchool(school)
            .then(function (res) {
            if (res.status === 200) {
                _this.school = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_1__["School"]();
                _this.isEdit = false;
            }
        });
    };
    AdminSchoolModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-school-module',
            template: __webpack_require__(/*! ./admin-school-module.component.html */ "./src/app/admin-school-module/admin-school-module.component.html"),
            styles: [__webpack_require__(/*! ./admin-school-module.component.css */ "./src/app/admin-school-module/admin-school-module.component.css")]
        }),
        __metadata("design:paramtypes", [_services_school_service_client__WEBPACK_IMPORTED_MODULE_2__["SchoolServiceClient"]])
    ], AdminSchoolModuleComponent);
    return AdminSchoolModuleComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-menu/admin-menu.component */ "./src/app/admin-menu/admin-menu.component.ts");
/* harmony import */ var _admin_pannel_admin_pannel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-pannel/admin-pannel.component */ "./src/app/admin-pannel/admin-pannel.component.ts");
/* harmony import */ var _admin_instructors_pannel_admin_instructors_pannel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-instructors-pannel/admin-instructors-pannel.component */ "./src/app/admin-instructors-pannel/admin-instructors-pannel.component.ts");
/* harmony import */ var _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/instrcutor.service.client */ "./src/app/services/instrcutor.service.client.ts");
/* harmony import */ var _admin_school_module_admin_school_module_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-school-module/admin-school-module.component */ "./src/app/admin-school-module/admin-school-module.component.ts");
/* harmony import */ var _services_school_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/school.service.client */ "./src/app/services/school.service.client.ts");
/* harmony import */ var _admin_applicant_module_admin_applicant_module_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-applicant-module/admin-applicant-module.component */ "./src/app/admin-applicant-module/admin-applicant-module.component.ts");
/* harmony import */ var _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/applicant.service.client */ "./src/app/services/applicant.service.client.ts");
/* harmony import */ var _admin_course_module_admin_course_module_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-course-module/admin-course-module.component */ "./src/app/admin-course-module/admin-course-module.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_admin_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/admin.service.client */ "./src/app/services/admin.service.client.ts");
/* harmony import */ var _instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./instructor-home/instructor-home.component */ "./src/app/instructor-home/instructor-home.component.ts");
/* harmony import */ var _instructor_position_instructor_position_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./instructor-position/instructor-position.component */ "./src/app/instructor-position/instructor-position.component.ts");
/* harmony import */ var _services_position_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/position.service.client */ "./src/app/services/position.service.client.ts");
/* harmony import */ var _position_grid_position_grid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./position-grid/position-grid.component */ "./src/app/position-grid/position-grid.component.ts");
/* harmony import */ var _position_page_position_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./position-page/position-page.component */ "./src/app/position-page/position-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./applicant-profile/applicant-profile.component */ "./src/app/applicant-profile/applicant-profile.component.ts");
/* harmony import */ var _services_application_service_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/application.service.client */ "./src/app/services/application.service.client.ts");
/* harmony import */ var _applications_grid_applications_grid_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./applications-grid/applications-grid.component */ "./src/app/applications-grid/applications-grid.component.ts");
/* harmony import */ var _review_grid_review_grid_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./review-grid/review-grid.component */ "./src/app/review-grid/review-grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_4__["ErrorpageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_9__["AdminHomeComponent"],
                _admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_10__["AdminMenuComponent"],
                _admin_pannel_admin_pannel_component__WEBPACK_IMPORTED_MODULE_11__["AdminPannelComponent"],
                _admin_instructors_pannel_admin_instructors_pannel_component__WEBPACK_IMPORTED_MODULE_12__["AdminInstructorsPannelComponent"],
                _admin_school_module_admin_school_module_component__WEBPACK_IMPORTED_MODULE_14__["AdminSchoolModuleComponent"],
                _admin_applicant_module_admin_applicant_module_component__WEBPACK_IMPORTED_MODULE_16__["AdminApplicantModuleComponent"],
                _admin_course_module_admin_course_module_component__WEBPACK_IMPORTED_MODULE_18__["AdminCourseModuleComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_22__["InstructorHomeComponent"],
                _instructor_position_instructor_position_component__WEBPACK_IMPORTED_MODULE_23__["InstructorPositionComponent"],
                _position_grid_position_grid_component__WEBPACK_IMPORTED_MODULE_25__["PositionGridComponent"],
                _position_page_position_page_component__WEBPACK_IMPORTED_MODULE_26__["PositionPageComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"],
                _applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_28__["ApplicantProfileComponent"],
                _applications_grid_applications_grid_component__WEBPACK_IMPORTED_MODULE_30__["ApplicationsGridComponent"],
                _review_grid_review_grid_component__WEBPACK_IMPORTED_MODULE_31__["ReviewGridComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserServiceClient"],
                _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_13__["InstructorServiceClient"],
                _services_school_service_client__WEBPACK_IMPORTED_MODULE_15__["SchoolServiceClient"],
                _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_17__["ApplicantServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_19__["CourseServiceClient"],
                _services_admin_service_client__WEBPACK_IMPORTED_MODULE_21__["AdminServiceClient"],
                _services_position_service_client__WEBPACK_IMPORTED_MODULE_24__["PositionServiceClient"],
                _services_application_service_client__WEBPACK_IMPORTED_MODULE_29__["ApplicationServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instructor-home/instructor-home.component */ "./src/app/instructor-home/instructor-home.component.ts");
/* harmony import */ var _instructor_position_instructor_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructor-position/instructor-position.component */ "./src/app/instructor-position/instructor-position.component.ts");
/* harmony import */ var _position_page_position_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position-page/position-page.component */ "./src/app/position-page/position-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _position_grid_position_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./position-grid/position-grid.component */ "./src/app/position-grid/position-grid.component.ts");
/* harmony import */ var _applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./applicant-profile/applicant-profile.component */ "./src/app/applicant-profile/applicant-profile.component.ts");
/* harmony import */ var _applications_grid_applications_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./applications-grid/applications-grid.component */ "./src/app/applications-grid/applications-grid.component.ts");
/* harmony import */ var _review_grid_review_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./review-grid/review-grid.component */ "./src/app/review-grid/review-grid.component.ts");













var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _position_grid_position_grid_component__WEBPACK_IMPORTED_MODULE_9__["PositionGridComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'admin', component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"] },
    { path: 'instructor', component: _instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_5__["InstructorHomeComponent"] },
    { path: 'applicant', component: _position_grid_position_grid_component__WEBPACK_IMPORTED_MODULE_9__["PositionGridComponent"] },
    { path: 'instructor/position', component: _instructor_position_instructor_position_component__WEBPACK_IMPORTED_MODULE_6__["InstructorPositionComponent"] },
    { path: 'admin/:type', component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'applicant/profile', component: _applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_10__["ApplicantProfileComponent"] },
    { path: 'position/:positionId', component: _position_page_position_page_component__WEBPACK_IMPORTED_MODULE_7__["PositionPageComponent"] },
    { path: 'position/:positionId/applications', component: _applications_grid_applications_grid_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationsGridComponent"] },
    { path: 'position/:positionId/reviews', component: _review_grid_review_grid_component__WEBPACK_IMPORTED_MODULE_12__["ReviewGridComponent"] },
    { path: 'position/:positionId/profile/:profileId', component: _applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_10__["ApplicantProfileComponent"] },
    { path: '**', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_1__["ErrorpageComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/applicant-profile/applicant-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/applicant-profile/applicant-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label{\r\n  /*text-align: right;*/\r\n}\r\nh2{\r\n  text-align: center;\r\n  font-family: \"Times New Roman\";\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n.dis{\r\n    /*text-align: left;*/\r\n}\r\n.reviews{\r\n  background-color: #e8f2fc;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n}\r\n.cancel{\r\n  margin-left: -48px;\r\n}\r\n.gold{\r\n  color: gold;\r\n}\r\n.stars{\r\n  margin-left: 10px;\r\n}\r\n.list-group-item{\r\n  background: inherit;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/applicant-profile/applicant-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/applicant-profile/applicant-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <span class=\"cancel\" routerLink=\"/position/{{positionId}}/applications\" *ngIf=\"profView\">\n    <i class=\"fa fa-times\"></i></span>\n  <a class=\"btn btn-warning\" style=\"margin-top: 5px\" (click)=\"changeView()\"\n     *ngIf=\"!sessionOut && !profView\">Public View</a>\n  <div class=\"row justify-content-center align-self-center \" *ngIf=\"!publicView\">\n    <div class=\"col-md-10\">\n      <div class=\"alert alert-success\"  *ngIf=\"updateS\">\n        <strong>Success!</strong>Profile Updated.\n      </div>\n      <div>\n        <h2>User profile</h2>\n      </div>\n      <div class=\"alert alert-danger\"  *ngIf=\"sessionOut && !publicView\">\n        <strong>Session Expired!</strong>Please login.\n        <a class=\"float-md-right\" routerLink=\"/login\">Login</a>\n      </div>\n      <br/>\n      <div *ngIf=\"!sessionOut\">\n        <div class=\"form-group row\" >\n          <label class=\"col-sm-2 col-form-label\" for=\"schoolFld\">School</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\">  <i class=\"fa fa-school\"></i>\n                </a>\n              </div>\n              <input id=\"schoolFld\" [(ngModel)]=\"user.school.name\"  type=\"text\"\n                     placeholder=\"School\" class=\"form-control input-md\" disabled>\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2  col-form-label\" for=\"emailFld\">Email Address</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\">  <i class=\"fa fa-envelope\"></i>\n                </a>\n              </div>\n              <input id=\"emailFld\" [(ngModel)]=\"user.email\" name=\"Email Address\" type=\"text\"\n                     placeholder=\"Email Address\" class=\"form-control input-md\" disabled>\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\" for=\"firstNameFld\">First Name</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\"> <i class=\"fa fa-align-justify\"></i>\n                </a>\n              </div>\n              <input [(ngModel)]=\"user.firstName\" id=\"firstNameFld\" name=\"First Name\" type=\"text\"\n                     placeholder=\"First Name\" class=\"form-control input-md\">\n            </div>\n          </div>\n        </div>\n        <!-- Text input-->\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\" for=\"lastNameFld\">Last Name</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\">  <i class=\"fa fa-align-justify\"></i>\n                </a>\n              </div>\n              <input id=\"lastNameFld\" [(ngModel)]=\"user.lastName\" type=\"text\" name=\"Last Name\"\n                     placeholder=\"Last Name\" class=\"form-control input-md\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\" for=\"resumeFld\">Resume</label>\n          <div class=\"col-sm-10\">\n              <textarea id=\"resumeFld\" [(ngModel)]=\"user.resume\" type=\"textarea\" name=\"Resume\"\n                        placeholder=\"Resume\" class=\"form-control input-md\" rows=\"6\"></textarea>\n        </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 control-label\" ></label>\n          <div class=\"col-sm-10\">\n            <a (click)=\"update(user)\" id=\"updatebtn\" type=\"button\" class=\"btn btn-success btn-block\">Update</a>\n            <a  (click)=\"logout()\" class=\"btn btn-danger btn-block\"\n                type=\"button\">Logout</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"publicView\">\n  <div class=\"row justify-content-center align-self-center \">\n    <div class=\"col-md-10\">\n      <div>\n        <h2>{{user.firstName}} {{user.lastName}}</h2>\n      </div>\n      <br/>\n\n\n        <div class=\"form-group row\" >\n          <label class=\"col-sm-2 col-form-label\">School:</label>\n          <div class=\"dis col-sm-10 col-form-label\">\n            <h6>{{user.school.name}}</h6>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\" for=\"emailFld\">Email Address:</label>\n          <div class=\"dis col-sm-10 col-form-label\">\n            <h6>{{user.email}}</h6>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\" for=\"resumeFld\"></label>\n          <div class=\"col-sm-10\">\n              <textarea style=\"overflow:auto;resize:none;\" disabled [(ngModel)]=\"user.resume\" type=\"textarea\" name=\"Resume\"\n                        placeholder=\"Resume\" class=\"form-control input-md\" rows=\"6\"></textarea>\n          </div>\n        </div>\n        <div class=\"reviews\">\n          <h5>Rating and Comments</h5>\n          <br/>\n          <div *ngIf=\"allApplications.length === 0\">\n             <h6>No Reviews yet</h6>\n          </div>\n          <ul class=\"list-group-flush\">\n            <li class=\"list-group-item\" *ngFor=\"let aa of allApplications\">\n              <h5>{{aa.position.sectionName}} {{aa.position.semester}} {{aa.position.year}}</h5>\n              <div class=\"row stars\">\n                <div *ngFor=\"let r of ' '.repeat(aa.instructorRating).split('')\" class=\"gold\">\n                  <span><i class=\"fa fa-star\"></i></span>\n                </div>\n                <div *ngFor=\"let r of ' '.repeat(5 - aa.instructorRating ).split('')\">\n                  <span><i class=\"fa fa-star\"></i></span>\n                </div>\n              </div>\n              <textarea style=\"overflow:auto;resize:none; margin: 10px; background: #e1b7b7; padding: 10px\" input=\"textarea\" disabled [(ngModel)] = \"aa.instructorRemarks\" placeholder=\"Comments\"\n                        name=\"remarks\" rows=\"5\" cols=\"40\"></textarea>\n            </li>\n          </ul>\n\n        </div>\n\n    </div>\n\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/applicant-profile/applicant-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/applicant-profile/applicant-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ApplicantProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantProfileComponent", function() { return ApplicantProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/applicant.service.client */ "./src/app/services/applicant.service.client.ts");
/* harmony import */ var _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/applicant.model.client */ "./src/app/models/applicant.model.client.ts");
/* harmony import */ var _services_application_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/application.service.client */ "./src/app/services/application.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicantProfileComponent = /** @class */ (function () {
    function ApplicantProfileComponent(userService, applicantService, applicationService, router, aRoute) {
        var _this = this;
        this.userService = userService;
        this.applicantService = applicantService;
        this.applicationService = applicationService;
        this.router = router;
        this.aRoute = aRoute;
        this.user = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_4__["Applicant"]();
        this.profView = false;
        this.publicView = false;
        this.allApplications = [];
        this.aRoute.params.subscribe(function (params) { return _this.addData(params); });
    }
    ApplicantProfileComponent.prototype.ngOnInit = function () {
        this.checkProfile();
    };
    ApplicantProfileComponent.prototype.checkProfile = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            if (user.status === 401 || user.type !== 'APPLICANT') {
                _this.sessionOut = true;
            }
            else {
                _this.user = user;
                _this.applicationService.findAllApplicationsForApplicantusingId(user._id)
                    .then(function (applis) { return _this.allApplications = applis.filter(function (a) { return a.instructorRating; }); });
            }
            if (user.type === 'INSTRUCTOR') {
                _this.publicView = true;
                _this.profView = true;
                _this.applicantService.findUserById(_this.userId)
                    .then(function (user1) {
                    _this.user = user1;
                    _this.applicationService.findAllApplicationsForApplicantusingId(user1._id)
                        .then(function (applis) { return _this.allApplications = applis.filter(function (a) { return a.instructorRating; }); });
                });
            }
        });
    };
    ApplicantProfileComponent.prototype.addData = function (params) {
        this.positionId = params.positionId;
        this.userId = params.profileId;
        this.checkProfile();
    };
    ApplicantProfileComponent.prototype.logout = function () {
        var _this = this;
        this.sessionOut = false;
        this.userService.logout()
            .then(function (res) {
            _this.router.navigate(['login']);
        });
    };
    ApplicantProfileComponent.prototype.update = function (user) {
        var _this = this;
        this.applicantService.updateApplicant(user)
            .then(function () { return _this.updateS = true; });
    };
    ApplicantProfileComponent.prototype.changeView = function () { this.publicView = !this.publicView; this.updateS = false; };
    ApplicantProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicant-profile',
            template: __webpack_require__(/*! ./applicant-profile.component.html */ "./src/app/applicant-profile/applicant-profile.component.html"),
            styles: [__webpack_require__(/*! ./applicant-profile.component.css */ "./src/app/applicant-profile/applicant-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_3__["ApplicantServiceClient"],
            _services_application_service_client__WEBPACK_IMPORTED_MODULE_5__["ApplicationServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ApplicantProfileComponent);
    return ApplicantProfileComponent;
}());



/***/ }),

/***/ "./src/app/applications-grid/applications-grid.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/applications-grid/applications-grid.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-link{\r\n  color: green;\r\n}\r\n.col-lg-3{\r\n  margin-bottom: 10px;\r\n}\r\n.gold{\r\n  color: gold;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  cursor: pointer;\r\n}\r\n.row{\r\n  margin-left: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/applications-grid/applications-grid.component.html":
/*!********************************************************************!*\
  !*** ./src/app/applications-grid/applications-grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<h2>All Applications</h2>\r\n<div class=\"bg\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\" *ngFor=\"let aa of applications\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{aa.applicant.firstName}} {{aa.applicant.lastName}}</h5>\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{aa.position.sectionName}} {{aa.position.semester}}\r\n            {{aa.position.year}}</h6>\r\n          <div class=\"form-group row\">\r\n\r\n\r\n                <div *ngFor=\"let r of ' '.repeat(aa.applicant.avgRating ).split('')\" class=\"gold\">\r\n                  <span><i class=\"fa fa-star\"></i></span>\r\n                </div>\r\n                <div *ngFor=\"let r of ' '.repeat(5 - aa.applicant.avgRating ).split('')\">\r\n                  <span><i class=\"fa fa-star\"></i></span>\r\n                </div>\r\n\r\n            <!--</div>-->\r\n            <div class=\"col-md-4\" id=\"rating\">{{aa.applicant.rated}} times</div>\r\n          </div>\r\n          <button  class=\"btn btn-link\" routerLink=\"/position/{{positionId}}/profile/{{aa.applicant._id}}\">View Profile</button>\r\n          <button  class=\"btn btn-warning\" (click)=\"hire(aa._id)\">Hire</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--<div class=\"stars\">-->\r\n  <!--<div class=\"rate-container\">-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n  <!--</div>-->\r\n  <!---->\r\n  <!--<div class=\"rate-container\">-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"rate-container\">-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"rate-container\">-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star \"></i>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"rate-container\">-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n    <!--<i class=\"fa fa-star gold\"></i>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/applications-grid/applications-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/applications-grid/applications-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: ApplicationsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsGridComponent", function() { return ApplicationsGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_application_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/application.service.client */ "./src/app/services/application.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationsGridComponent = /** @class */ (function () {
    function ApplicationsGridComponent(aRoute, applicationService) {
        var _this = this;
        this.aRoute = aRoute;
        this.applicationService = applicationService;
        this.positionId = '';
        this.applications = [];
        this.aRoute.params.subscribe(function (params) { return _this.loadApplications(params.positionId); });
    }
    ApplicationsGridComponent.prototype.loadApplications = function (id) {
        this.positionId = id;
        this.findAllApplications();
    };
    ApplicationsGridComponent.prototype.ngOnInit = function () {
    };
    ApplicationsGridComponent.prototype.findAllApplications = function () {
        var _this = this;
        this.applicationService.findAllApplicationsForAPosition(this.positionId)
            .then(function (res) {
            if (res.status === 200) {
                res.json().then(function (applications) { return _this.applications = applications.filter(function (a) { return !a.isSelected; }); });
            }
        });
    };
    ApplicationsGridComponent.prototype.hire = function (id) {
        var _this = this;
        this.applicationService.updateIsSelected(id, this.positionId)
            .then(function () { return _this.findAllApplications(); });
    };
    ApplicationsGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications-grid',
            template: __webpack_require__(/*! ./applications-grid.component.html */ "./src/app/applications-grid/applications-grid.component.html"),
            styles: [__webpack_require__(/*! ./applications-grid.component.css */ "./src/app/applications-grid/applications-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_application_service_client__WEBPACK_IMPORTED_MODULE_2__["ApplicationServiceClient"]])
    ], ApplicationsGridComponent);
    return ApplicationsGridComponent;
}());



/***/ }),

/***/ "./src/app/errorpage/errorpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-1 {text-align:center;color:#e1b7b7;}\r\n"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n\r\n  <div class=\"container\">\r\n    <h1 class=\"display-1\">4<i class=\"fa  fa-spin fa-cog fa-3x\"></i> 4</h1>\r\n    <h1 class=\"display-1 \">ERROR</h1>\r\n    <br/>\r\n    <br/>\r\n    <br/>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! ./errorpage.component.html */ "./src/app/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.css */ "./src/app/errorpage/errorpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/instructor-home/instructor-home.component.css":
/*!***************************************************************!*\
  !*** ./src/app/instructor-home/instructor-home.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-plus {\r\n  color: white;\r\n}\r\n.btn-primary{\r\n  margin-bottom: 10px;\r\n}\r\n/*.bg{*/\r\n/*top: 0;*/\r\n/*position: fixed;*/\r\n/*right: 0;*/\r\n/*bottom: 0;*/\r\n/*left: 0;*/\r\n/*background-size: cover;*/\r\n/*background-position: 50% 50%;*/\r\n/*background-image:*/\r\n/*url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Plain-Wallpaper-HD-For-Desktop-768x480.jpg');*/\r\n/*background-repeat:repeat;*/\r\n/*}*/\r\n"

/***/ }),

/***/ "./src/app/instructor-home/instructor-home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/instructor-home/instructor-home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"bg\">\n  <br/>\n  <div class=\"alert alert-danger\"  *ngIf=\"sessionOut\">\n    <strong>Session Expired!</strong> Please login.\n    <a class=\"float-md-right\" routerLink=\"/login\">Login</a>\n  </div>\n  <div class=\"container-fluid\" *ngIf=\"!sessionOut\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      <a class=\"btn btn-primary\" routerLink=\"/instructor/position\">\n        <b>\n        <i class=\"fa fa-plus\"></i>\n        Add new position</b>\n      </a>\n    </div>\n      <div class=\"col-md-10\">\n        <app-position-grid></app-position-grid>\n      </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/instructor-home/instructor-home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/instructor-home/instructor-home.component.ts ***!
  \**************************************************************/
/*! exports provided: InstructorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorHomeComponent", function() { return InstructorHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/instructor.model.client */ "./src/app/models/instructor.model.client.ts");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_position_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/position.service.client */ "./src/app/services/position.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InstructorHomeComponent = /** @class */ (function () {
    function InstructorHomeComponent(userService, positionService, route) {
        this.userService = userService;
        this.positionService = positionService;
        this.route = route;
        this.user = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_1__["Instructor"]();
        this.instructorSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_2__["School"]();
        this.positions = [];
    }
    InstructorHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            if (user.status === 401 || user.type !== 'INSTRUCTOR') {
                _this.sessionOut = true;
            }
        });
    };
    InstructorHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructor-home',
            template: __webpack_require__(/*! ./instructor-home.component.html */ "./src/app/instructor-home/instructor-home.component.html"),
            styles: [__webpack_require__(/*! ./instructor-home.component.css */ "./src/app/instructor-home/instructor-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_position_service_client__WEBPACK_IMPORTED_MODULE_4__["PositionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], InstructorHomeComponent);
    return InstructorHomeComponent;
}());



/***/ }),

/***/ "./src/app/instructor-position/instructor-position.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/instructor-position/instructor-position.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.red{\r\n  color:red;\r\n}\r\n.form-area\r\n{\r\n  background-color: #e8f2fc;\r\n  padding: 10px 40px 60px;\r\n  margin: 10px 0px 60px;\r\n  border: 1px solid GREY;\r\n}\r\n.col-md-4{\r\n  text-align: center;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\nlabel\r\n{\r\n  font-weight: bold;\r\n  font-family: \"Times New Roman\";\r\n}\r\n.list-group{\r\n  position: fixed;\r\n  z-index: 100;\r\n}\r\n.list-group-item{\r\n  cursor: pointer;\r\n}\r\n.btn-secondary{\r\n  font-weight: bold;\r\n}\r\n.addCourse{\r\n  margin-top: 5px;\r\n  margin-left: 170px;\r\n  text-align: center;\r\n}\r\n.course{\r\n  background: #ffeeba;\r\n  padding: 5px;\r\n  border-bottom-width: thick;\r\n  border: black;\r\n}\r\n.cancel{\r\n  margin-left: 145px;\r\n  margin-top: 19px;\r\n  color: #dc3545;\r\n}\r\n"

/***/ }),

/***/ "./src/app/instructor-position/instructor-position.component.html":
/*!************************************************************************!*\
  !*** ./src/app/instructor-position/instructor-position.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\"  *ngIf=\"!isIns\">\n  <strong>Session Expired!</strong> Please login.\n  <a class=\"float-md-right\" routerLink=\"/login\">Login</a>\n</div>\n<div class=\"row justify-content-center align-self-center\" *ngIf=\"isIns\">\n  <div class=\"col-md-5\">\n    <div class=\"form-area\">\n      <div class=\"form\">\n        <br style=\"clear:both\">\n        <h3 style=\"margin-bottom: 25px; text-align: center;\">Add New Position</h3>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\">\n              <label class=\"col-4 col-form-label\" for=\"course\">Course</label>\n          </div>\n\n          <div class=\"col-md-8\">\n            <div>\n                <input [(ngModel)]=\"courseName\" type=\"text\" class=\"form-control\" id=\"course\" name=\"course\"\n                        placeholder=\"Course\" required (input)=\"searchCourse(courseName)\" #course=\"ngModel\"\n                       *ngIf=\"(!(addC))\" >\n              <input  type=\"text\" class=\"form-control\" name=\"course\"\n                     placeholder=\"Course\"  disabled *ngIf=\"((addC))\"  >\n                <div *ngIf=\"showResults\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let course of results\" (click)=\"selectCourse(course)\">\n                      {{course.courseNumber}} - {{course.name}}\n                    </li>\n                      <button (click)=\"addCourse()\" class=\"btn btn-secondary btn-block\">Add Course</button>\n                  </ul>\n                </div>\n          </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"form-group row course\" *ngIf=\"addC\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"newCourse.courseNumber\" class=\"form-control\"  name=\"section\"\n                   placeholder=\"Course Number\" required #cnumber=\"ngModel\">\n          </div>\n          <div class=\"col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"newCourse.name\" class=\"form-control\"  name=\"section\"\n                   placeholder=\"Course Name\" required #cname=\"ngModel\">\n          </div>\n\n              <button class=\"btn btn btn-secondary addCourse\"\n                      [ngClass]=\"{'disabled':(cnumber.invalid || cname.invalid)}\" (click)=\"addInstructor(newCourse)\">\n                Add Course</button>\n              <span class=\"cancel\" (click)=\"cancelAdd()\"><i class=\"fa fa-times\" ></i></span>\n\n        </div>\n\n\n\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\">\n            <label class=\"col-4 col-form-label\" for=\"semsester\">Semester</label>\n          </div>\n          <div class=\"col-md-8\">\n            <select class=\"form-control\" id=\"semsester\" [(ngModel)]=\"position.semester\" required #sem=\"ngModel\">\n              <!--<option value disabled selected >Select Semester</option>-->\n              <option value=\"fall\">Fall</option>\n              <option value=\"spring\">Spring</option>\n              <option value=\"summer-full\">Full-Summer</option>\n              <option value=\"summer1\">Summer 1</option>\n              <option value=\"summer2\">Summer 2</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\">\n            <label class=\"col-4 col-form-label\" for=\"section\">Section</label>\n          </div>\n          <div class=\"col-md-8\">\n            <input type=\"text\" [(ngModel)]=\"position.sectionName\" class=\"form-control\" id=\"section\" name=\"section\"\n                   placeholder=\"Section Name\" required #sec=\"ngModel\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\">\n            <label class=\"col-4 col-form-label\" for=\"year\" >Year</label>\n          </div>\n          <div class=\"col-md-8\">\n            <input type=\"number\" class=\"form-control\" id=\"year\" name=\"year\" placeholder=\"Year\"\n                   required [(ngModel)]=\"position.year\" #year=\"ngModel\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\">\n            <label class=\"col-4 col-form-label\" for=\"strength\" >Strength</label>\n          </div>\n          <div class=\"col-md-8\">\n            <input type=\"number\" class=\"form-control\" id=\"strength\" name=\"strength\" placeholder=\"Strength of Class\"\n                   required [(ngModel)]=\"position.classStrength\" (change)=\"taSuggest(position.classStrength)\"\n                   #num=\"ngModel\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\">\n            <label class=\"col-4 col-form-label\" for=\"no\">TA's</label>\n          </div>\n          <div class=\"col-md-8\">\n            <input type=\"number\" class=\"form-control\" id=\"no\" name=\"No of TA\" placeholder=\"Number of TA's\"\n                   required [(ngModel)]=\"position.noOfTa\" #ta=\"ngModel\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <textarea class=\"form-control\" type=\"textarea\"  placeholder=\"Syllabus\" rows=\"4\"\n                    [(ngModel)]=\"position.syllabus\"></textarea>\n        </div>\n\n        <button type=\"button\" (click)=\"submitPos(position)\" class=\"btn btn-primary btn-block\"\n                [ngClass]=\"{'disabled':( sec.invalid\n                || sem.invalid || year.invalid || num.invalid || ta.invalid)}\">\n          Add Position</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/instructor-position/instructor-position.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/instructor-position/instructor-position.component.ts ***!
  \**********************************************************************/
/*! exports provided: InstructorPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorPositionComponent", function() { return InstructorPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_position_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/position.model.client */ "./src/app/models/position.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/instructor.model.client */ "./src/app/models/instructor.model.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _services_position_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/position.service.client */ "./src/app/services/position.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InstructorPositionComponent = /** @class */ (function () {
    function InstructorPositionComponent(userService, courseService, icaService, route) {
        this.userService = userService;
        this.courseService = courseService;
        this.icaService = icaService;
        this.route = route;
        this.position = new _models_position_model_client__WEBPACK_IMPORTED_MODULE_1__["Position"]();
        this.user = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_4__["Instructor"]();
        this.addC = false;
        this.newCourse = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_5__["Course"]();
        // selectedCourse: Course;
        this.courseName = '';
        this.results = [];
    }
    InstructorPositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            if (user.status === 401) {
                _this.sessionOut = true;
            }
            else {
                _this.user = user;
                if (_this.user.type === 'INSTRUCTOR') {
                    _this.isIns = true;
                }
            }
        });
    };
    InstructorPositionComponent.prototype.selectCourse = function (course) {
        this.position.course = course;
        this.courseName = course.courseNumber + ' - ' + course.name;
        this.showResults = false;
    };
    InstructorPositionComponent.prototype.searchCourse = function (name) {
        var _this = this;
        this.showResults = true;
        this.courseService.searchCourses(name, this.user.school._id)
            .then(function (res) {
            if (res.status === 200) {
                res.json()
                    .then(function (resl) { return _this.results = resl; });
            }
        });
        if (name.length === 0) {
            this.results = [];
            this.removeAdd();
        }
    };
    InstructorPositionComponent.prototype.taSuggest = function (str) {
        var vari = str / 30;
        this.position.noOfTa = Math.round(vari);
    };
    InstructorPositionComponent.prototype.addCourse = function () {
        this.addC = true;
        this.showResults = false;
        this.courseName = '';
    };
    InstructorPositionComponent.prototype.addInstructor = function (course) {
        var _this = this;
        course.school = this.user.school;
        this.courseService.createCourse(course)
            .then(function (res) {
            if (res.status === 200) {
                res.json().then(function (cour) {
                    _this.position.course = cour;
                    _this.courseName = cour.courseNumber + ' - ' + cour.name;
                    _this.addC = false;
                    _this.newCourse = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_5__["Course"]();
                });
            }
        });
    };
    InstructorPositionComponent.prototype.submitPos = function (ica) {
        var _this = this;
        this.icaService.createPosition(ica)
            .then(function (res) {
            if (res.status === 200) {
                _this.route.navigate(['instructor']);
            }
        });
    };
    InstructorPositionComponent.prototype.cancelAdd = function () {
        this.addC = false;
    };
    InstructorPositionComponent.prototype.removeAdd = function () { this.showResults = false; };
    InstructorPositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructor-position',
            template: __webpack_require__(/*! ./instructor-position.component.html */ "./src/app/instructor-position/instructor-position.component.html"),
            styles: [__webpack_require__(/*! ./instructor-position.component.css */ "./src/app/instructor-position/instructor-position.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"],
            _services_position_service_client__WEBPACK_IMPORTED_MODULE_6__["PositionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], InstructorPositionComponent);
    return InstructorPositionComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-4{\r\n  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.4), 0 16px 30px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n/*.bg{*/\r\n/*position: fixed;*/\r\n/*top: 0;*/\r\n/*right: 0;*/\r\n/*bottom: 0;*/\r\n/*left: 0;*/\r\n/*background-size: cover;*/\r\n/*background-position: 50% 50%;*/\r\n/*background-image: url('http://cleancanvas.herokuapp.com/img/backgrounds/color-splash.jpg');*/\r\n/*background-repeat:repeat;*/\r\n/*}*/\r\n.col-md-4.col-md-offset-4{\r\n  background: white;\r\n  margin-top: 30px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-bottom: 15px;\r\n  padding-top: 10px;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-right: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-right: 5px solid #a94442; /* red */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div class=\"container-fluid\">\r\n  <div class=\"bg\">\r\n  <div class=\"row justify-content-center align-self-center\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <h4 class=\"text-center\">\r\n            <b>LOGIN</b></h4>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"btn btn-dark active\"><i class=\"fa fa-envelope\"></i></span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required\r\n                     #email=\"ngModel\"/>\r\n            </div>\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"email.errors.required\">\r\n                Email is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"btn btn-dark active\"><i class=\"fa fa-lock\"></i></span>\r\n              </div>\r\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required\r\n                     #password=\"ngModel\"/>\r\n            </div>\r\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"password.errors.required\">\r\n                Password is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <!--<div class=\"alert alert-danger\"  *ngIf=\"userFail\">-->\r\n            <!--<strong>Error!</strong> Please enter Username.-->\r\n          <!--</div>-->\r\n          <!--<div class=\"alert noPassword alert-danger\"  *ngIf=\"passFail\">-->\r\n            <!--<strong>Error!</strong> Please enter password.-->\r\n          <!--</div>-->\r\n          <div class=\"alert alert-danger\"  *ngIf=\"loginFailed\">\r\n            <strong>Error!</strong> Incorrect Credentials.\r\n          </div>\r\n          <button  class=\"btn btn-sm btn-primary btn-block\" (click)=\"login(user)\"\r\n                   role=\"button\" [ngClass]=\"{'disabled': (password.invalid || email.invalid)}\">\r\n            <b>Login</b>\r\n          </button>\r\n          <div >\r\n            <a  style=\"float:left\" routerLink=\"/register\">Register</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.loginFailed = false;
        this.passFail = false;
        this.userFail = false;
        this.login = function (reg) {
            _this.loginFailed = false;
            _this.passFail = false;
            _this.userFail = false;
            // if ( !reg.email) { this.userFail = true; }
            // if ( !reg.password) { this.passFail = true; }
            if (reg.email && reg.password) {
                _this.service.login(reg.username, reg.password)
                    .then(function (res) {
                    if (res.status === 401) {
                        _this.loginFailed = true;
                    }
                    else {
                        res.json()
                            .then(function (user) {
                            if (user.type === 'ADMIN') {
                                _this.router.navigate(['/admin']);
                            }
                            if (user.type === 'INSTRUCTOR') {
                                _this.router.navigate(['/instructor']);
                            }
                            if (user.type === 'APPLICANT') {
                                _this.router.navigate(['/applicant']);
                            }
                        });
                        _this.router.navigate(['profile']);
                    }
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/applicant.model.client.ts":
/*!**************************************************!*\
  !*** ./src/app/models/applicant.model.client.ts ***!
  \**************************************************/
/*! exports provided: Applicant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applicant", function() { return Applicant; });
var Applicant = /** @class */ (function () {
    function Applicant() {
    }
    return Applicant;
}());



/***/ }),

/***/ "./src/app/models/application.model.client.ts":
/*!****************************************************!*\
  !*** ./src/app/models/application.model.client.ts ***!
  \****************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var Application = /** @class */ (function () {
    function Application() {
    }
    return Application;
}());



/***/ }),

/***/ "./src/app/models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/instructor.model.client.ts":
/*!***************************************************!*\
  !*** ./src/app/models/instructor.model.client.ts ***!
  \***************************************************/
/*! exports provided: Instructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instructor", function() { return Instructor; });
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    return Instructor;
}());



/***/ }),

/***/ "./src/app/models/position.model.client.ts":
/*!*************************************************!*\
  !*** ./src/app/models/position.model.client.ts ***!
  \*************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/models/regsiter.model.client.ts":
/*!*************************************************!*\
  !*** ./src/app/models/regsiter.model.client.ts ***!
  \*************************************************/
/*! exports provided: RegisterC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterC", function() { return RegisterC; });
var RegisterC = /** @class */ (function () {
    function RegisterC() {
    }
    return RegisterC;
}());



/***/ }),

/***/ "./src/app/models/school.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/school.model.client.ts ***!
  \***********************************************/
/*! exports provided: School */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "School", function() { return School; });
var School = /** @class */ (function () {
    function School() {
    }
    return School;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-link\r\n{\r\n  border: black;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav {\r\n  font-family: 'Lobster', cursive;\r\n  font-weight: bolder;\r\n  font-size: x-large;\r\n}\r\n\r\n.navbar{\r\n  z-index: 100;\r\n}\r\n\r\n#nav{\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n#profile{\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand mb-0 h1\" (click)=\"goHome()\" id=\"nav\">\n    <!--<img src=\"https://encrypted-tbn0.gstatic.com/-->\n      <!--images?q=tbn:ANd9GcQ7KFUTraieZJgtXRgrTfNUECcjeO84V535hx8ekgoRlT27i5KmwQ\"-->\n         <!--width=\"30\" height=\"30\" alt=\"\">-->\n    TA-Portal\n  </a>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\" *ngIf=\"!user.email\">\n      <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"!user.email\">\n      <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"user.email\">\n      <a class=\"nav-link\" id=\"profile\" >\n        <i class=\"fa fa-user\" (click)=\"profile()\"></i></a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"user.email\" >\n      <a class=\"nav-link btn-link\" (click)=\"logout()\">Logout</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        route.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.service.profile()
                    .then(function (user) { return _this.user = user; });
            }
        });
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function (res) {
            _this.route.navigate(['login']);
        });
    };
    NavbarComponent.prototype.goHome = function () {
        if (this.user.type === 'ADMIN') {
            this.route.navigate(['admin']);
        }
        if (this.user.type === 'INSTRUCTOR') {
            this.route.navigate(['instructor']);
        }
        if (this.user.type === 'APPLICANT') {
            this.route.navigate(['applicant']);
        }
        if (!this.user.email) {
            this.route.navigate(['home']);
        }
    };
    NavbarComponent.prototype.profile = function () {
        if (this.user.type === 'APPLICANT') {
            this.route.navigate(['applicant/profile']);
        }
        else {
            this.route.navigate(['profile']);
        }
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/position-grid/position-grid.component.css":
/*!***********************************************************!*\
  !*** ./src/app/position-grid/position-grid.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-lg-4{\r\n  margin-bottom: 45px;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  cursor: pointer;\r\n}\r\n.fa-trash{\r\n  color: red;\r\n  margin-left: 50px;\r\n}\r\n.fa-info-circle{\r\n  color: #005cbf;\r\n  float: right;\r\n}\r\n.btn-warning{\r\n  margin-top: 5px;\r\n}\r\na{\r\n  font-family: \"Times New Roman\";\r\n}\r\n/*.bg{*/\r\n/*top: 0;*/\r\n/*right: 0;*/\r\n/*bottom: 0;*/\r\n/*left: 0;*/\r\n/*background-size: cover;*/\r\n/*background-position: 50% 50%;*/\r\n/*background-image:*/\r\n/*url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Plain-Wallpaper-HD-For-Desktop-768x480.jpg');*/\r\n/*background-repeat:repeat;*/\r\n/*}*/\r\n.btn-success{\r\n  margin-bottom: 5px;\r\n  margin-top: 3px;\r\n}\r\n.btn-primary{\r\n  margin-bottom: 5px;\r\n  margin-top: 3px;\r\n}\r\n.btn-link {\r\n  color: red;\r\n}\r\n.nav-tabs {\r\n  font-weight: bolder;\r\n  font-size: larger;\r\n  cursor: pointer;\r\n  justify-content: center;\r\n}\r\n#hire{\r\n  color: green;\r\n}\r\n"

/***/ }),

/***/ "./src/app/position-grid/position-grid.component.html":
/*!************************************************************!*\
  !*** ./src/app/position-grid/position-grid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>All Positions</h2>\n<ul class=\"nav nav-tabs\" *ngIf=\"isAppli\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active' : notAppliedPos}\" (click)=\"seeOtherPos()\">Positions</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active' : appliedPos}\" (click)=\"seeAppliedPos()\">Applied Position</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active' : hiredPos}\" (click)=\"seeHiredPos()\">All Hired Position</a>\n  </li>\n</ul>\n\n<br/>\n<div class=\"bg\" *ngIf=\"!isAppli || (isAppli && notAppliedPos)\">\n<div class=\"row\">\n  <div class=\"col-lg-4\" *ngFor=\"let position of positions\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <div class=\"card-body\">\n        <span ><i class=\"fa fa-info-circle\"></i></span>\n        <h5 class=\"card-title\">{{position.course.courseNumber}} - {{position.course.name}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{position.sectionName}} {{position.semester}} {{position.year}}\n        </h6>\n        <div class=\"form-group row\">\n          <div class=\"col-md-6\">Instructor: </div>\n          <div class=\"col-md-6\">{{position.instructor.firstName}} {{position.instructor.lastName}}</div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-6\">Class Strength: </div>\n          <div class=\"col-md-6\">{{position.classStrength}} </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-6\">No Of TA's: </div>\n          <div class=\"col-md-6\">{{position.noOfTa}} </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-6\">TA's Hired: </div>\n          <div class=\"col-md-6\">{{position.taHired  }} </div>\n        </div>\n        <!--<div class=\"form-group row\">-->\n          <!--<div class=\"col-md-6\">Status: </div>-->\n          <!--<div class=\"col-md-6\" *ngIf=\"position.postionsFilled\">Closed</div>-->\n          <!--<div class=\"col-md-6\" *ngIf=\"!position.postionsFilled\">Open</div>-->\n        <!--</div>-->\n        <div *ngIf=\"(isIns && !position.postionsFilled)\">\n          <a routerLink=\"/position/{{position._id}}/applications\" class=\"card-link\">Check All Applications</a><br/>\n          <a (click)=\"markPositionClosed(position._id)\" class=\"btn btn-warning\">Mark Position Closed</a>\n          <span (click)=\"deleteIca(position._id)\" ><i class=\"fa fa-trash\"></i></span>\n        </div>\n        <div *ngIf=\"isIns && position.postionsFilled && !position.courseCompleted\">\n          <br/>\n          <a  class=\"btn btn-success\" (click)=\"markClassComplete(position._id)\">Mark Class Completed</a>\n          <br/>\n        </div>\n        <div *ngIf=\"isIns && position.courseCompleted\">\n          <br/>\n          <a  class=\"btn btn-primary\" routerLink=\"/position/{{position._id}}/reviews\">Review Tas</a>\n          <br/>\n        </div>\n        <div *ngIf=\"isAppli\">\n          <a  class=\"btn btn-success\" (click)=\"applyForPosition(position)\">Apply</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<div class=\"bg\" *ngIf=\"(isAppli && appliedPos)\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let position of appliedPositions\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n          <span routerLink=\"/position/{{position._id}}\"><i class=\"fa fa-info-circle\"></i></span>\n          <h5 class=\"card-title\">{{position.course.courseNumber}} - {{position.course.name}}</h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{position.sectionName}} {{position.semester}} {{position.year}}</h6>\n          <div class=\"form-group row\">\n            <div class=\"col-md-6\">Instructor: </div>\n            <div class=\"col-md-6\">{{position.instructor.firstName}} {{position.instructor.lastName}}</div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-6\">Class Strength: </div>\n            <div class=\"col-md-6\">{{position.classStrength}} </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-6\">No Of TA's: </div>\n            <div class=\"col-md-6\">{{position.noOfTa}} </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-6\">TA's Hired: </div>\n            <div class=\"col-md-6\">{{position.taHired  }} </div>\n          </div>\n          <!--<div class=\"form-group row\">-->\n            <!--<div class=\"col-md-6\">Status: </div>-->\n            <!--<div class=\"col-md-6\" *ngIf=\"position.postionsFilled\">Closed</div>-->\n            <!--<div class=\"col-md-6\" *ngIf=\"!position.postionsFilled\">Open</div>-->\n          <!--</div>-->\n            <button  class=\"btn btn-link\" disabled>Applied</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"bg\" *ngIf=\"(isAppli && hiredPos)\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let aa of hiredAA\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{aa.position.sectionName}} {{aa.position.semester}}\n            {{aa.position.year}}</h5>\n          <!--<h6 class=\"card-subtitle mb-2 text-muted\">{{aa.position.sectionName}} {{aa.position.semester}}-->\n            <!--{{aa.position.year}}</h6>-->\n          <!--<div class=\"form-group row\">-->\n            <!--<div class=\"col-md-6\">Instructor: </div>-->\n            <!--<div class=\"col-md-6\">{{aa.position.instructor.firstName}} {{aa.position.instructor.lastName}}</div>-->\n          <!--</div>-->\n\n          <button  class=\"btn btn-link\" disabled id=\"hire\">Hired</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/position-grid/position-grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/position-grid/position-grid.component.ts ***!
  \**********************************************************/
/*! exports provided: PositionGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionGridComponent", function() { return PositionGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/instructor.model.client */ "./src/app/models/instructor.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_position_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/position.service.client */ "./src/app/services/position.service.client.ts");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
/* harmony import */ var _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/applicant.model.client */ "./src/app/models/applicant.model.client.ts");
/* harmony import */ var _services_application_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/application.service.client */ "./src/app/services/application.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PositionGridComponent = /** @class */ (function () {
    function PositionGridComponent(userService, positionService, applicationService) {
        this.userService = userService;
        this.positionService = positionService;
        this.applicationService = applicationService;
        this.user = new _models_instructor_model_client__WEBPACK_IMPORTED_MODULE_1__["Instructor"]();
        this.applicant = new _models_applicant_model_client__WEBPACK_IMPORTED_MODULE_5__["Applicant"]();
        this.instructorSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_4__["School"]();
        this.aplicantAllApplications = [];
        this.positions = [];
        this.appliedPosIds = [];
        this.appliedPositions = [];
        this.allPos = [];
        this.appliedPos = false;
        this.notAppliedPos = true;
        this.hiredPos = false;
        this.hiredAA = [];
    }
    PositionGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            if (user.type === 'INSTRUCTOR') {
                _this.isIns = true;
            }
            if (user.type === 'APPLICANT') {
                _this.isAppli = true;
                _this.applicant = user;
            }
            _this.findAllPostions();
        });
    };
    PositionGridComponent.prototype.findAllPostions = function () {
        var _this = this;
        if (this.isIns) {
            this.positionService.findAllIcasForInstructor()
                .then(function (res) {
                if (res.status === 200) {
                    res.json().then(function (icas) { return _this.positions = icas; });
                }
            });
        }
        if (this.isAppli) {
            this.positionService.findAllIcas()
                .then(function (res) {
                if (res.status === 200) {
                    res.json().then(function (icas) { return _this.allPos = icas
                        .filter(function (ica) { return ica.course.school === _this.applicant.school._id && !ica.postionsFilled; }); });
                }
            }).then(function () { return _this.applicationService.findAllApplicationsForApplicant()
                .then(function (applications) { return _this.aplicantAllApplications = applications; }); })
                .then(function () { return _this.filterAppliedApplications(); });
        }
        if (!this.isIns && !this.isAppli) {
            this.positionService.findAllIcas()
                .then(function (res) {
                if (res.status === 200) {
                    res.json().then(function (icas) { return _this.positions = icas
                        .filter(function (ica) { return !ica.postionsFilled; }); });
                }
            });
        }
    };
    PositionGridComponent.prototype.deleteIca = function (id) {
        var _this = this;
        this.positionService.deleteIca(id)
            .then(function () { return _this.findAllPostions(); });
    };
    PositionGridComponent.prototype.markPositionClosed = function (id) {
        var _this = this;
        this.positionService.updatePositionFilled(id)
            .then(function () { return _this.findAllPostions(); });
    };
    PositionGridComponent.prototype.applyForPosition = function (position) {
        var _this = this;
        if (this.isAppli) {
            this.applicationService.createApplication(position, this.applicant)
                .then(function () { return _this.findAllPostions(); });
        }
    };
    PositionGridComponent.prototype.filterAppliedApplications = function () {
        var _this = this;
        this.aplicantAllApplications.map(function (a) { return _this.appliedPosIds.push(a.position._id); });
        this.appliedPositions = this.allPos.filter(function (pos) { return _this.appliedPosIds.includes(pos._id); });
        this.positions = this.allPos.filter(function (pos) { return !_this.appliedPosIds.includes(pos._id); });
        this.hiredAA = this.aplicantAllApplications.filter(function (aa) { return aa.isSelected; });
        // if (!this.aplicantAllApplications) {
        //   this.positions = this.allPos;
        // }
    };
    PositionGridComponent.prototype.seeAppliedPos = function () {
        this.appliedPos = true;
        this.hiredPos = false;
        this.notAppliedPos = false;
    };
    PositionGridComponent.prototype.seeOtherPos = function () {
        this.notAppliedPos = true;
        this.appliedPos = false;
        this.hiredPos = false;
    };
    PositionGridComponent.prototype.seeHiredPos = function () {
        this.notAppliedPos = false;
        this.appliedPos = false;
        this.hiredPos = true;
    };
    PositionGridComponent.prototype.markClassComplete = function (id) {
        var _this = this;
        var pos = { _id: id, courseCompleted: true };
        this.positionService.updatePosition(pos)
            .then(function () { return _this.findAllPostions(); });
    };
    PositionGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position-grid',
            template: __webpack_require__(/*! ./position-grid.component.html */ "./src/app/position-grid/position-grid.component.html"),
            styles: [__webpack_require__(/*! ./position-grid.component.css */ "./src/app/position-grid/position-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_position_service_client__WEBPACK_IMPORTED_MODULE_3__["PositionServiceClient"],
            _services_application_service_client__WEBPACK_IMPORTED_MODULE_6__["ApplicationServiceClient"]])
    ], PositionGridComponent);
    return PositionGridComponent;
}());



/***/ }),

/***/ "./src/app/position-page/position-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/position-page/position-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/position-page/position-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/position-page/position-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  position-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/position-page/position-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/position-page/position-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PositionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionPageComponent", function() { return PositionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PositionPageComponent = /** @class */ (function () {
    function PositionPageComponent() {
    }
    PositionPageComponent.prototype.ngOnInit = function () {
    };
    PositionPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position-page',
            template: __webpack_require__(/*! ./position-page.component.html */ "./src/app/position-page/position-page.component.html"),
            styles: [__webpack_require__(/*! ./position-page.component.css */ "./src/app/position-page/position-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PositionPageComponent);
    return PositionPageComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label{\r\n}\r\nh2{\r\n  text-align: center;\r\n  font-family: \"Times New Roman\";\r\n}\r\n.enrollment\r\n{\r\n  background: #ffeeba;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n.list-group-item\r\n{\r\n  background: #ffeeba;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center align-self-center \">\n    <div class=\"col-md-10\">\n      <div class=\"error alert-danger fade in\"  style=\"display: none;\">\n        <strong>Error!</strong>Profile Not Updated.\n      </div>\n      <div class=\"alert alert-success\"  *ngIf=\"updateS\">\n        <strong>Success!</strong>Profile Updated.\n      </div>\n      <div>\n        <h2>User profile</h2>\n      </div>\n      <br/>\n      <div class=\"alert alert-danger\"  *ngIf=\"sessionOut\">\n        <strong>Session Expired!</strong>Please login.\n        <a class=\"float-md-right\" routerLink=\"/login\">Login</a>\n      </div>\n      <div *ngIf=\"!sessionOut\">\n\n        <div class=\"form-group row\" *ngIf=\"!isAdmin\">\n          <label class=\"col-sm-4 col-form-label\" for=\"schoolFld\">School</label>\n          <div class=\"col-sm-8\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\">  <i class=\"fa fa-school\"></i>\n                </a>\n              </div>\n              <input id=\"schoolFld\" [(ngModel)]=\"user.school.name\"  type=\"text\"\n                     placeholder=\"School\" class=\"form-control input-md\" disabled>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\" for=\"emailFld\">Email Address</label>\n          <div class=\"col-sm-8\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\">  <i class=\"fa fa-envelope\"></i>\n                </a>\n              </div>\n              <input id=\"emailFld\" [(ngModel)]=\"user.email\" name=\"Email Address\" type=\"text\"\n                     placeholder=\"Email Address\" class=\"form-control input-md\" disabled>\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\" for=\"firstNameFld\">First Name</label>\n          <div class=\"col-sm-8\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\"> <i class=\"fa fa-align-justify\"></i>\n                </a>\n              </div>\n              <input [(ngModel)]=\"user.firstName\" id=\"firstNameFld\" name=\"First Name\" type=\"text\"\n                     placeholder=\"First Name\" class=\"form-control input-md\">\n            </div>\n          </div>\n        </div>\n        <!-- Text input-->\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\" for=\"lastNameFld\">Last Name</label>\n          <div class=\"col-sm-8\">\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\">\n                <a class=\"btn btn-dark active\">  <i class=\"fa fa-align-justify\"></i>\n                </a>\n              </div>\n              <input id=\"lastNameFld\" [(ngModel)]=\"user.lastName\" name=\"Secondary Occupation (if any)\" type=\"text\"\n                     placeholder=\"Last Name\" class=\"form-control input-md\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 control-label\" ></label>\n          <div class=\"col-sm-8\">\n            <a (click)=\"update(user)\" id=\"updatebtn\" type=\"button\" class=\"btn btn-success btn-block\">Update</a>\n            <a  (click)=\"logout()\" class=\"btn btn-danger btn-block\"\n                type=\"button\">Logout</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service.client */ "./src/app/services/admin.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/instrcutor.service.client */ "./src/app/services/instrcutor.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(adminService, userService, insService, router) {
        this.adminService = adminService;
        this.userService = userService;
        this.insService = insService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            if (user.status === 401 || (user.type !== 'ADMIN' && user.type !== 'INSTRUCTOR')) {
                _this.sessionOut = true;
            }
            else {
                _this.user = user;
                if (_this.user.type === 'ADMIN') {
                    _this.isAdmin = true;
                }
            }
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.sessionOut = false;
        this.userService.logout()
            .then(function (res) {
            _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.update = function (user) {
        var _this = this;
        if (this.isAdmin) {
            this.adminService.updateAdmin(user)
                .then(function () { return _this.updateS = true; });
        }
        else {
            this.insService.updateInstructor(user)
                .then(function () { return _this.updateS = true; });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service_client__WEBPACK_IMPORTED_MODULE_1__["AdminServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_4__["InstructorServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-4{\r\n  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.4), 0 16px 30px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.list-group{\r\n  position: fixed;\r\n  z-index: 20;\r\n  margin-left: 45px;\r\n}\r\n.list-group-item{\r\n  cursor: pointer;\r\n}\r\n/*.bg{*/\r\n/*position: fixed;*/\r\n/*top: 0;*/\r\n/*right: 0;*/\r\n/*bottom: 0;*/\r\n/*left: 0;*/\r\n/*background-size: cover;*/\r\n/*background-position: 50% 50%;*/\r\n/*background-image: url('http://cleancanvas.herokuapp.com/img/backgrounds/color-splash.jpg');*/\r\n/*background-repeat:repeat;*/\r\n/*}*/\r\n.col-md-4.col-md-offset-4{\r\n  background: white;\r\n  margin-top: 30px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-bottom: 15px;\r\n  padding-top: 10px;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-right: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-right: 5px solid #a94442; /* red */\r\n}\r\n.nav-tabs{\r\n  font-size: large;\r\n  margin-left: 65px;\r\n  font-weight: bold;\r\n}\r\n.nav-tabs a{\r\n  color: black;\r\n}\r\n.instructor.active{\r\n  background: orange;\r\n  border: orange;\r\n}\r\n.insback{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background: orange;\r\n  border: orange;\r\n}\r\n.applicant.active{\r\n  background: #cbdd2a;\r\n  border: #cbdd2a;\r\n}\r\n.aplback{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background: #cbdd2a;\r\n  border: #cbdd2a;\r\n}\r\n.btn-secondary{\r\n  font-weight: bold;\r\n}\r\n.addCourse{\r\n  margin-top: 5px;\r\n  margin-left: 97px;\r\n  text-align: center;\r\n}\r\n.course{\r\n  background: #ffeeba;\r\n  padding: 5px;\r\n  border: black;\r\n  margin-right: -5px;\r\n  margin-left: -6px;\r\n}\r\n.cancel{\r\n  margin-left: 91px;\r\n  margin-top: 13px;\r\n  color: #dc3545;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container-fluid\">\n  <div class=\"bg\">\n    <div class=\"row justify-content-center align-self-center\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <h4 class=\"text-center\">\n              <b>REGISER</b></h4>\n            <nav class=\"nav nav-tabs\" >\n              <a class=\" nav-link\" [ngClass]=\"{'instructor active':isIns}\" (click)=\"userIsInstructor()\">\n                Instructor</a>\n              <a class=\"nav-link\" [ngClass]=\"{'applicant active':isAppl, 'active':isAppl }\" (click)=\"userIsApplicant()\">\n                Applicant</a>\n            </nav>\n            <div [ngClass]=\"{'insback':isIns, 'aplback':isAppl }\" >\n\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"btn btn-dark active\"><i class=\"fa fa-school\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schoolName\" placeholder=\"School\" required\n                     (input)=\"schoolChange(schoolName)\" #school=\"ngModel\" (blur)=\"clearSchool()\"/>\n                </div>\n                <div *ngIf=\"showResults\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let school of results\" (click)=\"selectSchool(school)\">\n                        {{school.name}}\n                    </li>\n                    <button  (click)=\"addSchool()\" class=\"btn btn-secondary btn-block\">Add School</button>\n                  </ul>\n                </div>\n                <div *ngIf=\"school.invalid && (school.dirty || school.touched) && !addC\" class=\"alert alert-danger\">\n                  <div *ngIf=\"school.errors.required  && !addC \">\n                    School is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row course\" *ngIf=\"addC\">\n                <div class=\"col-md-6\">\n                  <input type=\"text\" [(ngModel)]=\"newSchool.name\" class=\"form-control\"  name=\"section\"\n                         placeholder=\"School Name\" required #cnumber=\"ngModel\">\n                </div>\n                <div class=\"col-md-6\">\n                  <input type=\"text\" [(ngModel)]=\"newSchool.emailDomain\" class=\"form-control\"  name=\"section\"\n                         placeholder=\"Email Domain\" required #cname=\"ngModel\">\n                </div>\n\n                <button class=\"btn btn btn-secondary addCourse\"\n                        [ngClass]=\"{'disabled':(cnumber.invalid || cname.invalid)}\" (click)=\"addNewSchool(newSchool)\">\n                  Add Course</button>\n                <span class=\"cancel\" (click)=\"cancelAdd()\"><i class=\"fa fa-times\" ></i></span>\n\n              </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"btn btn-dark active\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required\n                       #email=\"ngModel\"/>\n              </div>\n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"email.errors.required\">\n                  Email is required.\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"btn btn-dark active\"><i class=\"fa fa-lock\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required\n                       #password=\"ngModel\"/>\n              </div>\n              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"password.errors.required\">\n                  Password is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"btn btn-dark active\"><i class=\"fa fa-thumbtack\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\"\n                       placeholder=\"Confirm Password\"\n                       required\n                       #cpassword=\"ngModel\"/>\n              </div>\n              <div *ngIf=\"cpassword.invalid && (cpassword.dirty || cpassword.touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"cpassword.errors.required\">\n                  Confirm Password is required.\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--<div class=\"alert alert-danger\"  *ngIf=\"userFail\">-->\n          <!--<strong>Error!</strong> Please enter Username.-->\n          <!--</div>-->\n          <!--<div class=\"alert noPassword alert-danger\"  *ngIf=\"passFail\">-->\n          <!--<strong>Error!</strong> Please enter password.-->\n          <!--</div>-->\n          <div class=\"alert alert-danger\"  *ngIf=\"loginFailed\">\n            <strong>Error!</strong> Email Id exists\n          </div>\n            <div class=\"alert alert-danger\"  *ngIf=\"passmatch\">\n              <strong>Error!</strong> Both password do not match\n            </div>\n          <button  class=\"btn btn-sm btn-primary btn-block\" (click)=\"register(user)\"\n                   role=\"button\" [ngClass]=\"{'disabled': (school.invalid || password.invalid ||\n                   email.invalid || cpassword.invalid)}\">\n            <b>Register</b>\n          </button>\n          </div>\n          <div >\n            <a  style=\"float:left\" routerLink=\"/login\">Login</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_regsiter_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/regsiter.model.client */ "./src/app/models/regsiter.model.client.ts");
/* harmony import */ var _services_school_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/school.service.client */ "./src/app/services/school.service.client.ts");
/* harmony import */ var _models_school_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/school.model.client */ "./src/app/models/school.model.client.ts");
/* harmony import */ var _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/instrcutor.service.client */ "./src/app/services/instrcutor.service.client.ts");
/* harmony import */ var _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/applicant.service.client */ "./src/app/services/applicant.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service, schoolService, insService, studentService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.schoolService = schoolService;
        this.insService = insService;
        this.studentService = studentService;
        this.user = new _models_regsiter_model_client__WEBPACK_IMPORTED_MODULE_3__["RegisterC"]();
        this.loginFailed = false;
        this.isIns = true;
        this.isAppl = false;
        this.results = [];
        this.schoolName = '';
        this.newSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_5__["School"]();
        this.register = function (reg) {
            _this.passmatch = false;
            if (_this.user.password !== _this.user.confirmPassword) {
                _this.passmatch = true;
            }
            else {
                if (reg.email && reg.password && reg.confirmPassword) {
                    if (_this.isIns) {
                        _this.insService.createInstructor(reg)
                            .then(function (res) {
                            if (res.status === 200) {
                                _this.router.navigate(['instructor']);
                            }
                            if (res.status === 401) {
                                _this.loginFailed = true;
                            }
                        });
                    }
                    if (_this.isAppl) {
                        _this.studentService.createApplicant(reg)
                            .then(function (res) {
                            if (res.status === 200) {
                                _this.router.navigate(['applicant']);
                            }
                            else {
                                _this.loginFailed = true;
                            }
                        });
                    }
                }
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.userIsInstructor = function () {
        this.isIns = true;
        this.isAppl = false;
    };
    RegisterComponent.prototype.userIsApplicant = function () {
        this.isAppl = true;
        this.isIns = false;
    };
    RegisterComponent.prototype.schoolChange = function (name) {
        var _this = this;
        this.showResults = true;
        this.schoolService.searchSchool(name)
            .then(function (res) {
            if (res.status === 200) {
                res.json()
                    .then(function (schools) { return _this.results = schools; });
            }
        });
        if (name.length === 0) {
            this.showResults = false;
        }
    };
    RegisterComponent.prototype.selectSchool = function (school) {
        this.user.school = school;
        this.schoolName = school.name;
        this.showResults = false;
        this.selected = true;
    };
    RegisterComponent.prototype.clearSchool = function () {
        if (!this.selected) {
            this.schoolName = '';
        }
    };
    RegisterComponent.prototype.addSchool = function () {
        this.addC = true;
        this.showResults = false;
        this.schoolName = '';
        this.selected = true;
    };
    RegisterComponent.prototype.addNewSchool = function (school) {
        var _this = this;
        this.schoolService.createSchool(school)
            .then(function (res) {
            if (res.status === 200) {
                res.json().then(function (cour) {
                    _this.user.school = cour;
                    _this.schoolName = cour.name;
                    _this.addC = false;
                    _this.newSchool = new _models_school_model_client__WEBPACK_IMPORTED_MODULE_5__["School"]();
                });
            }
        });
    };
    RegisterComponent.prototype.cancelAdd = function () {
        this.addC = false;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_school_service_client__WEBPACK_IMPORTED_MODULE_4__["SchoolServiceClient"],
            _services_instrcutor_service_client__WEBPACK_IMPORTED_MODULE_6__["InstructorServiceClient"],
            _services_applicant_service_client__WEBPACK_IMPORTED_MODULE_7__["ApplicantServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/review-grid/review-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/review-grid/review-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\r\n  font-size: large;\r\n  font-weight: bolder;\r\n  margin-bottom: 18px;\r\n  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/\r\n\r\n}\r\n.box{\r\n  padding: 10px;\r\n  margin-top: -12px;\r\n  margin-right: -19px;\r\n  margin-left: -19px;\r\n  margin-bottom: -9px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.review{\r\n  padding: 10px;\r\n  margin-top: 26px;\r\n  margin-bottom: -16px;\r\n}\r\n.btn-warning{\r\n  margin: 10px;\r\n  margin-top: -2px;\r\n}\r\n.rate-container{\r\n  padding: 10px;\r\n}\r\n.gold{\r\n  color: gold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/review-grid/review-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-grid/review-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h2>Reviews for: {{section}} {{sem}}  {{year}}</h2>\n<br/>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let aa of hiredAppplications\">\n   <div class=\"box\">\n      {{aa.applicant.firstName}} {{aa.applicant.lastName}}\n      <span class=\"float-right\" *ngIf=\"aa._id !== aaSelected\" (click)=\"selectAA(aa)\">\n        <i class=\"fa fa-angle-double-down\" ></i></span>\n      <span class=\"float-right\" *ngIf=\"aa._id === aaSelected\"(click)=\"unSelectAA()\"><i class=\"fa fa-angle-double-up\">\n          </i></span>\n   </div>\n    <div class=\"review\" *ngIf=\"aa._id === aaSelected\">\n\n      <div class=\"rate-container\">\n        <i class=\"fa fa-star fa-2x\" (click)=\"rateStars(1)\" [ngClass]=\"{'gold': workingAA.instructorRating >= 1}\"></i>\n        <i class=\"fa fa-star fa-2x\" (click)=\"rateStars(2)\" [ngClass]=\"{'gold': workingAA.instructorRating >= 2}\"></i>\n        <i class=\"fa fa-star fa-2x\" (click)=\"rateStars(3)\" [ngClass]=\"{'gold': workingAA.instructorRating >= 3}\"></i>\n        <i class=\"fa fa-star fa-2x\" (click)=\"rateStars(4)\" [ngClass]=\"{'gold': workingAA.instructorRating >= 4}\"></i>\n        <i class=\"fa fa-star fa-2x\" (click)=\"rateStars(5)\" [ngClass]=\"{'gold': workingAA.instructorRating >= 5}\"></i>\n      </div>\n      <textarea input=\"textarea\" [(ngModel)] = \"workingAA.instructorRemarks\" placeholder=\"Comments\" name=\"remarks\"\n                rows=\"4\" cols=\"40\" *ngIf=\"!hide\"></textarea>\n      <textarea input=\"textarea\" disabled [(ngModel)] = \"workingAA.instructorRemarks\" placeholder=\"Comments\" name=\"remarks\"\n                rows=\"4\" cols=\"40\" *ngIf=\"hide\"></textarea>\n      <a class=\"btn btn-warning\" [ngClass]=\"{'disabled': hide}\" (click)=\"saveRatings(aa)\">Save</a>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/review-grid/review-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-grid/review-grid.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewGridComponent", function() { return ReviewGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_application_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/application.service.client */ "./src/app/services/application.service.client.ts");
/* harmony import */ var _models_application_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/application.model.client */ "./src/app/models/application.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewGridComponent = /** @class */ (function () {
    function ReviewGridComponent(aRoute, applicationService) {
        var _this = this;
        this.aRoute = aRoute;
        this.applicationService = applicationService;
        // starRating = 0;
        this.workingAA = new _models_application_model_client__WEBPACK_IMPORTED_MODULE_3__["Application"]();
        this.hiredAppplications = [];
        aRoute.params.subscribe(function (params) { return _this.loadAllApplications(params.positionId); });
    }
    ReviewGridComponent.prototype.loadAllApplications = function (posId) {
        this.positionId = posId;
        this.findAllApplications();
    };
    ReviewGridComponent.prototype.findAllApplications = function () {
        var _this = this;
        this.applicationService.findAllApplicationsForAPosition(this.positionId)
            .then(function (res) {
            if (res.status === 200) {
                res.json()
                    .then(function (applications) {
                    _this.hiredAppplications = applications.filter(function (aa) { return aa.isSelected; });
                    _this.section = _this.hiredAppplications[0].position.sectionName;
                    _this.sem = _this.hiredAppplications[0].position.semester;
                    _this.year = _this.hiredAppplications[0].position.year;
                });
            }
        });
    };
    ReviewGridComponent.prototype.selectAA = function (aa) {
        this.hide = false;
        if (aa.instructorRating) {
            this.hide = true;
        }
        this.aaSelected = aa._id;
        this.workingAA.instructorRating = aa.instructorRating;
        this.workingAA.instructorRemarks = aa.instructorRemarks;
    };
    ReviewGridComponent.prototype.unSelectAA = function () {
        this.aaSelected = null;
        this.workingAA.instructorRating = 0;
        this.workingAA.instructorRemarks = '';
        this.hide = false;
    };
    ReviewGridComponent.prototype.ngOnInit = function () {
    };
    ReviewGridComponent.prototype.rateStars = function (val) {
        if (!this.hide) {
            this.workingAA.instructorRating = val;
        }
    };
    ReviewGridComponent.prototype.saveRatings = function (aa) {
        var _this = this;
        var ty = { applicant: aa.applicant._id, _id: aa._id, instructorRemarks: this.workingAA.instructorRemarks,
            instructorRating: this.workingAA.instructorRating };
        this.applicationService.reviewApplication(ty)
            .then(function () { return _this.hide = true; });
    };
    ReviewGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-grid',
            template: __webpack_require__(/*! ./review-grid.component.html */ "./src/app/review-grid/review-grid.component.html"),
            styles: [__webpack_require__(/*! ./review-grid.component.css */ "./src/app/review-grid/review-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_application_service_client__WEBPACK_IMPORTED_MODULE_2__["ApplicationServiceClient"]])
    ], ReviewGridComponent);
    return ReviewGridComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/admin.service.client.ts ***!
  \**************************************************/
/*! exports provided: AdminServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceClient", function() { return AdminServiceClient; });
var AdminServiceClient = /** @class */ (function () {
    function AdminServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
    }
    AdminServiceClient.prototype.createAdmin = function (instructor) {
        return fetch(this.url + '/api/admin/', {
            method: 'post',
            body: JSON.stringify(instructor),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    // deleteInstructor(id) {
    //   return fetch(this.url + '/api/instructor/' + id, {
    //     method: 'delete',
    //     credentials: 'include',
    //   });
    // }
    AdminServiceClient.prototype.updateAdmin = function (instructor) {
        return fetch(this.url + '/api/admin/' + instructor._id, {
            body: JSON.stringify(instructor),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    AdminServiceClient.prototype.profile = function () {
        return fetch(this.url + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) {
            if (response.status === 401) {
                return response;
            }
            return response.json();
        });
    };
    return AdminServiceClient;
}());



/***/ }),

/***/ "./src/app/services/applicant.service.client.ts":
/*!******************************************************!*\
  !*** ./src/app/services/applicant.service.client.ts ***!
  \******************************************************/
/*! exports provided: ApplicantServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantServiceClient", function() { return ApplicantServiceClient; });
var ApplicantServiceClient = /** @class */ (function () {
    function ApplicantServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
    }
    ApplicantServiceClient.prototype.findUserById = function (userId) {
        return fetch(this.url + '/api/applicant/' + userId + '/profile')
            .then(function (response) { return response.json(); });
    };
    ApplicantServiceClient.prototype.findAllInstructors = function () {
        return fetch(this.url + '/api/applicant/', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    ApplicantServiceClient.prototype.createApplicant = function (applicant) {
        var newIns = { email: applicant.email, firstName: applicant.firstName, lastName: applicant.lastName,
            password: applicant.password, confirmPassword: applicant.password };
        return fetch(this.url + '/api/school/' + applicant.school._id + '/applicant/', {
            method: 'post',
            body: JSON.stringify(newIns),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ApplicantServiceClient.prototype.deleteApplicant = function (id) {
        return fetch(this.url + '/api/applicant/' + id, {
            method: 'delete',
            credentials: 'include',
        });
    };
    ApplicantServiceClient.prototype.updateApplicant = function (applicant) {
        return fetch(this.url + '/api/applicant/' + applicant._id, {
            body: JSON.stringify(applicant),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ApplicantServiceClient.prototype.profile = function () {
        return fetch(this.url + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) {
            if (response.status === 401) {
                return response;
            }
            return response.json();
        });
    };
    return ApplicantServiceClient;
}());



/***/ }),

/***/ "./src/app/services/application.service.client.ts":
/*!********************************************************!*\
  !*** ./src/app/services/application.service.client.ts ***!
  \********************************************************/
/*! exports provided: ApplicationServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationServiceClient", function() { return ApplicationServiceClient; });
var ApplicationServiceClient = /** @class */ (function () {
    function ApplicationServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
        // updatePositionFilled(id) {
        //   return fetch(this.url + '/api/ica/' + id + '/updatePositionFilled?status=true', {
        //     credentials: 'include',
        //     method: 'put',
        //     headers: {
        //       'content-type': 'application/json'
        //     }
        //   });
        // }
        // profile() {
        //   return fetch(this.url + '/api/profile',
        //     {
        //       credentials: 'include', // include, same-origin, *omit
        //     })
        //     .then((response) => {
        //       if (response.status === 401) { return response; }
        //       return response.json(); });
        // }
    }
    // findPositionById(id) {
    //   return fetch(this.url + '/api/ica/' + id + '/details' )
    //     .then(response => response.json());
    // }
    ApplicationServiceClient.prototype.findAllApplication = function () {
        return fetch(this.url + '/api/aa/', {
            credentials: 'include'
        });
    };
    ApplicationServiceClient.prototype.findAllApplicationsForAPosition = function (icaId) {
        return fetch(this.url + '/api/ica/' + icaId + '/aa/', {
            credentials: 'include'
        });
    };
    ApplicationServiceClient.prototype.findAllApplicationsForApplicant = function () {
        return fetch(this.url + '/api/applicant/aa/', {
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    ApplicationServiceClient.prototype.findAllApplicationsForApplicantusingId = function (id) {
        return fetch(this.url + '/api/applicant/' + id + '/aa/', {
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    ApplicationServiceClient.prototype.updateIsSelected = function (icaId, posId) {
        return fetch(this.url + '/api/position/' + posId + '/aa/' + icaId + '/updateselected?status=true', {
            credentials: 'include'
        });
    };
    ApplicationServiceClient.prototype.createApplication = function (position, user) {
        return fetch(this.url + '/api/applicant/ica/' + position._id + '/aa', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    // deleteIca(id) {
    //   return fetch(this.url + '/api/ica/' + id, {
    //     method: 'delete',
    //     credentials: 'include',
    //   });
    // }
    ApplicationServiceClient.prototype.reviewApplication = function (aa) {
        return fetch(this.url + '/api/aa/review', {
            body: JSON.stringify(aa),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return ApplicationServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
    }
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.url + '/api/course/' + courseId)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.url + '/api/course/', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.createCourse = function (course) {
        return fetch(this.url + '/api/school/' + course.school._id + '/course/', {
            method: 'post',
            body: JSON.stringify(course),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    CourseServiceClient.prototype.deleteCourse = function (id) {
        return fetch(this.url + '/api/course/' + id, {
            method: 'delete',
            credentials: 'include',
        });
    };
    CourseServiceClient.prototype.updateCourse = function (course) {
        return fetch(this.url + '/api/course/' + course._id, {
            body: JSON.stringify(course),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    CourseServiceClient.prototype.searchCourses = function (name, schoolId) {
        var course = { searchField: name, school: schoolId };
        return fetch(this.url + '/api/course/search', {
            body: JSON.stringify(course),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/instrcutor.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/instrcutor.service.client.ts ***!
  \*******************************************************/
/*! exports provided: InstructorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorServiceClient", function() { return InstructorServiceClient; });
var InstructorServiceClient = /** @class */ (function () {
    function InstructorServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
    }
    InstructorServiceClient.prototype.findUserById = function (userId) {
        return fetch(this.url + '/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    InstructorServiceClient.prototype.findAllInstructors = function () {
        return fetch(this.url + '/api/instructor/', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    InstructorServiceClient.prototype.createInstructor = function (instructor) {
        var newIns = { email: instructor.email, firstName: instructor.firstName, lastName: instructor.lastName,
            password: instructor.password, confirmPassword: instructor.password };
        return fetch(this.url + '/api/school/' + instructor.school._id + '/instructor/', {
            method: 'post',
            body: JSON.stringify(newIns),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    InstructorServiceClient.prototype.deleteInstructor = function (id) {
        return fetch(this.url + '/api/instructor/' + id, {
            method: 'delete',
            credentials: 'include',
        });
    };
    InstructorServiceClient.prototype.updateInstructor = function (instructor) {
        return fetch(this.url + '/api/instructor/' + instructor._id, {
            body: JSON.stringify(instructor),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    InstructorServiceClient.prototype.profile = function () {
        return fetch(this.url + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) {
            if (response.status === 401) {
                return response;
            }
            return response.json();
        });
    };
    return InstructorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/position.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/position.service.client.ts ***!
  \*****************************************************/
/*! exports provided: PositionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionServiceClient", function() { return PositionServiceClient; });
var PositionServiceClient = /** @class */ (function () {
    function PositionServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
        // profile() {
        //   return fetch(this.url + '/api/profile',
        //     {
        //       credentials: 'include', // include, same-origin, *omit
        //     })
        //     .then((response) => {
        //       if (response.status === 401) { return response; }
        //       return response.json(); });
        // }
    }
    PositionServiceClient.prototype.findPositionById = function (id) {
        return fetch(this.url + '/api/ica/' + id + '/details')
            .then(function (response) { return response.json(); });
    };
    PositionServiceClient.prototype.findAllIcas = function () {
        return fetch(this.url + '/api/ica/', {
            credentials: 'include'
        });
    };
    PositionServiceClient.prototype.findAllIcasForInstructor = function () {
        return fetch(this.url + '/api/instructor/ica/', {
            credentials: 'include'
        });
    };
    PositionServiceClient.prototype.findAllIcasForSchool = function (id) {
        return fetch(this.url + '/api/school/' + id + '/ica/', {
            credentials: 'include'
        });
    };
    PositionServiceClient.prototype.findAllIcasForApplicant = function () {
        return fetch(this.url + '/api/applicant/ica/', {
            credentials: 'include'
        });
    };
    PositionServiceClient.prototype.createPosition = function (position) {
        var newIns = { classStrength: position.classStrength, noOfTa: position.noOfTa, syllabus: position.syllabus,
            sectionName: position.sectionName, year: position.year, semester: position.semester };
        return fetch(this.url + '/api/instructor/course/' + position.course._id, {
            method: 'post',
            body: JSON.stringify(newIns),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    PositionServiceClient.prototype.deleteIca = function (id) {
        return fetch(this.url + '/api/ica/' + id, {
            method: 'delete',
            credentials: 'include',
        });
    };
    PositionServiceClient.prototype.updatePosition = function (ica) {
        return fetch(this.url + '/api/ica/' + ica._id, {
            body: JSON.stringify(ica),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    PositionServiceClient.prototype.updatePositionFilled = function (id) {
        return fetch(this.url + '/api/ica/' + id + '/updatePositionFilled?status=true', {
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return PositionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/school.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/school.service.client.ts ***!
  \***************************************************/
/*! exports provided: SchoolServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolServiceClient", function() { return SchoolServiceClient; });
var SchoolServiceClient = /** @class */ (function () {
    function SchoolServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
    }
    SchoolServiceClient.prototype.findSchoolById = function (schoolId) {
        return fetch(this.url + '/api/school/' + schoolId)
            .then(function (response) { return response.json(); });
    };
    SchoolServiceClient.prototype.findAllSchools = function () {
        return fetch(this.url + '/api/school/', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SchoolServiceClient.prototype.createSchool = function (school) {
        return fetch(this.url + '/api/school/', {
            method: 'post',
            body: JSON.stringify(school),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SchoolServiceClient.prototype.deleteSchool = function (id) {
        return fetch(this.url + '/api/school/' + id, {
            method: 'delete',
            credentials: 'include',
        });
    };
    SchoolServiceClient.prototype.updateSchool = function (newSchool) {
        return fetch(this.url + '/api/school/' + newSchool._id, {
            body: JSON.stringify(newSchool),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SchoolServiceClient.prototype.searchSchool = function (name) {
        var school = { name: name };
        return fetch(this.url + '/api/school/search', {
            body: JSON.stringify(school),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SchoolServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.url = 'https://taportal-backend.herokuapp.com';
        // createUser(username, password) {
        //   const user = {
        //     username: username,
        //     password: password
        //   };
        //   return fetch(this.url + '/api/user', {
        //     body: JSON.stringify(user),
        //     credentials: 'include', // include, same-origin, *omit
        //     method: 'post',
        //     headers: {
        //       'content-type': 'application/json'
        //     }
        //   });
        // }
        // updateUser(newUser) {
        //   return fetch(this.url + '/api/user', {
        //     body: JSON.stringify(newUser),
        //     credentials: 'include', // include, same-origin, *omit
        //     method: 'put',
        //     headers: {
        //       'content-type': 'application/json'
        //     }
        //   });
        // }
    }
    //  private user = new User();
    // public $toggle = this.user.asObservable();
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(this.url + '/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(this.url + '/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(this.url + '/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(this.url + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) {
            if (response.status === 401) {
                return response;
            }
            return response.json();
        });
    };
    return UserServiceClient;
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

module.exports = __webpack_require__(/*! C:\Univesrsity\WebDev_Jose\Workspace\taportal-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map