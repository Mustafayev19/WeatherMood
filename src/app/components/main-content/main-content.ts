import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { WeatherService } from '../../services/weather';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {
  public weatherService = inject(WeatherService);
  cityInput: string = '';

  searchWeather() {
    this.weatherService.getCityWeather(this.cityInput);
    this.cityInput = '';
  }
}
