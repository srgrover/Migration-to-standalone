import { Component } from '@angular/core';
import { SignFormComponent } from '../../shared/components/forms/sign-form/sign-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [SignFormComponent, CommonModule, LoginComponent],
})
export class LoginComponent {}
