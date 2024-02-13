import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  standalone: true,
  imports: [CommonModule, NoticesComponent],
})
export class NoticesComponent {}
