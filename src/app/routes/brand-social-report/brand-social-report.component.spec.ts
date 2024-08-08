import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSocialReportComponent } from './brand-social-report.component';

describe('BrandSocialReportComponent', () => {
  let component: BrandSocialReportComponent;
  let fixture: ComponentFixture<BrandSocialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSocialReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSocialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
