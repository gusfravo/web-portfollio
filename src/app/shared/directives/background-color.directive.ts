import {Directive, ElementRef, Input} from '@angular/core';
import { timeout } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[backgroundColor]',
})

export class BackgroundColorDirective {

    @Input({ required: true }) backgroundColor:string | undefined = 'black';

    constructor(private _elementRef: ElementRef) {}

    ngOnInit(){
        this._elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    }
}