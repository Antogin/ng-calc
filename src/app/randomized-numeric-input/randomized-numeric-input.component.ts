import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.scss']
})
export class RandomizedNumericInputComponent implements OnInit {
  @Input() currentPassword: string;
  @Output() currentPasswordChange: EventEmitter<string> = new EventEmitter();

  private values = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', ' '
  ];


  constructor() {
  }

  ngOnInit() {
    this.shuffleValues();
  }

  private clicked(val) {
    this.currentPasswordChange.emit(val);
  }

  private shuffleValues() {
    this.values = this.values.sort(() => Math.random() - 0.5);
  }
}
