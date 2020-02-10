import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './dialog.actions';
import {map, switchMap} from 'rxjs/operators';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {of} from 'rxjs';

@Injectable()
export class DialogEffects {

  constructor(private actions$: Actions,
              private matDialog: MatDialog) {
  }

  openDialog$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.OpenDialog),
    switchMap((action) => of(this.matDialog.open(action.component, action.config))),
    map((dialogRef: MatDialogRef<any>) => fromActions.OpenDialogSuccess({dialogRef}))
  ));
}
