import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCurrencyPortfolio, selectCurrencies } from '../../state/currencies.selectors';
import { CurrencyActions, CurrenciesApiActions } from '../../state/currencies.actions';
import { CurrencyService } from '../../services/currency/currency.service';

@Component({
  selector: 'page-crypto',
  templateUrl: './crypto.component.html'
})
export class CryptoComponent implements OnInit {
    currencies$ = this.store.select(selectCurrencies);
    currencyPortfolio$ = this.store.select(selectCurrencyPortfolio);

    constructor(private currencyService: CurrencyService, private store: Store) {}

    onAdd(currencyId: string) {
      this.store.dispatch(CurrencyActions.addCurrency({ currencyId }));
    }

    onRemove(currencyId: string) {
      this.store.dispatch(CurrencyActions.removeCurrency({ currencyId }));
    }

    ngOnInit() {
      this.currencyService
        .getCurrencies()
        .subscribe((currencies) =>
          this.store.dispatch(CurrenciesApiActions.retrievedCurrencies({ currencies }))
        );
    }
}
