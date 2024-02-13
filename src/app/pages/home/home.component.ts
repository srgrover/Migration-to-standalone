import { Component } from '@angular/core';
import { Post, PostService } from 'src/app/Services/post.service';
import { User, UserService } from 'src/app/Services/user.service';
import { PostComponent } from '../../shared/components/post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [PostComponent, CommonModule, HomeComponent],
})
export class HomeComponent {
  posts: Post[];
  authors: User[];
  cathegories: string[] = [];
  lastPost!: Post;
  constructor(postService: PostService, userService: UserService) {
    this.posts = postService.getPosts();
    this.authors = userService.getUsers();
    this.cathegories = this.getCathegories();
    this.lastPost = postService.getLastPost();
  }

  getPostCountByAuthor(idAuthor: number): number {
    return this.posts.filter((x) => x.user.id === idAuthor).length;
  }

  getCathegories(): string[] {
    let cathegories: string[] = [];
    this.posts.map((x) => {
      cathegories = [...cathegories, ...new Set(x.tags)];
    });
    return cathegories;
  }
}
