import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { FormsModule } from '@angular/forms'; // para ngModel

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  posts: Post[] = [];
  searchQuery: string = ''; // adicionando a variável de busca

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.map((p) => ({
        ...p,
        avatar: `https://picsum.photos/200?random=${p.id}`,
        description: (p as any).body || p.description,
      }));
    });
  }

  get filteredPosts(): Post[] {
    if (!this.searchQuery.trim()) return this.posts;
  
    const query = this.searchQuery.toLowerCase();
  
    return this.posts.filter(post =>
      (post.title?.toLowerCase().includes(query) || false) ||
      (post.description?.toLowerCase().includes(query) || false)
    );
  }
  buscar() {

  console.log("Pesquisando por:", this.searchQuery);
 
}

  
}
