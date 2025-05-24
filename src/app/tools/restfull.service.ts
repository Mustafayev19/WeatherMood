import { HttpClient, HttpParams } from '@angular/common/http'; // HttpParams əlavə olundu (alternativ)
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // environment import edildi

@Injectable({
  providedIn: 'root'
})
export class RestfullService {

  // Köhnə dəyişənlərə ehtiyac yoxdur
  // apiUrl1 = "http://api.weatherapi.com/v1/current.json?"
  // apiKey1 = "&key=2005996eead74763a9b103614230505"

  private apiUrl = environment.weatherApiUrl;
  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  getCityWeather1(city: string): Observable<any> {
    // URL-i environment dəyişənlərindən istifadə edərək quraq
    // Birinci üsul: String birləşdirmə (sadə və anlaşıqlı)
    const fullUrl = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(fullUrl);

    // İkinci üsul: HttpParams istifadə etmək (daha mürəkkəb, lakin bəzi hallarda daha çevik)
    /*
    let params = new HttpParams();
    params = params.append('key', this.apiKey);
    params = params.append('q', city);

    return this.http.get<any>(this.apiUrl, { params: params });
    */
  }
}