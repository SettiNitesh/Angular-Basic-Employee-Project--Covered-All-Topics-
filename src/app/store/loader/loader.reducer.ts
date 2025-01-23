import { Action, createReducer, on } from '@ngrx/store';
import { setLoading } from './loader.action';
import { ILoaderState, initialLoadingState } from './loader.state';

const _loaderReducer = createReducer(
  initialLoadingState,
  on(setLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  })
);
export const LoaderReducer = (
  state = initialLoadingState,
  action: Action
): ILoaderState => {
  return _loaderReducer(state, action);
};
