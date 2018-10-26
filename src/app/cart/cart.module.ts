import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartRoutingModule} from './cart-routing.module'
import {FormsModule} from '@angular/forms'
import { CartListingComponent } from './cart-listing/cart-listing.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule

  ],
  declarations: [CartListingComponent]
})
export class CartModule { }
