import { Component } from '@angular/core';
import { WrapperCardComponent } from '../../shared/components/wrapper-card/wrapper-card.component';
import { HomeAboutMeDescriptionComponent } from './components/home-about-me-description/home-about-me-description.component';
import { HomeAboutMeSkillsComponent } from './components/home-about-me-skills/home-about-me-skills.component';

@Component({
  selector: 'app-home-about-me',
  standalone: true,
  imports: [
    WrapperCardComponent,
    HomeAboutMeDescriptionComponent,
    HomeAboutMeSkillsComponent
  ],
  templateUrl: './home-about-me.component.html',
  styleUrl: './home-about-me.component.scss'
})
export class HomeAboutMeComponent {

}
