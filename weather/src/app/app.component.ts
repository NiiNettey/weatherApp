import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { AirConditionsComponent } from './components/air-conditions/air-conditions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [SearchBarComponent, WeatherDisplayComponent, AirConditionsComponent]
})
export class AppComponent {
  location: string = 'Accra, Ghana';
  temperature: number = 57;
  weatherDescription: string = 'Cloudy';
  chanceOfRain: number = 20;
  realFeel: number = 30;
  windSpeed: number = 0.2;
  uvIndex: number = 3;
}
