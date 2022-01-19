import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './views/shared/top-bar/top-bar.component';
import { FeedComponent } from './views/pages/feed/feed.component';
import { PostComponent } from './views/shared/post/post.component';
import { CommentComponent } from './views/shared/comment/comment.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PostDetailComponent } from './views/pages/post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FeedComponent,
    PostComponent,
    CommentComponent,
    LoginComponent,
    PostDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
