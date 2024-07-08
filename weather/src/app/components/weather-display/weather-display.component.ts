import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class WeatherDisplayComponent {
  @Input() location: string = '';
  @Input() temperature: number | null = null;
  @Input() weatherDescription: string = '';
  @Input() chanceOfRain: number | null = null;
}
