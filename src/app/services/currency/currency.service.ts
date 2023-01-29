import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from '../../interfaces/currency.model';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencies(searchTerm = ""): Observable<Array<Currency>> {
    return this.http
      .get<{ data: Currency[] }>(`https://api.coincap.io/v2/assets?search=${searchTerm}`)
      .pipe(map((currencies) => currencies.data || []));
  }
}