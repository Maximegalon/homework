import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from 'src/app/interfaces/currency.model';

@Component({
  selector: 'home-crypto-portfolio',
  templateUrl: './crypto-portfolio.component.html',
  styleUrls: ['./crypto-portfolio.component.scss']
})
export class CryptoPortfolioComponent {
  @Input() currencies: ReadonlyArray<Currency> = [];
  @Output() remove = new EventEmitter<Currency>();
}