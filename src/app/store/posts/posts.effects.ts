import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { PostService } from '../../service/post.service';
import { loadPosts, loadPostsSuccess } from './posts.action';

export const postsEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        postService.getPosts().pipe(map((posts) => loadPostsSuccess(posts)))
      )
    );
  },
  { functional: true }
);
