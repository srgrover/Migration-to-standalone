import { Component } from '@angular/core';
import { ActionType } from 'src/app/shared/components/forms/sign-form/sign-form.component';
import { SignFormComponent } from '../../shared/components/forms/sign-form/sign-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [SignFormComponent, CommonModule, RegisterComponent],
})
export class RegisterComponent {
  action = ActionType;
}
