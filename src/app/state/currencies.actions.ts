import { createActionGroup, props } from '@ngrx/store';
import { Currency } from '../interfaces/currency.model';

export const CurrencyActions = createActionGroup({
  source: 'Currencies',
  events: {
    'Add Currency': props<{ currencyId: string }>(),
    'Remove Currency': props<{ currencyId: string }>(),
  },
});

export const CurrenciesApiActions = createActionGroup({
  source: 'Cryptocurrency API',
  events: {'Retrieved currencies': props<{ currencies: ReadonlyArray<Currency> }>()},
});