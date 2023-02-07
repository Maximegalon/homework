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
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';
import { CryptoSelectorComponent } from './pages/crypto/crypto-selector/crypto-selector.component';
import { CryptoPortfolioComponent } from './pages/crypto/crypto-portfolio/crypto-portfolio.component';
import { CryptoComponent } from './pages/crypto/crypto.component';
import { FilesComponent } from './pages/files/files.component';
import { currencyReducer } from './state/currencies.reducer';
import { portfolioReducer } from './state/portfolio.reducer';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CryptoRandomizerComponent } from './pages/crypto/crypto-randomizer/crypto-randomizer.component';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  //term of service
  tosUrl: '<your-tos-link>',
  //privacy url
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  //credentialHelper:             firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    FilesComponent,
    StatusIndicatorComponent,
    CryptoSelectorComponent,
    CryptoPortfolioComponent,
    CryptoComponent,
    CryptoRandomizerComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    ButtonModule,
    DialogModule,
    HttpClientModule,
    TableModule,
    AutoCompleteModule,
    NgxDatatableModule,
    StoreModule.forRoot({ currencies: currencyReducer, portfolio: portfolioReducer }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
