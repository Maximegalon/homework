import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { of, timer, mergeMap, Subscription } from 'rxjs';
import { Currency } from 'src/app/interfaces/currency.model';
import { CurrencyService } from '../../../services/currency/currency.service';

@Component({
  selector: 'home-crypto-randomizer',
  templateUrl: './crypto-randomizer.component.html',
  styleUrls: ['./crypto-randomizer.component.scss']
})
export class CryptoRandomizerComponent implements OnDestroy, OnInit {
  @Input() currencies: ReadonlyArray<Currency> = [];

  subscriptions: Subscription[] = [];
  randomCryptosSubscription: Subscription = new Subscription;

  randomCurrency: Currency

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.randomCryptosSubscription = timer(1000, 1 * 10000).pipe(
      mergeMap(() => {
        if (!this.currencies.length) {
          return of();
        }

        const r = Math.floor(Math.random() * this.currencies.length)

        return this.currencyService.getCurrency(this.currencies[r].id)}
      )
    )
    .subscribe(c => this.randomCurrency = c)

    this.subscriptions.push(this.randomCryptosSubscription)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
