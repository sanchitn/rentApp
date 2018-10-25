import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {VendorService} from '../services/vendor.service'
@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {
  vendorId: any;
  vendorInfo:any

  constructor(private activatedroute:ActivatedRoute,private router:Router,private vendorService:VendorService) {
    this.activatedroute.params.subscribe((params)=>{
        
        this.vendorId=params.id
    })

   }

  ngOnInit() {
      this.getItemDetails()
  }

  getItemDetails(){
   
    let vendorId=this.vendorId;
    let routePath='getItemDetails?vendorId='+vendorId;
    
    this.vendorService.findVendorItems(routePath).subscribe((data)=>{

      this.vendorInfo=data[0];

    },error=>{


    
    })
  }


}
