import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPost } from '../../model/interface/post';
import { AlternateIfDirective } from '../../shared/directives/alternate-if.directive';
import { IAppState } from '../../store/app.state';
import { addPost, editPost } from '../../store/posts/posts.action';
import { getPostById } from '../../store/posts/posts.selector';

@Component({
  selector: 'app-add-post',
  imports: [ReactiveFormsModule, CommonModule, AlternateIfDirective],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent implements OnInit {
  isEdit: boolean = false;
  postId: number | null = null;
  isAvailable: boolean = true;

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.postId = Number(id);
        this.isEdit = !!this.postId;
        if (this.isEdit) {
          this.store.select(getPostById(this.postId)).subscribe((post) => {
            if (post) {
              this.postsForm.patchValue({
                title: post.title,
                description: post.body,
              });
            }
          });
        }
      }
    });
  }

  postsForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  showDescriptionError(): string {
    let descriptionField = this.postsForm.get('description');
    if (descriptionField?.touched && !descriptionField.valid) {
      if (descriptionField.errors?.['required']) {
        return 'Description is Required';
      }

      if (descriptionField.errors?.['minlength']) {
        return 'Description should be of min 10 characters required';
      }
    }
    return '';
  }

  addPost(): void {
    if (!this.postsForm.valid) {
      return;
    }

    const post: IPost = {
      title: this.postsForm.value.title || '',
      body: this.postsForm.value.description || '',
    };

    if (this.isEdit && this.postId) {
      const updatedPost = { ...post, id: this.postId };
      this.store.dispatch(editPost(updatedPost));
    } else {
      this.store.dispatch(addPost(post));
      this.postsForm.reset();
    }
  }
}
