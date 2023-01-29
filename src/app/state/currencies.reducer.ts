import { createReducer, on } from '@ngrx/store';

import { CurrenciesApiActions } from './currencies.actions';
import { Currency } from '../interfaces/currency.model';

export const initialState: ReadonlyArray<Currency> = [];

export const currencyReducer = createReducer(
  initialState,
  on(CurrenciesApiActions.retrievedCurrencies, (_state, { currencies }) => currencies)
);