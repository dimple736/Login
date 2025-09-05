import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CouponDataService } from '../services/coupon';

@Component({
  selector: 'app-coupon-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './coupon-list.html',
  styleUrls: ['./coupon-list.css'],
})
export class CouponListComponent implements OnInit {
  coupons: any[] = [];
  searchTerm: string = '';
  page: number = 1;
  activeView: string = 'couponList';
  editedCoupon: any = null;

  constructor(
    private couponDataService: CouponDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.couponDataService.coupons$.subscribe((data) => {
      this.coupons = data;
    });

    if (this.couponDataService.getCoupons().length === 0) {
      const defaultCoupons = [
         {
    userName: 'Sumit Saini',
    mobileNumber: '9876543210',
    email: 'sumit123@gmail.com',
    couponType: 'User-Specific',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    rating: '5',
    code:'23451',
    status:'Active',
  },
  {
    userName: 'Aarti Sharma',
    mobileNumber: '9876543211',
    email: 'aarti234@gmail.com',
    couponType: 'Charger-Specific',
    couponCode:'12340',
    startDate: '2025-08-05',
    endDate: '2025-08-20',
    rating: '4',
    status:'Active',
    code:34578
  },
  {
    userName: 'Riya Sharma',
    mobileNumber: '8573456262',
    email: 'riyasharma589@gmail.com',
    couponType: 'User-Specific',
    startDate: '2025-08-25',
    endDate: '2025-09-20',
    rating: '3',
    status:'Active',
    code:87345
  },
  {
    userName: 'Bhumika Sharma',
    mobileNumber: '9573456562',
    email: 'bhumisharma589@gmail.com',
    couponType: 'Charger-Specific',
    startDate: '2025-08-25',
    endDate: '2025-12-20',
    rating: '4',
    status:'Active',
    code:87645
  },
  {
    userName: 'Shruti Yadav',
    mobileNumber: '7573456582',
    email: 'Shrutiydv589@gmail.com',
    couponType: 'User-Specific',
    startDate: '2025-26-25',
    endDate: '2025-02-20',
    rating: '1',
    status:'Active',
    code:87645
  },
  {
    userName: 'Bhawna Yadav',
    mobileNumber: '8673456523',
    email: 'Bhawnaydv589@gmail.com',
    couponType: 'User-Specific',
    startDate: '2025-23-25',
    endDate: '2025-18-20',
    rating: '4',
    status:'Active',
    code:12389
  }
      ];

      this.couponDataService.setCoupons(defaultCoupons);
      this.couponDataService.coupons$.subscribe((coupons) => {
        this.coupons = coupons || [];
      });
    }
  }

  show(view: string) {
    this.activeView = view;
  }

  get filteredCoupons(): any[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (term.length >= 3) {
      return this.coupons.filter((coupon) =>
        coupon.title.toLowerCase().includes(term) ||
        coupon.code.toLowerCase().includes(term)
      );
    }
    return this.coupons;
  }

  openEdit(coupon: any) {
    this.editedCoupon = { ...coupon };
    
    (document.getElementById('editCouponModal') as any).style.display = 'block';
  }

 saveEdit() {
  if (this.editedCoupon) {
    this.couponDataService.updateCoupon(this.editedCoupon); 
    this.editedCoupon = null;
    
  }
}
  closeEdit() {
    (document.getElementById('editCouponModal') as any).style.display = 'none';
    this.editedCoupon = null;
  }
}
