import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RestfullService {
  apiUrl1 = "http://api.weatherapi.com/v1/current.json?"
  apiKey1 = "&key=2005996eead74763a9b103614230505"
  constructor(private http: HttpClient) { }

  getCityWeather1(city: string): Observable<any> {
    return this.http.get<any>(this.apiUrl1 + "q=" + city + this.apiKey1);
  }



}
