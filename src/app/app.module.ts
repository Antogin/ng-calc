import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumericalPasswordInputComponent } from './numerical-password-input/numerical-password-input.component';
import { PasswordViewerComponent } from './password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './randomized-numeric-input/randomized-numeric-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericalPasswordInputComponent,
    PasswordViewerComponent,
    RandomizedNumericInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
