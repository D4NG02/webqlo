import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurClientComponent } from './home-our-client.component';

describe('HomeOurClientComponent', () => {
  let component: HomeOurClientComponent;
  let fixture: ComponentFixture<HomeOurClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOurClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOurClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
