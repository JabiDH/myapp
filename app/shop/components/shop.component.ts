import { Component } from '@angular/core'
import { Item } from '../../shop/models/item'
import { Auth } from '../../auth.service'
@Component({
    moduleId: module.id,
    selector: 'shop',
    templateUrl: '../templates/shop-template.html'
})


export class ShopComponent {
    public shoppingCart: Item[];
    public totalOfItems = 0; 
    
    constructor(private auth: Auth) {
        
        let cart = localStorage.getItem('shoppingCart');
        if (cart) {
            this.shoppingCart = JSON.parse(cart);
        } else {
            this.shoppingCart = [];
        }
        this.totalOfItems = this.getTotalOfItems();
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
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
            console.log(this.shoppingCart);
            console.log("total items in shopping cart " + this.totalOfItems);
        }
    } 
}