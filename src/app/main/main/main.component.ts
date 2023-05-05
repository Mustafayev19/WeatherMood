import { Component, OnInit } from '@angular/core';
import { RestfullService } from 'src/app/tools/restfull.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  city!: string;
  cityWeatherName: string = 'City Name';
  cityWeatherTemp: number = 0;
  cityWeatherMain: string = 'Condition';
  cityWeatherClouds: number = 0;
  cityWeatherWindySpeed: number = 0;
  cityWeatherHumidity: number = 0;
  cityWeatherContry: string = 'Country';
  cityWeatherDate: number = 2023
  isAnimationActive: boolean = false;
  icon: string = ""


  constructor(private restfullService: RestfullService) { }

  ngOnInit(): void {

  }



  getCityWeather(event: string) {
    this.city = event
    this.restfullService.getCityWeather1(this.city).subscribe(res => {
      res.current.temp_c = Math.round(res.current.temp_c)
      this.cityWeatherName = res.location.name
      this.cityWeatherTemp = res.current.temp_c
      this.cityWeatherMain = res.current.condition.text
      this.cityWeatherClouds = res.current.cloud
      this.cityWeatherWindySpeed = res.current.wind_mph
      this.cityWeatherHumidity = res.current.humidity
      this.cityWeatherContry = res.location.country
      this.cityWeatherDate = res.location.localtime
      this.isAnimationActive = true
      this.icon = res.current.condition.icon


    })
  }
}
