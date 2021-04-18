
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[click-class]'
})
export class ClickDirective {

  constructor(public elementRef: ElementRef) { }
  @Input('click-class') clickClass: any;  // parametre olarak directive'e verilir.
  @Input('rotate-class') rotateClass: any;  // parametre olarak directive'e verilir.

  show = false;
  @HostListener('click') click() {

    if (this.show) {
      try {
        this.show=false;
        let e: HTMLCollection = (this.elementRef.nativeElement as HTMLLinkElement).parentElement.getElementsByClassName('collapse');
        e[0].classList.remove(this.clickClass);

        let e2: HTMLCollection = (this.elementRef.nativeElement as HTMLLinkElement).getElementsByClassName('menu-arrow');
        e2[0].classList.remove(this.rotateClass);
      } catch (error) {
        
      }
     
    }
    else {
      try {
        this.show=true;
        
        let e: HTMLCollection = (this.elementRef.nativeElement as HTMLLinkElement).parentElement.getElementsByClassName('collapse');
        e[0].classList.add(this.clickClass);

        let e2: HTMLCollection = (this.elementRef.nativeElement as HTMLLinkElement).getElementsByClassName('menu-arrow');
        e2[0].classList.add(this.rotateClass);
       
        
      } catch (error) {
        
      }
    

    }

  }



}