import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
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
import { LoginPageComponent } from './login-page.component';
import { HighlightDirective } from './highlight.directive';
import { UpperCasePipe } from './uppercase.pipe';
import { FileApiComponent } from './fileapi.component';
import { FileSelectDirective } from './ng2-file-upload/file-upload/file-select.directive';
import './rxjs-extensions';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
     //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent, 
    HeroesComponent, 
    HeroDetailComponent,
    HeroSearchComponent,
    LoginPageComponent,
    HighlightDirective,
    UpperCasePipe,
    FileApiComponent,
    FileSelectDirective
    ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService, HeroapiService ]
})

export class AppModule { }
