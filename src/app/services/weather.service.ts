import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Place{
  AdministrativeArea: {ID: string, LocalizedName: string},
  Country: { ID: string, LocalizedName: string },
  Key: string,
  LocalizedName: string,
  Rank: number,
  Type: string,
  Version: number
}

export interface forecast{
  DailyForecasts: {Date:string, Temperature: {}}
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: string = 'http://dataservice.accuweather.com';
  apiKey: string = 'eFBHsOFGle9yvZWbhFP4g31hCAdAoqSI';
  
  constructor(private httpClient: HttpClient) { }
  
  getPlacesByString(searchString:string): Observable<Place[]>{
    return this.httpClient.get<Place[]>(this.URL + '/locations/v1/cities/autocomplete?apikey=' + this.apiKey + '&q=' + searchString);
  }

  getFiveDaysForecastByKey(placeKey:string) {
    return this.httpClient.get<any>(this.URL + '/forecasts/v1/daily/5day/' + placeKey + '?apikey=' + this.apiKey);
  }

  getOneDayForecastByKey(placeKey:string) {
    return this.httpClient.get<any>(this.URL + '/forecasts/v1/daily/1day/' + placeKey + '?apikey=' + this.apiKey);
  }

}
