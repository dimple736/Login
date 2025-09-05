import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CouponDataService {
  private coupons = new BehaviorSubject<any[]>([]);
  coupons$ = this.coupons.asObservable();
  private idCounter = 1;

  
  addCoupon(coupon: any) {
    const current = this.coupons.getValue();
    const withId = { ...coupon, id: this.idCounter++ };
    this.coupons.next([...current, withId]);
    
  }

 
  getCoupons() {
    return this.coupons.getValue();
  }

  
  setCoupons(coupons: any[]) {
    this.coupons.next([...coupons]); 
  }

  updateCoupon(updatedCoupon: any) {
    const current = this.coupons.getValue();
    const index = current.findIndex(c => c.code == updatedCoupon.code);

    if (index !== -1) {
      current[index] = { ...updatedCoupon };  
      this.coupons.next([...current]);        
    }
  }
    
  }
