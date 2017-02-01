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
var forms_1 = require("@angular/forms");
var review_1 = require("../../shop/models/review");
var shop_service_1 = require("../../shop/services/shop.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(shopService, route, formBuilder) {
        this.shopService = shopService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.reviewForm = this.formBuilder.group({});
        this.review = new review_1.Review();
        this.rates = this.getRates();
        this.BuildReviewForm();
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // plus sign to convert string to number
            _this.getItemDetail(id);
        });
    };
    ItemDetailComponent.prototype.getItemDetail = function (id) {
        var _this = this;
        try {
            this.shopService.getItemDetail(id)
                .subscribe(function (item) {
                _this.item = item;
                console.log(_this.item);
            }, function (error) {
                console.log(error);
            });
        }
        catch (error) {
            console.log("getItemDetail() -> " + error);
        }
        finally {
        }
    };
    ItemDetailComponent.prototype.getRates = function () {
        var arr = [];
        for (var i = 1; i <= 5; i++) {
            arr[i - 1] = i;
        }
        return arr;
    };
    ItemDetailComponent.prototype.BuildReviewForm = function () {
        this.reviewForm = this.formBuilder.group({
            reviewRate: this.formBuilder.control(null),
            reviewComment: this.formBuilder.control(null)
        });
    };
    return ItemDetailComponent;
}());
ItemDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'item-detail',
        templateUrl: '../templates/item-detail.template.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map