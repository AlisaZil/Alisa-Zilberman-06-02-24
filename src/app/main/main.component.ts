import { Component } from '@angular/core';
import { Place, WeatherService } from '../services/weather.service'; 

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  weekForcast: any[] = [{ day: "Sunday", icon: "sun", temp: 30 },
    { day: "Monday", icon: "cloud", temp: 13 },
    { day: "Sunday", icon: "sun-cloud", temp: 20 },
    { day: "Sunday", icon: "sun", temp: 30 }]

  constructor() { }

}
