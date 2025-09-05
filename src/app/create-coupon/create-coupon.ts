import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CouponDataService } from '../services/coupon';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-create-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-coupon.html',
  styleUrls: ['./create-coupon.css']
})
export class CreateCouponComponent {

  couponData = {
    couponType: '',
    mobileNumber: '',
    userName: '',
    email: '',
    rating: '',
    type: '',
    title: '',
    code: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Active'
  };
constructor(private router: Router,
  private toastr: ToastrService,
   private couponService: CouponDataService
) {}

  
  allowOnlyDigits(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.couponData.mobileNumber = input.value;
  }
  submitForm(form: NgForm) {
    if (form.valid) {
      this.couponService.addCoupon({ ...this.couponData });
this.toastr.success('Coupon Created Successfully🥰')
      form.resetForm();  
       this.router.navigate(['/coupon-list']);
    }else
this.toastr.error('please fill all fields😒')
return;

  }
  goBack() {
    this.router.navigate(['/coupon-list']); 
  }
}
