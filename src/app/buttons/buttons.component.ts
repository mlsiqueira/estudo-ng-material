import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  preserveWhitespaces: true
})
export class ButtonsComponent {

  color: ThemePalette = 'primary';
  disabled = false;
  disableRipple = false;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleRipple() {
    this.disableRipple = !this.disableRipple;
  }

}
