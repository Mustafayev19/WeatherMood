import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestfullService {
  apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  apiKey = "&appid=d3b8ad277c2c71be34b7160eaa2f664c&units=metric"

  constructor(private http: HttpClient) { }

  getCityWeather(city: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "q=" + city + this.apiKey);
  }
}
