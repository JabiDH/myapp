import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html'
})

export class HomeComponent {
    profile: any;
    constructor() {
        //console.log(localStorage.getItem('profile'));
        this.profile = JSON.parse(localStorage.getItem('profile'));
        if (this.profile) {
            console.log(this.profile);
        }
    }

}