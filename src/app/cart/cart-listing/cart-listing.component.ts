import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/local-storage.service';
import { HttpService } from '../../shared/http.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.css']
})
export class CartListingComponent implements OnInit {
  cartInfo = { total: 0, subTotal: 0, items: [], vendorName: "", vendorId: 0, totalPiece: 0, transportationPrice: [] };
  //transport = 0
  private items: any;
  totalSum = 0;
  constructor(private localStorages: LocalStorageService, 
    private HttpService: HttpService, private router:Router) { }

  transportationPrice = []

  ngOnInit() {
    if (this.localStorages.getKey('transportation') != null) {

      this.transportationPrice = JSON.parse(this.localStorages.getKey('transportation'));
    } else {
      this.transportationPrice = [
        { key: "1-way transportation ( within 1km)", value: 100, isChecked: false },
        { key: "2-way transportation ( within 1km)", value: 200, isChecked: false },
        { key: "1-way transportation ( within 1-5km)", value: 200, isChecked: false },
        { key: "2-way transportation ( within 1-5km)", value: 400, isChecked: false }
      ];
    }
    this.getCartDetails();
  }

  getCartDetails() {
    this.items = this.localStorages.getKey('cartItems');
    if (this.items.length && typeof this.items != 'undefined') {
      var info = JSON.parse(this.items);
      var total = 0;
      var totalPieces = 0;
      var checked = this.transportationPrice.filter((item) => {


        return item.isChecked == true
      })


      for (let i = 0; i < info.items.length; i++) {

        let item_total_price = info.items[i]['price_unit'] * info.items[i]['needed_quantity'];
        info.items[i]['item_total_price'] = item_total_price;
        total = total + item_total_price;
        totalPieces = totalPieces + info.items[i]['needed_quantity'];
        this.cartInfo.items.push(info.items[i]);

      }
      this.cartInfo.subTotal = total;
      if (totalPieces <= 300) {
        total = total + 500
      } else if (totalPieces > 300) {
        total = total + 1000
      }
      if (checked.length > 0) {
        total = total + checked[0].value;
        this.cartInfo.transportationPrice = checked
      }
      this.cartInfo.vendorName = info.vendorName
      this.cartInfo.vendorId = info.vendorId;
      this.cartInfo.totalPiece = totalPieces;
      this.cartInfo.total = total;
      this.totalSum = total;
      console.log(this.cartInfo)
    }
  }


  onFilterChange(e, value, i) {
    if (e.target.checked) {
      this.transportationPrice.map((item, index) => {
        if (index == i) {
          this.totalSum = this.totalSum + value
          item.isChecked = true;
          this.cartInfo.transportationPrice = this.transportationPrice[index];

        } else {
          if (item.isChecked == true) {
            this.totalSum = this.totalSum - item.value
          }
          item.isChecked = false;
        }
      })

      this.localStorages.setKey('transportation', this.transportationPrice);
      this.cartInfo.total = this.totalSum;

    } else {
      this.cartInfo.transportationPrice = [];
      this.localStorages.removeItem('transportation');
      this.totalSum = this.totalSum - value
      this.cartInfo.total = this.totalSum;
    }

  }

  checkout(data) {
    if (sessionStorage.getItem('userData')) {
      // this.HttpService.postRequest().subscribe(data => {
      // })
      this.localStorages.setKey('finalCartDetails', data);
    }else{
      console.log("user not logged");
      this.router.navigate(['login'])
    }
  }

}
