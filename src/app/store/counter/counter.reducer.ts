import { Action, createReducer, on } from '@ngrx/store';
import {
  addToCounter,
  changeChannelName,
  decrement,
  increment,
  reset,
} from './counter.action';
import { ICounterState, initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state, _action) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state, _action) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state, _action) => {
    return { ...state, counter: 0 };
  }),
  on(addToCounter, (state, action) => {
    return { ...state, counter: state.counter + action.value };
  }),
  on(changeChannelName, (state, _action) => {
    return { ...state, channelName: 'My Angular App' };
  })
);

export const counterReducer = (
  state: ICounterState = initialState,
  action: Action
): ICounterState => {
  return _counterReducer(state, action);
};
