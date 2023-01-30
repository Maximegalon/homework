import { createActionGroup, props } from '@ngrx/store';
import { Currency } from '../interfaces/currency.model';

export const CurrencyActions = createActionGroup({
  source: 'Currencies',
  events: {
    'Add Currency': props<{ currency: Currency }>(),
    'Remove Currency': props<{ currency: Currency }>(),
  },
});

export const CurrenciesApiActions = createActionGroup({
  source: 'Cryptocurrency API',
  events: {'Retrieved currencies': props<{ currencies: ReadonlyArray<Currency> }>()},
});