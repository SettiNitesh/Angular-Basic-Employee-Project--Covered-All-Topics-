import { ICarState } from './car/car.state';
import { ICounterState } from './counter/counter.state';
import { ILoaderState } from './loader/loader.state';
import { IPostState } from './posts/posts.state';

export interface IAppState {
  counter: ICounterState;
  posts: IPostState;
  cars: ICarState;
  loader: ILoaderState;
}
