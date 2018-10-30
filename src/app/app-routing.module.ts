import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'vendorSearch', loadChildren: './search/search.module#SearchModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: true })
    
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
