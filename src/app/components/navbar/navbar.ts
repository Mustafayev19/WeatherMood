import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WeatherService } from '../../services/weather';
import { WeatherResponse } from '../../models/weather.model';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  public translate = inject(TranslateService);
  private weatherService = inject(WeatherService);

  popularCities = [
    'Berlin',
    'Istanbul',
    'London',
    'Madrid',
    'Moscow',
    'New York',
    'Paris',
    'Rome',
    'Tokyo',
  ];
  popularCitiesWeather: WeatherResponse[] = [];

  ngOnInit(): void {
    this.weatherService
      .getPopularCitiesWeather(this.popularCities)
      .subscribe((data) => {
        this.popularCitiesWeather = data;
      });
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
