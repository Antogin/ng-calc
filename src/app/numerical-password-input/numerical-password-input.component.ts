import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent implements OnInit {
  @Input() userPassword: string;
  passwordMatch: EventEmitter<void>;

  private currentPassword = '';

  constructor() {
  }

  ngOnInit() {
  }

  private handleCurrentPasswordChange(val) {
    console.log(val);

    this.currentPassword = this.currentPassword + val;

    if (this.currentPassword.length === 3) {
      if (this.currentPassword === this.userPassword) {
        console.log('MATCH');
        this.passwordMatch.emit();
      }
      this.currentPassword = '';

    }
  }

}
