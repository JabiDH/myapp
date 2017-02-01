import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
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
import { Auth } from './auth.service';
import { AuthGuard } from './auth.guard'
import { HomeComponent } from './home.component';
import { ShopModule } from './shop/modules/shop.module';

import './rxjs-extensions';

@NgModule({
  imports:      [ 
    BrowserModule, 
    //FormsModule,
    HttpModule,
     //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    JsonpModule,
    ReactiveFormsModule,
    ShopModule
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
    FileSelectDirective,
    HomeComponent
    ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService, HeroapiService, AUTH_PROVIDERS, Auth, AuthGuard ]
})

export class AppModule { }
