import { PostDetailComponent } from './views/pages/post-detail/post-detail.component';
import { FeedComponent } from './views/pages/feed/feed.component';
import { LoginComponent } from './views/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './views/pages/sign/sign.component';

const routes: Routes = [
  {
    path:  '',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignComponent

  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'post-detail',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
