import { Component } from '@angular/core';
import { Place, WeatherService } from '../services/weather.service'; 

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  weekForcast: any[] = [{ name: "Sunday", icon: "sun", temp: 30 },
    { name: "Monday", icon: "cloud", temp: 13 },
    { name: "Sunday", icon: "sun-cloud", temp: 20 },
    { name: "Sunday", icon: "sun", temp: 30 }]

  constructor() { }

}
