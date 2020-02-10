import {DialogEffects} from './dialog/dialog.effects';
import {InjectionToken} from '@angular/core';

export interface AppState {
}

export const CORE_REDUCERS = new InjectionToken(
  'ROOT_REDUCERS_TOKEN',
  {
    factory: () => ({})
  }
);
export const CORE_EFFECTS = [
  DialogEffects
];
