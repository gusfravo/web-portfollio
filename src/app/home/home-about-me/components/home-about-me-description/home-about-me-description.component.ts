import { Component } from '@angular/core';
import { HomeAboutIcons } from '../../enums/home-about-me.enum';

@Component({
  selector: 'app-home-about-me-description',
  standalone: true,
  imports: [],
  templateUrl: './home-about-me-description.component.html',
  styleUrl: './home-about-me-description.component.scss'
})
export class HomeAboutMeDescriptionComponent {
  public homeAboutMe = HomeAboutIcons;

}
