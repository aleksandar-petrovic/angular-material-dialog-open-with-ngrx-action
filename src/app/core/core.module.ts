import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CORE_EFFECTS, CORE_REDUCERS} from './store';

@NgModule({
  imports: [
    StoreModule.forRoot(CORE_REDUCERS),
    EffectsModule.forRoot(CORE_EFFECTS)
  ]
})
export class CoreModule {
}
