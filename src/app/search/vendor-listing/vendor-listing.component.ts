import { Component, OnInit } from '@angular/core';
import {StatesService} from '../services/states.service';
import {CityService} from '../services/city.service';
import {VendorService} from '../services/vendor.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.component.html',
  styleUrls: ['./vendor-listing.component.css']
})
export class VendorListingComponent implements OnInit {

  constructor(private router: Router,private statesService:StatesService,private cityService:CityService,private vendorService:VendorService) { }

  ngOnInit() {
    this.getStates();
  }
   states=[{id:0,state_name:"Select State"}];
  
   cities=[{id:0,city_name:"Select City"}];
   vendorDetails=[];
   resultStatus=0

  model: any = {state:0,city:0};
  
  
  getStates(){
    var data={};
   
    var routePoint="getStates"
    this.statesService.findStates(data,routePoint).subscribe(
      (result:any)=>{
        result.map(item=>{

          return this.states.push(item)
        })

        
       
      },(error)=>{

        console.log("Herer====>",error)
      })
    //console.log("==>",datas)
  
    
  }

  onChangeGetCities(deviceValue) {
    var stateId=deviceValue;
    var routePath="getCities?stateId="+stateId
    this.cityService.findCity(routePath).subscribe(
      (result:any)=>{
        result.map(item=>{

          return this.cities.push(item)
        })

       
      },(error)=>{

        console.log("Herer====>",error)
      })
    
  }

  onSubmit(){
    
    var routePath="getVendorDetail?cityId="+this.model.city+"&stateId="+this.model.state+"&zipCode="+this.model.zipCode
    this.vendorService.findVendors(routePath).subscribe(
      (result:any)=>{
        if(result.length==0){
          this.resultStatus=1;
          this.vendorDetails=result
        }else{
          this.resultStatus=0;
          this.vendorDetails=result
        }
        
       
      },(error)=>{

        console.log("Herer====>",error)
      })
   

  }
  fetchItemDetails(id){
   
    this.router.navigate(['vendorSearch/view-item-details',id]);
  }




  

}
