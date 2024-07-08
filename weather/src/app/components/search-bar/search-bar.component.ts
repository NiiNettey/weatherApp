import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SearchBarComponent {
  location: string = '';

  constructor(private weatherService: WeatherService) {}

  onSearch(): void {
    if (this.location) {
      this.weatherService.getWeather(this.location).subscribe(data => {
        console.log(data); // Handle the weather data
      });
    }
  }
}
