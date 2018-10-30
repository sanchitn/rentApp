import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../shared/http.service'
import { BaseService } from 'src/app/shared/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService extends BaseService {
  private endPoint = 'http://192.168.0.148:3005';

  // constructor(private httpMethod:HttpService) {
    constructor(private httpClient: HttpClient) {
      super(httpClient);
   }
  findVendors(searchData):Observable<any>{
    return this.getData(`${this.endPoint}/getVendorDetail?cityId=`+searchData.cityId+`&stateId=`+searchData.stateId+`&zipCode=`+searchData.zipcode);
 }

 findVendorItems(vendorId):Observable<any>{
  return this.getData(`${this.endPoint}/getItemDetails?vendorId=`+vendorId);
  // return this.httpMethod.getRequest(routePoint).map(data=>{
  //     console.log(data['vendorInfo'])
  //    return data['vendorInfo'];

  // }).catch(error=>{
  //   console.log('server error');
  //    throw error 
  // })
 
}



}
