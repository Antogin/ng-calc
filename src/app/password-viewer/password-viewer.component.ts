import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.scss']
})
export class PasswordViewerComponent implements OnInit {
  @Input() currentPassword: string;

  constructor() { }

  ngOnInit() {
  }

}
