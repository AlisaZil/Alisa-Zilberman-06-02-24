import { Component } from '@angular/core';
import { Place, WeatherService } from '../services/weather.service'; 

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  placesList: any[] = [];
  isComboBoxOpen: boolean = false;

  weekForcast: any[] = [{ day: "Sunday", icon: "sun", temp: 30 },
    { day: "Monday", icon: "cloud", temp: 13 },
    { day: "Sunday", icon: "sun-cloud", temp: 20 },
    { day: "Sunday", icon: "sun", temp: 30 }]

  constructor(private weatherService:WeatherService) { }
  
  searchForPlaces(e: KeyboardEvent) {
    
    let inputValue: string = (e.target as HTMLInputElement).value;

    if (inputValue) {

      this.isComboBoxOpen = true;

      // this.weatherService.getPlacesByString(inputValue).subscribe(res => {
      //   this.placesList = res;
      // })
    } else {
      this.placesList = [];
      this.isComboBoxOpen = false;
    }
  }

}
