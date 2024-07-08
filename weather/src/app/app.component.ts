import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { AirConditionsComponent } from './components/air-conditions/air-conditions.component';

@Component({
  selector: 'app-root',
  template: `
    <app-search-bar></app-search-bar>
    <app-weather-display></app-weather-display>
    <app-air-conditions></app-air-conditions>
  `,
  standalone: true,
  imports: [SearchBarComponent, WeatherDisplayComponent, AirConditionsComponent]
})
export class AppComponent {}
