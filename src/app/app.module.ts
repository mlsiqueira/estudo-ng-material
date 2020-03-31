import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
