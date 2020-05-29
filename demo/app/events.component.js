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
var core_1 = require('@angular/core');
var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.onClick = function (value) {
        console.log('button Clicked');
        console.log(value);
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'my-events',
            template: "<h2>events demo</h2>\n             <input type=\"text\" #demoInput >  \n             <button (click)=\"onClick(demoInput.value)\">Click Me</button>\n             <br>\n             <button (mouseover)=\"onClick($event)\">Mouse overme</button>\n             <br>\n             <input type=\"text\" [(ngModel)]=\"fname\" />\n             <input type=\"text\" [(ngModel)]=\"lname\" />  \n             <br>\n             FullName: {{fname}} {{lname}}\n             ",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
// export class EventsComponent{
//     onClick(value){
//         console.log('button Clicked');
//         console.log(value);
//     }
//     public fname;
//     public lname;
// } 
//# sourceMappingURL=events.component.js.map