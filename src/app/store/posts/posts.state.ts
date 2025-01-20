import { IPost } from '../../model/interface/post';

export interface IPostState {
  posts: IPost[];
}

export const initialState: IPostState = {
  posts: [],
};
