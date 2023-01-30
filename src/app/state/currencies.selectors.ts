import { createFeatureSelector } from '@ngrx/store';
import { Currency } from '../interfaces/currency.model';

export const selectCurrencies = createFeatureSelector<ReadonlyArray<Currency>>('currencies');

export const selectPortfolio = createFeatureSelector<ReadonlyArray<Currency>>('portfolio');