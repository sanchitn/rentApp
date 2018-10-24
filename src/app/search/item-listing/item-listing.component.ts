import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {} from '../services/vendor.service'
@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {
  vendorId: any;

  constructor(private activatedroute:ActivatedRoute,private router:Router) {
    this.activatedroute.params.subscribe((params)=>{
        
        this.vendorId=params.id
    })

   }

  ngOnInit() {
      this.getItemDetails()
  }

  getItemDetails(){

  }


}
