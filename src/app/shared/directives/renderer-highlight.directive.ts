import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]',
})
export class RendererHighlightDirective implements OnInit {
  @Input() defaultColor = 'black';

  @HostBinding('style.background-color') color: string = this.defaultColor;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  @HostListener('mouseenter') onmouseover(event: Event) {
    this.color = 'pink';
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'teal'
    );
  }

  @HostListener('click') click(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'orange'
    );
  }
}
