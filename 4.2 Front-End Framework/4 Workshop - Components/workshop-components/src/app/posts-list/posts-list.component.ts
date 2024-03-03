import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
  posts: Post[] | null = [];
  isLoading = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getPosts(5).subscribe((posts) => {
    //   this.posts = posts;

    //   // setTimeout(() => { // This is to check loader!
    //   this.isLoading = false;
    //   // }, 4000);

    // });

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
        // setTimeout(() => { // This is to check loader!
        this.isLoading = false;
        // }, 4000);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error:', err);
      }
    });
    
  }
}
