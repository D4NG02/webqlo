import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaIntelligenceComponent } from './social-media-intelligence.component';

describe('SocialMediaIntelligenceComponent', () => {
  let component: SocialMediaIntelligenceComponent;
  let fixture: ComponentFixture<SocialMediaIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaIntelligenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
