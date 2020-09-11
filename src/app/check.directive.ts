import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {

  constructor(private eRef: ElementRef) { }

  @HostListener('click') onclick(){
  //  if(this.eRef.nativeElement.value==)
  }

}
