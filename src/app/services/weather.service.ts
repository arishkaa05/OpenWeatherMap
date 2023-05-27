import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public httpClient: HttpClient) {
    // this.loadData()
  }

  // loadData() {
  //   this.httpClient.get(`${API_URL}/weather?q=${'Wellington'}&appid=${API_KEY}`).subscribe(results => {
  //     console.log(results)
  //   })
  // }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`)
  }
}
