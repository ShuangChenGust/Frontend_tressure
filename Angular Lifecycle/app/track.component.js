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
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            {
                code: '01', name: 'tom', gender: 'Male', salary: 5000, DOB: '1125'
            },
            {
                code: '02', name: 'Dom', gender: 'Female', salary: 6000, DOB: '1225'
            },
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            {
                code: '01', name: 'tom', gender: 'Male', salary: 5000, DOB: '1125'
            },
            {
                code: '02', name: 'Dom', gender: 'Female', salary: 6000, DOB: '1225'
            },
            {
                code: '03', name: 'som', gender: 'Female', salary: 26000, DOB: '0125'
            },
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: "app/employeelist.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=track.component.js.map