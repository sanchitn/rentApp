import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorListingComponent } from './vendor-listing/vendor-listing.component';
import { ItemListingComponent } from './item-listing/item-listing.component'
const routes: Routes = [

  { path: '', component: VendorListingComponent },
  { path: 'view-item-details/:id', component: ItemListingComponent }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [],
  declarations: []
})
export class SearchRoutingModule { }
