import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { rootReducer } from './app.reducer';

const persistConfig = {
  keys: ['auth'],
  rehydrate: true
};
export function localStorageSyncReducer(reducer) {
  return localStorageSync(persistConfig)(reducer);
}

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducer, { metaReducers }),
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStore {}
