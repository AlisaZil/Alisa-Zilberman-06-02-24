import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() selectedPlace = new EventEmitter<{ name: string, key: string }>();

  public searchText: any;
  public placesList: any[] = [];
  public isComboBoxOpen: boolean = false;

  constructor(private weatherService: WeatherService,){}

  searchForPlaces() {

    if (this.searchText) {

      this.isComboBoxOpen = true;
      this.weatherService.getPlacesByString(this.searchText).subscribe(res => {
        this.placesList = res;
      }) 
    } else {
      this.placesList = [];
      this.isComboBoxOpen = false;
    }
  }
  
  handleOptionClick(place: any) {
    
    this.searchText = name;
    this.isComboBoxOpen = false; 

    this.selectedPlace.emit({ name: place.LocalizedName, key: place.Key });
  }
}
