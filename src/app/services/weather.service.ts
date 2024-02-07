import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: string = 'http://dataservice.accuweather.com';
  apiKey: string = 'eFBHsOFGle9yvZWbhFP4g31hCAdAoqSI';
  
  constructor(private httpClient: HttpClient) { }
  
  getPlacesByString(searchString:string) {
    return this.httpClient.get<any>(this.URL + '/locations/v1/cities/autocomplete?apikey=' + this.apiKey + '&q=' + searchString);
  }

}
