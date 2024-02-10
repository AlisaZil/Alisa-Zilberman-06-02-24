import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() selectedPlace = new EventEmitter<{ name: string, key: string }>();

  placesList: any[] = ['tokyo','tel aviv', 'london','monte carlo'];
  isComboBoxOpen: boolean = false;

  constructor(private weatherService: WeatherService,){}

    searchForPlaces(e: KeyboardEvent) {
    
    let inputValue: string = (e.target as HTMLInputElement).value;

    if (inputValue) {

      this.isComboBoxOpen = true;

      this.placesList = ['tokyo', 'tel aviv', 'london', 'monte carlo'];
      console.log(this.placesList);
      
      // this.weatherService.getPlacesByString(inputValue).subscribe(res => {
      //   this.placesList = res;
      //   console.log(res);
        
      // })

    } else {
      this.placesList = [];
      this.isComboBoxOpen = false;
    }
  }
}
