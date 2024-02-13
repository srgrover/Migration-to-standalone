import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Services/post.service';
import { NgFor, DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  standalone: true,
  imports: [NgFor, DatePipe],
})
export class PostComponent {
  @Input() post!: Post;
}
