import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface WeatherCard{

  name: string,
  icon: string,
  temp: string | number,
  size: 'small' | 'large',
  isFave?: boolean,
  isClickble?: boolean

}

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
  
export class WeatherCardComponent {

  @Input() card?: WeatherCard;
  @Output() cardClick = new EventEmitter<string>();

  handleCardClick(name:string) {
    this.cardClick.emit(name);
  }
  
}
