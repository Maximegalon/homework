/* eslint-disable @typescript-eslint/no-explicit-any */
import { OnDestroy, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../../interfaces/currency.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectPortfolio } from '../../../state/currencies.selectors';

@Component({
  selector: 'home-crypto-selector',
  templateUrl: './crypto-selector.component.html'
})
export class CryptoSelectorComponent implements OnDestroy, OnInit {
  @Input() currencies: ReadonlyArray<Currency> = [];
  @Output() add = new EventEmitter<Currency>();

  currencyPortfolio$ = this.store.select(selectPortfolio);

  subscriptions: Subscription[] = [];
  selectedCryptosSubscription: Subscription = new Subscription;

  cryptoIdsInPortfolio: string[] = []

  text: any = "";
  results: Currency[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.selectedCryptosSubscription = this.currencyPortfolio$.subscribe(cc => {
      this.cryptoIdsInPortfolio = cc.map(c => c.id)
    })

    this.subscriptions.push(this.selectedCryptosSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  search(event: any) {
    const searchTerm = event.query.trim().toLowerCase()

    // NOTE: Could filter off more fields with "keys", but id, name and symbol more or less cover it
    this.results = this.currencies.filter(c => {
      return (
        (
          c.id.toLowerCase().indexOf(searchTerm) > -1 || c.name.toLowerCase().indexOf(searchTerm) > -1 || c.symbol.toLowerCase().indexOf(searchTerm) > -1) &&
          this.cryptoIdsInPortfolio.indexOf(c.id) === -1
        )
    })
  }

  addCurrency(e: Currency) {
    this.text = ""
    this.add.emit(e)
  }
}
