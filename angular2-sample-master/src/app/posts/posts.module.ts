import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsHomeComponent } from './home/home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostDetailsPanelComponent } from './post-details/post-details-panel/post-details-panel.component';
import { CommentListComponent } from './post-details/comment/comment-list.component';
import { CommentListItemComponent } from './post-details/comment/comment-list-item.component';
import { CommentFormComponent } from './post-details/comment/comment-form.component';
import { CommentPanelComponent } from './post-details/comment/comment-panel.component';
import { PostFormComponent } from './shared/post-form/post-form.component';
import { PostService } from './shared/post.service';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsHomeComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    PostDetailsPanelComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentFormComponent,
    PostFormComponent,
    CommentPanelComponent
  ],
  exports: [
    PostDetailsPanelComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentFormComponent,
    PostFormComponent,
    CommentPanelComponent
  ],
  providers: [
    PostService,
  ]
})
export class PostsModule { }
