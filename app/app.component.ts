import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    constructor(private auth: Auth) {

    }
}