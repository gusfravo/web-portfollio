import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutMeDescriptionComponent } from './home-about-me-description.component';

describe('HomeAboutMeDescriptionComponent', () => {
  let component: HomeAboutMeDescriptionComponent;
  let fixture: ComponentFixture<HomeAboutMeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutMeDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAboutMeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
