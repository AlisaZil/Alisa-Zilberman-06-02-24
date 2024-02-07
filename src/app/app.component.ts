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
    this.weatherService.getPlacesByString("lon").subscribe((response:Place|unknown) => {
      console.log(response);
      
    });
  }
}
