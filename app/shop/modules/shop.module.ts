import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { ShopComponent } from '../../shop/components/shop.component'
import { ShoppingCartComponent } from '../../shop/components/shop-cart.component'
import { ShopContentComponent } from '../../shop/components/shop-content.component'
import { ShopMenuComponent } from '../../shop/components/shop-menu.component'
import { ShopService } from '../../shop/services/shop.service'
import { ShopOrderComponent } from '../../shop/components/shop-order.component'

@NgModule({
    providers: [ 
        ShopService
    ],
    imports: [
         CommonModule,
         FormsModule 
    ],
    declarations: [
        ShopComponent,
        ShopContentComponent,
        ShoppingCartComponent,
        ShopOrderComponent,
        ShopMenuComponent
    ],
    exports: [
        ShopComponent
    ],

})

export class ShopModule{

}