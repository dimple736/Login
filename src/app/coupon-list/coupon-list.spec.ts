import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponListComponent } from './coupon-list';

describe('CouponList', () => {
  let component: CouponListComponent;
  let fixture: ComponentFixture<CouponListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
