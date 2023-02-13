/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAuth } from "firebase/auth";
import { map } from 'rxjs/operators';
import { Currency } from '../../interfaces/currency.model';
import { Firestore, collectionData, collection, query, where, CollectionReference, deleteField } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  auth = getAuth();
  db: any

  collectionPortfolio: CollectionReference<any>

  constructor(firestore: Firestore, private http: HttpClient, db: AngularFirestore) {
    this.db = db
    this.collectionPortfolio = collection(firestore, 'portfolio')
  }

  getPortfolio(): Observable<any> {
    return collectionData(query(this.collectionPortfolio, where('__name__', '==' , this.auth.currentUser?.uid)))
  }

  saveNewPortfolio(): void {
    this.db.collection('portfolio').doc(this.auth.currentUser?.uid).set({})
  }

  saveCryptoToPortfolio(cryptoId: string): void {
    this.db.collection('portfolio').doc(this.auth.currentUser?.uid).set({[cryptoId]: 1}, { merge: true })
  }

  removeCryptoFromPortfolio(cryptoId: string): void {
    this.db.collection('portfolio').doc(this.auth.currentUser?.uid).set({[cryptoId]: deleteField()}, { merge: true })
  }

  getCurrency(id: string): Observable<Currency> {
    return this.http
      .get<{ data: Currency }>(`https://api.coincap.io/v2/assets/${id}`)
      .pipe(map((currencies) => currencies.data));
  }

  getCurrencies(searchTerm = ""): Observable<Array<Currency>> {
    return this.http
      .get<{ data: Currency[] }>(`https://api.coincap.io/v2/assets?search=${searchTerm}&limit=2000`)
      .pipe(map((currencies) => currencies.data || []));
  }
}