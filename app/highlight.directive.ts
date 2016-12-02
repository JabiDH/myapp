import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    if (el.nativeElement.tagName == 'DIV') {
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'orange');
    } else {
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
    }

    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
