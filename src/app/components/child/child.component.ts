import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    OnDestroy
{
  @Input() greet: string = '';

  @Input() mobiles: string[] = [];

  /*

  ORDER OF LIFE CYCLE HOOKS

  1 ngOnChanges()
  2 ngOnInit()
  3 ngDoCheck()
  4 ngAfterContentInit()
  5 ngAfterContentChecked()
  6 ngAfterViewInit()
  7 ngAfterViewChecked()
  8 ngOnDestroy()

  */
  constructor() {
    console.log('Constructor Called', this.greet);
  }
  ngOnDestroy(): void {
    console.log('Destroy Called');
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked');
  }
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }

  ngOnInit(): void {
    console.log('ngOnInit Called', this.greet);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called');
  }
  ngOnChanges(_changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
  }
}
