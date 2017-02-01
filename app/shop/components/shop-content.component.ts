import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { ShopService } from '../../shop/services/shop.service'
import { Item } from '../../shop/models/item'
import { ShopComponent } from '../../shop/components/shop.component'
import { Auth} from '../../auth.service'
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

}

