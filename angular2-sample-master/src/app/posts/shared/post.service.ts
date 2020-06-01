import { Injectable } from '@angular/core';

import { ApiService } from '../../core/api.service';
import { Post } from './post.model';
import { Comment } from './comment.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  private path = '/posts';

  constructor(private api: ApiService) { }

  getPosts(term?: any): Observable<Post[]> {
    return this.api.get(`${this.path}`, term);
  }

  getPost(id: number): Observable<Post> {
    return this.api.get(`${this.path}/${id}`);
  }

  savePost(data: Post) {
    console.log('saving post:' + data);
    return this.api.post(`${this.path}`, data);
  }

  updatePost(id: number, data: Post) {
    console.log('updating post:' + data);
    return this.api.put(`${this.path}/${id}`, data);
  }

  deletePost(id: number) {
    return this.api.delete(`${this.path}/${id}`);
  }

  saveComment(id: number, data: Comment) {
    return this.api.post(`${this.path}/${id}/comments`, data);
  }

  getCommentsOfPost(id: number) {
    return this.api.get(`${this.path}/${id}/comments`);
  }

}
