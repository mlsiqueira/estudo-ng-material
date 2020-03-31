import { NgModule } from '@angular/core';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
// Form Controls
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  exports: [
    // Buttons & Indicators
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    // Form Controls
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
