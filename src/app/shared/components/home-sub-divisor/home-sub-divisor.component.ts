import { Component, input } from '@angular/core';
import { WrapperCardComponent } from '../wrapper-card/wrapper-card.component';
import { HomeSubDivisorDescriptionComponent } from './components/home-sub-divisor-description/home-sub-divisor-description.component';
import { subDivisorData } from '../../interface';

@Component({
  selector: 'app-home-sub-divisor',
  standalone: true,
  imports: [
    WrapperCardComponent,
    HomeSubDivisorDescriptionComponent
  ],
  templateUrl: './home-sub-divisor.component.html',
  styleUrl: './home-sub-divisor.component.scss'
})
export class HomeSubDivisorComponent {
  divisorDataDescription = input<subDivisorData>();         // InputSignal<subDivisorData|undefined>

}
