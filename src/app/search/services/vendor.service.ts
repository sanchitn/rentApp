import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../shared/http.service'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpMethod:HttpService) { }
  findVendors(routePoint):Observable<any>{
    return this.httpMethod.getRequest(routePoint).map(data=>{
       
       return data['vendorInfo'];

    }).catch(error=>{
      
       throw error 
    })
   
 }

 findVendorItems(routePoint):Observable<any>{
  return this.httpMethod.getRequest(routePoint).map(data=>{
      console.log(data['vendorInfo'])
     return data['vendorInfo'];

  }).catch(error=>{
    
     throw error 
  })
 
}



}
