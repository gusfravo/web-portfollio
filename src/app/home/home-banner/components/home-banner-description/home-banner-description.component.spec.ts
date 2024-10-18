import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerDescriptionComponent } from './home-banner-description.component';

describe('HomeBannerDescriptionComponent', () => {
  let component: HomeBannerDescriptionComponent;
  let fixture: ComponentFixture<HomeBannerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBannerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
