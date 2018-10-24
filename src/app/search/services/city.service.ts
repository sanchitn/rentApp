import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../shared/http.service'

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpMethod:HttpService) { }
  findCity(routePoint):Observable<any>{
    return this.httpMethod.getRequest(routePoint).map(data=>{
       
       return data['cities'];

    }).catch(error=>{
      
       throw error 
    })
   
 }
}
