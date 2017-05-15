import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-stripe-form',
    templateUrl: 'stripe-form.component.html',
    styleUrls: ['stripe-form.component.css']
})

export class StripeFormComponent {

    openCheckout(){
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_TA7xEMAdnvpQiB5M5QjlBeC5',
            locale: 'auto',
            token: function(token: any){

            }
        });

        handler.open({
            name: 'My Shop',
            description: 'My shop description',
            amount: 3000,
        });
    }
}