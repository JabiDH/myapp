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
var hero_1 = require("./hero");
var Rx_1 = require("rxjs/Rx");
var user_account_1 = require("./user-account");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var HeroapiService = (function () {
    function HeroapiService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.heroapiUrl = '';
        this.apiUrl = '';
        this.apiUrl = "http://localhost:62412";
        this.heroapiUrl = "http://localhost:62412/api/heroes";
        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }
    HeroapiService.prototype.getHeroes = function () {
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp',
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'GET' });
        return this.http
            .get(this.heroapiUrl, options)
            .map(function (response) { return response.json(); })
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    HeroapiService.prototype.getHero = function (id) {
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp',
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'GET' });
        return this.http
            .get(this.heroapiUrl + "/" + id, options)
            .map(function (response) { return response.json(); })
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    HeroapiService.prototype.updateHero = function (hero) {
        var url = this.heroapiUrl + "/" + hero.Id;
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'PUT' });
        return this.http
            .put(url, hero, options)
            .map(function (r) { return r.json(); })
            .catch(function (err) {
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    HeroapiService.prototype.createHero = function (name) {
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'POST' });
        var newHero = new hero_1.Hero(0, name);
        return this.http
            .post(this.heroapiUrl, newHero, options)
            .map(function (r) { return r.json(); })
            .catch(function (err) {
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    HeroapiService.prototype.deleteHero = function (id) {
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'DELETE' });
        return this.http
            .delete(this.heroapiUrl + "/" + id)
            .map(function (r) { return r.json(); })
            .catch(function (err) {
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    HeroapiService.prototype.search = function (term) {
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        var params = new http_1.URLSearchParams();
        var heroes = [];
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) {
            console.log(response.json()[1]);
            var values = response.json()[1];
            values.forEach(function (value) {
                heroes.push(new hero_1.Hero(0, value));
            });
            return heroes;
        });
    };
    HeroapiService.prototype.login = function (email, password) {
        var url = this.apiUrl + "/api/useraccounts";
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'POST' });
        var useraccount = new user_account_1.UserAccount(email, password);
        return this.http
            .post(url, useraccount, options)
            .map(function (r) { return r.json(); })
            .catch(function (err) {
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    return HeroapiService;
}());
HeroapiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], HeroapiService);
exports.HeroapiService = HeroapiService;
//# sourceMappingURL=heroapi.service.js.map