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
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var login_page_component_1 = require('./login-page.component');
var fileapi_component_1 = require('./fileapi.component');
var home_component_1 = require('./home.component');
var auth_guard_1 = require('./auth.guard');
var shop_component_1 = require('./shop/components/shop.component');
var shop_cart_component_1 = require('./shop/components/shop-cart.component');
var shop_order_component_1 = require('./shop/components/shop-order.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: login_page_component_1.LoginPageComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'heroes', component: heroes_component_1.HeroesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'uploadfile', component: fileapi_component_1.FileApiComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'shop', component: shop_component_1.ShopComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'shop/shoppingcart', component: shop_cart_component_1.ShoppingCartComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'shop/orders', component: shop_order_component_1.ShopOrderComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map