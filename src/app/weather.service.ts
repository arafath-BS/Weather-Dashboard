import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInfo } from './city.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  Cites = new EventEmitter<CityInfo>();

  cites = [];

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<CityInfo>('../assets/Data.json');
  }

  setCity(cities: CityInfo) {}

  getData() {
    return this.cites;
  }
}
