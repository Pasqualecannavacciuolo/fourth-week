import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCcHover]'
})
export class CcHoverDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'gray';
  }
}
