import { Component } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeAboutMeComponent } from './home-about-me/home-about-me.component';
import { HomeAboutMeDescriptionComponent } from "./home-about-me/components/home-about-me-description/home-about-me-description.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeBannerComponent,
    HomeAboutMeComponent,
    HomeAboutMeDescriptionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
