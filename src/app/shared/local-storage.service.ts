import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() {

     
  }

  setKey(key,value):void{
    
    localStorage.setItem(key,JSON.stringify(value));
    
  }

  getKey(key):any{
    return localStorage.getItem(key);
  }
  removeItem(key){
    return localStorage.removeItem(key);
  }
}
