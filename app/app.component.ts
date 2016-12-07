import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <!--<button (click)="auth.login()" *ngIf="!auth.authenticated()">Login</button>-->
            <a routerLink="/home" routerLinkActive="active">Home</a>            
            <a routerLink="/login" routerLinkActive="active" *ngIf="!auth.authenticated()">Login</a>
            <a routerLink="/dashboard" routerLinkActive="active" *ngIf="auth.authenticated()">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active" *ngIf="auth.authenticated()">Heroes</a>
            <a routerLink="/uploadfile" routerLinkActive="active" *ngIf="auth.authenticated()">File Upload</a>
            <a href="#" (click)="auth.logout()" *ngIf="auth.authenticated()">Logout</a>
        </nav>
        <router-outlet></router-outlet>      
        `,
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
    constructor(private auth :Auth){

    }
}