import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){

  }
  cityName: string = 'Wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    let data:any = localStorage.getItem('cityName')
    if (data != null) {
      this.cityName = data.replace(/"/g, '')
      this.getWeatherData(this.cityName);
    }
    else this.cityName = 'Wellington'
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    let data = this.cityName
    localStorage.setItem('cityName', JSON.stringify(data))
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }
}

