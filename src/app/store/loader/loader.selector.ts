import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoaderState } from './loader.state';

export const LOADER = 'loader';

export const getLoaderState = createFeatureSelector<ILoaderState>(LOADER);

export const getLoading = createSelector(getLoaderState, (state) => {
  return state.isLoading;
});
