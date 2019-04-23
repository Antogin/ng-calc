import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent implements OnInit {
  @Input() userPassword: string;

  constructor() { }

  ngOnInit() {
  }

}
