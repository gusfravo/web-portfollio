import { Component } from '@angular/core';
import { HomeAboutMeIcons } from '../../enums';

@Component({
  selector: 'app-home-about-me-skills',
  standalone: true,
  imports: [],
  templateUrl: './home-about-me-skills.component.html',
  styleUrl: './home-about-me-skills.component.scss'
})
export class HomeAboutMeSkillsComponent {
  public skilss = Object.values(HomeAboutMeIcons);
}
