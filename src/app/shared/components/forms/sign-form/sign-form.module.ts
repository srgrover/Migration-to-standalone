import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignFormComponent } from './sign-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignFormComponent],
  imports: [CommonModule, RouterModule],
  exports: [SignFormComponent],
})
export class SignFormModule {}
