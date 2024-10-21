import { Component } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeAboutMeComponent } from './home-about-me/home-about-me.component';
import { HomeAboutMeDescriptionComponent } from "./home-about-me/components/home-about-me-description/home-about-me-description.component";
import { HomeSubDivisorComponent } from '../shared/components/home-sub-divisor/home-sub-divisor.component';
import { HOME_SUBDIVISOR_DATA_WEB_APPS } from './constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeBannerComponent,
    HomeAboutMeComponent,
    HomeAboutMeDescriptionComponent,
    HomeSubDivisorComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
public home_subdivisor_web_app = HOME_SUBDIVISOR_DATA_WEB_APPS;

}
