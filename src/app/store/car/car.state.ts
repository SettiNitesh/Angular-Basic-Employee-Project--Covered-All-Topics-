import { ICar } from '../../model/interface/car';

export interface ICarState {
  cars: ICar[];
}

export const initialCarState: ICarState = {
  cars: [],
};
