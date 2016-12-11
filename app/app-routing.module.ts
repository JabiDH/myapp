import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { LoginPageComponent } from './login-page.component';
import { FileApiComponent } from './fileapi.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './auth.guard';
import { ShopComponent } from './shop/components/shop.component';
import { ShoppingCartComponent } from './shop/components/shop-cart.component'
import { ShopOrderComponent } from './shop/components/shop-order.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'uploadfile', component: FileApiComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard]},
  { path: 'shop/shoppingcart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  { path: 'shop/orders', component: ShopOrderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}