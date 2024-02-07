import { Component } from '@angular/core';
import { WeatherService, Place } from './services/weather.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.weatherService.getFiveDaysForecastByKey("328328").subscribe((response:any) => {
      console.log(response);
      
    });
  }
}
