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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var heroapi_service_1 = require("./heroapi.service");
var HeroSearchService = (function () {
    function HeroSearchService(http, heroapi) {
        this.http = http;
        this.heroapi = heroapi;
    }
    HeroSearchService.prototype.search = function (term) {
        var values;
        return this.heroapi.search(term)
            .subscribe(function (result) {
            values = result;
        }, function (err) {
            console.log("HeroSearchService.ts -> search() -> " + err);
        });
        //return this.http
        //       .get(`app/heroes/?name=${term}`)
        //       .map((r: Response) => r.json().data as Hero[]);
    };
    return HeroSearchService;
}());
HeroSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, heroapi_service_1.HeroapiService])
], HeroSearchService);
exports.HeroSearchService = HeroSearchService;
//# sourceMappingURL=hero-search.service.js.map