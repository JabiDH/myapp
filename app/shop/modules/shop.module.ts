import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { ShopComponent } from '../../shop/components/shop.component'
import { ShopMenuComponent } from '../../shop/components/shop-menu.component'
import { ShopContentComponent } from '../../shop/components/shop-content.component'
import { ShopService } from '../../shop/services/shop.service'

@NgModule({
    providers: [ 
        ShopService
    ],
    imports: [
         CommonModule 
    ],
    declarations: [
        ShopComponent,
        ShopMenuComponent,
        ShopContentComponent
    ],
    exports: [
        ShopComponent
    ],

})

export class ShopModule{

}