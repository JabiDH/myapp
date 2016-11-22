import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroapiService } from './heroapi.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})



export class HeroesComponent implements OnInit {

  hero: Hero;
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private heroapiService: HeroapiService,
    private router: Router) {
      this.hero = new Hero(0,'');
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }
  getAllHeroes(): void {
    this.heroapiService.getHeroes().subscribe(
      heroes => {        
        this.heroes = heroes
        console.log(heroes);
      },
      err => {
        console.log('heroes : ' + this.heroes);
        console.log('heroes.component.ts -> getAllHeroes() -> ' + err);
      }
    );
  }
  
  getHeroesSlowly(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }

  ngOnInit(): void {
    this.getAllHeroes();
    //this.search('car');
  }

  gotoDetail(): void {
    let link = ['/detail', this.selectedHero.Id];
    this.router.navigate(link);
  }

  add(name: string) {
    let newHero: Hero;
    name = name.trim();
    if (!name) { return; }
    if (this.heroes.find(h => h.Name == name)) { alert("Hero is already exist!"); return; }
    this.heroapiService.createHero(name)
      .subscribe(hero => {
        newHero = hero;
        this.heroes.push(newHero);
        this.selectedHero = null;
      },
      err => {
        console.log('hero : ' + newHero);
        console.log('heroes.component.ts -> add() -> ' + err);
      }
      )
  }

  delete(hero: Hero): void {
    this.heroapiService.deleteHero(hero.Id)
      .subscribe(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      },
      err => {
        console.log('hero : ' + hero);
        console.log('heroes.component.ts -> delete() -> ' + err);
      }
      );
  }

  search(term: string) {
     this.heroapiService.search(term).subscribe(
       res => console.log(res),
       err => console.log(err)       
     );
  }

  isValidName(value: string): boolean {
    let valid = false;
    if(value){
      if (value.trim() !== ''){
        valid = true;        
      }       
    }
    return valid;
  }
}

