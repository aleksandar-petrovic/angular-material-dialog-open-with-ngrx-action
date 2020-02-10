import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CORE_EFFECTS, CORE_REDUCERS} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(CORE_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(CORE_EFFECTS)
  ]
})
export class CoreModule {
}
