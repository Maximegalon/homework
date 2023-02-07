import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Currency } from 'src/app/interfaces/currency.model';
import { CurrencyService } from '../../services/currency/currency.service';
import { CurrenciesApiActions, CurrencyActions } from '../../state/currencies.actions';
import { selectCurrencies, selectPortfolio } from '../../state/currencies.selectors';

@Component({
  selector: 'page-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    allCryptosSubscription: Subscription = new Subscription;

    currencies$ = this.store.select(selectCurrencies);
    currencyPortfolio$ = this.store.select(selectPortfolio);

    constructor(private store: Store, private currencyService: CurrencyService) {}

    ngOnInit() {
      this.allCryptosSubscription = this.currencyService
        .getCurrencies()
        .subscribe((currencies) => {
            currencies = currencies.sort((a, b) => (a.name > b.name) ? 1 : -1)

            this.store.dispatch(CurrenciesApiActions.retrievedCurrencies({ currencies }))
          },
          error => {
            console.error('CryptoComponent - ngOnInit: ', error);
          }
        );

      this.subscriptions.push(this.allCryptosSubscription);
    }

    ngOnDestroy() {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    onAdd(currency: Currency) {
      this.store.dispatch(CurrencyActions.addCurrency({ currency }));
    }

    onRemove(currency: Currency) {
      this.store.dispatch(CurrencyActions.removeCurrency({ currency }));
    }
}
