import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/store';
import {CoreDialogActions} from '../../../core/store/dialog';
import {ConfirmationDialogComponent} from '../dialogs/confirmation-dialog/container/confirmation-dialog.component';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {

  constructor(private store: Store<AppState>) {
  }

  openDialog(): void {
    this.store.dispatch(CoreDialogActions.OpenDialog({component: ConfirmationDialogComponent}));
  }
}
