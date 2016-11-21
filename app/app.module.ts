import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroapiService } from './heroapi.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { AppRoutingModule } from './app-routing.module'
import './rxjs-extensions';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
     //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    JsonpModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent, 
    HeroesComponent, 
    HeroDetailComponent,
    HeroSearchComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService, HeroapiService ]
})

export class AppModule { }
