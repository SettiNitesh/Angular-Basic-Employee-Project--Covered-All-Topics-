import { IPost } from '../../model/interface/post';

export interface IPostState {
  posts: IPost[];
}

export const initialState: IPostState = {
  posts: [
    { id: 1, title: 'Post title 1', description: 'Post description 1' },
    { id: 2, title: 'Post title 2', description: 'Post description 2' },
    { id: 3, title: 'Post title 3', description: 'Post description 3' },
  ],
};
