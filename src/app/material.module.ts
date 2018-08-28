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
  MatProgressSpinnerModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
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
