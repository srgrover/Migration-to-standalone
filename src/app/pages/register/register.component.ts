import { Component } from '@angular/core';
import { ActionType } from 'src/app/shared/components/forms/sign-form/sign-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  action = ActionType;
}
