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
var TrainingComponent = (function () {
    function TrainingComponent() {
        this.title = "Header h5 from training component";
        this.imgLink = "http://www.lorempixel.com/300/150/";
    }
    TrainingComponent = __decorate([
        core_1.Component({
            selector: 'my-training',
            template: "<h2>Child Component</h2>\n    <h4>{{  title }}<h4>\n    <img [src]=\"imgLink\">\n    <input type=\"text\" value=\"Angular\">",
            styles: ["h4{\n        color:red;\n    }"]
        }), 
        __metadata('design:paramtypes', [])
    ], TrainingComponent);
    return TrainingComponent;
}());
exports.TrainingComponent = TrainingComponent;
//# sourceMappingURL=training.components.js.map