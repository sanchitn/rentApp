import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BaseService {
  protected prefix = '/api/';
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'null' });
  protected options = { headers: this.headers };
  private router: Router;
  constructor(public http: HttpClient) {

  }

  getData(url, header?) {
    const headers = header || this.options;
    return this.http.get(this.prefix + url, headers).pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
    );

  }

  sendData(url, resource, header?) {
    let headers;
    // const x = this.setCustomHeaders(resource);
    // if (header) {
    //   headers = x;
    // } else {
    //   headers = header || this.options;
    // }
    //  console.log(headers);
    headers = header || this.options;
    try {
      console.log('this.prefix + url', this.prefix + url);
      console.log('this.prefix + resource', resource);
      console.log('this.prefix + headers', headers);
      return this.http.post(this.prefix + url, resource, headers).pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
    } catch (e) {
       console.log(e);
    }
  }

  updateData(url, resource): Observable<any> {
    return this.http.put(this.prefix + url, JSON.stringify(resource), this.options).pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return observableThrowError(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return observableThrowError(error || 'Server error');
  }
  setCustomHeaders(data: any | Object, returnobj = false) {
    if (data.hasOwnProperty('customerId')) {
      const id = data['customerId'].toString();
      const xx = { 'customerId': id };
      if (returnobj) {
        const _headers = new HttpHeaders(xx);
        return { headers: _headers };
      } else {
        const _headers = new HttpHeaders(xx);
        this.options = { headers: _headers };
      }

    } else {
      this.options.headers = this.headers;
    }
  }
}

