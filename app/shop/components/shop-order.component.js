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
var core_1 = require("@angular/core");
var shop_service_1 = require("../../shop/services/shop.service");
var ShopOrderComponent = (function () {
    function ShopOrderComponent(shopService) {
        this.shopService = shopService;
        this.saletax = .07;
        this.getUserOrders();
    }
    ShopOrderComponent.prototype.getUserOrders = function () {
        var _this = this;
        var userProfile = JSON.parse(localStorage.getItem('profile'));
        var orders;
        if (userProfile) {
            this.shopService.getUserOrders(userProfile.identities[0].user_id)
                .subscribe(function (orders) {
                _this.orders = orders;
            }, function (err) {
                console.log(err);
            });
        }
    };
    return ShopOrderComponent;
}());
ShopOrderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-order',
        templateUrl: '../templates/shop-order-template.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService])
], ShopOrderComponent);
exports.ShopOrderComponent = ShopOrderComponent;
//# sourceMappingURL=shop-order.component.js.map