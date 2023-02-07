import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from '../../interfaces/currency.model';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  constructor(private http: HttpClient) {}

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