import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HeroapiService } from './heroapi.service';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http, private heroapi: HeroapiService) { }

    search(term: string): any{

        let values;
        return this.heroapi.search(term)
            .subscribe(
                result => {
                    values = result;
                },
                err => {
                    console.log(`HeroSearchService.ts -> search() -> ${err}`);
                }
        );

        //return this.http
        //       .get(`app/heroes/?name=${term}`)
        //       .map((r: Response) => r.json().data as Hero[]);
    }
}