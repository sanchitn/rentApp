import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {VendorListingComponent} from './vendor-listing/vendor-listing.component'
const searchRoutes: Routes = [
 
  { path: '', component: VendorListingComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes) 
    
    
  ],
  declarations: []
})
export class SearchRoutingModule { }
