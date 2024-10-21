import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubDivisorComponent } from './home-sub-divisor.component';

describe('HomeSubDivisorComponent', () => {
  let component: HomeSubDivisorComponent;
  let fixture: ComponentFixture<HomeSubDivisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSubDivisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSubDivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
