import { Component, Input } from '@angular/core';

export enum ActionType {
  signIn,
  signUp,
}

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss'],
})
export class SignFormComponent {
  actions = ActionType;
  @Input() action = ActionType.signIn;
}
