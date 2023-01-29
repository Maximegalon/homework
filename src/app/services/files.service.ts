import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DataResponse } from '../interfaces/data-response';
import { File } from '../interfaces/file';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) { }

  public getFiles(): Observable<File[]>
  {
    const url = '/assets/data/files.json';

    // @TODO: Should have error handling
    return this.http.get<DataResponse>(url).pipe(map((res: DataResponse) => {return res.data}));
  }
}
