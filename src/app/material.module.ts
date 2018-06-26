import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk-experimental';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
