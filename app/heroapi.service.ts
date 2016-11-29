import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Hero } from './hero';
import { Observable } from 'rxjs/Rx';
import { UserAccount } from './user-account';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroapiService {
    private heroapiUrl = '';
    private apiUrl = '';

    constructor(private http: Http, private jsonp: Jsonp) {
        this.apiUrl = "http://localhost:62412"; 
        this.heroapiUrl = "http://localhost:62412/api/heroes";
        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }

    getHeroes(): Observable<Hero[]> {

        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp',
        });

        let options = new RequestOptions({ headers: headers, method: 'GET' });
        return this.http
            .get(this.heroapiUrl, options)
            .map(response => response.json() as Hero[])
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Server Error')
            });
    }

    getHero(id: number): Observable<Hero> {

        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp',
        });
        let options = new RequestOptions({ headers: headers, method: 'GET' });
        return this.http
            .get(`${this.heroapiUrl}/${id}`, options)
            .map(response => response.json() as Hero)
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Server Error')
            });
    }
    updateHero(hero: Hero): Observable<Hero> {
        const url = `${this.heroapiUrl}/${hero.Id}`;
        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        let options = new RequestOptions({ headers: headers, method: 'PUT' });
        return this.http
            .put(url, hero, options)
            .map(r => r.json() as Hero)
            .catch((err: any) => {
                return Observable.throw(err.json().error || 'Server Error')
            });
    }

    createHero(name: string): Observable<Hero> {
        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        let options = new RequestOptions({ headers: headers, method: 'POST' });
        let newHero = new Hero(0, name);
        return this.http
            .post(this.heroapiUrl, newHero, options)
            .map(r => r.json() as Hero)
            .catch((err: any) => {
                return Observable.throw(err.json().error || 'Server Error')
            });
    }

    deleteHero(id: number): Observable<Hero> {
        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        let options = new RequestOptions({ headers: headers, method: 'DELETE' });
        return this.http
            .delete(`${this.heroapiUrl}/${id}`)
            .map(r => r.json() as Hero)
            .catch((err: any) => {
                return Observable.throw(err.json().error || 'Server Error')
            });
    }

    search(term: string): Observable<Hero[]> {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';
        let params = new URLSearchParams();
        let heroes = [] as Hero[];
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map((response) => {
                console.log(<string[]>response.json()[1]);
                let values = <string[]>response.json()[1];
                values.forEach(value => {
                    heroes.push(new Hero(0, value));
                });
                return heroes;
            });
    }

    login(email: string, password: string): Observable<UserAccount>{
        let url = `${this.apiUrl}/api/useraccounts`;
         let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp'
        });
        let options = new RequestOptions({ headers: headers, method: 'POST' });
        let useraccount = new UserAccount(email, password);
        return this.http
            .post(url, useraccount, options)
            .map(r => r.json() as UserAccount)
            .catch((err: any) => {
                return Observable.throw(err.json().error || 'Server Error')
            });
    }

}