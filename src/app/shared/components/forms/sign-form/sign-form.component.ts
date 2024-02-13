import { Component, Input } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

export enum ActionType {
  signIn,
  signUp,
}

@Component({
    selector: 'app-sign-form',
    templateUrl: './sign-form.component.html',
    standalone: true,
    imports: [
        NgIf,
        RouterLinkActive,
        RouterLink,
    ],
})
export class SignFormComponent {
  actions = ActionType;
  @Input() action = ActionType.signIn;
}
