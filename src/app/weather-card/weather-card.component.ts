import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
  
export class WeatherCardComponent {

  @Input() card?: { day: string, icon: string, temp: string | number };

}
