import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostState } from './posts.state';

export const POSTS_FEATURE = 'posts';

const getPostsState = createFeatureSelector<IPostState>(POSTS_FEATURE);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = (postId: number) =>
  createSelector(getPostsState, (state: IPostState) => {
    return state.posts.find((post) => post.id == postId);
  });
