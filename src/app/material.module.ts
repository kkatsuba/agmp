import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule
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
    MatDialogModule
  ]
})
export class MaterialModule {}
