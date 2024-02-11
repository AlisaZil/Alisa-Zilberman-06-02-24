import { Component, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service'; 
import { WeatherCard } from '../weather-card/weather-card.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public currPlace: { name: string, key: string } = {name:'Tel Aviv', key:'215854'}

  public isFavorite: boolean = false;
  public weekForcast: WeatherCard[] = [];

  constructor(
    private weatherService: WeatherService,
    private spinner:NgxSpinnerService) { }
  
  ngOnInit(): void {
    // this.getWeatherData(currPlace.key);
    this.checkIfFave();
  }

  getWeatherData(key: string) {

    this.spinner.show();

    this.weatherService.getFiveDaysForecastByKey(key).subscribe((res) => {
      this.arrangeWeekForecast(res.DailyForecasts);
      this.spinner.hide();
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
    this.currPlace.name = place.name;
    this.currPlace.key = place.key;
    this.getWeatherData(place.key);
    this.checkIfFave();
  }

  handleHeartClick() {
    this.isFavorite = !this.isFavorite;
    this.isFavorite? localStorage.setItem(this.currPlace.name, this.currPlace.key): localStorage.removeItem(this.currPlace.name);
  }

  checkIfFave() {
    this.isFavorite = localStorage.getItem(this.currPlace.name) ? true : false;
  }

}
