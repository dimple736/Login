import { TestBed } from '@angular/core/testing';

import { CouponDataService } from './coupon';

describe('Coupon', () => {
  let service: CouponDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
