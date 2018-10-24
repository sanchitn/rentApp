import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})


export class HttpService {
  
  constructor(private http:HttpClient) { 

    
  }

  private endPoint = 'http://192.168.0.148:3005';
  postRequest(){

  }

  getRequest(routePoint):Observable<{}>{
    var url=this.endPoint+"/"+routePoint;
    return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error || 'Server error'));

  }
}
