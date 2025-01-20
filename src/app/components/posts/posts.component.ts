import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from '../../model/interface/post';
import { IAppState } from '../../store/app.state';
import { deletePost, loadPosts } from '../../store/posts/posts.action';
import { getPosts } from '../../store/posts/posts.selector';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, AsyncPipe, RouterLink, RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private store: Store<IAppState>, private router: Router) {
    this.posts$ = new Observable();
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.select(getPosts);
  }

  editPost(post: IPost) {
    this.router.navigate(['/posts/edit', post.id]);
  }

  deletePost(postId: number) {
    if (confirm('Are you sure you want to delete the post')) {
      this.store.dispatch(deletePost(postId));
    }
  }
}
