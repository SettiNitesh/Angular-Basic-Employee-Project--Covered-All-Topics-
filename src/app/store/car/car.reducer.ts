import { Action, createReducer, on } from '@ngrx/store';
import {
  addCarSuccess,
  deleteCarSuccess,
  loadCarsSuccess,
  updateCarSuccess,
} from './car.action';
import { ICarState, initialCarState } from './car.state';

const _carReducer = createReducer(
  initialCarState,
  on(loadCarsSuccess, (state, action) => ({
    ...state,
    cars: action.cars,
  })),

  on(addCarSuccess, (state, action) => {
    let car = { ...action.car };
    return { ...state, cars: [...state.cars, car] };
  }),

  on(updateCarSuccess, (state, action) => {
    const updatedCars = state.cars.map((car) => {
      return action.car.carId === car.carId ? action.car : car;
    });
    return { ...state, cars: updatedCars };
  }),

  on(deleteCarSuccess, (state, action) => {
    const updatedCars = state.cars.filter((car) => {
      return car.carId !== action.car.carId;
    });
    return { ...state, cars: updatedCars };
  })
);

export const carReducer = (
  state = initialCarState,
  action: Action
): ICarState => {
  return _carReducer(state, action);
};
