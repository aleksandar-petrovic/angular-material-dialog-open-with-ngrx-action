import {NgModule} from '@angular/core';
import {ConfirmationDialogComponent} from './container/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatDialogModule
  ],
  declarations: [
    ConfirmationDialogComponent
  ]
})
export class ConfirmationDialogModule {
}
