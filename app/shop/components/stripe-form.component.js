"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StripeFormComponent = (function () {
    function StripeFormComponent() {
    }
    StripeFormComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_TA7xEMAdnvpQiB5M5QjlBeC5',
            locale: 'auto',
            token: function (token) {
            }
        });
        handler.open({
            name: 'My Shop',
            description: 'My shop description',
            amount: 3000,
        });
    };
    return StripeFormComponent;
}());
StripeFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-stripe-form',
        templateUrl: 'stripe-form.component.html',
        styleUrls: ['stripe-form.component.css']
    })
], StripeFormComponent);
exports.StripeFormComponent = StripeFormComponent;
//# sourceMappingURL=stripe-form.component.js.map