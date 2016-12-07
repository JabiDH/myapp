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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
var app_component_1 = require('./app.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var heroapi_service_1 = require('./heroapi.service');
var dashboard_component_1 = require('./dashboard.component');
var hero_search_component_1 = require('./hero-search.component');
var app_routing_module_1 = require('./app-routing.module');
var login_page_component_1 = require('./login-page.component');
var highlight_directive_1 = require('./highlight.directive');
var uppercase_pipe_1 = require('./uppercase.pipe');
var fileapi_component_1 = require('./fileapi.component');
var file_select_directive_1 = require('./ng2-file-upload/file-upload/file-select.directive');
var auth_service_1 = require('./auth.service');
var auth_guard_1 = require('./auth.guard');
var home_component_1 = require('./home.component');
var shop_module_1 = require('./shop/modules/shop.module');
require('./rxjs-extensions');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                //InMemoryWebApiModule.forRoot(InMemoryDataService),
                app_routing_module_1.AppRoutingModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                shop_module_1.ShopModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                hero_search_component_1.HeroSearchComponent,
                login_page_component_1.LoginPageComponent,
                highlight_directive_1.HighlightDirective,
                uppercase_pipe_1.UpperCasePipe,
                fileapi_component_1.FileApiComponent,
                file_select_directive_1.FileSelectDirective,
                home_component_1.HomeComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [hero_service_1.HeroService, heroapi_service_1.HeroapiService, angular2_jwt_1.AUTH_PROVIDERS, auth_service_1.Auth, auth_guard_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map