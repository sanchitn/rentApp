import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CartListingComponent} from './cart-listing/cart-listing.component'
const routes: Routes = [
 
  { path: '', component: CartListingComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ],
  declarations: []
})
export class CartRoutingModule { }
