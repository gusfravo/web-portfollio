import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerLocationComponent } from './home-banner-location.component';

describe('HomeBannerLocationComponent', () => {
  let component: HomeBannerLocationComponent;
  let fixture: ComponentFixture<HomeBannerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBannerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
