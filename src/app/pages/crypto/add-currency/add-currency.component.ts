/* eslint-disable @typescript-eslint/no-explicit-any */

import { CurrencyService } from '../../../services/currency.service'
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../../interfaces/currency.model';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html'
})
export class AddCurrencyComponent {
  @Input() currencies: ReadonlyArray<Currency> = [];
  @Output() add = new EventEmitter<string>();

  text: any = "";
  results: Currency[] = [];
  currencyService: CurrencyService;

  constructor(currencyService: CurrencyService) {
    this.currencyService = currencyService;
   }

  // NOTE: This is just a demo assignment, probably would make more sense to preload currencies initially and client side filter here. Not like new currencies added real time usually.
  search(event: any) {
    const entityApiCall = this.currencyService.getCurrencies(event.query)

    entityApiCall.subscribe((response: Currency[]) => {
      this.results = response
    }, (error: any) => {
      console.error(error);
    });
  }

  addCurrency(e: any) {
    this.text = ""
    this.add.emit(e.id)
  }
}
