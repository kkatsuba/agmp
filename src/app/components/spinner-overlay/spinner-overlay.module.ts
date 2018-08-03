import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerOverlayComponent } from './spinner-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [ SpinnerOverlayComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [ SpinnerOverlayComponent ]
})
export class SpinnerOverlayModule { }
