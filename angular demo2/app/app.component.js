"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>\n            <!-- <employee-list></employee-list>\n            <event-details></event-details> -->\n            <h2>Routing application</h2>\n            <nav>\n              <a routerLink=\"/EmployeeList\" routerLinkActive=\"active\">Employee Lists</a>\n              <a routerLink=\"/EventDetails\" routerLinkActive=\"active\">Event Details</a>\n            </nav>\n            <router-outlet></router-outlet>\n            ",
            providers: [employee_service_1.EmployeeService],
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map