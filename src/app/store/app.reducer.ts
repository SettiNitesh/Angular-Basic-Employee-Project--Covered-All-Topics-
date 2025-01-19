import { counterReducer } from './counter/counter.reducer';
import { postReducer } from './posts/posts.reducer';

export const appReducers = {
  counter: counterReducer,
  posts: postReducer,
};
