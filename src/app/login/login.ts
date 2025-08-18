import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  countryCode: string = '+91';
  mobileNumber: string = '';
  otp: string[] = ['', '', '', '', '', ''];

 
  showOtpScreen: boolean = false;
   constructor(private router: Router) {}
    allowOnlyDigits(event: any): void {
    const input = event.target.value;
    event.target.value = input.replace(/\D/g, '');
    this.mobileNumber = event.target.value;
  }

  allowOnlyDigitsInOtp(event: KeyboardEvent): void {
    const char = event.key;

   
    if (!/^\d$/.test(char)) {
      event.preventDefault();
    }
  }

  sendOtp() {
    if (this.mobileNumber.trim().length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    this.showOtpScreen = true;
  }

  verifyOtp() {
    const isOtpComplete = this.otp.every(d => d.trim() !== '');
     if (!isOtpComplete || this.otp.join('').length !== 6) {
      alert('Please enter full OTP');
      return;
    }
    this.router.navigate(['/dashboard']);
  }

  goBack() {
    this.showOtpScreen = false;
    this.otp = new Array(6).fill('');
  }

  moveToNext(event: any, index: number) {
    if (event.key !== 'Backspace' && event.target.value) {
      const next = document.querySelectorAll('.otp-box input')[index + 1] as HTMLElement;
      if (next) next.focus();
    }
  }
}
