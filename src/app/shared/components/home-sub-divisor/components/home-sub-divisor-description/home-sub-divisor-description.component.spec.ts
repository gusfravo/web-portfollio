import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubDivisorDescriptionComponent } from './home-sub-divisor-description.component';

describe('HomeSubDivisorDescriptionComponent', () => {
  let component: HomeSubDivisorDescriptionComponent;
  let fixture: ComponentFixture<HomeSubDivisorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSubDivisorDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSubDivisorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
