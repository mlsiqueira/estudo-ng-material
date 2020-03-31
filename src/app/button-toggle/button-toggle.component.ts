import { Component } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {

  vertical = false;
  multiple = false;
  disableRipple = false;
  disabled = false;

  toggleVertical() {
    this.vertical = !this.vertical;
  }

  toggleMultiple() {
    this.multiple = !this.multiple;
  }
 
}
