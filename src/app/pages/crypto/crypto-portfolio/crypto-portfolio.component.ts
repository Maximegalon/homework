import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../../interfaces/currency.model';

@Component({
  selector: 'app-crypto-portfolio',
  templateUrl: './crypto-portfolio.component.html',
})
export class CryptoPortfolioComponent {
  @Input() currencies: ReadonlyArray<Currency> = [];
  @Output() remove = new EventEmitter<string>();
}