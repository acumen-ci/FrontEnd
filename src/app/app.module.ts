import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import {CurrencyPipe} from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule
  ],
  providers: [
    CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
