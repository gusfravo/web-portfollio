import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutMeSkillsComponent } from './home-about-me-skills.component';

describe('HomeAboutMeSkillsComponent', () => {
  let component: HomeAboutMeSkillsComponent;
  let fixture: ComponentFixture<HomeAboutMeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutMeSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAboutMeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
