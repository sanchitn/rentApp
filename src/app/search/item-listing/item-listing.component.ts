import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { VendorService } from '../services/vendor.service';
import { LocalStorageService } from '../../shared/local-storage.service'
@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {
  private vendorId: any;
  public vendorInfo: any;
  itemDetails = { items: [] };
  cartDetails = [];
  key = 'CartItems'
  constructor(private localStorage: LocalStorageService, private activatedroute: ActivatedRoute, private router: Router, private vendorService: VendorService) {
    this.activatedroute.params.subscribe((params) => {
      this.vendorId = params.id
    })
  }
  private qty = 0;
  public buttonDisabled = true;
  public showMsg = false;

  ngOnInit() {
    console.log(this.buttonDisabled);
  }
  ngAfterContentInit() {
    this.getItemDetails();
    // if(this.qty>0){
    //   console.log(this.qty);
    //   this.buttonDisabled =  true;
    // }
  }

  getItemDetails() {
    // let vendorId = this.vendorId;
    // let routePath = 'getItemDetails?vendorId=' + this.vendorId;
    this.vendorService.findVendorItems(this.vendorId).subscribe((data) => {
      console.log('items list', data.vendorInfo[0]);
      this.vendorInfo = data.vendorInfo[0];
    }, error => {
    })
  }

  addItem(quantity, itemDetail, vendorInfo) {
    this.buttonDisabled =  false;
    itemDetail['needed_quantity'] = parseInt(quantity);
    if (parseInt(quantity) < 1) {
      return false
    }

    if (this.itemDetails['items'].length == 0) {
      this.itemDetails['vendorId'] = vendorInfo['uid'];
      this.itemDetails['vendorName'] = vendorInfo['name'];
      this.itemDetails['items'].push(itemDetail);

    } else {
      if (vendorInfo['uid'] != this.itemDetails['vendorId']) {
        return false;
      } else {

        var id = this.itemDetails['items'].length + 1;
        var found = this.itemDetails['items'].some(function (el) {
          return el.id === itemDetail.id;
        });
        if (!found) { this.itemDetails['items'].push(itemDetail); }

      }
    }
  }

  addToCart(items) {
    if(this.qty == 0){
      this.showMsg =true;
    }
    this.localStorage.setKey('cartItems', items);
    this.router.navigate(['cart'])
  }
}
