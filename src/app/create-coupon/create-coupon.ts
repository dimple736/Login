import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-coupon.html',
  styleUrls: ['./create-coupon.css']
})
export class CreateCouponComponent {
  constructor(private location: Location) {} 
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
    status: true
  };

  allowOnlyDigits(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.couponData.mobileNumber = input.value;
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log('Coupon Data:', this.couponData);
      alert('🎉 Hey! Your coupon has been created successfully.');
    } else {
      alert('😅 Not so fast! Fill in all the blanks before creating your coupon.');
    }
  }
  goBack(): void {
    this.location.back(); 
  }
}
