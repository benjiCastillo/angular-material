import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatRadioModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,

    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
