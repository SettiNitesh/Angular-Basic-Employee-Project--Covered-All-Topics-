import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[text-highlight]',
})
export class TextHighlight implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
  }
}
