import { Routes } from '@angular/router';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AirConditionsComponent } from './components/air-conditions/air-conditions.component';

export const routes: Routes = [
  { path: 'air-condition', component: AirConditionsComponent },
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'weather-display', component: WeatherDisplayComponent },
  { path: '', redirectTo: '/weather-display', pathMatch: 'full' } // Default route
];
