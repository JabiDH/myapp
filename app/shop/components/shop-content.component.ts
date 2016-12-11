import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { ShopService } from '../../shop/services/shop.service'
import { Item } from '../../shop/models/item'

@Component({
    moduleId: module.id,
    selector: 'shop-content',
    templateUrl: '../templates/shop-content-template.html'
})

export class ShopContentComponent {
    shoppingCart: Item[];
    items: Item[];
    totalOfItems = 0;
    constructor(private shopService: ShopService, private router: Router) {
        let cart = localStorage.getItem('shoppingCart');
        if(cart){
            this.shoppingCart = JSON.parse(cart);
        }else{
            this.shoppingCart = [];
        }
        
        this.setItems();
        this.totalOfItems = this.getTotalOfItems();
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
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

    getTotalOfItems(): number {
        if (this.shoppingCart) {
            let total = 0;
            this.shoppingCart.forEach(item => {
                total += item.Quantity;
            });
            return total;
        }
        return 0;
    }

    addItemToShoppingCart(item: Item) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart'));

        //console.log(item);
        if (item) {
            let _item: Item;
            cart.forEach(i => {
                if (i.Id == item.Id) {
                    _item = i;
                }
            });

            if (_item) {
                //console.log("item exist");
                _item.Quantity += 1;
            } else {
                //console.log("item first time added");
                _item = item;
                _item.Quantity = 1;
                cart.push(_item);
            }
            this.shoppingCart = cart;
            this.totalOfItems = this.getTotalOfItems();
            localStorage.removeItem('shoppingCart');
            localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
            //console.log(this.shoppingCart);
        }

    }

    goToShoppingCart() {
        let link = ['/shop/shoppingcart'];
        this.router.navigate(link);
    }
}