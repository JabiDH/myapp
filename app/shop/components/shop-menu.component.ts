import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { ShopService } from '../../shop/services/shop.service'
import { Item } from '../../shop/models/item'
import { ShopComponent } from '../../shop/components/shop.component'
import { Auth } from '../../auth.service'
@Component({
    moduleId: module.id,
    selector: 'shop-menu',
    templateUrl: '../templates/shop-menu-template.html'
})

export class ShopMenuComponent extends ShopComponent{

    constructor(private shopService: ShopService, private router: Router) {
        super(new Auth(router));        
    }

    goToShoppingCart() {
        let link = ['/shop/shoppingcart'];
        this.router.navigate(link);
    }

    goToShop(){
        let link = ['/shop'];
        this.router.navigate(link);
    }
}