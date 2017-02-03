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
        this.review = new review_1.Review();
        this.rates = this.getRates();
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // plus sign to convert string to number
            _this.getItemDetail(id);
        });
        this.buildReviewForm();
        //let rateControl = this.reviewForm.get('reviewRate');
        //rateControl.setValue(5);
        //let commentControl = this.reviewForm.get('reviewComment');
        //commentControl.setValue('Type your comment', { emitEvent: true });
    };
    ItemDetailComponent.prototype.getItemDetail = function (id) {
        var _this = this;
        try {
            this.shopService.getItemDetail(id)
                .subscribe(function (item) {
                _this.item = item;
                _this.shopService.getItemReviews(item.Id)
                    .subscribe(function (reviews) {
                    _this.item.Reviews = reviews;
                    _this.item.Rate = _this.getItemRate(reviews);
                }, function (error) {
                    console.log(error);
                });
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
    ItemDetailComponent.prototype.getItemRate = function (reviews) {
        if (reviews) {
            var sum_1 = 0;
            reviews.forEach(function (review) {
                sum_1 += review.Rate;
            });
            return sum_1 / reviews.length;
        }
    };
    ItemDetailComponent.prototype.getRates = function () {
        var arr = [];
        for (var i = 1; i <= 5; i++) {
            arr[i] = i;
        }
        return arr;
    };
    ItemDetailComponent.prototype.buildReviewForm = function () {
        this.reviewForm = this.formBuilder.group({
            reviewRate: this.formBuilder.control(null),
            reviewComment: this.formBuilder.control(null)
        });
    };
    ItemDetailComponent.prototype.onResetForm = function () {
        this.reviewForm.reset();
    };
    ItemDetailComponent.prototype.onSubmitForm = function () {
        //console.log(this.reviewForm.value);
        var rateControl = this.reviewForm.get('reviewRate');
        var commentControl = this.reviewForm.get('reviewComment');
        var review = new review_1.Review();
        review.Comment = commentControl.value;
        review.Rate = rateControl.value;
        review.DateCreated = new Date(Date.now());
        review.Creater = JSON.parse(localStorage.getItem('profile')).name;
        review.ItemId = this.item.Id;
        this.item.Reviews.push(review);
        this.shopService.postReview(review)
            .subscribe(function (r) { return console.log(r); }, function (err) { return console.log(err); });
        console.log(review);
    };
    return ItemDetailComponent;
}());
ItemDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'item-detail',
        templateUrl: '../templates/item-detail.template.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService, router_1.ActivatedRoute, forms_1.FormBuilder])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map