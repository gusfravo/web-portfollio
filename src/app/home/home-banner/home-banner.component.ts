import { Component } from '@angular/core';
import { WrapperCardComponent } from '../../shared/components/wrapper-card/wrapper-card.component';
import { HomeBannerDescriptionComponent } from './components/home-banner-description/home-banner-description.component';
import { HomeBannerLocationComponent } from './components/home-banner-location/home-banner-location.component';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [
    WrapperCardComponent,
    HomeBannerDescriptionComponent,
    HomeBannerLocationComponent
  ],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {

}
