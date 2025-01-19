import { createAction } from '@ngrx/store';
import { IPost } from '../../model/interface/post';

const ADD_POST_ACTION = '[Post Component] Add Post';
const EDIT_POST_ACTION = '[Post Component] Edit Post';
const DELETE_POST_ACTION = '[Post Component] Delete Post';

export const addPost = createAction(ADD_POST_ACTION, (post: IPost) => ({
  post,
}));

export const editPost = createAction(EDIT_POST_ACTION, (post: IPost) => ({
  post,
}));

export const deletePost = createAction(
  DELETE_POST_ACTION,
  (postId: number) => ({
    postId,
  })
);
