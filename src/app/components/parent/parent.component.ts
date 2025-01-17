import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('h') h: any;
  ngAfterViewChecked(): void {
    console.log('Parent component view checked');
  }
  ngAfterViewInit(): void {
    console.log('Parent component initialized', this.h);
  }

  greetings: string = 'Hello GoodMorning !!';

  mobile: string = '';

  counter: number = 0;

  mobiles: string[] = [
    'Apple',
    'Samsung',
    'Oppo A7',
    'Redmi Note 9 Pro',
    'POCO',
    'Vivo',
  ];

  bodyChild: string = 'Body of app-child in parent-component';

  addMobile(): void {
    this.mobiles = [...this.mobiles, this.mobile];
    this.mobile = '';
  }

  updateCounter(): void {
    this.counter++;
  }
}
