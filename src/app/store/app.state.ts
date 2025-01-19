import { ICounterState } from './counter/counter.state';
import { IPostState } from './posts/posts.state';

export interface IAppState {
  counter: ICounterState;
  posts: IPostState;
}
