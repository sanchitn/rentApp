import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './/search-routing.module';
import { SearchComponent } from './search.component';
import { VendorListingComponent } from './vendor-listing/vendor-listing.component';
import {FormsModule} from '@angular/forms';
import { PipeModule } from '../shared/pipe/pipe.module';
import {StatesService} from '../search/services/states.service';
import {CityService} from '../search/services/city.service';
import {VendorService} from '../search/services/vendor.service';
//import {ArraytoStingpipePipe} from '../pipes/arrayto-stingpipe.pipe'
@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    PipeModule
    
    
   
  ],
  declarations: [SearchComponent, VendorListingComponent],
  providers:[StatesService,CityService,VendorService]
})
export class SearchModule { }
