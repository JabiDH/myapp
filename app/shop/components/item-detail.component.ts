import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Item } from '../../shop/models/item'
import { Review } from '../../shop/models/review'
import { ShopService } from '../../shop/services/shop.service'
@Component({
    moduleId: module.id,
    selector: 'item-detail',
    templateUrl: '../templates/item-detail.template.html'
})

export class ItemDetailComponent {

    item: Item;
    review: Review;
    rates: number[];
    public reviewForm = this.formBuilder.group({});

    constructor(
        private shopService: ShopService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) {
        this.review = new Review();
        this.rates = this.getRates();
        this.BuildReviewForm();
    }

    ngOnInit() {
        this.route.params.forEach(
            (params: Params) => {
                let id = +params['id']; // plus sign to convert string to number
                this.getItemDetail(id);
            });
    }
    getItemDetail(id: number) {
        try {
            this.shopService.getItemDetail(id)
                .subscribe(item => {
                    this.item = item;
                    console.log(this.item);
                }
                ,
                error => {
                    console.log(error);
                });
        } catch (error) {
            console.log(`getItemDetail() -> ${error}`);
        } finally {

        }
    }

    getRates(): number[] {
        let arr = [];
        for (let i = 1; i <= 5; i++) {
            arr[i - 1] = i;
        }
        return arr;
    }

    BuildReviewForm() {
        this.reviewForm = this.formBuilder.group({
            reviewRate: this.formBuilder.control(null),
            reviewComment: this.formBuilder.control(null)
        });
    }
}
