import { Component, Input, input } from '@angular/core';
import { BackgroundColorDirective } from '../../directives/background-color.directive';

@Component({
  selector: 'app-wrapper-card',
  standalone: true,
  imports: [
    BackgroundColorDirective
  ],
  templateUrl: './wrapper-card.component.html',
  styleUrl: './wrapper-card.component.scss'
})
export class WrapperCardComponent {

  color = input<string>();         // InputSignal<string|undefined>


}
