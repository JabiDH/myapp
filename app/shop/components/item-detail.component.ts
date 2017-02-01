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
    reviewForm: FormGroup;

    constructor(private shopService: ShopService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
        this.review = new Review();
        this.rates = this.getRates();
    }

    ngOnInit() {
        this.route.params.forEach(
            (params: Params) => {
                let id = +params['id']; // plus sign to convert string to number
                this.getItemDetail(id);
            });
        this.buildReviewForm();
        //let rateControl = this.reviewForm.get('reviewRate');
        //rateControl.setValue(5);
        //let commentControl = this.reviewForm.get('reviewComment');
        //commentControl.setValue('Type your comment', { emitEvent: true });
    }
    getItemDetail(id: number) {
        try {
            this.shopService.getItemDetail(id)
                .subscribe(item => {
                    this.item = item;
                    this.shopService.getItemReviews(item.Id)
                        .subscribe(
                            reviews => {
                                this.item.Reviews = reviews;
                            },
                            error => {
                                console.log(error);
                            }
                        )
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
            arr[i] = i;
        }
        return arr;
    }

    buildReviewForm() {
        this.reviewForm = this.formBuilder.group({
            reviewRate: this.formBuilder.control(null),
            reviewComment: this.formBuilder.control(null)
        });
    }

    onResetForm() {
        this.reviewForm.reset();
    }

    onSubmitForm() {
        //console.log(this.reviewForm.value);

        let rateControl = this.reviewForm.get('reviewRate');
        let commentControl = this.reviewForm.get('reviewComment');
        let review = new Review();

        review.Comment = commentControl.value;
        review.Rate = rateControl.value;
        review.DateCreated = new Date(Date.now());
        review.Creater = JSON.parse(localStorage.getItem('profile')).name;
        review.ItemId = this.item.Id;
        this.item.Reviews.push(review);
        this.shopService.postReview(review)
            .subscribe(r => console.log(r), err => console.log(err));
        console.log(review);
    }
}
