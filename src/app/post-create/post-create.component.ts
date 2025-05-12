import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  title = '';
  description = '';
  avatar = ''; 

  constructor(private postService: PostService, private router: Router) {}

  createPost() {
    const newPost = {
      title: this.title,
      description: this.description,
      avatar: this.avatar 
    };

    this.postService.createPost(newPost).subscribe(() => {
      alert('Post criado com sucesso!');
      this.router.navigate(['/']);
    });
  }
}
