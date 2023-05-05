import { Component, OnInit } from '@angular/core';
import { RestfullService } from 'src/app/tools/restfull.service';

@Component({
  selector: 'head-line',
  templateUrl: './head-line.component.html',
  styleUrls: ['./head-line.component.css']
})
export class HeadLineComponent implements OnInit {

  popularCities: string[] = [
    'Berlin', 'Istanbul', 'London', 'Madrid', 'Moscow', 'New York', 'Paris', 'Rome', 'Tokyo'
  ];

  cityWeather: any[] = [];

  constructor(private restfullService: RestfullService) {
  }

  ngOnInit(): void {
    this.getPopularCitiesWeather();
  }

  getPopularCitiesWeather(): void {
    for (let i = 0; i < this.popularCities.length; i++) {
      this.restfullService.getCityWeather1(this.popularCities[i]).subscribe(res => {
        res.current.temp_c = Math.round(res.current.temp_c)
        this.cityWeather[i] = res;
      });
    }
  }








}



