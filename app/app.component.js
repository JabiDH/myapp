"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('./auth.service');
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <!--<button (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\">Login</button>-->\n            <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>            \n            <a routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!auth.authenticated()\">Login</a>\n            <a routerLink=\"/dashboard\" routerLinkActive=\"active\" *ngIf=\"auth.authenticated()\">Dashboard</a>\n            <a routerLink=\"/heroes\" routerLinkActive=\"active\" *ngIf=\"auth.authenticated()\">Heroes</a>\n            <a routerLink=\"/uploadfile\" routerLinkActive=\"active\" *ngIf=\"auth.authenticated()\">File Upload</a>\n            <a href=\"#\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Logout</a>\n        </nav>\n        <router-outlet></router-outlet>      \n        ",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map