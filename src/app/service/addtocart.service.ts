import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
 
sharedata:any;
  constructor() { }

  private cartData = new BehaviorSubject<any[]>([]);
  cartData$ = this.cartData.asObservable();

  addCart(item: any) {
    const currentCartData = this.cartData.value;
    currentCartData.push(item);
    this.cartData.next(currentCartData);
  }
 
  
}
