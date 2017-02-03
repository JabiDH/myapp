import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { ShopService } from '../../shop/services/shop.service'
import { Item } from '../../shop/models/item'
import { ShopComponent } from '../../shop/components/shop.component'
import { Auth} from '../../auth.service'
import { Review } from '../../shop/models/review'

@Component({
    moduleId: module.id,
    selector: 'shop-content',
    templateUrl: '../templates/shop-content-template.html'
})

export class ShopContentComponent extends ShopComponent {
    items: Item[];    
    constructor(private shopService: ShopService, private router: Router) {
        super(new Auth(router));
        this.setItems();
    }

    setItems() {
        this.shopService.getItems()
            .subscribe(items => {
                console.log(items);
                items.forEach(item => {
                    item.Image = `${this.shopService.apiUrl}/api/fileupload/${item.Id}`;
                    this.shopService.getItemReviews(item.Id)
                        .subscribe(
                            reviews => {
                                item.Reviews = reviews;
                                item.Rate = this.getItemRate(reviews);
                            },
                            err => {
                                console.log(err);
                            }
                        )
                });
                this.items = items;
            },
            err => {
                console.log(err);
            });

    }

    setItemImages() {
        this.items.forEach(item => {
            this.shopService.getItemImage(item.Id)
                .subscribe(img => {
                    item.Image = img
                },
                err => {
                    console.log(err);
                });
        })
    }
    
    goToShoppingCart() {
        let link = ['/shop/shoppingcart']
        this.router.navigate(link);
    }

    goToItemDetail(id: number){
        let link = [`/items/detail/${id}`];
        this.router.navigate(link);
    }

    getItemRate(reviews: Review[]): number{
        if(reviews){
            let sum = 0;
            reviews.forEach(review => {
                sum += review.Rate;
            });
            if(sum == 0) return 0;
            return  sum/reviews.length;
        }
    }

    setItemReviewStart(rate: number, index: number): string{
        let checked = "checked";
        let unchecked = "";
        //console.log(rate + " " + index);
        switch(index){
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
    }


}

