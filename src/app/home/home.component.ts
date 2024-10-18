import { Component } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
