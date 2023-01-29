import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';
import { CryptoSelectorComponent } from './pages/crypto/crypto-selector/crypto-selector.component';
import { CryptoPortfolioComponent } from './pages/crypto/crypto-portfolio/crypto-portfolio.component';
import { CryptoComponent } from './pages/crypto/crypto.component';
import { DownloadsComponent } from './pages/files/files.component';
import { currencyReducer } from './state/currencies.reducer';
import { portfolioReducer } from './state/portfolio.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    DownloadsComponent,
    StatusIndicatorComponent,
    CryptoSelectorComponent,
    CryptoPortfolioComponent,
    CryptoComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    HttpClientModule,
    TableModule,
    AutoCompleteModule,
    StoreModule.forRoot({ currencies: currencyReducer, portfolio: portfolioReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
