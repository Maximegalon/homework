/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { CurrencyService } from './services/currency/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnDestroy {
  title = 'Homework Web Site';

  newPortfolioSubscription: Subscription = new Subscription;

  constructor(public angularFireAuth: AngularFireAuth, private currencyService: CurrencyService,) {}

  ngOnDestroy() {
    this.newPortfolioSubscription.unsubscribe()
  }

  successLoginCallback(): void {
    // TODO: Fix this worse code ever. Move this, use a store action
    // NOTE: authResult: any, redirectUrl: string
    this.newPortfolioSubscription = this.currencyService.getPortfolio().subscribe(e => {
      if (e.length === 0) {
        this.currencyService.saveNewPortfolio()
      }
    })
  }

  // TODO: Use this, log failure
  errorLoginCallback(event: any): void {
    console.error(event)
  }
}