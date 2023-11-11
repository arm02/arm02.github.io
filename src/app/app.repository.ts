import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCollection } from './app.collection';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, JSON_ID } from './app.config';

@Injectable({
  providedIn: 'root',
})
export class AppRepository {
  constructor(private http: HttpClient) {}

  getData(): Observable<ResponseCollection> {
    return this.http.get<ResponseCollection>(BASE_URL + JSON_ID);
  }
}
