import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.scss']
})
export class RandomizedNumericInputComponent implements OnInit {
  @Input() currentPassword: string;

  constructor() { }

  ngOnInit() {
  }

}
