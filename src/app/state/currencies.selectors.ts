import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Currency } from '../interfaces/currency.model';

export const selectCurrencies = createFeatureSelector<ReadonlyArray<Currency>>('currencies');

export const selectPortfolioState = createFeatureSelector<ReadonlyArray<string>>('portfolio');

export const selectCurrencyPortfolio = createSelector(
  selectCurrencies,
  selectPortfolioState,
  (currencies, portfolio) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return portfolio.map((id) => currencies.find((currency) => currency.id === id)!);
  }
);