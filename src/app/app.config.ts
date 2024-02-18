import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducers } from '../state/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { buscarLivroEffect } from '../livros/state/livro.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(appReducers),
    provideEffects({
      buscarLivroEffect
    })
]
};
