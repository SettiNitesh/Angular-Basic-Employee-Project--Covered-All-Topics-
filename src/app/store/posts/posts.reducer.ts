import { Action, createReducer, on } from '@ngrx/store';
import { addPost, deletePost, editPost } from './posts.action';
import { initialState, IPostState } from './posts.state';

export const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = state.posts.length + 1;
    return { ...state, posts: [...state.posts, post] };
  }),
  on(editPost, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return action.post.id == post.id ? action.post : post;
    });
    return { ...state, posts: updatedPosts };
  }),
  on(deletePost, (state, action) => {
    const updatedPosts = state.posts.filter((post) => {
      return post.id !== action.postId;
    });
    return { ...state, posts: updatedPosts };
  })
);

export const postReducer = (
  state = initialState,
  action: Action
): IPostState => {
  return _postReducer(state, action);
};
