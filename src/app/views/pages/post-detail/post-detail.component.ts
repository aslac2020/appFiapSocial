import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: any;


  constructor(
    private route: ActivatedRoute, private postService: PostService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     const postId = parseInt(params.get("post") || "0");
     this.post = this.postService.getPostById(postId)
    })
  }

}
