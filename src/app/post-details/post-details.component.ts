import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  post$: Observable<Post> = this.postService.getPostById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}
