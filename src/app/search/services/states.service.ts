import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../shared/http.service'
@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private httpMethod:HttpService) { }

  findStates(data,routePoint):Observable<any>{
     return this.httpMethod.getRequest(routePoint).map(data=>{
        
        return data['states']

     }).catch(error=>{
       
        throw error 
     })
    
  }
}
