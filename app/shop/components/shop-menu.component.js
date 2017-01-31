"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var shop_service_1 = require("../../shop/services/shop.service");
var shop_component_1 = require("../../shop/components/shop.component");
var auth_service_1 = require("../../auth.service");
var ShopMenuComponent = (function (_super) {
    __extends(ShopMenuComponent, _super);
    function ShopMenuComponent(shopService, router) {
        var _this = _super.call(this, new auth_service_1.Auth(router)) || this;
        _this.shopService = shopService;
        _this.router = router;
        return _this;
    }
    ShopMenuComponent.prototype.goToShoppingCart = function () {
        var link = ['/shop/shoppingcart'];
        this.router.navigate(link);
    };
    ShopMenuComponent.prototype.goToShop = function () {
        var link = ['/shop'];
        this.router.navigate(link);
    };
    return ShopMenuComponent;
}(shop_component_1.ShopComponent));
ShopMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-menu',
        templateUrl: '../templates/shop-menu-template.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService, router_1.Router])
], ShopMenuComponent);
exports.ShopMenuComponent = ShopMenuComponent;
//# sourceMappingURL=shop-menu.component.js.map