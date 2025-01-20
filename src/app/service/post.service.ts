import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPost } from '../model/interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.API_URL_FAKE + 'posts').pipe(
      map((data) => {
        return data;
      })
    );
  }
}
