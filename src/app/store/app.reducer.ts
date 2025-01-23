import { carReducer } from './car/car.reducer';
import { counterReducer } from './counter/counter.reducer';
import { LoaderReducer } from './loader/loader.reducer';
import { postReducer } from './posts/posts.reducer';

export const appReducers = {
  counter: counterReducer,
  posts: postReducer,
  cars: carReducer,
  loader: LoaderReducer,
};
