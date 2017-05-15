import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Order } from '../../shop/models/order'
import { Item } from '../../shop/models/item'
import { ShopService } from '../../shop/services/shop.service'
import { StripeFormComponent} from '../../shop/components/stripe-form.component'

@Component({
    moduleId: module.id,
    selector: 'shop-cart',
    templateUrl: '../templates/shop-cart-template.html',
    styleUrls: ['../styles/shop-styles.css']
})

export class ShoppingCartComponent {
    order: Order;
    tableCount = 0;
    saletax = 0.07;
    user_id = '';
    constructor(private router: Router, private shopService: ShopService) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart'));
        this.user_id = JSON.parse(localStorage.getItem('profile')).identities[0].user_id;
        this.processCart(cart);
    }

    processCart(cart: Item[]): void {
        let order: Order;
        if (cart) {
            order = new Order();            
            let subtotal = 0;
            cart.forEach(item => {

                item.Total = this.preciseRound(item.Quantity * item.Price, 2);
                subtotal += item.Total;
            });
            order.Creater = this.user_id;           
            order.Items = cart;
            order.SubTotal = this.preciseRound(subtotal, 2);
            order.SubTotalAfterTax = this.preciseRound(order.SubTotal * this.saletax + order.SubTotal, 2);            
        }        
        this.order = order;
        localStorage.setItem('shoppingCart', JSON.stringify(order.Items));
        console.log("processOrder()");
        console.log(order);
    }

    removeItem(item: Item) {
        //console.log(item.Id + " to be remove");
        if (item) {
            this.order.Items = this.order.Items.filter(i => i !== item);
            this.processCart(this.order.Items);
        }
    }

    cancelOrder() {
        if (this.order) {
            if (confirm("Are you sure you want to cancel the order?")) {
                this.order = new Order();
                localStorage.removeItem('shoppingCart');
                let link = ['/shop'];
                this.router.navigate(link);
            }
        }
    }

    placeOrder(){
        if(this.order){
            if(confirm("Is your order complete?")){
                this.shopService.postOrder(this.order)
                    .subscribe(result => {
                        if(result){
                            alert("Your order has been placed.");
                            this.order = new Order();
                            localStorage.removeItem('shoppingCart');
                            let link = ['/orders'];
                            this.router.navigate(link);
                        }
                    }, err => {
                        console.log(err);
                    })
            }
        }
    }

    // Pay by Stripe
    payOrder(){
        if(this.order){
            var stripeForm = new StripeFormComponent();
            stripeForm.openCheckout();
        }
    }

    preciseRound(num, decimals) {
        var t = Math.pow(10, decimals);
        return +(Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
    }
}