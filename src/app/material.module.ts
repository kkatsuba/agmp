import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
