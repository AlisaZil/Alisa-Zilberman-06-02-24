import { Component, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service'; 
import { WeatherCard } from '../weather-card/weather-card.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public placeName: string = 'Tel Aviv';
  weekForcast: WeatherCard[] = [];

  constructor(private weatherService: WeatherService) { }
  
  ngOnInit(): void {
    // this.getWeatherData('215854');
  }

  getWeatherData(key:string) {
    this.weatherService.getFiveDaysForecastByKey(key).subscribe((res) => {
      this.arrangeWeekForecast(res.DailyForecasts)
    })
  }

  arrangeWeekForecast(weekList: any[]) {

    this.weekForcast = [];
    
    for (let i = 1; i < weekList.length; i++) {
      let Temperature = weekList[i].Temperature;
      let averageTemperature = Math.round((Temperature.Maximum.Value + Temperature.Minimum.Value) / 2);

      let day = new Date(weekList[i].Date).toLocaleString('en-us', { weekday: 'long' });

      this.weekForcast.push({ name: day, icon: 'sun', temp: averageTemperature, size: 'small' });

    }
  }

  getCurrentDate() {
    return new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
  }


  handleSearchBarEvent(place: { name: string, key: string }) {
    this.getWeatherData(place.key);
  }

}
