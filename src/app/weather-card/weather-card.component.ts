import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
  
export class WeatherCardComponent {

  @Input() card?: { name: string, icon: string, temp: string | number, isFave?: boolean, isClickble?: boolean };
  @Output() cardClick = new EventEmitter<string>();

  handleCardClick(name:string) {
    this.cardClick.emit(name);
  }
  
}
