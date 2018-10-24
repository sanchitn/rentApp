import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vendorSearch', loadChildren: './search/search.module#SearchModule'}

];
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forRoot(routes,{useHash: true}) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
