import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders} from '@angular/common/http';
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

  private endPoint = 'http://localhost:3005';

  createAuthorizationHeader(headers: HttpHeaders) {
    headers['Content/Type']='application/Json';
    headers['x-Trigger']='CORS';
    
  }
  postRequest(){
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
  
    
    var data={"mobileNumber":8888888888};
    return this.http.post("http://localhost:3005/signIn", data,{headers:headers}).map(data=>{

      console.log(data)
    })
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
