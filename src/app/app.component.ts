import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  placesList: any[] = [];
  isComboBoxOpen: boolean = false;

  public isNavbarOpen: boolean = false;

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void { }
  
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

  handleButtonLinkClick(e: string) {
    this.isNavbarOpen = false;
  }
}
