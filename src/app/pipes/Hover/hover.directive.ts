import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding("style.background-color") bgColor:string = "rgba(190, 190, 190, 0.3)";

  @HostListener("mouseenter") onMouseEnter() {
    this.bgColor = "rgba(0,255,0,0.2)";
  }
  
  @HostListener("mouseleave") onMouseLeave() {
    this.bgColor = "rgba(190, 190, 190, 0.3)";
  }

  constructor() { }

}
