import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroapiService } from './heroapi.service'

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    title = "My Dashboard";
    heroes: Hero[] = [];

    constructor(
        private heroapiService: HeroapiService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.heroapiService.getHeroes()
            .subscribe(
            heroes => {
                this.heroes = heroes.slice(0, 4)
            },
            err => {
                console.log(`dashboard.component.ts -> noOnInit() -> ${err}`);
            }
            );
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.Id];
        this.router.navigate(link);
    }
}