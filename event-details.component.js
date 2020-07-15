"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent() {
        this.event = { name: 'ngConf 2025', date: '3/1/2025', time: '8am',
            location: { address: '123 Main St', City: 'Salt Lake City, UT', country: 'USA' } };
    }
    EventDetailsComponent = __decorate([
        core_1.Component({
            selector: 'event-details',
            // templateUrl: `app/event-details.component.html`
            template: "<div>Event: {{ event.name }}</div>\n  <div>Date: {{event.date}}</div>\n  <div>Time: {{event.time}}</div>\n  <div>Address: {{event.location.address}}, {{event.location.City}},{{event.location.country}}</div>",
        })
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map