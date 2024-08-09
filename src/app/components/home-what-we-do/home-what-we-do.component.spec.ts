import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatWeDoComponent } from './home-what-we-do.component';

describe('HomeWhatWeDoComponent', () => {
  let component: HomeWhatWeDoComponent;
  let fixture: ComponentFixture<HomeWhatWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhatWeDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
