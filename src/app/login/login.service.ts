import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../shared/base.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    // this.endPoint = Object.freeze();
  }

  private endPoint = 'http://localhost:3005';

  loginApi(data): Observable<any> {
    var url = `${this.endPoint}/signIn`;
    return this.sendData(`${this.endPoint}/signIn`, data);
  }
  otpApi(data): Observable<any> {
    return this.sendData(`${this.endPoint}/verifyOtp`, data);
  }

}
