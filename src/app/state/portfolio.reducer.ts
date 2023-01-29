import { createReducer, on } from '@ngrx/store';
import { CurrencyActions } from './currencies.actions';

export const initialState: ReadonlyArray<string> = [];

export const portfolioReducer = createReducer(
  initialState,
  on(CurrencyActions.removeCurrency, (state, { currencyId }) =>
    state.filter((id) => id !== currencyId)
  ),
  on(CurrencyActions.addCurrency, (state, { currencyId }) => {
    if (state.indexOf(currencyId) > -1) return state;

    return [...state, currencyId];
  })
);