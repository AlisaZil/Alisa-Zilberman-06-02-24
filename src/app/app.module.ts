import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    FavoriteComponent,
    ToggleComponent,
    MainComponent,
    NavBarComponent,
    ClickOutsideDirective,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
