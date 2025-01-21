import { ElementRef, Renderer2 } from '@angular/core';
import { RendererHighlightDirective } from './renderer-highlight.directive';

describe('RendererHighlightDirective', () => {
  it('should create an instance', () => {
    // Mock objects for ElementRef and Renderer2
    const mockElementRef: ElementRef = new ElementRef(
      document.createElement('div')
    );
    const mockRenderer2: Renderer2 = jasmine.createSpyObj('Renderer2', [
      'setStyle',
    ]);

    // Pass the mock objects to the directive's constructor
    const directive = new RendererHighlightDirective(
      mockElementRef,
      mockRenderer2
    );

    // Check if the directive instance is created successfully
    expect(directive).toBeTruthy();
  });
});
