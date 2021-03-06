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
var ShopContentComponent = (function (_super) {
    __extends(ShopContentComponent, _super);
    function ShopContentComponent(shopService, router) {
        var _this = _super.call(this, new auth_service_1.Auth(router)) || this;
        _this.shopService = shopService;
        _this.router = router;
        _this.setItems();
        return _this;
    }
    ShopContentComponent.prototype.setItems = function () {
        var _this = this;
        this.shopService.getItems()
            .subscribe(function (items) {
            console.log(items);
            items.forEach(function (item) {
                item.Image = _this.shopService.apiUrl + "/api/fileupload/" + item.Id;
                _this.shopService.getItemReviews(item.Id)
                    .subscribe(function (reviews) {
                    item.Reviews = reviews;
                    item.Rate = _this.getItemRate(reviews);
                }, function (err) {
                    console.log(err);
                });
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
    ShopContentComponent.prototype.goToShoppingCart = function () {
        var link = ['/shop/shoppingcart'];
        this.router.navigate(link);
    };
    ShopContentComponent.prototype.goToItemDetail = function (id) {
        var link = ["/items/detail/" + id];
        this.router.navigate(link);
    };
    ShopContentComponent.prototype.getItemRate = function (reviews) {
        if (reviews) {
            var sum_1 = 0;
            reviews.forEach(function (review) {
                sum_1 += review.Rate;
            });
            if (sum_1 == 0)
                return 0;
            return sum_1 / reviews.length;
        }
    };
    ShopContentComponent.prototype.setItemReviewStart = function (rate, index) {
        var checked = "checked";
        var unchecked = "";
        //console.log(rate + " " + index);
        switch (index) {
            case 1: {
                return (rate > 0 && rate <= 1) ? checked : unchecked;
            }
            case 2: {
                return (rate > 1 && rate <= 2) ? checked : unchecked;
            }
            case 3: {
                return (rate > 2 && rate <= 3) ? checked : unchecked;
            }
            case 4: {
                return (rate > 3 && rate <= 4) ? checked : unchecked;
            }
            case 5: {
                return (rate > 4 && rate <= 5) ? checked : unchecked;
            }
            default: return unchecked;
        }
    };
    return ShopContentComponent;
}(shop_component_1.ShopComponent));
ShopContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-content',
        templateUrl: '../templates/shop-content-template.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService, router_1.Router])
], ShopContentComponent);
exports.ShopContentComponent = ShopContentComponent;
//# sourceMappingURL=shop-content.component.js.map