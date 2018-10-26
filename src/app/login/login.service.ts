import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../shared/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  urlLabel = '';
  constructor(private httpClient: HttpClient) {
    super(httpClient);
      // this.urlLabel = Object.freeze();
     }
  
     loginApi(data): Observable<any> {
      return this.sendData(`${this.urlLabel}/login`, data);
    }

    // loginData(postData) {
    //   return this.httpClient.post(`${this.API_URL}/contacts`, postData);
    // }
  
  }
    