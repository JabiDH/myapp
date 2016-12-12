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
var router_1 = require("@angular/router");
var order_1 = require("../../shop/models/order");
var shop_service_1 = require("../../shop/services/shop.service");
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(router, shopService) {
        this.router = router;
        this.shopService = shopService;
        this.tableCount = 0;
        this.saletax = 0.07;
        this.user_id = '';
        var cart = JSON.parse(localStorage.getItem('shoppingCart'));
        this.user_id = JSON.parse(localStorage.getItem('profile')).identities[0].user_id;
        this.processCart(cart);
    }
    ShoppingCartComponent.prototype.processCart = function (cart) {
        var _this = this;
        var order;
        if (cart) {
            order = new order_1.Order();
            var subtotal_1 = 0;
            cart.forEach(function (item) {
                item.Total = _this.preciseRound(item.Quantity * item.Price, 2);
                subtotal_1 += item.Total;
            });
            order.Creater = this.user_id;
            order.Items = cart;
            order.SubTotal = this.preciseRound(subtotal_1, 2);
            order.SubTotalAfterTax = this.preciseRound(order.SubTotal * this.saletax + order.SubTotal, 2);
        }
        this.order = order;
        localStorage.setItem('shoppingCart', JSON.stringify(order.Items));
        console.log("processOrder()");
        console.log(order);
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        //console.log(item.Id + " to be remove");
        if (item) {
            this.order.Items = this.order.Items.filter(function (i) { return i !== item; });
            this.processCart(this.order.Items);
        }
    };
    ShoppingCartComponent.prototype.cancelOrder = function () {
        if (this.order) {
            if (confirm("Are you sure you want to cancel the order?")) {
                this.order = new order_1.Order();
                localStorage.removeItem('shoppingCart');
                var link = ['/shop'];
                this.router.navigate(link);
            }
        }
    };
    ShoppingCartComponent.prototype.placeOrder = function () {
        var _this = this;
        if (this.order) {
            if (confirm("Is your order complete?")) {
                this.shopService.postOrder(this.order)
                    .subscribe(function (result) {
                    if (result) {
                        alert("Your order has been placed.");
                        _this.order = new order_1.Order();
                        localStorage.removeItem('shoppingCart');
                        var link = ['/orders'];
                        _this.router.navigate(link);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    ShoppingCartComponent.prototype.preciseRound = function (num, decimals) {
        var t = Math.pow(10, decimals);
        return +(Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-cart',
        templateUrl: '../templates/shop-cart-template.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, shop_service_1.ShopService])
], ShoppingCartComponent);
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shop-cart.component.js.map