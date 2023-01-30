import { createReducer, on } from '@ngrx/store';
import { Currency } from '../interfaces/currency.model';
import { CurrencyActions } from './currencies.actions';

export const initialState: ReadonlyArray<Currency> = [];

export const portfolioReducer = createReducer(
  initialState,
  on(CurrencyActions.removeCurrency, (state, { currency }) =>
    state.filter((c) => c.id !== currency.id)
  ),
  on(CurrencyActions.addCurrency, (state, { currency }) => {
    if (state.map(c => c.id).indexOf(currency.id) > -1) return state;

    return [...state, currency];
  })
);