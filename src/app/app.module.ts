// NOTE: Base angular imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

// NOTE: Third party imports
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// NOTE: Common, reusable items
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from './common.module';

import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';

// NOTE: Application specific
import { CryptoComponent } from './pages/crypto/crypto.component';
import { CryptoRandomizerComponent } from './pages/crypto/crypto-randomizer/crypto-randomizer.component';
import { CryptoSelectorComponent } from './pages/crypto/crypto-selector/crypto-selector.component';
import { CryptoPortfolioComponent } from './pages/crypto/crypto-portfolio/crypto-portfolio.component';
import { currencyReducer } from './state/currencies.reducer';
import { portfolioReducer } from './state/portfolio.reducer';

import { FilesComponent } from './pages/files/files.component';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';

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
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDatatableModule,
    StoreModule.forRoot({ currencies: currencyReducer, portfolio: portfolioReducer }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
