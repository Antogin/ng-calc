import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent implements OnInit {
  @Input() userPassword: string;
  @Output() passwordMatch: EventEmitter<void> = new EventEmitter();

  private currentPassword = '';

  constructor() {
  }

  ngOnInit() {
  }

  private handleCurrentPasswordChange(val) {
    this.currentPassword = this.currentPassword + val;

    if (this.currentPassword.length === 9) {
      if (this.currentPassword === this.userPassword) {
        console.log('MATCH');
        this.passwordMatch.emit();
      }
      this.currentPassword = '';

    }
  }

}
