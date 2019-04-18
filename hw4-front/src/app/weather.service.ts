import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Weather} from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://localhost:3000/api/weather';
  constructor(private http: HttpClient) { }

  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(this.url);
  }

}
