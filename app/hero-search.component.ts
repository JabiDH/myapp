import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
//import { HeroSearchService } from './hero-search.service';
import { HeroapiService } from './heroapi.service';
import { Hero } from './hero';
@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroapiService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroapiService: HeroapiService,
    private router: Router) { }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroapiService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });

  }
  gotoDetail(hero: Hero): void {
    this.heroapiService.createHero(hero.Name).subscribe(
      h => {
        hero = h;
        let link = ['/profile', hero.Id];
        this.router.navigate(link);
      },
      err => {
        console.log(err);
      }
    );

  }
}
