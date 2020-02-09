import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import * as fromActions from './dialog.actions';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

@Injectable()
export class DialogEffects {

  constructor(private actions$: Actions,
              private dialog: MatDialog) {
  }

  openDialog$ = this.actions$.pipe(
    ofType(fromActions.OpenDialog),
    map(() => fromActions.OpenDialogSuccess())
  );
}
