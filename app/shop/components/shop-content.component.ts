import { Component } from '@angular/core'
import { ShopService } from '../../shop/services/shop.service'
import { Item } from '../../shop/models/item'

@Component({
    moduleId: module.id,
    selector: 'shop-content',
    templateUrl: '../templates/shop-content-template.html'
})

export class ShopContentComponent {
    items: Item[];
    constructor(private shopService: ShopService) {
        this.setItems();
    }

    setItems(){
        this.shopService.getItems()
            .subscribe(items => {
                console.log(items);
                this.items = items;
            },
            err => {
                console.log(err);
            });

    }
}