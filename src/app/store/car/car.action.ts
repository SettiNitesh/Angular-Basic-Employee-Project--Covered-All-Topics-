import { createAction, props } from '@ngrx/store';
import { ICar } from '../../model/interface/car';

export const LOAD_CARS = '[Car] Load Cars';
export const LOAD_CARS_SUCCESS = '[Car] Load Cars Success';

export const ADD_CAR = '[Car] Add Car';
export const ADD_CAR_SUCCESS = '[Car] Add Car Success';

export const UPDATE_CAR = '[Car] Update Car';
export const UPDATE_CAR_SUCCESS = '[Car] Update Car Success';

export const DELETE_CAR = '[Car] Delete Car';
export const DELETE_CAR_SUCCESS = '[Car] Delete Car Success';

export const loadCars = createAction(LOAD_CARS);
export const loadCarsSuccess = createAction(
  LOAD_CARS_SUCCESS,
  (cars: ICar[]) => ({ cars })
);

export const addCar = createAction(ADD_CAR, props<{ car: ICar }>());
export const addCarSuccess = createAction(
  ADD_CAR_SUCCESS,
  props<{ car: ICar }>()
);

export const updateCar = createAction(UPDATE_CAR, props<{ car: ICar }>());
export const updateCarSuccess = createAction(
  UPDATE_CAR_SUCCESS,
  props<{ car: ICar }>()
);

export const deleteCar = createAction(DELETE_CAR, props<{ carId: number }>());
export const deleteCarSuccess = createAction(
  DELETE_CAR_SUCCESS,
  props<{ car: ICar }>()
);
