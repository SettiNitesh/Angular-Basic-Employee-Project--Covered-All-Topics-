import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICarState } from './car.state';

export const CAR_FEATURE = 'cars';

export const getCarsState = createFeatureSelector<ICarState>(CAR_FEATURE);

export const getAllCars = createSelector(getCarsState, (state) => state.cars);

export const getCar = (carId: number) =>
  createSelector(getCarsState, (state: ICarState) => {
    return state.cars.find((car) => car.carId === carId);
  });
