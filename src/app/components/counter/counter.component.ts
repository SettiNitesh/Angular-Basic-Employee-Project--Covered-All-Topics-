import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../store/app.state';
import {
  addToCounter,
  changeChannelName,
  decrement,
  increment,
  reset,
} from '../../store/counter/counter.action';
import {
  getChannelName,
  getCounter,
} from '../../store/counter/counter.selector';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  channelName$: Observable<string>;

  value: string;

  constructor(private store: Store<IAppState>) {
    this.value = '';
    this.counter$ = new Observable();
    this.channelName$ = new Observable();
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    this.channelName$ = this.store.select(getChannelName);
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  addToCounter(): void {
    this.store.dispatch(addToCounter({ value: +this.value }));
  }
  changeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }
}
