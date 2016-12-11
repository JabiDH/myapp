import { Component } from '@angular/core'
import { Order } from '../../shop/models/order'
import { ShopService } from '../../shop/services/shop.service'

@Component({
    moduleId: module.id,
    selector: 'shop-order',
    templateUrl: '../templates/shop-order-template.html'
})

export class ShopOrderComponent {
    orders: Order[];
    saletax = .07;
    constructor(private shopService: ShopService) {
        this.getUserOrders();
    }

    getUserOrders() {
        let userProfile = JSON.parse(localStorage.getItem('profile'));
        let orders: Order[];
        if (userProfile) {
            this.shopService.getUserOrders(userProfile.identities[0].user_id)
                .subscribe(orders => {
                    this.orders = orders;
                }, err => {
                    console.log(err);
                });
        }
    }
}