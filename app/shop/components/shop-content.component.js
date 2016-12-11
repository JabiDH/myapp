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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var shop_service_1 = require('../../shop/services/shop.service');
var ShopContentComponent = (function () {
    function ShopContentComponent(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.totalOfItems = 0;
        var cart = localStorage.getItem('shoppingCart');
        if (cart) {
            this.shoppingCart = JSON.parse(cart);
        }
        else {
            this.shoppingCart = [];
        }
        this.setItems();
        this.totalOfItems = this.getTotalOfItems();
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    }
    ShopContentComponent.prototype.setItems = function () {
        var _this = this;
        this.shopService.getItems()
            .subscribe(function (items) {
            console.log(items);
            items.forEach(function (item) {
                item.Image = _this.shopService.apiUrl + "/api/fileupload/" + item.Id;
            });
            _this.items = items;
        }, function (err) {
            console.log(err);
        });
    };
    ShopContentComponent.prototype.setItemImages = function () {
        var _this = this;
        this.items.forEach(function (item) {
            _this.shopService.getItemImage(item.Id)
                .subscribe(function (img) {
                item.Image = img;
            }, function (err) {
                console.log(err);
            });
        });
    };
    ShopContentComponent.prototype.getTotalOfItems = function () {
        if (this.shoppingCart) {
            var total_1 = 0;
            this.shoppingCart.forEach(function (item) {
                total_1 += item.Quantity;
            });
            return total_1;
        }
        return 0;
    };
    ShopContentComponent.prototype.addItemToShoppingCart = function (item) {
        var cart = JSON.parse(localStorage.getItem('shoppingCart'));
        //console.log(item);
        if (item) {
            var _item_1;
            cart.forEach(function (i) {
                if (i.Id == item.Id) {
                    _item_1 = i;
                }
            });
            if (_item_1) {
                //console.log("item exist");
                _item_1.Quantity += 1;
            }
            else {
                //console.log("item first time added");
                _item_1 = item;
                _item_1.Quantity = 1;
                cart.push(_item_1);
            }
            this.shoppingCart = cart;
            this.totalOfItems = this.getTotalOfItems();
            localStorage.removeItem('shoppingCart');
            localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
        }
    };
    ShopContentComponent.prototype.goToShoppingCart = function () {
        var link = ['/shop/shoppingcart'];
        this.router.navigate(link);
    };
    ShopContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shop-content',
            templateUrl: '../templates/shop-content-template.html'
        }), 
        __metadata('design:paramtypes', [shop_service_1.ShopService, router_1.Router])
    ], ShopContentComponent);
    return ShopContentComponent;
}());
exports.ShopContentComponent = ShopContentComponent;
//# sourceMappingURL=shop-content.component.js.map