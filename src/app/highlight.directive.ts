import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    this.highlight('white');
  }

  highlight(color) {
    this.el.nativeElement.style.background = color;
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight('#D3D3D3');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight('white');
  }

}
