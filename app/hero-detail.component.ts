// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service'
import { HeroapiService } from './heroapi.service'

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private heroapiService: HeroapiService
    ) { }

    ngOnInit(): void {
        this.route.params.forEach(
            (params: Params) => {
                let id = +params['id']; // plus sign to convert string to number
                this.heroapiService.getHero(id).subscribe(
                    hero => {
                        this.hero = hero;
                    },
                    err => {
                        console.log(`hero-detail.component.ts -> noOnInit() -> ${err}`);
                    });
            });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroapiService.updateHero(this.hero)
            .subscribe(hero => {
                this.hero = hero;
                this.goBack();
            },
            err => {
                console.log(`hero-detail.component.ts -> save() -> ${err}`);
            });
    }
}
