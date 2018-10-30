import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    // this.endPoint = Object.freeze();
  }

  private endPoint = 'http://localhost:3005';

  createOrder(data, headers): Observable<any> {
    return this.sendData(`${this.endPoint}/createOrder`, data, headers);
  }
  
}