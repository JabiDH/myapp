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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var shop_component_1 = require('../../shop/components/shop.component');
var shop_cart_component_1 = require('../../shop/components/shop-cart.component');
var shop_content_component_1 = require('../../shop/components/shop-content.component');
var shop_service_1 = require('../../shop/services/shop.service');
var shop_order_component_1 = require('../../shop/components/shop-order.component');
var ShopModule = (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        core_1.NgModule({
            providers: [
                shop_service_1.ShopService
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                shop_component_1.ShopComponent,
                shop_content_component_1.ShopContentComponent,
                shop_cart_component_1.ShoppingCartComponent,
                shop_order_component_1.ShopOrderComponent
            ],
            exports: [
                shop_component_1.ShopComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ShopModule);
    return ShopModule;
}());
exports.ShopModule = ShopModule;
//# sourceMappingURL=shop.module.js.map