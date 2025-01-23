import { createAction, props } from '@ngrx/store';

export const SET_LOADING = 'SET_LOADING';

export const setLoading = createAction(
  SET_LOADING,
  props<{ isLoading: boolean }>()
);
