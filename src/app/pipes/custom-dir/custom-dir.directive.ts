import { Directive, HostBinding, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  dBgColor: string = "Yellow";

  @HostBinding('style.background-color') bgColor = this.dBgColor;
  @HostBinding('style.color') color = "red";

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = "red";
    this.color = "white";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.dBgColor;
    this.color = "Black";
  }

  constructor(el: ElementRef) {
    el.nativeElement.style.margin = "16px 0";
  }

}
