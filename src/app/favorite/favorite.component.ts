import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service'; 

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  public favoriteWeatherList?: any[] = undefined; //change from any

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getDataOfplace();
  }


  getDataOfplace() {
    
    let favPlaceNameList = Object.keys(localStorage);

    favPlaceNameList.forEach(name => {

      let place: any = localStorage.getItem(name);
      // this.weatherService.getOneDayForecastByKey(place.key).subscribe(res => {
      //   return {
      //     name: name,
      //     icon: 'sun',
      //     temp: res.DailyForecasts[0].Temperature.Maximum.Value,
      //     size: 'large',
      //     isFave: true,
      //     isClickble: true
      //   }
      // });
    });
    
  }

}
