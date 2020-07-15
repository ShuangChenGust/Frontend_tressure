"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var pipes_component_1 = require("./pipes.component");
var employee_list_component_1 = require("./employee-list.component");
var http_1 = require("@angular/http");
var event_details_component_1 = require("./event-details.component");
var app_routing_module_1 = require("./app-routing.module");
var app_routing_module_2 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // imports:      [ BrowserModule, HttpModule, 
            //   RouterModule.forRoot([
            //     {path:'EmployeeList', component:EmployeeListComponent},
            //     {path:'EventDetails', component:EventDetailsComponent},
            //   ]) 
            // ],
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent, pipes_component_1.PipesComponent, employee_list_component_1.EmployeeListComponent, event_details_component_1.EventDetailsComponent, app_routing_module_2.routingComponents],
            // declarations: [ AppComponent, PipesComponent, EmployeeListComponent ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map