import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.template';
import { TranslateService } from '@ngx-translate/core';
import { WeatherResponse } from '../models/weather.model';

interface WeatherState {
  weatherData: WeatherResponse | null;
  isLoading: boolean;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiUrl = environment.weatherApiUrl;
  private apiKey = environment.weatherApiKey;

  private state = signal<WeatherState>({
    weatherData: null,
    isLoading: false,
    error: null,
  });

  public weatherData = computed(() => this.state().weatherData);
  public isLoading = computed(() => this.state().isLoading);
  public error = computed(() => this.state().error);

  constructor(private http: HttpClient, private translate: TranslateService) {}

  getCityWeather(city: string): void {
    if (!city) return;
    this.state.update((value) => ({ ...value, isLoading: true, error: null }));
    const fullUrl = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;

    this.http
      .get<WeatherResponse>(fullUrl)
      .pipe(
        tap((response) =>
          this.state.set({
            weatherData: {
              ...response,
              current: {
                ...response.current,
                temp_c: Math.round(response.current.temp_c),
              },
            },
            isLoading: false,
            error: null,
          })
        ),
        catchError((err) => {
          this.translate
            .get('MAIN.ERROR_MESSAGE', { city: city })
            .subscribe((translatedMsg) => {
              this.state.set({
                weatherData: null,
                isLoading: false,
                error: translatedMsg,
              });
            });
          return of(null);
        })
      )
      .subscribe();
  }

  getPopularCitiesWeather(cities: string[]): Observable<WeatherResponse[]> {
    const requests = cities.map((city) =>
      this.http
        .get<WeatherResponse>(`${this.apiUrl}?key=${this.apiKey}&q=${city}`)
        .pipe(
          map((res) => ({
            ...res,
            current: { ...res.current, temp_c: Math.round(res.current.temp_c) },
          })),
          catchError((err) => of(null))
        )
    );
    return forkJoin(requests).pipe(
      map(
        (responses) =>
          responses.filter((res) => res !== null) as WeatherResponse[]
      )
    );
  }
}
