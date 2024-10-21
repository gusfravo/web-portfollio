import { Component, input } from '@angular/core';
import { subDivisorData } from '../../../../interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-sub-divisor-description',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-sub-divisor-description.component.html',
  styleUrl: './home-sub-divisor-description.component.scss'
})
export class HomeSubDivisorDescriptionComponent {

  subDivisorDescription = input<subDivisorData>();

}
