import { Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { ClientComponent } from './components/client/client.component';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './components/master/master.component';
import { PostsComponent } from './components/posts/posts.component';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'master',
        component: MasterComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'client-project',
        component: ClientProjectComponent,
      },
      {
        path: 'rxjs-learning',
        component: RxjsLearningComponent,
      },
      {
        path: 'counter',
        component: CounterComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: 'add',
            component: AddPostComponent,
          },
          {
            path: 'edit/:id',
            component: AddPostComponent,
          },
        ],
      },
    ],
  },
];
